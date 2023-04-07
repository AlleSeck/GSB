import { Component, OnInit } from "@angular/core";
import { NgModule } from "@angular/core";
import { Router } from "@angular/router";

import { ActivatedRoute } from "@angular/router";
import { FormBuilder } from "@angular/forms";
import { DataService } from "../services/app.service.data";

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent implements OnInit {
  lblUsername: string="Login";
  lblPassword: string="Mot de passe";
  titre: string = "connexion";
  username= "";
  password ="";
  estCache: boolean=true;
  lblMessage: string ="";
  visiteur: any;

  constructor(private router : Router,private dataService : DataService) { }

  valider() :void{
      /*if(this.username != "toto" || this.password !="titi"){
         console.log("erreur");
      }else{
         console.log("ok");
         this.router.navigate(['accueil']);
      }*/
    this.dataService.connexion(this.username,this.password).subscribe({
      next : (data) => {
        this.visiteur = data;
        this.dataService.visiteur = data;
        console.log(data);
        console.log("vi" + JSON.stringify(this.visiteur));
        console.log("vi2" + JSON.stringify(this.dataService.visiteur));
        this.router.navigate(['accueil']);

        this.lblMessage = "";
        this.estCache = true;
      },
      error : (error) =>{
        console.log("error :", JSON.stringify(error));
        console.log("erreur");
        this.lblMessage = "Erreur identifiant/Mot de passe incorrect";
        this.estCache = false;
      }

    })  
  }
 


  ngOnInit(): void {
  }

}
