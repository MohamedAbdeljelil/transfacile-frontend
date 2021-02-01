import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {TicketPageRoutingModule} from './ticket-routing.module';

import {TicketPage} from './ticket.page';
import {HeaderPageModule} from "../header/header.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        TicketPageRoutingModule,
        HeaderPageModule
    ],
    declarations: [TicketPage]
})
export class TicketPageModule {
}
