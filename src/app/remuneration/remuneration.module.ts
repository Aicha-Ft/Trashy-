import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RemunerationPageRoutingModule } from './remuneration-routing.module';

import { RemunerationPage } from './remuneration.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RemunerationPageRoutingModule
  ],
  declarations: [RemunerationPage]
})
export class RemunerationPageModule {}
