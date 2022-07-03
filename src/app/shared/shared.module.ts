import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SelectComponent } from './forms/select/select.component';
import { HorizontalNavComponent } from './navigation/horizontal-nav/horizontal-nav.component';
import { KebabCasePipe } from './pipes/kebab-case.pipe';
import { SharedRoutingModule } from './shared-routing.module';
import { FooterComponent } from './footer/footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    HorizontalNavComponent,
    KebabCasePipe,
    SelectComponent,
    FooterComponent,
    PageNotFoundComponent
  ],
  imports: [CommonModule, FormsModule, SharedRoutingModule],
  exports: [
    CommonModule,
    KebabCasePipe,
    SelectComponent,
    HorizontalNavComponent,
    FooterComponent,
    PageNotFoundComponent
  ]
})
export class SharedModule {}
