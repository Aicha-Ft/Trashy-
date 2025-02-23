import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HorairePageRoutingModule } from './horaire-routing.module';

import { HorairesPage } from './horaire.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HorairePageRoutingModule
  ],
  declarations: [HorairesPage]
})
export class HorairePageModule {}
