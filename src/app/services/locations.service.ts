import { Injectable } from '@angular/core';
import { Place } from '../model/place.model';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class LocationsService {

  public locations: any[];

  constructor(private storage: Storage) {
   }
  
  public getLocations() {
    return this.storage.get('locations').then( data => {
      return this.locations = data;//!=null?data:[];
        // return this.locations.slice();
    })
  }

  public addLocation(place: Place) {
    this.locations.push(place);
    this.storage.set("locations", this.locations);
  }
}
