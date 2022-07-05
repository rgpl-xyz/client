import { CommonModule, DatePipe, TitleCasePipe } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';
import { DeparturesRoutingModule } from './departures-routing.module';
import { StationComponent } from './trains/station/station.component';
import { TrainsComponent } from './trains/trains.component';
import { TrainDepartureGridComponent } from './trains/train-departure-grid/train-departure-grid.component';
import { AgGridModule } from '@ag-grid-community/angular';

@NgModule({
  declarations: [
    TrainsComponent,
    StationComponent,
    TrainDepartureGridComponent
  ],
  providers: [DatePipe, TitleCasePipe],
  imports: [
    CommonModule,
    SharedModule,
    DeparturesRoutingModule,
    AgGridModule.withComponents([])
  ]
})
export class DeparturesModule {}
