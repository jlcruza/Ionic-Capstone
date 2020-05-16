import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';
import { environment } from 'src/environments/environment';


export interface Actor{
  id:number,
  name:string,
  age:number,
  gender:string,
  picture_link:string,
  bio:string
}

@Injectable({
  providedIn: 'root'
})
export class ActorsService {

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

  getActors(){
    console.log(this.auth.activeJWT());
    if (this.auth.can('read:actors')) {
      this.http.get(this.url + '/actors', this.getHeaders())
      .subscribe((res: any) => {
        console.log("RES", res);
      });
    }
  }

  deleteActor(actor:Actor){
    console.log(this.auth.activeJWT());
    if (this.auth.can('delete:actors')) {
      this.http.delete(this.url + '/actors/' + actor.id, this.getHeaders())
      .subscribe((res: any) => {
        console.log("RES", res);
      });
    }
  }

  saveActor(actor:Actor){
    console.log(this.auth.activeJWT());
    if(actor.id > 0){
      // Patch
      if (this.auth.can('patch:actors')) {
        this.http.patch(this.url + '/actors/' + actor.id, actor, this.getHeaders())
        .subscribe((res: any) => {
          console.log("RES", res);
        });
      }
    }else{
      // Post
      if (this.auth.can('create:actors')) {
        this.http.post(this.url + '/actors/', actor, this.getHeaders())
        .subscribe((res: any) => {
          console.log("RES", res);
        });
      }
    }
    
  }
}
