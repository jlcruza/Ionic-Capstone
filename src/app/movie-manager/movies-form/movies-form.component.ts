import { Component, OnInit, Input } from '@angular/core';
import { Movie, MoviesService } from 'src/app/services/movies.service';
import { AuthService } from 'src/app/services/auth.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-movies-form',
  templateUrl: './movies-form.component.html',
  styleUrls: ['./movies-form.component.scss'],
})
export class MoviesFormComponent implements OnInit {
  Object = Object;
  @Input() movie: Movie;
  @Input() isNew: boolean;

  constructor(
    public auth: AuthService,
    private modalCtrl: ModalController,
    private movies: MoviesService) { }

  ngOnInit() {
    if (this.isNew) {
      this.movie = {
        id: -1,
        title: '',
        released: new Date(),
        picture_link: '',
        synopsis: ''
      };
    } else {
      this.movies.getActorMovies(this.movie.id);
    }
  }


  closeModal() {
    this.modalCtrl.dismiss();
  }

  saveClicked() {
    this.movies.saveMovie(this.movie);
    this.closeModal();
  }

}
