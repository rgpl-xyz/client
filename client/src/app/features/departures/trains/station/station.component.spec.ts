import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TrainStationService } from '../../services/train-station.service';

import { StationComponent } from './station.component';

describe('StationComponent', () => {
  let component: StationComponent;
  let fixture: ComponentFixture<StationComponent>;

  class TrainStationServiceStub {}

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StationComponent],
      providers: [
        { provide: TrainStationService, useClass: TrainStationServiceStub }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(StationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
