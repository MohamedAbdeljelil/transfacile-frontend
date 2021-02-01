import {IonicModule} from '@ionic/angular';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {TabsPageRoutingModule} from './tabs-routing.module';

import {TabsPage} from './tabs.page';
import {ClrIconModule} from "@clr/angular";
import {MatIconModule} from "@angular/material/icon";
import {MaterialModule} from "../material.module";

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        TabsPageRoutingModule,
        ClrIconModule,
        MaterialModule
    ],
    declarations: [TabsPage]
})
export class TabsPageModule {
}
