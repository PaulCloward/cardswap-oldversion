import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { ModalController } from 'ionic-angular';
import { ModalPage } from '../modal/modal';
import { ModalphonePage } from '../modalphone/modalphone';
import { ModalcompanyPage } from '../modalcompany/modalcompany';
import { BuildcardPage } from '../buildcard/buildcard';
/**
 * Generated class for the NewcardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-newcard',
  templateUrl: 'newcard.html',
})
export class NewcardPage {

   base64Image:any;
   phone:string = '1111-111-1111';
   title:string = 'Title';
   company:string = 'Company';
   email:string = 'Email';
   firstname:string = 'First';
   lastname:string = 'Last';

  private imageSrc: string;
    constructor(public navCtrl: NavController, public navParams: NavParams, public camera: Camera, public modal: ModalController) {
   
  }
 

 accessGallery(){
   this.camera.getPicture({
     sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
     destinationType: this.camera.DestinationType.DATA_URL
    }).then((imageData) => {
      this.base64Image = 'data:image/jpeg;base64,'+imageData;
     }, (err) => {
      console.log(err);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewcardPage');
    console.log(this.navParams.get("email"));


  }

  openModal() {
    
    let myModal = this.modal.create(ModalPage, {email: this.email});

    myModal.onDidDismiss(email => {
      if(email != null){
        this.email = email.email;
      }
    });

    myModal.present();
  }

  openModalPhone() {
    
    let myModal = this.modal.create(ModalphonePage, {phone: this.phone});

    myModal.onDidDismiss(phone => {
     if(phone != null){
       this.phone = phone.phone;
     }
    });

    myModal.present();
  }

  openModalCompany() {
    
    let companyinfo = {
      name: this.firstname,
      company: this.company,
      title: this.title
    }
    let myModal = this.modal.create(ModalcompanyPage, {companyinfo: companyinfo});

    myModal.onDidDismiss(companyinfo => {
     if(companyinfo != null){
       this.firstname = companyinfo.name;
       this.title = companyinfo.title;
       this.company = companyinfo.company;
     }
    });

    myModal.present();
  }

  goBackSave(){
    this.navCtrl.push(BuildcardPage, {phone: this.phone, 
                                      email: this.email,
                                      company: this.company,
                                      title: this.title,
                                      firstname: this.firstname,
                                      lastname: this.lastname });
  }

  goBackNoSave() {
    this.navCtrl.pop();
  }

}
