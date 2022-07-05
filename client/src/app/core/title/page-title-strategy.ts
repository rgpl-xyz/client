import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterStateSnapshot, TitleStrategy } from '@angular/router';
import { ConfigService } from '../config/services/config.service';

@Injectable({
  providedIn: 'root'
})
export class PageTitleStrategy extends TitleStrategy {
  appName = 'Application Name';

  constructor(
    private readonly title: Title,
    private configService: ConfigService
  ) {
    super();
  }

  override updateTitle(routerState: RouterStateSnapshot) {
    const title = this.buildTitle(routerState);
    if (title !== undefined) {
      if (this.configService.configValue) {
        this.appName = this.configService.configValue.appName;
      }
      this.title.setTitle(`${title} | ${this.appName}`);
    }
  }
}
