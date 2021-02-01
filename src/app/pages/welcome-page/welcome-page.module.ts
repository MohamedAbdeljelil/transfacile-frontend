import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WelcomePagePageRoutingModule } from './welcome-page-routing.module';

import { WelcomePagePage } from './welcome-page.page';
import {MatStepperModule} from "@angular/material/stepper";
import {MaterialModule} from "../../material.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        WelcomePagePageRoutingModule,
        MaterialModule
    ],
  declarations: [WelcomePagePage]
})
export class WelcomePagePageModule {}
