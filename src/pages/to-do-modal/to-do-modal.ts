import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the ToDoModal page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-to-do-modal',
  templateUrl: 'to-do-modal.html'
})
export class ToDoModalPage {
    title :  any;
    description : any;
    duedate : any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ToDoModalPage');
  }
  createTask(){
    console.log(this.title);
    console.log(this.description);
    console.log(this.duedate);

  }

}
