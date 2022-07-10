import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConfigService } from 'src/app/core/config/services/config.service';

import { HorizontalNavComponent } from './horizontal-nav.component';

describe('HorizontalNavComponent', () => {
  let component: HorizontalNavComponent;
  let fixture: ComponentFixture<HorizontalNavComponent>;
  const apiUrl = 'http://localhost';
  class ConfigServiceStub {
    get config() {
      return {
        apiUrl: apiUrl
      };
    }
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HorizontalNavComponent],
      providers: [
        {
          provide: ConfigService,
          useClass: ConfigServiceStub
        }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HorizontalNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
