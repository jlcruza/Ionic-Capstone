import { NgModule, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ActorManagerPageRoutingModule } from './actor-manager-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { ActorManagerPage } from './actor-manager.page';
import { ActorsService } from '../services/actors.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { ActorsFormComponent } from './actors-form/actors-form.component';

const routes: Routes = [
  {
    path: '',
    component: ActorManagerPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActorManagerPageRoutingModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ],
  entryComponents: [ActorsFormComponent],
  declarations: [ActorManagerPage, ActorsFormComponent],
  providers:[ActorsService, HttpClient]
})
export class ActorManagerPageModule {}
