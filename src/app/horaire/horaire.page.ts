import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { HoraireModalComponent } from './horairemodal/horairemodal.component';
import { HoraireService } from '../services/horaire.service';

@Component({
  selector: 'app-horaire',
  templateUrl: './horaire.page.html',
  styleUrls: ['./horaire.page.scss'],
})
export class HorairePage {
  lieux: string[] = [
    'Avenue Habib Bourguiba, Médenine',
    'Rue Ibn Khaldoun, Médenine',
    'Marché Central, Médenine',
    'Centre Commercial, Médenine',
    'Rue Ali Bach Hamba, Médenine',
    'Avenue 7 Novembre, Médenine',
    'Place de la République, Médenine',
    'Hôtel Djerba, Médenine'
  ];

  constructor(
    private modalController: ModalController,
    private horaireService: HoraireService
  ) {}

  async openHoraireModal(formData: any) {
    const selectedLocation = formData.selectedLocation;
    console.log('Selected Location:', selectedLocation);

    let horaires: string[];

    switch (selectedLocation) {
      case 'Avenue Habib Bourguiba, Médenine':
        horaires = ['07:30 – 09:30', '13:00 – 15:00'];
        break;
      case 'Rue Ibn Khaldoun, Médenine':
        horaires = ['08:00 – 10:00', '14:00 – 16:00'];
        break;
      case 'Marché Central, Médenine':
        horaires = ['06:00 – 08:00', '12:00 – 14:00'];
        break;
      case 'Centre Commercial, Médenine':
        horaires = ['09:00 – 11:00', '17:00 – 19:00'];
        break;
      case 'Rue Ali Bach Hamba, Médenine':
        horaires = ['08:30 – 10:30', '15:00 – 17:00'];
        break;
      case 'Avenue 7 Novembre, Médenine':
        horaires = ['07:00 – 09:00', '13:30 – 15:30'];
        break;
      case 'Place de la République, Médenine':
        horaires = ['06:30 – 08:30', '11:00 – 13:00'];
        break;
      case 'Hôtel Djerba, Médenine':
        horaires = ['10:00 – 12:00', '18:00 – 20:00'];
        break;
      default:
        horaires = [];
    }

    const modal = await this.modalController.create({
      component: HoraireModalComponent,
      componentProps: {
        location: selectedLocation,
        horaires: horaires
      }
    });

    await modal.present();
  }
}
