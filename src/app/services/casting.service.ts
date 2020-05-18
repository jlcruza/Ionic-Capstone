import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';
import { environment } from 'src/environments/environment';
import { Movie } from './movies.service';
import { Actor } from './actors.service';

export interface Cast{
  'actors_id':number,
  'movies_id':number
}

@Injectable({
  providedIn: 'root'
})
export class CastingService {

  url = environment.apiServerUrl;
  public actorCollection: { [key: number]: Actor } = {};
  public movieCollection: { [key: number]: Movie } = {};

  constructor(
    private auth: AuthService,
    private http: HttpClient
  ) { }

  getHeaders() {
    const header = {
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ${this.auth.activeJWT()}`)
        .set('Access-Control-Allow-Headers', '*')
        .set('Access-Control-Allow-Origin', '*')
    };
    return header;
  }

  getListOfMovies() {
    if (this.auth.can('read:movies')) {
      this.http.get(this.url + '/movies', this.getHeaders())
        .subscribe((res: any) => {
          console.log("RES", res);
          this.moviesToList(res.movies);
        });
    }
  }

  getCurrentActors(id: number) {
    if (this.auth.can('read:actors')) {
      this.http.get(this.url + '/movies/' + id + '/cast', this.getHeaders())
        .subscribe((res: any) => {
          console.log("RES", res);
          this.actorsToList(res.actors);
        });
    }
  }

  getOtherActors(id: number) {
    if (this.auth.can('read:actors')) {
      this.http.get(this.url + '/movies/' + id + '/nocast', this.getHeaders())
        .subscribe((res: any) => {
          console.log("RES", res);
          this.actorsToList(res.actors);
        });
    }
  }

  addActorToMovie(casting:Cast){
    if (this.auth.can('patch:movies')) {
      this.http.post(this.url + '/cast', casting, this.getHeaders())
        .subscribe((res: any) => {
          console.log("RES", res);
        });
    } 
  }

  deleteActorFromMovie(casting:Cast){
    
    if(this.auth.can('patch:movies')){
      this.http.delete(this.url + '/cast/' + casting.movies_id + '/' + casting.actors_id, this.getHeaders() )
        .subscribe((res: any) => {
          console.log("RES", res);
        });
    }
  }

  moviesToList(movies: Array<Movie>) {
    this.movieCollection = {};
    for (const movie of movies) {
      this.movieCollection[movie.id] = movie;
    }
  }

  actorsToList(actors: Array<Actor>) {
    this.actorCollection = {}
    for (const actor of actors) {
      this.actorCollection[actor.id] = actor;
    }
  }
}
