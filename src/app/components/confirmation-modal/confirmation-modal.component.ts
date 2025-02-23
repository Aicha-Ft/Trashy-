import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule, ModalController } from '@ionic/angular';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Component, Input } from '@angular/core';

@NgModule({
  declarations: [ConfirmationModalComponent],
  imports: [CommonModule, IonicModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

@Component({
  selector: 'app-confirmation-modal',
  template: `
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title>Confirmation</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <p *ngIf="message">{{ message }}</p>
      <p *ngIf="!message">Aucun message à afficher.</p>
      <ion-button expand="block" (click)="dismissModal()">Fermer</ion-button>
    </ion-content>
  `,
  styleUrls: ['./confirmation-modal.component.scss'],
})
export class  ConfirmationModalComponent {
  @Input() message: string = ''; // Message à afficher

  constructor(private modalController: ModalController) {}

  // Méthode pour fermer la fenêtre modale
  dismissModal(): void {
    this.modalController.dismiss();
  }
} 