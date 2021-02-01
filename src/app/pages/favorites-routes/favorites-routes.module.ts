import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {FavoritesRoutesPageRoutingModule} from './favorites-routes-routing.module';

import {FavoritesRoutesPage} from './favorites-routes.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        FavoritesRoutesPageRoutingModule
    ],
    declarations: [FavoritesRoutesPage]
})
export class FavoritesRoutesPageModule {
}
