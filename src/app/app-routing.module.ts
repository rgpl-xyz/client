import { NgModule } from '@angular/core';
import { RouterModule, Routes, TitleStrategy } from '@angular/router';
import { PageTitleStrategy } from './core/title/page-title-strategy';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./features/landing/landing.module').then((m) => m.LandingModule),
    title: `Home`
  },
  {
    path: 'departures',
    loadChildren: () =>
      import('./features/departures/departures.module').then(
        (m) => m.DeparturesModule
      ),
    title: `Departures`
  },
  {
    path: '**',
    pathMatch: 'full',
    component: PageNotFoundComponent,
    title: 'Page Not Found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{ provide: TitleStrategy, useClass: PageTitleStrategy }]
})
export class AppRoutingModule {}
