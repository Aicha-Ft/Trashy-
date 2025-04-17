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
  lieux: string[] = [
    'Route Tataouine', 'Route Gabes', 'Route Ben Gerdan', 'Route Djerba',
    'Route Ben Khdach', 'El Hara', 'Koutin', 'Smar'
  ];

  constructor(
    private modalController: ModalController,
    private http: HttpClient
  ) {}

  async openHoraireModal(formData: any) {
    console.log('Form data:', formData);  // Vérifie si la méthode est appelée et si les données sont passées
  
    const selectedLocation = formData.selectedLocation; // Récupère le lieu sélectionné
    console.log('Selected Location:', selectedLocation);  // Vérifie que la localisation est correctement récupérée
  
    // Requête pour récupérer les horaires depuis le backend
    this.http.get(`http://localhost/backend/controllers/horaire.php?lieu=${selectedLocation}`)
      .subscribe(async (response: any) => {
        console.log(response); // Vérifie la réponse de l'API dans la console
  
        if (response.success && response.data && response.data.length > 0) {
          console.log('Données passées au modal:', { location: selectedLocation, horaires: response.data });
  
          // Si les horaires sont récupérés, on ouvre le modal avec les horaires
          const modal = await this.modalController.create({
            component: HoraireModalComponent,
            componentProps: {
              location: selectedLocation,
              horaires: response.data.map(horaire => horaire.horaire)  // On extrait uniquement les horaires
            }
          });
  
          await modal.present();
        } else {
          console.error('Aucun horaire disponible pour ce lieu');
        }
      }, error => {
        console.error('Erreur lors de la récupération des horaires', error);
      });
  }
  
}  