import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RemunerationService {
  private apiUrl = 'http://192.168.1.87:8000/api/renumerations/'; 

  constructor(private http: HttpClient) {}

  envoyerRemuneration(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }
}
