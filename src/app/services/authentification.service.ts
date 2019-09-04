import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  public isAuth: boolean;
  public token: string;

  constructor(private alertController: AlertController) { }

  public login(username: string, password: string) {
    if (username === "admin" && password==="root") {
      this.isAuth = true;
-      this.saveToken();
    }else {
      this.isAuth = false;
    }
    return this.isAuth;
  }

  async loginAlert() {
    const alert = await this.alertController.create({
      header: 'Authentification',
      subHeader: "Erreur d'authentification",
      message: 'Login ou mot de passe incorrecte',
      buttons: ['OK']
    });
    await alert.present();
  }

 private saveToken() {
  this.token = "azerty";
  localStorage.setItem("myToken", this.token);
  }

  public loadToken() {
    this.token = localStorage.getItem("myToken");
    if(this.token == "azerty") {
      this.isAuth = true;
    }else {
      this.isAuth = false;
    }
    return this.isAuth;
  }

  public logout() {
    localStorage.removeItem("myToken");
  }
}
