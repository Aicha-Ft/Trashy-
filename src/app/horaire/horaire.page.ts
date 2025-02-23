import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-horaires',
  templateUrl: './horaire.page.html',
  styleUrls: ['./horaire.page.scss'],
})
export class HorairesPage implements OnInit, AfterViewInit {
  lieux = [
    { nom: 'Route Tataouine', lat: 33.003, lng: 10.456, horaires: '9h / 15h / 21h' },
    { nom: 'Route Gabès', lat: 33.885, lng: 10.098, horaires: '8h30 / 13h45 / 20h' },
    { nom: 'Route Ben Guerdane', lat: 32.867, lng: 10.960, horaires: '10h / 17h30 / 21h' },
    { nom: 'Route Djerba', lat: 33.811, lng: 10.845, horaires: '9h / 15h / 21h' },
    { nom: 'Route Ben Khdach', lat: 32.900, lng: 10.250, horaires: '9h / 13h / 19h' },
    { nom: 'El Hara', lat: 33.400, lng: 10.600, horaires: '8h / 15h / 22h' },
    { nom: 'Koutin', lat: 33.050, lng: 10.400, horaires: '9h / 15h / 21h' },
    { nom: 'Smar', lat: 32.950, lng: 10.300, horaires: '10h / 18h / 22h' }
  ];
  

  horaires: string | null = null;
  map: L.Map | undefined;

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.initMap();
  }

  initMap() {
    if (!this.map) {
      this.map = L.map('map').setView([33.3575, 10.5000], 12);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
      }).addTo(this.map);
    }
  }

  afficherHoraires(lieu: any) {
    this.horaires = lieu.horaires;
    this.afficherCarte(lieu);
  }

  afficherCarte(lieu: any) {
    if (this.map) {
      this.map.setView([lieu.lat, lieu.lng], 14);
      L.marker([lieu.lat, lieu.lng]).addTo(this.map)
        .bindPopup(`<b>${lieu.nom}</b><br>${lieu.horaires}`)
        .openPopup();
    }
  }
}
