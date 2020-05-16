import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CastManagerPageRoutingModule } from './cast-manager-routing.module';

import { CastManagerPage } from './cast-manager.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CastManagerPageRoutingModule
  ],
  declarations: [CastManagerPage]
})
export class CastManagerPageModule {}
