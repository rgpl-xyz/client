import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainDepartureGridComponent } from './train-departure-grid.component';

describe('TrainDepartureGridComponent', () => {
  let component: TrainDepartureGridComponent;
  let fixture: ComponentFixture<TrainDepartureGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainDepartureGridComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrainDepartureGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
