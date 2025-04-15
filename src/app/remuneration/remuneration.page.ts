import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-remuneration',
  templateUrl: './remuneration.page.html',
  styleUrls: ['./remuneration.page.scss'],
})
export class RemunerationPage {

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

  declaration = {
    lieu: '',
    poids: null,
    points: 0
  };

  constructor(private alertController: AlertController) {}

  calculerPoints() {
    if (this.declaration.poids && this.declaration.poids > 0) {
      this.declaration.points = this.declaration.poids * 5;
    } else {
      this.declaration.points = 0;
    }
  }

  async envoyerDeclaration() {
    if (!this.declaration.lieu || !this.declaration.poids || this.declaration.poids <= 0) {
      await this.afficherAlerte('Erreur', 'Veuillez remplir tous les champs correctement ! ⚠️');
      return;
    }

    await this.afficherAlerte('Déclaration envoyée ✅',
      `Pour ${this.declaration.lieu} : ${this.declaration.poids}kg → ${this.declaration.points} points 🌱`
    );

    this.resetForm();
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
