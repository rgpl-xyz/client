import { Component, OnInit } from '@angular/core';
import { IsActiveMatchOptions } from '@angular/router';
import { NavigationConfig } from 'src/app/core/config/models/config.model';
import { ConfigService } from 'src/app/core/config/services/config.service';

@Component({
  selector: 'app-horizontal-nav',
  templateUrl: './horizontal-nav.component.html',
  styleUrls: ['./horizontal-nav.component.sass']
})
export class HorizontalNavComponent implements OnInit {
  navigationLinks: NavigationConfig[] | undefined;
  activeMatchOptions: IsActiveMatchOptions = {
    matrixParams: 'subset',
    queryParams: 'subset',
    paths: 'subset',
    fragment: 'ignored'
  };

  constructor(private configService: ConfigService) {}

  ngOnInit(): void {
    if (this.configService.configValue) {
      this.navigationLinks =
        this.configService.configValue.navigationConfig.filter(
          (nav) => nav.show
        );
    }
  }
}
