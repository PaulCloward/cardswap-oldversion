import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SendcardPage } from '../sendcard/sendcard';
import { LoginPage } from '../login/login';
import { NewcardPage } from '../newcard/newcard';
import { Storage } from '@ionic/storage';
import { Crop } from '@ionic-native/crop';
/**
 * Generated class for the BuildcardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-buildcard',
  templateUrl: 'buildcard.html',
})
export class BuildcardPage {

  name: string;
  email: string;
  phone: string;
  showMyCards: boolean = true;

  cards: any[] = [{firstname: 'Paul', lastname: 'Cloward', 
  phone: '8017338989', email:'paul@aol.com', title: 'Software Dev', company:'Monovo'},
  {firstname: 'Ali', lastname: 'Cloward', 
  phone: '8017338989', email:'paul@aol.com', title: 'Software Dev', company:'Monovo'},
  {firstname: 'TJ', lastname: 'Cloward', 
  phone: '8017338989', email:'paul@aol.com', title: 'Software Dev', company:'Monovo'},
  {firstname: 'Kevin', lastname: 'Cloward', 
  phone: '8017338989', email:'paul@aol.com', title: 'Software Dev', company:'Monovo'}];




  constructor(private crop: Crop, public navCtrl: NavController, public navParams: NavParams, public storage: Storage) {
    console.log(navParams.get('email'));
  }

  ionViewDidLoad() {

     this.showMyCards = true;
     this.crop.crop('../../assets/img/portfolio.jpg', {quality: 75})
          .then(
            newImage => console.log('new image path is: ' + newImage),
            error => console.error('Error cropping image', error)
          );


     if(this.navParams.get("firstname") != null && this.navParams.get("lastname")){
       this.cards.push({firstname: this.navParams.get("firstname"),
                       lastname: this.navParams.get("lastname"),
                       phone: this.navParams.get("phone"),
                       email: this.navParams.get("email"),
                       title: this.navParams.get("title"),
                       company: this.navParams.get("company")});
     }
   
     if(!this.navParams.get("username")){
          
          console.log("Build card username is null");
          this.name = "Enter Name Here"; 
          this.email = "Enter Email Here";
          this.phone = "Enter Phone Here";

    } else {
      
      this.storage.get(this.navParams.get("username")).then((data) =>{
       if(data === null){
          console.log("Build card data is null");
          this.name = "Enter Name Here"; 
          this.email = "Enter Email Here";
          this.phone = "Enter Phone Here";
       
       } else {
         
          this.name = data.name; 
          this.email = data.email;
          this.phone = data.phone;

       }
    });
    }

    /*if(!this.navParams.get("name")){
      this.name = "Enter Name Here"; 
    } else {
      this.name = this.navParams.get("name");
    }

    if(!this.navParams.get("email")){
      this.email = "Enter Email Here"; 
    } else {
      this.email = this.navParams.get("email");
    }

    if(!this.navParams.get("phone")){
      this.phone = "Enter Phone Here"; 
    } else {
      this.phone = this.navParams.get("phone");
    }*/
  }

  onLoadSendCardPage(){
    this.navCtrl.push(SendcardPage);
  }

  onLoadNewCardPage(){
    this.navCtrl.push(NewcardPage);
  }

  onLoadMyCards(){
    
    this.showMyCards = true;

    document.getElementById("txtMyCards").style.color = "gray";  
    document.getElementById("txtMyCards").style.borderBottom = ".2em solid gray";  

    document.getElementById("txtGroups").style.color = "lightgray";  
    document.getElementById("txtReceived").style.color = "lightgray";  

    document.getElementById("txtGroups").style.borderBottom = "none"; 
    document.getElementById("txtReceived").style.borderBottom = "none";
  }

  onLoadGroups(){

    this.showMyCards = false;
    
    document.getElementById("txtGroups").style.color = "gray"; 
    document.getElementById("txtGroups").style.borderBottom = ".2em solid gray"; 

    document.getElementById("txtMyCards").style.color = "lightgray";   
    document.getElementById("txtReceived").style.color = "lightgray";  

    document.getElementById("txtMyCards").style.borderBottom = "none"; 
    document.getElementById("txtReceived").style.borderBottom = "none";
  }

  onLoadReceived(){

    this.showMyCards = false;

    document.getElementById("txtReceived").style.color = "gray"; 
    document.getElementById("txtReceived").style.borderBottom = ".2em solid gray"; 
    
    document.getElementById("txtMyCards").style.color = "lightgray";  
    document.getElementById("txtGroups").style.color = "lightgray"; 

    document.getElementById("txtMyCards").style.borderBottom = "none";
    document.getElementById("txtGroups").style.borderBottom = "none";   
  }

  loadSendPage(){
    this.navCtrl.push(SendcardPage);
  }
}
