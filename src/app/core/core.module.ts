import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER, NgModule, Optional, SkipSelf } from '@angular/core';
import { ConfigService } from './config/services/config.service';
import { WindowToken, windowProvider } from './window/window.provider';

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
  declarations: [],
  imports: [CommonModule, HttpClientModule],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: configFactory,
      deps: [ConfigService],
      multi: true
    },
    { provide: WindowToken, useFactory: windowProvider }
  ]
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
