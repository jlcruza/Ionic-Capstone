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

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  url = environment.apiServerUrl;

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
      });
    }
  }

  deleteActor(movie:Movie){
    console.log(this.auth.activeJWT());
    if (this.auth.can('delete:movies')) {
      this.http.delete(this.url + '/movies/' + movie.id, this.getHeaders())
      .subscribe((res: any) => {
        console.log("RES", res);
      });
    }
  }

  saveActor(movie:Movie){
    console.log(this.auth.activeJWT());
    if(movie.id > 0){
      // Patch
      if (this.auth.can('patch:movies')) {
        this.http.patch(this.url + '/actors/' + movie.id, movie, this.getHeaders())
        .subscribe((res: any) => {
          console.log("RES", res);
        });
      }
    }else{
      // Post
      if (this.auth.can('create:movies')) {
        this.http.post(this.url + '/actors/', movie, this.getHeaders())
        .subscribe((res: any) => {
          console.log("RES", res);
        });
      }
    }
    
  }
}
