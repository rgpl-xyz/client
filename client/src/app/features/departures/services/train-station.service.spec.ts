import { TestBed } from '@angular/core/testing';

import { TrainStationService } from './train-station.service';

describe('StationService', () => {
  let service: TrainStationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrainStationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
