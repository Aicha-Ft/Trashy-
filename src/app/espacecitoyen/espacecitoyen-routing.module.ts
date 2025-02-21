import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EspaceCitoyenPage } from './espacecitoyen.page';

const routes: Routes = [
  {
    path: '',
    component: EspaceCitoyenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EspaceCitoyenPageRoutingModule {}
