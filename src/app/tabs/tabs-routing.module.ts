import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TabsPage} from './tabs.page';

const routes: Routes = [
    {
        path: '',
        component: TabsPage,
        children: [
            {
                path: 'booking',
                loadChildren: () => import('../pages/booking/booking.module').then(m => m.BookingPageModule)
            },
            {
                path: 'ticket',
                loadChildren: () => import('../pages/ticket/ticket.module').then(m => m.TicketPageModule)
            },
            {
                path: 'profile',
                loadChildren: () => import('../pages/profile/profile.module').then(m => m.ProfilePageModule)
            }

        ]
    },
    {
        path: '',
        redirectTo: 'tabs/booking',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TabsPageRoutingModule {
}
