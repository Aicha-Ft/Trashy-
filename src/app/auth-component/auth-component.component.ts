import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-auth-component',
  templateUrl: './auth-component.component.html',
  styleUrls: ['./auth-component.component.scss'],
})
export class AuthComponentComponent implements OnInit {
  loginForm: FormGroup;
  registerForm: FormGroup;
  screen: string = 'signin';

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private http: HttpClient,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });

    this.registerForm = this.fb.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    });
  }

  change(view: string) {
    this.screen = view;
  }

  // Connexion
  login() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      const payload = { action: 'login', email, password };

      this.http.post('http://localhost/backend/controllers/auth.php', payload).subscribe(
        (res: any) => {
          if (res.status === 'success') {
            console.log('Connexion réussie', res);
            this.router.navigate(['/espacecitoyen']);
          } else {
            alert(res.message);
          }
        },
        (err) => {
          alert("Erreur lors de la connexion au serveur.");
        }
      );
    } else {
      alert('Veuillez remplir tous les champs requis.');
    }
  }

  // Inscription
  register() {
    if (this.registerForm.valid) {
      const { nom, prenom, email, password, confirmPassword } = this.registerForm.value;
      if (password !== confirmPassword) {
        alert('Les mots de passe ne correspondent pas.');
        return;
      }

      const payload = { nom, prenom, email, password, action: 'register' };

      this.http.post('http://localhost/backend/controllers/auth.php', payload).subscribe(
        (res: any) => {
          if (res.status === 'success') {
            console.log("Inscription réussie !");
            this.router.navigate(['/espacecitoyen']);
          } else {
            alert(res.message);
          }
        },
        (err) => {
          alert("Erreur lors de la connexion au serveur.");
        }
      );
    } else {
      alert('Veuillez remplir tous les champs correctement.');
    }
  }
}
