import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from '../services/authentification.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  public menus = [
    {
      title: 'Home', url: '/menu/home', icon: 'home'
    },
    {
      title: 'Gallery', url: '/menu/gallery', icon: 'images'
    },
    {
      title: 'Locations', url: '/menu/locations', icon: 'pin'
    },
    {
      title: 'Meteo', url: '/menu/meteo', icon: 'sunny'
    },
    {
      title: 'Logout', url: '', icon: 'log-out'
    }
  ];

  constructor(private router: Router, private authService: AuthentificationService) { }

  ngOnInit() {
  }

  onNavigate(menu) {
    if(menu.title == 'Logout') {
      this.authService.logout();
      this.router.navigateByUrl('/login');
    }else{
      this.router.navigateByUrl(menu.url);
    }
  }

}
