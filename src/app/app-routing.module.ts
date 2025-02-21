import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponentComponent } from './auth-component/auth-component.component';
import { EspaceCitoyenPage } from './espacecitoyen/espacecitoyen.page'; 
import { HorairesCollectePage } from './horairesCollecte/horairesCollecte.page'; 

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: AuthComponentComponent }, 
  { path: 'espacecitoyen', component: EspaceCitoyenPage },  
  { path: 'horairescollecte', component: HorairesCollectePage },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}