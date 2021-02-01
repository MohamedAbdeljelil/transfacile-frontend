import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {ContactusPageRoutingModule} from './contactus-routing.module';

import {ContactusPage} from './contactus.page';
import {HeaderPageModule} from "../header/header.module";
import {MaterialModule} from "../../material.module";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ContactusPageRoutingModule,
        HeaderPageModule,
        MaterialModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    declarations: [ContactusPage]
})
export class ContactusPageModule {
}
