import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { HorizontalNavComponent } from './navigation/horizontal-nav/horizontal-nav.component';

@NgModule({
  declarations: [HorizontalNavComponent],
  imports: [CommonModule, SharedRoutingModule],
  exports: [HorizontalNavComponent, CommonModule]
})
export class SharedModule {}
