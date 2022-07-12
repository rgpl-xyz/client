import { CommonModule, DatePipe, TitleCasePipe } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';
import { DeparturesRoutingModule } from './departures-routing.module';
import { StationComponent } from './trains/station/station.component';
import { TrainsComponent } from './trains/trains.component';
import { TrainDepartureGridComponent } from './trains/train-departure-grid/train-departure-grid.component';

import { ModuleRegistry } from '@ag-grid-community/core';
import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model';
import { AgGridModule } from '@ag-grid-community/angular';
import { LetModule } from '@ngrx/component';

ModuleRegistry.registerModules([ClientSideRowModelModule]);

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
    AgGridModule,
    LetModule
  ]
})
export class DeparturesModule {}
