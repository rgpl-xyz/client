import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SelectComponent } from './forms/select/select.component';
import { HorizontalNavComponent } from './navigation/horizontal-nav/horizontal-nav.component';
import { KebabCasePipe } from './pipes/kebab-case.pipe';
import { SharedRoutingModule } from './shared-routing.module';

@NgModule({
  declarations: [HorizontalNavComponent, KebabCasePipe, SelectComponent],
  imports: [CommonModule, FormsModule, SharedRoutingModule],
  exports: [
    CommonModule,
    SelectComponent,
    HorizontalNavComponent,
    KebabCasePipe
  ]
})
export class SharedModule {}
