import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TrainDepartureService } from './train-departure.service';

describe('DepartureService', () => {
  let service: TrainDepartureService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(TrainDepartureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
