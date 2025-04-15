import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SignalementService {

  private apiUrl = 'http://localhost/ton-projet/backend/signalerprobleme.php'; // Remplace par le bon chemin

  constructor(private http: HttpClient) {}

  signalerProbleme(selectedProblem: string, selectedLocation: string, comment: string) {
    const data = {
      selectedProblem: selectedProblem,
      selectedLocation: selectedLocation,
      comment: comment
    };

    return this.http.post(this.apiUrl, data);
  }
}
