import { TripsPage } from './trips.page';
import { TripDetailsPage } from './../trip-details/trip-details.page';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TripsPageRoutingModule } from './trips-routing.module';

import {ClrIconModule} from "@clr/angular";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        TripsPageRoutingModule,
        ClrIconModule,
    ],
  declarations: [TripsPage,TripDetailsPage],
  entryComponents : [TripDetailsPage]
})
export class TripsPageModule {}
