import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public contact = {
    name: "TDSI",
    email: "ucad.sn",
    tel: "33 820 20 20",
    logo: "assets/images/logo.png",
    loc: "assets/images/ucad.PNG"
  };

  constructor() {}

}
