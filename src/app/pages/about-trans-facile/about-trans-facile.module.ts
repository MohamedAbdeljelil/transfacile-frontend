import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AboutTransFacilePageRoutingModule } from './about-trans-facile-routing.module';

import { AboutTransFacilePage } from './about-trans-facile.page';
import {HeaderPageModule} from "../header/header.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        AboutTransFacilePageRoutingModule,
        HeaderPageModule,

    ],
  declarations: [AboutTransFacilePage]
})
export class AboutTransFacilePageModule {}
