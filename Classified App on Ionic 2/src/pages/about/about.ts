import { Component } from '@angular/core';
import {DataService} from '../../providers/data-service';
import {Ads} from '../../Model/ads';
import {CarsPage} from '../../pages/cars/cars';
import {MobilesPage} from '../../pages/mobiles/mobiles';
import {LaptopsPage} from '../../pages/laptops/laptops'
import {AngularFire,FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2';
import "rxjs/add/operator/filter";

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  carAds:Array<Ads> = [];
  mobAds:Array<Ads> = [];
  lapAds:Array<Ads> = [];

  constructor(public navCtrl: NavController, ds: DataService) {
     ds.getAds().subscribe(ads =>{
      ads.forEach(element => {
        if(element.cat === 'Car'){
          this.carAds.push(element)
        }
        else if(element.cat === 'Mobile'){
          this.mobAds.push(element)
        }
        else if(element.cat === 'Laptop'){
          this.lapAds.push(element)
        }
      });
    })
    console.log('jkjkkkkskkkkkkkllkkljkjkk')
  }

  carNavigation(){
    this.navCtrl.push(CarsPage);
  }

  mobNavigation(){
    this.navCtrl.push(MobilesPage)
  }

  lapNavigation(){
    this.navCtrl.push(LaptopsPage);
  }
}
