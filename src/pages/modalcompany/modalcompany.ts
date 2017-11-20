import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-modalcompany',
  templateUrl: 'modalcompany.html',
})
export class ModalcompanyPage {

  name:string = "";
  title:string = "";
  company:string = "";
  @ViewChild('nam') nam: any;
  @ViewChild('titl') titl: any;
  @ViewChild('compan') compan: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private view: ViewController) {
  }

  goBackNoSave(){
	this.view.dismiss();
  }

  goBackSave(){
  	this.view.dismiss({name: this.nam.nativeElement.value,
                       title: this.titl.nativeElement.value,
                       company: this.compan.nativeElement.value});
  }

   ionViewDidLoad() {

    let employeeInfo = this.navParams.get('companyinfo');
   
    this.name = employeeInfo.name;
    this.title =  employeeInfo.title;
    this.company = employeeInfo.company;
  }

}
