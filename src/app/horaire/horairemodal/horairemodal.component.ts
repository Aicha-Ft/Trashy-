import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-horairemodal',
  templateUrl: './horairemodal.component.html',
  styleUrls: ['./horairemodal.component.scss']
})
export class HoraireModalComponent implements OnInit {
  @Input() location: string = '';  // Lieu sélectionné
  @Input() horaires: string[] = [];  // Liste des horaires

  constructor(private modalController: ModalController) {}

  ngOnInit() {
    // Vérification dans la console si les données sont correctement passées
    console.log('Lieu sélectionné :', this.location);
    console.log('Horaires :', this.horaires);
  }

  // Méthode pour fermer la modale
  closeModal() {
    this.modalController.dismiss();
  }
}
