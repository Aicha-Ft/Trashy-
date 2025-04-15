import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ConfirmationModalComponent } from '../components/confirmation-modal/confirmation-modal.component';

// Interface pour les props du modal
interface ModalProps {
  message: string;
}

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

  // Méthode pour soumettre un rapport de problème
  async submitReport() {
    if (!this.selectedProblem || !this.selectedLocation) {
      console.log('Veuillez sélectionner un problème et un lieu.');
      return;
    }

    // Création du modal avec les props de type ModalProps
    const modal = await this.modalController.create({
      component: ConfirmationModalComponent,
      componentProps: {
        message: 'MERCI DE NOUS ENVOYER CE PROBLÈME POUR QU\'ON PUISSE LE RÉGLER.',
      } as ModalProps, // On indique que le message fait partie de ModalProps
    });

    await modal.present();

    // Réinitialisation des champs après soumission
    this.selectedProblem = null;
    this.selectedLocation = null;
    this.comment = '';
  }
}
