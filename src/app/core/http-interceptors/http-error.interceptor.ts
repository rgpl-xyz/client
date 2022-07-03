import { ErrorHandler, Injectable, Injector } from '@angular/core';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  constructor(private injector: Injector) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      tap({
        error: (err: any) => {
          if (err instanceof HttpErrorResponse) {
            const appErrorHandler = this.injector.get(ErrorHandler);
            appErrorHandler.handleError(err);
          }
        }
      })
    );
  }
}
