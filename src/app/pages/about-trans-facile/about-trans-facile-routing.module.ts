import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutTransFacilePage } from './about-trans-facile.page';

const routes: Routes = [
  {
    path: '',
    component: AboutTransFacilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AboutTransFacilePageRoutingModule {}
