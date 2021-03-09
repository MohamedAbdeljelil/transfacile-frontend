import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UsersPageRoutingModule } from './users-routing.module';

import { UsersPage } from './users.page';
import {NewUserPage} from "../new-user/new-user.page";
import {EditUserPage} from "../edit-user/edit-user.page";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UsersPageRoutingModule,
    ReactiveFormsModule,

  ],
  declarations: [UsersPage,NewUserPage,EditUserPage],
  entryComponents :[NewUserPage,EditUserPage]
})
export class UsersPageModule {}
