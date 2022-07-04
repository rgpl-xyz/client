import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ConfigService } from 'src/app/core/config/services/config.service';
import { environment } from 'src/environments/environment';
import {
  TrainDeparture,
  TrainDepartureResponse
} from '../trains/models/trains.model';

@Injectable({
  providedIn: 'root'
})
export class TrainDepartureService {
  baseUrlPath: string | undefined;

  constructor(private http: HttpClient, private configService: ConfigService) {
    this.baseUrlPath = this.configService.configValue?.apiUrl;
  }

  getDepartures(station: string): Observable<TrainDeparture[]> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Ocp-Apim-Subscription-Key': environment.key
    });

    const requestOptions = { headers: headers };

    return this.http
      .get<TrainDepartureResponse>(
        `${this.baseUrlPath}/departures?station=${station}`,
        requestOptions
      )
      .pipe(map((r) => r.payload.departures));
  }
}
