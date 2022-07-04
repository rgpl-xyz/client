import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrainsComponent } from './trains/trains.component';

const routes: Routes = [
  {
    path: 'trains',
    component: TrainsComponent,
    title: 'Trains'
  },
  {
    path: '',
    redirectTo: 'trains',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeparturesRoutingModule {}
