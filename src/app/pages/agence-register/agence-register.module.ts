import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {AgenceRegisterPageRoutingModule} from './agence-register-routing.module';

import {AgenceRegisterPage} from './agence-register.page';
import {MaterialModule} from "../../material.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        AgenceRegisterPageRoutingModule,
        ReactiveFormsModule,
        MaterialModule,

    ],
    exports: [
        AgenceRegisterPage
    ],
    declarations: [AgenceRegisterPage]
})
export class AgenceRegisterPageModule {
}
