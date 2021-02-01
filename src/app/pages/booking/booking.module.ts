import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {BookingPageRoutingModule} from './booking-routing.module';

import {BookingPage} from './booking.page';
import {HeaderPageModule} from "../header/header.module";
import {StopsModalPage} from "../../modals/stops-modal/stops-modal.page";
import {MenuPageModule} from "../../menu/menu.module";
import {TripsPage} from "../trips/trips.page";
import {ClrIconModule} from "@clr/angular";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        BookingPageRoutingModule,
        HeaderPageModule,
        MenuPageModule,
        ClrIconModule
    ],
    declarations: [BookingPage,StopsModalPage],
    entryComponents : [StopsModalPage]
})
export class BookingPageModule {
}
