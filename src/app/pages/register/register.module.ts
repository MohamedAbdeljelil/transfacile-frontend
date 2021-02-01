import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {RegisterPageRoutingModule} from './register-routing.module';

import {RegisterPage} from './register.page';
import {AgenceRegisterPageModule} from "../agence-register/agence-register.module";
import {HttpClient} from "@angular/common/http";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RegisterPageRoutingModule,
        ReactiveFormsModule,
        AgenceRegisterPageModule
    ],
    declarations: [RegisterPage]
})
export class RegisterPageModule {
}
