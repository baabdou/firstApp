import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '../services/authentification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private authService: AuthentificationService, private router: Router) { }

  ngOnInit() {
  }

  onLogin(user) {
    const usrname = user.username;
    const passwd = user.password;
    if(this.authService.login(usrname, passwd)) {
      this.router.navigateByUrl('/menu/home');
    }else {
      this.authService.loginAlert();
      this.router.navigateByUrl('/login');
    }
   }

}
