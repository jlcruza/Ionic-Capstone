import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {
  loginURL: string;

  constructor(public auth: AuthService, public nav: NavController) { 
    this.loginURL = auth.build_login_link('/');
  }

  ngOnInit() {
    console.log(this.auth.activeJWT())
  }

  goToActors(){
    this.nav.navigateForward('/actor-manager')
  }

  goToMovies(){
    this.nav.navigateForward('/movie-manager')
  }

  goToCast(){
    this.nav.navigateForward('/cast-manager')
  }

}
