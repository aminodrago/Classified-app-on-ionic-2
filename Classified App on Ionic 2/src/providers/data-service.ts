import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {AngularFire} from 'angularfire2';
import 'rxjs/add/operator/map';

/*
  Generated class for the DataService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class DataService {

  constructor(public af:AngularFire) {
    
  }

getAds(){
  return this.af.database.list('/ads');
}

postAds(name,modelno,used,color,price,desc,cat,image){
  this.af.database.list('/ads').push({
    name: name,
    modelno: modelno,
    used:used,
    color:color,
    price:price,
    desc: desc,
    cat:cat,
    image:image
  })
}

delete(key){
  this.af.database.list('/ads').remove(key);
}

storeImage(img){
  var storageRef= firebase.storage().ref('images/' ).put(img);
}

// getImgUrl(){
//  return firebase.storage().ref().child('images/');
// }

}
