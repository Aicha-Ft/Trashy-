import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-component',
  templateUrl: './auth-component.component.html',
  styleUrls: ['./auth-component.component.scss'],
})
export class AuthComponentComponent implements OnInit {
  formData: FormGroup;
  screen: string = 'signin'; // Par défaut, afficher la page de connexion

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit() {
    this.formData = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      name: ['', Validators.required],  // Pour le formulaire d'inscription
      confirmPassword: ['', [Validators.required]],  // Pour l'inscription
    });
  }

  // Changer entre les vues de formulaire
  change(view: string) {
    this.screen = view;
  }

  // Méthode pour la connexion
  login() {
    if (this.formData.valid) {
      const { email, password } = this.formData.value;
      console.log('Connexion réussie avec', email, password);
      this.router.navigate(['/espacecitoyen']);
    } else {
      console.error('Formulaire invalide');
    }
  }

  // Méthode pour l'inscription
  register() {
    if (this.formData.valid && this.formData.value.password === this.formData.value.confirmPassword) {
      const { name, email, password } = this.formData.value;
      console.log('Inscription réussie avec', name, email, password);
      this.router.navigate(['/espacecitoyen']);
    } else {
      console.error('Formulaire d\'inscription invalide ou mots de passe non identiques');
    }
  }
}
