import { Component } from '@angular/core';
import { ModalController, LoadingController, ToastController } from '@ionic/angular';
import { ConfirmationModalComponent } from '../components/confirmation-modal/confirmation-modal.component';
import { SignalementService } from '../services/signalement.service';

@Component({
  selector: 'app-signalerprobleme',
  templateUrl: './signalerprobleme.page.html',
  styleUrls: ['./signalerprobleme.page.scss'],
})
export class SignalerProblemePage {
 
  typeProblemeOptions = [
    { value: 'poubelle_pleine', label: 'Poubelle pleine' },
    { value: 'poubelle_defectueuse', label: 'Poubelle défectueuse' },
    { value: 'dechet_non_collecte', label: 'Déchet non collecté' }
  ];

  
  lieuOptions = [
    { value: 'Avenue Habib Bourguiba, Médenine', label: 'Avenue Habib Bourguiba, Médenine' },
    { value: 'Rue Ibn Khaldoun, Médenine', label: 'Rue Ibn Khaldoun, Médenine' },
    { value: 'Marché Central, Médenine', label: 'Marché Central, Médenine' },
    { value: 'Centre Commercial, Médenine', label: 'Centre Commercial, Médenine' },
    { value: 'Rue Ali Bach Hamba, Médenine', label: 'Rue Ali Bach Hamba, Médenine' },
    { value: 'Avenue 7 Novembre, Médenine', label: 'Avenue 7 Novembre, Médenine' },
    { value: 'Place de la République, Médenine', label: 'Place de la République, Médenine' },
    { value: 'Hôtel Djerba, Médenine', label: 'Hôtel Djerba, Médenine' }
  ];

 
  typeProbleme: string | null = null;  
  lieu: string | null = null;
  commentaire: string = '';
  isSubmitting: boolean = false;

  constructor(
    private modalController: ModalController,
    private signalementService: SignalementService,
    private loadingController: LoadingController,
    private toastController: ToastController
  ) {}

  async envoyerSignalement() {
    console.log('type_probleme sélectionné :', this.typeProbleme);
    console.log('lieu sélectionné :', this.lieu);

    if (!this.typeProbleme || !this.lieu) {
      this.presentToast('votre déclaration n\'été pas envoyée veuillez réssayer encore une fois   ! ⚠️', 'danger');
      return;
    }

    const loading = await this.loadingController.create({
      message: 'Envoi en cours...',
      spinner: 'circles'
    });
    await loading.present();
    this.isSubmitting = true;

    const data = {
      type_probleme: this.typeProbleme,
      lieu: this.lieu,
      commentaire: this.commentaire
    };

    this.signalementService.envoyerSignalement(data).subscribe({
      next: async (response: any) => {
        console.log('Réponse serveur :', response);
        await loading.dismiss();
        this.isSubmitting = false;

        const modal = await this.modalController.create({
          component: ConfirmationModalComponent,
          componentProps: { message: "Merci pour votre signalement !" }
        });
        await modal.present();

        
        this.typeProbleme = null;
        this.lieu = null;
        this.commentaire = '';
      },
      error: async (err) => {
        console.error('Erreur lors de l\'envoi du signalement :', err);
        await loading.dismiss();
        this.isSubmitting = false;
        this.presentToast('Erreur lors de l\'envoi du signalement. Veuillez réessayer.', 'danger');
      }
    });
  }

  async presentToast(message: string, color: string = 'primary') {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      color: color,
      position: 'bottom'
    });
    toast.present();
  }
}
