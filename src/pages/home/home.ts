import { Component } from '@angular/core';

import { NavController, ModalController } from 'ionic-angular';

import { ToDoModalPage } from '../to-do-modal/to-do-modal';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {

  }
  presentModal(){
    let modal = this.modalCtrl.create(ToDoModalPage);
    modal.present();
  }

}
