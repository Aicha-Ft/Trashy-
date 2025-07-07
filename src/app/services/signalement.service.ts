import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SignalementService {

  private apiUrl = `${environment.API_URL}/api/signalement/`;  

  constructor(private http: HttpClient) {}

  envoyerSignalement(data: any): Observable<any> {
    console.log('Données envoyées au backend :', data);
   
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
   
    // pour Adapter le format des données 
    const formattedData = {
      type_probleme: data.selectedProblem === 'Poubelle pleine' ? 'poubelle_pleine' :
                     data.selectedProblem === 'Poubelle défectueuse' ? 'poubelle_defectueuse' : 'dechet_non_collecte',
      lieu: data.selectedLocation,
      commentaire: data.comment
    };
   
    return this.http.post(this.apiUrl, formattedData, { headers })
      .pipe(
        tap(response => console.log('Réponse du backend:', response)),
        catchError(error => {
          console.error('Erreur lors de l\'envoi du signalement:', error);
          throw error;
        })
      );
  }
}