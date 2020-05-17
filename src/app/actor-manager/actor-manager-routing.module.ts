import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActorManagerPage } from './actor-manager.page';

const routes: Routes = [
  {
    path: '',
    component: ActorManagerPage
  },
  {
    path: 'actor-form',
    loadChildren: () => import('./actors-form/actors-form.component').then( m => m.ActorsFormComponent)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActorManagerPageRoutingModule {}
