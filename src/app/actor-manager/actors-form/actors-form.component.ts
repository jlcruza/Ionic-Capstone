import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import {Actor, ActorsService} from '../../services/actors.service';

@Component({
  selector: 'app-actors-form',
  templateUrl: './actors-form.component.html',
  styleUrls: ['./actors-form.component.scss'],
})
export class ActorsFormComponent implements OnInit {
  Object = Object
  @Input() actor: Actor;
  @Input() isNew: boolean;

  movies:Array<string>;

  constructor(
    public auth: AuthService,
    private modalCtrl: ModalController,
    private actors: ActorsService
  ) { }

  ngOnInit() {
    if (this.isNew) {
      this.actor = {
        id: -1,
        name: '',
        age: 0,
        gender: '',
        picture_link:'',
        bio:''
      };
    } else{
      this.actors.getActorMovies(this.actor.id);
    }
  }

  closeModal() {
    this.modalCtrl.dismiss();
  }

  saveClicked() {
    this.actors.saveActor(this.actor);
    this.closeModal();
  }

}
