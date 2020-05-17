import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-cast-manager',
  templateUrl: './cast-manager.page.html',
  styleUrls: ['./cast-manager.page.scss'],
})
export class CastManagerPage implements OnInit {

  addActor:Boolean = true;

  constructor(public nav: NavController) { }

  ngOnInit() {
  }

  getActorsList($event){
    console.log($event.target.value);
    let option = $event.target.value;
    this.addActor = (option == "Add")
  }


  goToMain() {
    this.nav.navigateForward('/main')
  }

  goToActors() {
    this.nav.navigateForward('/actor-manager')
  }

  goToMovies() {
    this.nav.navigateForward('/movie-manager')
  }

  goToCast() {
    this.nav.navigateForward('/cast-manager')
  }

}
