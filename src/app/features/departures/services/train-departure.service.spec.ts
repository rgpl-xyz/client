import { TestBed } from '@angular/core/testing';

import { TrainDepartureService } from './train-departure.service';

describe('DepartureService', () => {
  let service: TrainDepartureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrainDepartureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
