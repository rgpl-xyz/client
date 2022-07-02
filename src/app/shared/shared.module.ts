import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HorizontalNavComponent } from './navigation/horizontal-nav/horizontal-nav.component';
import { KebabCasePipe } from './pipes/kebab-case.pipe';
import { SharedRoutingModule } from './shared-routing.module';

@NgModule({
  declarations: [HorizontalNavComponent, KebabCasePipe],
  imports: [CommonModule, SharedRoutingModule],
  exports: [HorizontalNavComponent, KebabCasePipe, CommonModule]
})
export class SharedModule {}
