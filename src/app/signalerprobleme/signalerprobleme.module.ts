import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignalerproblemePageRoutingModule } from './signalerprobleme-routing.module';

import { SignalerproblemePage } from './signalerprobleme.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignalerproblemePageRoutingModule
  ],
  declarations: [SignalerproblemePage]
})
export class SignalerproblemePageModule {}
