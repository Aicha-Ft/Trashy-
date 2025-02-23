import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ConfirmationModalComponent } from '../components/confirmation-modal/confirmation-modal.component'; // Chemin correct

@Component({
  selector: 'app-signalerprobleme',
  templateUrl: './signalerprobleme.page.html',
  styleUrls: ['./signalerprobleme.page.scss'],
})
export class SignalerProblemePage {
  selectedProblem: string | null = null;
  selectedLocation: string | null = null;
  comment: string = '';

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

  constructor(private modalController: ModalController) {}

  async submitReport() {
    if (!this.selectedProblem || !this.selectedLocation) {
      console.log('Veuillez sélectionner un problème et un lieu.');
      return;
    }

    const modal = await this.modalController.create({
      component: ConfirmationModalComponent,
      componentProps: {
        message: 'MERCI DE NOUS ENVOYER CE PROBLÈME POUR QU\'ON PUISSE LE RÉGLER.',
      },
    });

    await modal.present();

    this.selectedProblem = null;
    this.selectedLocation = null;
    this.comment = '';
  }
}