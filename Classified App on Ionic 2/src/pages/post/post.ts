import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import {DataService} from '../../providers/data-service';
import {Camera, ImagePicker} from 'ionic-native';
import * as firebase from 'firebase';

/*
  Generated class for the Post page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-post',
  templateUrl: 'post.html'
})
export class PostPage {

  public base64Image: string;
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl:AlertController, public ds:DataService) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad PostPage');
  }

  post(name,model,used,color,price,desc,cat){
    let confirm = this.alertCtrl.create({
      title: 'Use this lightsaber?',
      message: 'Do you agree to use this lightsaber to do good across the intergalactic galaxy?',
      buttons: [
        {
          text: 'Disagree',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Agree',
          handler: () => {
            // console.log('ss',cat._text);
            this.ds.postAds(name._value,model._value,used._value,color._value,price._value,desc._value,cat._text,this.base64Image);
            console.log('posted')
            
          }
        }
      ]
    });
    confirm.present();
  }
  
takepicture()
{
  Camera.getPicture({
        destinationType: Camera.DestinationType.DATA_URL,
        targetWidth: 1000,
        targetHeight: 1000
    }).then((imageData) => {
      // imageData is a base64 encoded string
        this.base64Image = "data:image/jpeg;base64," + imageData;
        // let store = firebase.storage().ref('images/' + this.base64Image);
        console.log('imgdata',imageData)
        console.log('data',this.base64Image)
    }, (err) => {
        console.log(err);
    });
}

pickfromgallery(){
  ImagePicker.getPictures(Option).then((results) => {
  for (var i = 0; i < results.length; i++) {
      console.log('Imakge URI: ' + results[i]);
  }
}, (err) => { });
}
}
