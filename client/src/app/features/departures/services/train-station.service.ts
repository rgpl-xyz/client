import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, filter, map } from 'rxjs';
import { ConfigService } from 'src/app/core/config/services/config.service';
import { environment } from 'src/environments/environment';
import {
  Station,
  StationResponse
} from '../trains/station/models/station.model';

@Injectable({
  providedIn: 'root'
})
export class TrainStationService {
  baseUrlPath: string | undefined;

  constructor(private http: HttpClient, private configService: ConfigService) {
    this.baseUrlPath = this.configService.configValue?.apiUrl;
  }

  getStations(land: string): Observable<Station[]> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Ocp-Apim-Subscription-Key': environment.key
    });

    const requestOptions = { headers: headers };

    return this.http
      .get<StationResponse>(
        `${this.baseUrlPath}/stations?land=${land}`,
        requestOptions
      )
      .pipe(
        map((r) =>
          r.payload
            .filter((p) => p.land === land)
            .sort((a, b) => a.namen.lang.localeCompare(b.namen.lang))
        )
      );
  }
}
