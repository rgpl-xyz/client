import { Component } from '@angular/core';
import { SelectModel } from 'src/app/shared/forms/select/models/select.model';

@Component({
  selector: 'app-trains',
  templateUrl: './trains.component.html',
  styleUrls: ['./trains.component.sass']
})
export class TrainsComponent {
  selectedStation: SelectModel | undefined;
  constructor() {}

  stationSelected(station: SelectModel) {
    this.selectedStation = station;
  }
}
