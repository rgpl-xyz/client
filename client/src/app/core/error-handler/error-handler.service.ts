import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler, Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { NotificationService } from '../notification/notification.service';

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

    this.notificationService.error(title, error.message);

    super.handleError(error);
  }
}
