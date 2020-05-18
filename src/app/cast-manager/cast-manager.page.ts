import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import {CastingService, Cast} from '../services/casting.service'
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-cast-manager',
  templateUrl: './cast-manager.page.html',
  styleUrls: ['./cast-manager.page.scss'],
})
export class CastManagerPage implements OnInit {
  Object=Object;
  addActor:Boolean = true;
  movie:number = 1;
  addActorID:number;
  deleteActorID:number;

  constructor(public auth:AuthService,public nav: NavController, public cast:CastingService) { }

  ngOnInit() {
    this.cast.getListOfMovies();
    this.cast.getCurrentActors(this.movie);
  }

  onMovieChange(){
    if(this.addActor){
      this.cast.getOtherActors(this.movie);
    } else{
      this.cast.getCurrentActors(this.movie);
    }
  }

  getActorsList($event){
    console.log($event.target.value);
    let option = $event.target.value;
    this.addActor = (option == "Add")

    if(this.addActor){
      this.cast.getOtherActors(this.movie);
    } else{
      this.cast.getCurrentActors(this.movie);
    }
  }

  saveClicked(){
    if(this.addActor){
      const casting: Cast = {
        'actors_id':this.addActorID,
        'movies_id':this.movie
      }
      console.log(this.addActorID);
      console.log(this.movie);
      this.cast.addActorToMovie(casting);
    } else{
      const casting: Cast = {
        'actors_id':this.deleteActorID,
        'movies_id':this.movie
      }
      this.cast.deleteActorFromMovie(casting);
    }
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
