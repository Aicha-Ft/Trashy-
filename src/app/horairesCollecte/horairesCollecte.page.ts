import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-horairescollecte',
  templateUrl: './horairesCollecte.page.html',
  styleUrls: ['./horairesCollecte.page.scss'],
})
export class HorairesCollectePage {
  locations: string[] = [
    'Route Tataouine',
    'Route Gabes',
    'Route Ben Gerdan',
    'Route Djerba',
    'Route Ben Khdach',
    'El Hara',
    'Koutin',
    'Smar',
  ];

  selectedLocation: string | null = null;

  constructor(private sanitizer: DomSanitizer) {}

  // Sélectionner un lieu
  selectLocation(location: string) {
    this.selectedLocation = location;
  }

  // Retour à la liste des lieux
  goBack() {
    this.selectedLocation = null;
  }

  // Générer une URL sécurisée pour la carte Google Maps
  getSafeMapUrl(location: string): SafeResourceUrl {
    const apiKey = 'YOUR_API_KEY'; // Remplacez par votre clé API Google Maps
    const query = encodeURIComponent(location + ', Medenine, Tunisie');
    const url = `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${query}`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}