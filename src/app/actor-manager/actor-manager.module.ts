import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActorManagerPageRoutingModule } from './actor-manager-routing.module';

import { ActorManagerPage } from './actor-manager.page';
import { ActorsService } from '../services/actors.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient, HttpHandler } from '@angular/common/http';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActorManagerPageRoutingModule,
    HttpClientModule
  ],
  declarations: [ActorManagerPage],
  providers:[ActorsService, HttpClient]
})
export class ActorManagerPageModule {}
