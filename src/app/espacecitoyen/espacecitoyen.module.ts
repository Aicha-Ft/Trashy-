import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EspaceCitoyenPageRoutingModule } from './espacecitoyen-routing.module';

import { EspaceCitoyenPage } from './espacecitoyen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EspaceCitoyenPageRoutingModule
  ],
  declarations: [EspaceCitoyenPage]
})
export class EspaceCitoyenPageModule {}
