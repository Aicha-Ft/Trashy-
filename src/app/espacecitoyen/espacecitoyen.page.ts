import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Importer Router

@Component({
  selector: 'app-espacecitoyen',
  templateUrl: './espacecitoyen.page.html',
  styleUrls: ['./espacecitoyen.page.scss'],
})
export class EspaceCitoyenPage {
  constructor(private router: Router) {} // Injecter Router

  // Méthode pour consulter les horaires de collecte
  consulterHoraires() {
    console.log('Navigation vers HorairesCollecte'); // Log de débogage
    this.router.navigate(['/horairescollecte']); // Naviguer vers la page HorairesCollecte
  }

  // Méthode pour signaler un problème
  signalerProbleme() {
    console.log('Signaler un problème');
    // Ajoutez ici la logique pour naviguer vers la page de signalement
  }

  // Méthode pour se déconnecter
  logout() {
    console.log('Déconnexion réussie');
    this.router.navigate(['/login']); // Rediriger vers la page de connexion
  }
}