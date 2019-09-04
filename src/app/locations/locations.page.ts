import { Component, OnInit } from '@angular/core';
import { LocationsService } from '../services/locations.service';
import { Place } from '../model/place.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.page.html',
  styleUrls: ['./locations.page.scss'],
})
export class LocationsPage implements OnInit {

  public locations: Array<Place>;

  constructor(private locService: LocationsService, private router: Router) { }

  ngOnInit() {
    this.locService.getLocations().then( data => {
      console.log(data);
      this.locations = data;
    })
  }

  // ionViewWillEnter() {
  //   this.locService.getLocations().then( data => {
  //     this.locations = data;
  //   });
  // }

  onNewLocation() {
    this.router.navigateByUrl('/menu/new-location');
  }


}
