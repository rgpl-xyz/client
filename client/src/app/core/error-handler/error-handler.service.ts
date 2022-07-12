import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler, Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { NotificationService } from '../notification/notification.service';
import { ErrorResponse } from './models/error.model';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService extends ErrorHandler {
  constructor(private notificationService: NotificationService) {
    super();
  }

  override handleError(error: Error | HttpErrorResponse) {
    let title =
      'An error occurred, please send an email with the error details below to the site administrator.';

    if (!environment.production) {
      title += ' See console for details.';
    }
    let friendlyErrorMessage = '';
    if (error.name === 'HttpErrorResponse') {
      const err = (error as any).error as ErrorResponse;
      friendlyErrorMessage = `${err.errors[0].message}.\nRequestId: ${err.requestId}`;
    }
    this.notificationService.error(title, friendlyErrorMessage);

    super.handleError(error);
  }
}
