import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TrainStationService } from './train-station.service';

describe('StationService', () => {
  let service: TrainStationService;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientTestingModule] });
    service = TestBed.inject(TrainStationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
