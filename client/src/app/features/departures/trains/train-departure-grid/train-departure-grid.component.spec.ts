import { DatePipe, TitleCasePipe } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TrainDepartureService } from '../../services/train-departure.service';

import { TrainDepartureGridComponent } from './train-departure-grid.component';

describe('TrainDepartureGridComponent', () => {
  let component: TrainDepartureGridComponent;
  let fixture: ComponentFixture<TrainDepartureGridComponent>;

  class TrainDepartureServiceStub {}

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TrainDepartureGridComponent],
      providers: [
        DatePipe,
        TitleCasePipe,
        { provide: TrainDepartureService, useClass: TrainDepartureServiceStub }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(TrainDepartureGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
