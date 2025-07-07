import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { RemunerationService } from '../services/remuneration.service';

@Component({
  selector: 'app-remuneration',
  templateUrl: './remuneration.page.html',
  styleUrls: ['./remuneration.page.scss'],
})
export class RemunerationPage {

  locations: string[] = [
    'Avenue Habib Bourguiba, Médenine', 'Rue Ibn Khaldoun, Médenine', 'Marché Central, Médenine', 'Centre Commercial, Médenine',
    'Rue Ali Bach Hamba, Médenine', 'Avenue 7 Novembre, Médenine', 'Place de la République, Médenine', 'Hôtel Djerba, Médenine'
  ];

  declaration = {
    lieu: '',
    poids: null,
    points: 0
  };

  constructor(
    private alertController: AlertController,
    private remunerationService: RemunerationService
  ) {}

  calculerPoints() {
    if (this.declaration.poids && this.declaration.poids > 0) {
      this.declaration.points = this.declaration.poids * 5;
    } else {
      this.declaration.points = 0;
    }
  }

  async envoyerDeclaration() {
    if (!this.declaration.lieu || !this.declaration.poids || this.declaration.poids <= 0) {
      await this.afficherAlerte('Erreur', ' votre déclaration n\'été pas envoyée veuillez réssayer encore une fois   ! ⚠️');
      return;
    }

    // Envoi vers le backend
    this.remunerationService.envoyerRemuneration(this.declaration).subscribe({
      next: async (response) => {
        await this.afficherAlerte('Déclaration envoyée ✅',
          `Pour ${this.declaration.lieu} : ${this.declaration.poids}kg → ${this.declaration.points} points 🌱`
        );
        this.resetForm();
      },
      error: async (error) => {
        console.error('Erreur backend', error);
        await this.afficherAlerte('Erreur', 'Impossible d\'envoyer la déclaration.');
      }
    });
  }

  resetForm() {
    this.declaration = { lieu: '', poids: null, points: 0 };
  }

  async afficherAlerte(enTete: string, message: string) {
    const alert = await this.alertController.create({
      header: enTete,
      message: message,
      buttons: ['OK']
    });
    await alert.present();
  }
}
