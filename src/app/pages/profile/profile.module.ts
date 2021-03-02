import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {ProfilePageRoutingModule} from './profile-routing.module';

import {ProfilePage} from './profile.page';
import {HeaderPageModule} from "../header/header.module";
import { TranslateModule } from '@ngx-translate/core';
import {MenuPageModule} from "../../menu/menu.module";
import {MatIconModule} from "@angular/material/icon";
import {ClrIconModule} from "@clr/angular";
import {EditProfilePage} from "../../admin-module/pages/edit-profile/edit-profile.page";
import {EditUserPage} from "../../admin-module/pages/edit-user/edit-user.page";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        TranslateModule,
        ProfilePageRoutingModule,
        HeaderPageModule,
        MenuPageModule,
        ClrIconModule,
        ReactiveFormsModule,
    ],
    declarations: [ProfilePage],
})
export class ProfilePageModule {
}
