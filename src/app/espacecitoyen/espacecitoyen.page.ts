import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-espacecitoyen',
  templateUrl: './espacecitoyen.page.html',
  styleUrls: ['./espacecitoyen.page.scss'],
})
export class EspaceCitoyenPage {
  constructor(private router: Router) {}

  consulterHoraires() {
    console.log('Navigation vers HorairesCollecte');
    this.router.navigate(['/horaire']);
  }

  signalerProbleme() {
    console.log('Navigation vers SignalerProbleme');
    this.router.navigate(['/signalerprobleme']);
  }

  consulterRemuneration() {
    console.log('Navigation vers Rémunération');
    this.router.navigate(['/remuneration']);
  }

  logout() {
    console.log('Déconnexion réussie');
    this.router.navigate(['/login']);
  }
}
