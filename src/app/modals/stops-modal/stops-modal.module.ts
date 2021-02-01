import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StopsModalPageRoutingModule } from './stops-modal-routing.module';

import { StopsModalPage } from './stops-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StopsModalPageRoutingModule
  ],
  declarations: []
})
export class StopsModalPageModule {}
