import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignalerproblemePage } from './signalerprobleme.page';

const routes: Routes = [
  {
    path: '',
    component: SignalerproblemePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignalerproblemePageRoutingModule {}
