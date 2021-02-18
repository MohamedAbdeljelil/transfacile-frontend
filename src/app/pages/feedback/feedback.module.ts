import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FeedbackPageRoutingModule } from './feedback-routing.module';

import { FeedbackPage } from './feedback.page';
import {HeaderPageModule} from "../header/header.module";
import {MaterialModule} from "../../material.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        FeedbackPageRoutingModule,
        HeaderPageModule,
        MaterialModule,
        ReactiveFormsModule
    ],
  declarations: [FeedbackPage]
})
export class FeedbackPageModule {}
