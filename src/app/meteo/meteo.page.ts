import { Component, OnInit } from '@angular/core';
import { MeteoService } from '../services/meteo.service';

@Component({
  selector: 'app-meteo',
  templateUrl: './meteo.page.html',
  styleUrls: ['./meteo.page.scss'],
})
export class MeteoPage implements OnInit {

  public city: string;
  public dataMeteo;

  constructor(private meteoService: MeteoService) { }

  ngOnInit() {
  }


  onLoadMeteo() {
    this.meteoService.getMeteo(this.city).subscribe( data => {
      this.dataMeteo = data;
    }, error => {
      console.log('ous avez une erreur'+error);
    });
  }

}
