import { InjectionToken } from '@angular/core';

export const WindowToken = new InjectionToken('Window');
export function windowProvider() {
  // eslint-disable-next-line no-undef
  return window;
}
