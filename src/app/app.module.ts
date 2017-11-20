import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';

import { Storage } from '@ionic/storage';
import { IonicStorageModule } from '@ionic/storage';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { BuildcardPage } from "../pages/buildcard/buildcard";
import { SendcardPage } from "../pages/sendcard/sendcard";
import { SignupPage } from "../pages/signup/signup";
import { NewcardPage } from "../pages/newcard/newcard";

import { FormsModule } from '@angular/forms';
import { SMS } from '@ionic-native/sms';
import { EmailComposer } from '@ionic-native/email-composer';
//import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

import { Camera, CameraOptions } from '@ionic-native/camera';
import { ModalPage } from '../pages/modal/modal';
import { ModalphonePage } from '../pages/modalphone/modalphone';
import { ModalcompanyPage } from '../pages/modalcompany/modalcompany';

import { AngularFireModule } from "angularfire2";
import { FIREBASE_CONFIG } from './app.firebase.config';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { Crop } from '@ionic-native/crop';

//export function provideStorage() { return new Storage(); }
export function provideStorage() {
    return new Storage(['sqlite']);
    // return new Storage(['sqlite', 'websql', 'indexeddb'], { name: '__mydb' });
}
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    BuildcardPage,
    SendcardPage,
    SignupPage,
    NewcardPage,
    ModalPage,
    ModalphonePage,
    ModalcompanyPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    FormsModule,
    IonicStorageModule.forRoot({
     name: '__mydb',
     driverOrder: ['indexeddb', 'sqlite', 'websql'],
   }),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    BuildcardPage,
    SendcardPage,
    SignupPage,
    NewcardPage,
    ModalPage,
    ModalphonePage,
    ModalcompanyPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SMS,
    EmailComposer,
    {provide: Storage, useFactory: provideStorage},
    Camera,
    Crop
  ]
})
export class AppModule {};
