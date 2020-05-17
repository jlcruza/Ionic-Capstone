import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';
import { environment } from 'src/environments/environment';

export interface Movie{
  id:number,
  title:string,
  released:Date,
  picture_link:string,
  synopsis:string
}

export interface MovieCast{
  actors_id:number,
  name:string,
  age:number,
  picture_link:string,
  gender:string,
  bio:string
}

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  url = environment.apiServerUrl;
  public items: {[key: number]: Movie} = {};
  public actors: {[key: number]: MovieCast} = {};

  constructor(private auth: AuthService, private http: HttpClient) { }

  getHeaders() {
    const header = {
      headers: new HttpHeaders()
        .set('Authorization',  `Bearer ${this.auth.activeJWT()}`)
        .set('Access-Control-Allow-Headers', '*')
        .set('Access-Control-Allow-Origin', '*')
    };
    return header;
  }


  getMovies(){
    console.log(this.auth.activeJWT());
    if (this.auth.can('read:movies')) {
      this.http.get(this.url + '/movies', this.getHeaders())
      .subscribe((res: any) => {
        console.log("RES", res);
        this.moviesToItem(res.movies);
      });
    }
  }

  deleteMovie(movie:Movie){
    console.log(this.auth.activeJWT());
    if (this.auth.can('delete:movies')) {
      this.http.delete(this.url + '/movies/' + movie.id, this.getHeaders())
      .subscribe((res: any) => {
        console.log("RES", res);
      });
    }
  }

  saveMovie(movie:Movie){
    console.log(movie);
    console.log(this.auth.activeJWT());
    if(movie.id > 0){
      // Patch
      if (this.auth.can('patch:movies')) {
        this.http.patch(this.url + '/movies/' + movie.id, movie, this.getHeaders())
        .subscribe((res: any) => {
          console.log("RES", res);
        });
      }
    }else{
      // Post
      if (this.auth.can('create:movies')) {
        this.http.post(this.url + '/movies', movie, this.getHeaders())
        .subscribe((res: any) => {
          console.log("RES", res);
        });
      }
    }
  }


  getActorMovies(id) {
    console.log(this.auth.activeJWT());
    if (this.auth.can('read:movies')) {
      this.http.get(this.url + '/movies/' + id + '/cast', this.getHeaders())
        .subscribe((res: any) => {
          console.log("RES", res);
          this.actorsToList(res.movies);

        });
    }
    return { actors: [] }
  }

  moviesToItem(movies:Array<Movie>){
    for (const movie of movies) {
      this.items[movie.id] = movie;
    }
  }

  actorsToList(actorList: Array<MovieCast>) {
    for(let i = 0; i<actorList.length; i++){
      this.actors[actorList[i].actors_id] = actorList[i]
    }
  }
}
