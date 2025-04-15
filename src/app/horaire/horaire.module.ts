import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HorairePageRoutingModule } from './horaire-routing.module';

import { HorairePage } from './horaire.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HorairePageRoutingModule
  ],
  declarations: [HorairePage],schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HorairePageModule {}
