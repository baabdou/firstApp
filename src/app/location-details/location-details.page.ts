import { Component, OnInit } from '@angular/core';
import { Place } from '../model/place.model';
import { LocationsService } from '../services/locations.service';

@Component({
  selector: 'app-location-details',
  templateUrl: './location-details.page.html',
  styleUrls: ['./location-details.page.scss'],
})
export class LocationDetailsPage implements OnInit {

  private curentPlace: Place;

  constructor(private locService: LocationsService) { }

  ngOnInit() {
    this.locService.currentPlace = this.curentPlace;
    console.log(this.curentPlace);
  }

}
