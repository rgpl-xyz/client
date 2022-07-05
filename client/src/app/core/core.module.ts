import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import {
  APP_INITIALIZER,
  ErrorHandler,
  NgModule,
  Optional,
  SkipSelf
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ConfigService } from './config/services/config.service';
import { ErrorHandlerService } from './error-handler/error-handler.service';
import { HttpErrorInterceptor } from './http-interceptors/http-error.interceptor';
import { WindowToken, windowProvider } from './window/window.provider';
import { ToastComponent } from './notification/toast/toast.component';
import { ToasterComponent } from './notification/toaster/toaster.component';

const getConfigFile = () => {
  // eslint-disable-next-line no-undef
  const hostname = window.location.hostname;
  const envs = ['localhost', 'dev', 'qaauto', 'qa', 'lpt', 'uat'];
  const currentEnv = envs.find((e) => hostname.includes(e)) || 'prod';
  return `./assets/config/config.${currentEnv}.json`;
};

const configUrl = getConfigFile();

export const configFactory = (configService: ConfigService) => {
  return () => {
    return configService.loadConfig(configUrl);
  };
};

@NgModule({
  imports: [CommonModule, HttpClientModule, FormsModule, HttpClientModule],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: configFactory,
      deps: [ConfigService],
      multi: true
    },
    { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true },
    { provide: WindowToken, useFactory: windowProvider },
    { provide: ErrorHandler, useClass: ErrorHandlerService }
  ],
  declarations: [ToastComponent, ToasterComponent],
  exports: [ToastComponent, ToasterComponent]
})
export class CoreModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: CoreModule
  ) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import only in AppModule');
    }
  }
}
