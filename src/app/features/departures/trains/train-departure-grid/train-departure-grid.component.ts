import { DatePipe, TitleCasePipe } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import {
  CellClickedEvent,
  ColDef,
  FirstDataRenderedEvent,
  ModuleRegistry,
  ValueFormatterParams
} from '@ag-grid-community/core';
import { Observable, map, of } from 'rxjs';
import { SelectModel } from 'src/app/shared/forms/select/models/select.model';
import { TrainDepartureService } from '../../services/train-departure.service';
import { TrainDepartureGrid } from '../models/trains.model';
import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model';

ModuleRegistry.registerModules([ClientSideRowModelModule]);

@Component({
  selector: 'app-train-departure-grid',
  templateUrl: './train-departure-grid.component.html',
  styleUrls: ['./train-departure-grid.component.sass']
})
export class TrainDepartureGridComponent implements OnChanges {
  @Input() selectedStation: SelectModel | undefined;
  public rowData$: Observable<TrainDepartureGrid[]> = of([]);

  columnDefs: ColDef[] = [
    {
      field: 'plannedDepartureTime',
      valueFormatter: (d) => this.datePipeFormatter(d)
    },
    { field: 'direction' },
    { field: 'platform' },
    { field: 'trainType' },
    {
      field: 'trainDepartureStatus',
      valueFormatter: (d) => this.trainDepartureStatusFormatter(d)
    }
  ];

  defaultColDef: ColDef = {
    sortable: true,
    filter: true,
    resizable: true
  };

  constructor(
    private departureService: TrainDepartureService,
    private datePipe: DatePipe,
    private titleCasePipe: TitleCasePipe
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    const selectedStation = changes['selectedStation'].currentValue;

    if (selectedStation?.key) {
      this.rowData$ = this.departureService
        .getDepartures(selectedStation.key)
        .pipe(
          map((departures) => {
            return departures.map<TrainDepartureGrid>((departure) => {
              return {
                plannedDepartureTime: departure.plannedDateTime,
                direction: departure.direction,
                platform: departure.plannedTrack,
                trainType: departure.product.longCategoryName,
                trainDepartureStatus: departure.departureStatus
              };
            });
          })
        );
    } else {
      this.rowData$ = of([]);
    }
  }

  onCellClicked(e: CellClickedEvent): void {}

  onFirstDataRendered(params: FirstDataRenderedEvent) {
    const columnApi = params.columnApi;
    const allColumnIds: string[] = [];
    columnApi.getAllColumns()!.forEach((column) => {
      allColumnIds.push(column.getId());
    });
    columnApi.autoSizeColumns(allColumnIds);
  }

  private datePipeFormatter(params: ValueFormatterParams) {
    return this.datePipe.transform(params.value, 'medium') ?? '';
  }

  private trainDepartureStatusFormatter(params: ValueFormatterParams) {
    return this.titleCasePipe.transform(params.value.replace(/_/, ' ')) ?? '';
  }
}
