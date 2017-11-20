import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BuildcardPage } from "../buildcard/buildcard";

import { Storage } from "@ionic/storage";
import { FormsModule } from '@angular/forms';

import { AngularFireAuth } from 'angularfire2/auth';
import { User } from "../model/user";
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user = {} as User;

  constructor(private afAuth: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams, public storage: Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  async login(user:User){
    
    try{

      const result = await this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password);
      if(result){  
        this.navCtrl.setRoot(BuildcardPage);
      }
    }
    catch (e){
      console.error(e);
    }
  }
}