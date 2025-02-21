import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { IonicModule } from '@ionic/angular';
import { HorairesCollectePage } from './horairesCollecte.page';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule, 
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HorairesCollectePage,
      },
    ]),
  ],
  declarations: [HorairesCollectePage],
})
export class HorairesCollectePageModule {}