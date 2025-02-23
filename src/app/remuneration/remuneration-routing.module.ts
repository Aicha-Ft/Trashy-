import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RemunerationPage } from './remuneration.page';

const routes: Routes = [
  {
    path: '',
    component: RemunerationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RemunerationPageRoutingModule {}
