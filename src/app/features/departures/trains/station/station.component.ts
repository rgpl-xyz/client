import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable, distinctUntilChanged, map } from 'rxjs';
import { SelectModel } from 'src/app/shared/forms/select/models/select.model';
import { TrainStationService } from '../../services/train-station.service';

@Component({
  selector: 'app-stations',
  templateUrl: './station.component.html',
  styleUrls: ['./station.component.sass']
})
export class StationComponent implements OnInit {
  lands: SelectModel[] | undefined;
  stations$: Observable<SelectModel[]> | undefined;
  selectedCountry: SelectModel | undefined;

  unavailableStationLabel = 'Select a country first';
  selectCountryLabel = 'Select a country';
  selectStationLabel = 'Select a station';

  @Output() selectedStation: EventEmitter<SelectModel> = new EventEmitter(true);

  constructor(private stationService: TrainStationService) {}

  ngOnInit(): void {
    // hard coding this for now
    this.lands = [
      { key: 'NL', value: 'Netherlands', isEnabled: true },
      { key: 'D', value: 'Deutschland', isEnabled: true },
      { key: 'B', value: 'Belgium', isEnabled: true },
      { key: 'GB', value: 'Great Britain', isEnabled: true },
      { key: 'S', value: 'Sweden', isEnabled: true },
      { key: 'A', value: 'Austria', isEnabled: true },
      { key: 'I', value: 'Italy', isEnabled: true },
      { key: 'CH', value: 'Switzerland', isEnabled: true },
      { key: 'DK', value: 'Denmark', isEnabled: true },
      { key: 'F', value: 'France', isEnabled: true }
    ];
  }

  selectCountry(country: SelectModel) {
    if (!country) {
      return;
    }

    this.selectedCountry = country;

    this.stations$ = this.stationService.getStations(country.key).pipe(
      map((stations) => {
        return stations.map((station) => {
          return {
            value: station.namen.lang,
            key: station.code,
            isEnabled: true
          };
        });
      }),
      distinctUntilChanged()
    );
  }

  selectStation(station: SelectModel) {
    this.selectedStation.emit(station);
  }
}
