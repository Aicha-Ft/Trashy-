// src/app/horaire/horaire.page.ts
import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { HoraireModalComponent } from './horairemodal/horairemodal.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-horaire',
  templateUrl: './horaire.page.html',
  styleUrls: ['./horaire.page.scss'],
})
export class HorairePage {
  
  horairesParLieu: { [key: string]: string[] } = {
    'Route Tataouine': ['8h - 10h', '14h - 16h'],
    'Route Gabes': ['9h - 11h', '15h - 17h'],
    'Route Ben Gerdan': ['7h - 9h', '13h - 15h'],
    'Route Djerba': ['10h - 12h', '18h - 20h'],
    'Route Ben Khdach': ['6h - 8h', '12h - 14h'],
    'El Hara': ['9h - 10h30', '18h - 19h30'],
    'Koutin': ['7h30 - 9h30', '17h - 18h30'],
    'Smar': ['8h - 10h', '16h - 18h']
  };


  constructor(
    private modalController: ModalController,
    private http: HttpClient
  ) {}
  async openHoraireModal(formData: any) {
    const selectedLocation = formData.selectedLocation;
  
    this.http.post('http://localhost/backend/controllers/horaire.php', {
      lieu: selectedLocation
    }).subscribe(async (response: any) => {
      if (response.success) {
        const modal = await this.modalController.create({
          component: HoraireModalComponent,
          componentProps: {
            location: selectedLocation,
            horaires: response.data.horaires
          }
        });
  
        await modal.present();
      } else {
        console.error('Erreur :', response.message);
      }
    });
  }
  
}
