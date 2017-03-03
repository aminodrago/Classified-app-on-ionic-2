import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import {PostPage} from '../pages/post/post';
import {CarsPage} from '../pages/cars/cars';
import {MobilesPage} from '../pages/mobiles/mobiles';
import {LaptopsPage} from '../pages/laptops/laptops';


import {DataService} from '../providers/data-service';
import * as firebase from 'firebase';

import { AngularFireModule } from 'angularfire2';

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyADOHn3uFtFldugiLMedu0wzsavEHeh6iM",
    authDomain: "classified-app-on-ionic.firebaseapp.com",
    databaseURL: "https://classified-app-on-ionic.firebaseio.com",
    storageBucket: "classified-app-on-ionic.appspot.com",
    messagingSenderId: "152580304958"
  };



@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    PostPage,
    CarsPage,
    MobilesPage,
    LaptopsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    PostPage,
    CarsPage,
    MobilesPage,
    LaptopsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},DataService ]
})
export class AppModule {}
