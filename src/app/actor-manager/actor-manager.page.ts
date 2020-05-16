import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { environment } from 'src/environments/environment';
import {ActorsService, Actor} from '../services/actors.service'


@Component({
  selector: 'app-actor-manager',
  templateUrl: './actor-manager.page.html',
  styleUrls: ['./actor-manager.page.scss'],
})
export class ActorManagerPage implements OnInit {

  constructor(private auth: AuthService, public actors:ActorsService) { }

  ngOnInit() {
    this.actors.getActors()
  }


}
