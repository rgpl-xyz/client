import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit
} from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { ToastEvent } from '../models/notification.model';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-toaster',
  templateUrl: './toaster.component.html',
  styleUrls: ['./toaster.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToasterComponent implements OnInit, OnDestroy {
  currentToasts: ToastEvent[] = [];

  private destroy$ = new Subject<void>();

  constructor(
    private toastService: NotificationService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.subscribeToToasts();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  subscribeToToasts() {
    this.toastService.toastEvents$
      .pipe(takeUntil(this.destroy$))
      .subscribe((toasts) => {
        const currentToast: ToastEvent = {
          type: toasts.type,
          title: toasts.title,
          message: toasts.message
        };
        this.currentToasts.push(currentToast);
        this.cdr.detectChanges();
      });
  }

  dispose(index: number) {
    this.currentToasts.splice(index, 1);
    this.cdr.detectChanges();
  }
}
