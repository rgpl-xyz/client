import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { EventTypes, ToastEvent } from './models/notification.model';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  toastEvents$: Observable<ToastEvent>;
  private toastEvents = new Subject<ToastEvent>();

  constructor() {
    this.toastEvents$ = this.toastEvents.asObservable();
  }

  success(title: string, message: string) {
    this.toastEvents.next({
      message,
      title,
      type: EventTypes.Success
    });
  }

  error(title: string, message: string) {
    this.toastEvents.next({
      message,
      title,
      type: EventTypes.Error
    });
  }

  warning(title: string, message: string) {
    this.toastEvents.next({
      message,
      title,
      type: EventTypes.Warning
    });
  }

  info(title: string, message: string) {
    this.toastEvents.next({
      message,
      title,
      type: EventTypes.Info
    });
  }
}
