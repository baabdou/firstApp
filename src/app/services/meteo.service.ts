import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MeteoService {
  dataMeteo;

  constructor(private http: HttpClient) { }

  getMeteo(city: string) {
    // const App_URL;
 
    return this.http.get("http://api.openweathermap.org/data/2.5/weather?q="+city+"&APPID=4ff3b54d72e883036510585b692392ce");
  }
}
