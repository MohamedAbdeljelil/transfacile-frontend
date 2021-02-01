import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {AboutusPageRoutingModule} from './aboutus-routing.module';

import {AboutusPage} from './aboutus.page';
import {HeaderPageModule} from "../header/header.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        AboutusPageRoutingModule,
        HeaderPageModule
    ],
    declarations: [AboutusPage]
})
export class AboutusPageModule {
}
