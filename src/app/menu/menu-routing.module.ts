import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {MenuPage} from './menu.page';

const routes: Routes = [
    {
        path: '',
        component: MenuPage,
        children: [

            // {
            //     path: 'aboutus',
            //     loadChildren: () => import('../pages/aboutus/aboutus.module').then(m => m.AboutusPageModule)
            // },
            // {
            //     path: 'contactus',
            //     loadChildren: () => import('../pages/contactus/contactus.module').then(m => m.ContactusPageModule)
            // },
            //
            // {
            //     path: 'forum',
            //     loadChildren: () => import('../pages/forum/forum.module').then(m => m.ForumPageModule)
            // },
            // {
            //     path: 'about-trans-facile',
            //     loadChildren: () => import('../pages/about-trans-facile/about-trans-facile.module').then( m => m.AboutTransFacilePageModule)
            // },
            // {
            //     path: 'rating',
            //     loadChildren: () => import('../pages/rating/rating.module').then(m => m.RatingPageModule)
            // }
        ]
    },
    {
        path: '',
        redirectTo: '/menu/aboutus',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class MenuPageRoutingModule {
}
