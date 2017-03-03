import { Component } from '@angular/core';

import { NavController, LoadingController } from 'ionic-angular';
import {DataService} from './../../providers/data-service';
import {FirebaseListObservable} from 'angularfire2';
import {Ads} from '../../Model/ads'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  ads:FirebaseListObservable<Ads[]>
  keys:Array<any>=[];
  loader=[];
  image;
  constructor(public navCtrl: NavController, public ds:DataService, public loadingCtrl: LoadingController) {
    this.ads = ds.getAds();
    ds.getAds().subscribe(ads=>{
      // this.loader.push(ads)
      // console.log(this.loader.length)
    })
    
      let loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 4000 
    });
    loader.present();
    
    // ds.getImgUrl().getDownloadURL().then(url => {this.image = url});
  }

  delete(keys){
    this.ds.delete(keys);
    
  }

}
