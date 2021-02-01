import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {FavoritesRoutesPage} from './favorites-routes.page';

const routes: Routes = [
    {
        path: '',
        component: FavoritesRoutesPage
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class FavoritesRoutesPageRoutingModule {
}
