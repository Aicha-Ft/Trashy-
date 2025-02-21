import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router'; 
@Component({
  selector: 'app-auth-component',
  templateUrl: './auth-component.component.html',
  styleUrls: ['./auth-component.component.scss'],
})
export class AuthComponentComponent implements OnInit {
  screen: any = 'signin';
  formData: FormGroup;
  isLoading: boolean = false;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router 
  ) {
    this.formData = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  ngOnInit() {}

  change(event) {
    this.screen = event;
  }

  login() {
    var formData: any = new FormData();
    if (this.formData.valid) {
      this.isLoading = true;
      formData.append('email', this.formData.get('email').value);
      formData.append('password', this.formData.get('password').value);
      console.log('Données du formulaire :', this.formData.value); 
      this.auth.userLogin(formData).subscribe(
        (data: any) => {
          console.log('Réponse de l\'API :', data); 
          this.isLoading =false;
          if (data.success) { 
            console.log('Redirection vers /espacecitoyen'); 
            this.router.navigate(['/espacecitoyen']); 
          } else {
            console.error('Échec de la connexion :', data.message);
          }
        },
        (error) => {
          console.error('Erreur de connexion', error);
          this.isLoading = false;
        }
      );
    } else {
      console.log('Formulaire invalide');
    }
  }

  register() {
    var formData: any = new FormData();
    if (this.formData.valid) {
      this.isLoading = true;
      formData.append('name', this.formData.get('name').value);
      formData.append('email', this.formData.get('email').value);
      formData.append('password', this.formData.get('password').value);
      console.log('Données du formulaire :', this.formData.value); 
      this.auth.userRegister(formData).subscribe(
        (data: any) => {
          console.log('Réponse de l\'API :', data); 
          this.isLoading = false;
          this.screen = 'signin'; 
        },
        (error) => {
          console.error('Erreur d\'inscription', error);
          this.isLoading = false;
        }
      );
    } else {
      console.log('Formulaire invalide');
    }
  }
}