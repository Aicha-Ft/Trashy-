import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HorairesCollectePage } from './horairesCollecte.page';

const routes: Routes = [
  {
    path: '',
    component: HorairesCollectePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HorairesCollectePageRoutingModule {}
