import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { MedecinsComponent } from './medecins/medecins.component';
import { NavbarComponent } from './navbar/navbar.component';
import { VisitesComponent } from './visites/visites.component';
//import { HttpModule } from '@angular/http';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { DataService } from './services/app.service.data';

const appRoutes: Routes = [
{ path: '', component: ConnexionComponent },
{ path: 'medecins', component: MedecinsComponent },
{ path: 'visites', component: VisitesComponent },
{ path: 'accueil', component: NavbarComponent }

];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes),HttpClientModule,BrowserModule,FormsModule],
  exports: [RouterModule],
  providers: [DataService],

  bootstrap: [AppComponent]
})
export class AppRoutingModule { }