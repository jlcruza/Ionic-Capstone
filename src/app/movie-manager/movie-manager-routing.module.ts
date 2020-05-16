import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MovieManagerPage } from './movie-manager.page';

const routes: Routes = [
  {
    path: '',
    component: MovieManagerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MovieManagerPageRoutingModule {}
