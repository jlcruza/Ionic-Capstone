import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MovieManagerPageRoutingModule } from './movie-manager-routing.module';

import { BrowserModule } from '@angular/platform-browser';
import { MovieManagerPage } from './movie-manager.page';
import { MoviesService } from '../services/movies.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { MoviesFormComponent } from './movies-form/movies-form.component';

const routes: Routes = [
  {
    path: '',
    component: MovieManagerPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MovieManagerPageRoutingModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ],
  entryComponents:[MoviesFormComponent],
  declarations: [MovieManagerPage, MoviesFormComponent],
  providers:[MoviesService, HttpClient]
})
export class MovieManagerPageModule {}
