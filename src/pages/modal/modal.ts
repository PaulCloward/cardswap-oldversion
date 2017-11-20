import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the ModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {

  email:string = "";
  @ViewChild('emai') emai: any;
  //test:string = this.name.nativeElement.value;

  constructor(public navCtrl: NavController, public navParams: NavParams, private view: ViewController) {
  
  }

  goBackNoSave(){
  	this.view.dismiss();
  }

  goBackSave(){
    this.view.dismiss({email: this.emai.nativeElement.value});
  }

  ionViewDidLoad() {
    this.email = this.navParams.get('email');
  }

}
