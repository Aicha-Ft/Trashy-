import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EspaceCitoyenPage } from './espacecitoyen/espacecitoyen.page';
import { AuthComponentComponent } from './auth-component/auth-component.component';
import { HorairesPage } from './horaire/horaire.page';
import { SignalerProblemePage } from './signalerprobleme/signalerprobleme.page';
import { RemunerationPage } from './remuneration/remuneration.page';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: AuthComponentComponent },
  { path: 'signup', component: AuthComponentComponent },
  { path: 'forget', component: AuthComponentComponent },
  { path: 'espacecitoyen', component: EspaceCitoyenPage },
  { path: 'horaire', component: HorairesPage },
  { path: 'signalerprobleme', component: SignalerProblemePage },
  { path: 'remuneration', component: RemunerationPage },
  {
    path: 'remuneration',
    loadChildren: () => import('./remuneration/remuneration.module').then( m => m.RemunerationPageModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
