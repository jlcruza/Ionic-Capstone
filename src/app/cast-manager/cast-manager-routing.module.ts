import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CastManagerPage } from './cast-manager.page';

const routes: Routes = [
  {
    path: '',
    component: CastManagerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CastManagerPageRoutingModule {}
