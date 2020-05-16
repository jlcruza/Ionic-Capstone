import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'main',
    loadChildren: () => import('./main/main.module').then( m => m.MainPageModule)
  },
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full'
  },
  {
    path: 'main',
    loadChildren: () => import('./main/main.module').then( m => m.MainPageModule)
  },
  {
    path: 'actor-manager',
    loadChildren: () => import('./actor-manager/actor-manager.module').then( m => m.ActorManagerPageModule)
  },
  {
    path: 'movie-manager',
    loadChildren: () => import('./movie-manager/movie-manager.module').then( m => m.MovieManagerPageModule)
  },
  {
    path: 'cast-manager',
    loadChildren: () => import('./cast-manager/cast-manager.module').then( m => m.CastManagerPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
