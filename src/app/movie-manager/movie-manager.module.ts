import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MovieManagerPageRoutingModule } from './movie-manager-routing.module';

import { MovieManagerPage } from './movie-manager.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MovieManagerPageRoutingModule
  ],
  declarations: [MovieManagerPage]
})
export class MovieManagerPageModule {}
