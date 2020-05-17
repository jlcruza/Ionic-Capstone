import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ActorsService, Actor } from '../services/actors.service'
import { NavController, ModalController } from '@ionic/angular';
import { ActorsFormComponent } from './actors-form/actors-form.component';


@Component({
  selector: 'app-actor-manager',
  templateUrl: './actor-manager.page.html',
  styleUrls: ['./actor-manager.page.scss'],
})
export class ActorManagerPage implements OnInit {
  Object = Object;

  constructor(private auth: AuthService, 
    private modalCtrl: ModalController,
    public actors: ActorsService, 
    public nav: NavController) { }

  ngOnInit() {
    this.actors.getActors()
  }

  deleteActor(actor:Actor){
    this.actors.deleteActor(actor);
  }

  async openForm(activeActor: Actor = null) {
    if (!this.auth.can('read:actors')) {
      return;
    }

    const modal = await this.modalCtrl.create({
      component: ActorsFormComponent,
      componentProps: { actor: activeActor, isNew: !activeActor }
    });

    modal.present();
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
