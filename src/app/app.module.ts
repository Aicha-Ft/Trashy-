import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponentComponent } from './auth-component/auth-component.component';
import { FormsModule } from '@angular/forms';
import { GoogleMaps } from '@ionic-native/google-maps';


import { HorairePageModule } from './horaire/horaire.module';
@NgModule({
  declarations: [AppComponent, AuthComponentComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    HorairePageModule,
  ],
  providers: [
    CommonModule,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    GoogleMaps // Correct : Le service GoogleMaps dans les providers
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
