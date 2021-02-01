import { TripsPage } from './../trips/trips.page';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TripDetailsPageRoutingModule } from './trip-details-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TripDetailsPageRoutingModule
  ],
  declarations: [],
})
export class TripDetailsPageModule {}
