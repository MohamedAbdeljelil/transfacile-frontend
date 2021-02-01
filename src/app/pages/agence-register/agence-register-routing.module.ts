import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {AgenceRegisterPage} from './agence-register.page';

const routes: Routes = [
    {
        path: '',
        component: AgenceRegisterPage
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AgenceRegisterPageRoutingModule {
}
