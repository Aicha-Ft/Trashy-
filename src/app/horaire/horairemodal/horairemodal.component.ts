import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-horaire-modal',
  templateUrl: './horairemodal.component.html',
  styleUrls: ['./horairemodal.component.scss'],
})
export class HoraireModalComponent {
  @Input() location: string;
  @Input() horaires: string[] = [];

  constructor(private modalController: ModalController) {}

  closeModal() {
    this.modalController.dismiss();
  }
}
