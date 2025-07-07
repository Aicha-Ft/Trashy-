import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HoraireService {
  private horairesData = {
    'Avenue Habib Bourguiba, Médenine': ['08:00 – 16:00'],
    'Rue Ibn Khaldoun, Médenine': ['08:00 – 16:00'],
    'Marché Central, Médenine': ['08:00 – 16:00'],
    'Centre Commercial, Médenine': ['08:00 – 16:00'],
    'Rue Ali Bach Hamba, Médenine': ['08:00 – 16:00'],
    'Avenue 7 Novembre, Médenine': ['08:00 – 16:00'],
    'Place de la République, Médenine': ['08:00 – 16:00'],
    'Hôtel Djerba, Médenine': ['08:00 – 16:00']
  };

  constructor() {}

  getHorairesByLieu(lieu: string): Observable<any> {
    const horaires = this.horairesData[lieu] || [];
    return of(horaires); // Retourner un Observable avec les horaires du lieu
  }
}
