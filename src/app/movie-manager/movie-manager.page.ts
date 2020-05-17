import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { MoviesService, Movie } from '../services/movies.service';
import { NavController, ModalController } from '@ionic/angular';
import { MoviesFormComponent } from './movies-form/movies-form.component';

@Component({
  selector: 'app-movie-manager',
  templateUrl: './movie-manager.page.html',
  styleUrls: ['./movie-manager.page.scss'],
})
export class MovieManagerPage implements OnInit {

  Object = Object;

  constructor(private auth: AuthService, 
    private modalCtrl: ModalController,
    public movies: MoviesService, 
    public nav: NavController) { }

  ngOnInit() {
    this.movies.getMovies()
  }

  async openForm(activeMovie: Movie = null) {
    if (!this.auth.can('read:movies')) {
      return;
    }

    const modal = await this.modalCtrl.create({
      component: MoviesFormComponent,
      componentProps: { movie: activeMovie, isNew: !activeMovie }
    });

    modal.present();
  }

  deleteMovie(movie: Movie){
    this.movies.deleteMovie(movie);
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
