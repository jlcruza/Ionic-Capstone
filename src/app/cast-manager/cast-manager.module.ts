import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CastManagerPageRoutingModule } from './cast-manager-routing.module';

import { BrowserModule } from '@angular/platform-browser';
import { CastManagerPage } from './cast-manager.page';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { CastingService } from '../services/casting.service';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: CastManagerPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule,
    CastManagerPageRoutingModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CastManagerPage],
  providers:[CastingService, HttpClient]
})
export class CastManagerPageModule {}
