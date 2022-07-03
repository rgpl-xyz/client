import { TestBed } from '@angular/core/testing';
import { EventTypes } from './models/notification.model';

import { NotificationService } from './notification.service';

describe('NotificationService', () => {
  let service: NotificationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotificationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fire success toast event', (done) => {
    // given
    const title = 'some title for success toast';
    const message = 'some message for success toast';

    service.toastEvents$.subscribe((event) => {
      // then
      expect(event).toEqual({ type: EventTypes.Success, title, message });
      done();
    });

    // when
    service.success(title, message);
  });

  it('should fire info toast event', (done) => {
    // given
    const title = 'some title for info toast';
    const message = 'some message for info toast';

    service.toastEvents$.subscribe((event) => {
      // then
      expect(event).toEqual({ type: EventTypes.Info, title, message });
      done();
    });

    // when
    service.info(title, message);
  });

  it('should fire warning toast event', (done) => {
    // given
    const title = 'some title for warning toast';
    const message = 'some message for warning toast';

    service.toastEvents$.subscribe((event) => {
      // then
      expect(event).toEqual({ type: EventTypes.Warning, title, message });
      done();
    });

    // when
    service.warning(title, message);
  });

  it('should fire error toast event', (done) => {
    // given
    const title = 'some title for error toast';
    const message = 'some message for error toast';

    service.toastEvents$.subscribe((event) => {
      // then
      expect(event).toEqual({ type: EventTypes.Error, title, message });
      done();
    });

    // when
    service.error(title, message);
  });
});
