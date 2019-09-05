import { Component, OnInit } from '@angular/core';
import { LocationsService } from '../services/locations.service';
import { Place } from '../model/place.model';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.page.html',
  styleUrls: ['./locations.page.scss'],
})
export class LocationsPage implements OnInit {

  public locations: Place[];

  constructor(private locService: LocationsService, private router: Router, private alertCntroller: AlertController) { }

  ngOnInit() {
   
  }

  ionViewWillEnter() {
    this.onGetLocations();
  }

  onNewLocation() {
    this.router.navigateByUrl('/menu/new-location');
  }

  async onDelete(p: Place) {
    const alert = await this.alertCntroller.create({
      header: 'Supprimer une place',
      message: 'Message <strong>Etes vous sure</strong>?',
      buttons: [
        {
          text: 'Oui',
          handler: () => {
            this.deleteLocation(p);
            console.log('supprission reussie');
          }
        }, {
          text: 'Non',
          handler: () => {
            console.log('Suppression annule!');
          }
        }
      ]
    });
    await alert.present();
  }

  deleteLocation(place: Place) {
    let i = this.locations.indexOf(place);
    this.locations.splice(i, 1);
    this.locService.updateLocations(this.locations);
  }

  onGetLocations() {
    this.locService.getLocations().then( data => {
      this.locations = data;
    });
  }

  onDetailsLoc(p: Place) {
    this.locService.currentPlace=p;
    console.log(p);
    this.router.navigateByUrl("/menu/location-details");
  }


}
