import { Component, ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the ModalphonePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modalphone',
  templateUrl: 'modalphone.html',
})
export class ModalphonePage {

  phone:string = "";
  @ViewChild('phon') phon: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private view: ViewController) {
  }

  

  goBackNoSave(){
	  this.view.dismiss();
  }

  goBackSave(){
  	this.view.dismiss({phone: this.phon.nativeElement.value});
  }

  ionViewDidLoad() {
    this.phone = this.navParams.get('phone');
  }
}
