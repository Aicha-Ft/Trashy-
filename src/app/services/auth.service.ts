import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  API_URL = environment.API_URL;

  constructor(private http: HttpClient) {}

  
  userLogin(req) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'  
    });
    return this.http.post(`${this.API_URL}/api/login/`, req, { headers });
  }

  
  userRegister(req) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json' 
    });
    return this.http.post(`${this.API_URL}/api/register/`, req, { headers });
  }
}
