import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { SMS } from '@ionic-native/sms';
import { EmailComposer } from '@ionic-native/email-composer';
/**
 * Generated class for the SendcardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sendcard',
  templateUrl: 'sendcard.html',
})
export class SendcardPage {

  phoneNumber: number;
  textMessage: string;


  constructor(private sms: SMS, private emailComposer: EmailComposer,private toast: ToastController, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SendcardPage');
  }

  async sendTextMessage(){
  	
    console.log(this.sms.hasPermission());

    try{
  		await this.sms.send(String(this.phoneNumber), this.textMessage);
  		const toast = this.toast.create({
  			message:"Text was sent!",
  			duration: 3000
		});
  		toast.present();
  	}
  	catch(e){
  		console.log(e);
  		const toast = this.toast.create({
  			message:"Text was NOT sent!",
  			duration: 3000
		});
  		toast.present();
  	}
  }

  sendEmail(){

  		this.emailComposer.isAvailable().then((available: boolean) =>{
		 if(available) {
		   //Now we know we can send
		 }
		});

		let email = {
		  to: 'paulclowardcs12@gmail.com',
		  cc: 'erika@mustermann.de',
		  bcc: ['john@doe.com', 'jane@doe.com'],
		  attachments: [
		  ],
		  subject: 'Cordova Icons',
		  body: 'How are you? Nice greetings from Leipzig',
		  isHtml: true
		};

		this.emailComposer.open(email);
  }
}
