import { Component, OnInit } from '@angular/core';
import { Place } from '../model/place.model';
import { Geolocation } from '@ionic-native/Geolocation/ngx';
import { LocationsService } from '../services/locations.service';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-new-location',
  templateUrl: './new-location.page.html',
  styleUrls: ['./new-location.page.scss'],
})
export class NewLocationPage implements OnInit {

  constructor(private geolocation: Geolocation, private locService: LocationsService,
              private navCtroller: NavController) { }

  ngOnInit() {
  }

  onSubmit(value: Place) {
    value.timestamp = new Date().getDate();
    value.photos = [];
    this.geolocation.getCurrentPosition().then( (resp) => {
      value.coordinates = {
        longitude: resp.coords.longitude,
        latitude: resp.coords.latitude
      }
      this.locService.addLocation(value);
      if(value) {
        console.log('location ajoutee avec succes');
      }
      // this.router.navigateByUrl('/menu/locations');
      this.navCtroller.back();
    });
  }

}
