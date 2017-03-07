import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


let apiUrl = 'https://todo-b5394.firebaseio.com';
/*
 Generated class for the Todo provider.

 See https://angular.io/docs/ts/latest/guide/dependency-injection.html
 for more info on providers and Angular 2 DI.
 */
@Injectable()
export class Todo {
  public data: any;
  public response: any;
  constructor(public http: Http) {
    this.http = http;
  }

  getTodoList() {
    /*let stats = this.http.get(statsUrl);
     return stats; */
    if(!window.localStorage.getItem("userId")){
      var userId = (Math.floor(Date.now() / 1000)).toString();
      window.localStorage.setItem("userId", userId);
      return  Promise.resolve(0);
    }
    if (this.data) {
      // already loaded data
      return Promise.resolve(this.data);
    }

    // don't have the data yet
    return new Promise(resolve => {
      // We're using Angular HTTP provider to request the data,
      // then on the response, it'll map the JSON data to a parsed JS object.
      // Next, we process the data and resolve the promise with the new data.
      this.http.get(apiUrl+ window.localStorage.getItem("userId") + '.json')
        .map(res => res.json())
        .subscribe(data => {
          // we've got back the raw data, now generate the core schedule data
          // and save the data for later reference
          this.data = data;
          resolve(this.data);
        });
    });
  }

  addNewTask(title, description, date){
    var data_string = {
      title : title,
      description : description,
      due_date : date,
      date : (Math.floor(Date.now() / 1000))
    };
    if(window.localStorage.getItem("cur_id")) {
      var cur_id = parseInt(window.localStorage.getItem("cur_id")) - (-1);
    } else {
      var cur_id = 1;
    }
    return new Promise(resolve => {
      this.http.post(apiUrl+ window.localStorage.getItem("userId") + '/'+cur_id+'.json', JSON.stringify(data_string))
        .map(res => res.json())
        .subscribe(loginResponse => {
          this.response = loginResponse;
          window.localStorage.setItem("cur_id", cur_id.toString());
          resolve(this.response);
        });
    });
  }
}
