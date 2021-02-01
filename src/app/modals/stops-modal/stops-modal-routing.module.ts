import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StopsModalPage } from './stops-modal.page';

const routes: Routes = [
  {
    path: '',
    component: StopsModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StopsModalPageRoutingModule {}
