import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {ForumPageRoutingModule} from './forum-routing.module';

import {ForumPage} from './forum.page';
import {HeaderPageModule} from "../header/header.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ForumPageRoutingModule,
        HeaderPageModule
    ],
    declarations: [ForumPage]
})
export class ForumPageModule {
}
