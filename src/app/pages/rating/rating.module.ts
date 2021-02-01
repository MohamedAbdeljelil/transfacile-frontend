import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {RatingPageRoutingModule} from './rating-routing.module';

import {RatingPage} from './rating.page';
import {HeaderPageModule} from "../header/header.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RatingPageRoutingModule,
        HeaderPageModule
    ],
    declarations: [RatingPage]
})
export class RatingPageModule {
}
