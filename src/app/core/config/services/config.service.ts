import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { Config } from '../models/config.model';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private _configValue: Config | undefined;
  public get configValue(): Config | undefined {
    return this._configValue;
  }
  public set configValue(value: Config | undefined) {
    this._configValue = value;
  }
  httpClient: HttpClient;

  constructor(handler: HttpBackend) {
    this.httpClient = new HttpClient(handler);
  }

  async loadConfig(configUrl: string) {
    const source$ = this.httpClient.get<Config>(configUrl);

    return await firstValueFrom(source$).then((value) => {
      this.configValue = value;
    });
  }
}
