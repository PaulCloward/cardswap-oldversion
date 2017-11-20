webpackJsonp([8],{

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SendcardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_sms__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_email_composer__ = __webpack_require__(166);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};




/**
 * Generated class for the SendcardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
let SendcardPage = class SendcardPage {
    constructor(sms, emailComposer, toast, navCtrl, navParams) {
        this.sms = sms;
        this.emailComposer = emailComposer;
        this.toast = toast;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ionViewDidLoad() {
        console.log('ionViewDidLoad SendcardPage');
    }
    sendTextMessage() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(this.sms.hasPermission());
            try {
                yield this.sms.send(String(this.phoneNumber), this.textMessage);
                const toast = this.toast.create({
                    message: "Text was sent!",
                    duration: 3000
                });
                toast.present();
            }
            catch (e) {
                console.log(e);
                const toast = this.toast.create({
                    message: "Text was NOT sent!",
                    duration: 3000
                });
                toast.present();
            }
        });
    }
    sendEmail() {
        this.emailComposer.isAvailable().then((available) => {
            if (available) {
                //Now we know we can send
            }
        });
        let email = {
            to: 'paulclowardcs12@gmail.com',
            cc: 'erika@mustermann.de',
            bcc: ['john@doe.com', 'jane@doe.com'],
            attachments: [],
            subject: 'Cordova Icons',
            body: 'How are you? Nice greetings from Leipzig',
            isHtml: true
        };
        this.emailComposer.open(email);
    }
};
SendcardPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-sendcard',template:/*ion-inline-start:"C:\Users\Paul\workspace\ionic\business-card\src\pages\sendcard\sendcard.html"*/'<link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Raleway" />\n<ion-header class="background">\n\n  <ion-navbar>\n    <ion-title>Send Card</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding class="background">\n	<!-- <ion-card>\n		<ion-item>\n			<ion-label stacked>Phone Number</ion-label>\n			<ion-input [(ngModel)]="phoneNumber" type="tel"></ion-input>\n		</ion-item>\n		<ion-item>\n			<ion-label stacked>Message</ion-label>\n			<ion-input [(ngModel)]="textMessage" type="text"></ion-input>\n		</ion-item>\n		<ion-item>\n			<button ion-button (click)="sendTextMessage()">\n				Send\n			</button>\n		</ion-item>\n	</ion-card> -->\n	<ion-card>\n		<ion-item>\n			<ion-label stacked>Email</ion-label>\n			<ion-input [(ngModel)]="phoneNumber" type="tel"></ion-input>\n		</ion-item>\n		<ion-item>\n			<button ion-button (click)="sendEmail()">\n				Send\n			</button>\n		</ion-item>\n	</ion-card>\n	<!-- <ion-card>\n		<ion-item>\n			<ion-label stacked>BlueTooth</ion-label>\n			<ion-input [(ngModel)]="phoneNumber" type="tel"></ion-input>\n		</ion-item>\n		<ion-item>\n			<ion-label stacked>Message</ion-label>\n			<ion-input [(ngModel)]="textMessage" type="text"></ion-input>\n		</ion-item>\n		<ion-item>\n			<button ion-button (click)="sendEmail()">\n				Send\n			</button>\n		</ion-item>\n	</ion-card> -->\n</ion-content>\n'/*ion-inline-end:"C:\Users\Paul\workspace\ionic\business-card\src\pages\sendcard\sendcard.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_sms__["a" /* SMS */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_email_composer__["a" /* EmailComposer */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], SendcardPage);

//# sourceMappingURL=sendcard.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewcardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modal_modal__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modalphone_modalphone__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modalcompany_modalcompany__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__buildcard_buildcard__ = __webpack_require__(42);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the NewcardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
let NewcardPage = class NewcardPage {
    constructor(navCtrl, navParams, camera, modal) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.camera = camera;
        this.modal = modal;
        this.phone = '1111-111-1111';
        this.title = 'Title';
        this.company = 'Company';
        this.email = 'Email';
        this.firstname = 'First';
        this.lastname = 'Last';
    }
    accessGallery() {
        this.camera.getPicture({
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            destinationType: this.camera.DestinationType.DATA_URL
        }).then((imageData) => {
            this.base64Image = 'data:image/jpeg;base64,' + imageData;
        }, (err) => {
            console.log(err);
        });
    }
    ionViewDidLoad() {
        console.log('ionViewDidLoad NewcardPage');
        console.log(this.navParams.get("email"));
    }
    openModal() {
        let myModal = this.modal.create(__WEBPACK_IMPORTED_MODULE_3__modal_modal__["a" /* ModalPage */], { email: this.email });
        myModal.onDidDismiss(email => {
            if (email != null) {
                this.email = email.email;
            }
        });
        myModal.present();
    }
    openModalPhone() {
        let myModal = this.modal.create(__WEBPACK_IMPORTED_MODULE_4__modalphone_modalphone__["a" /* ModalphonePage */], { phone: this.phone });
        myModal.onDidDismiss(phone => {
            if (phone != null) {
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
        };
        let myModal = this.modal.create(__WEBPACK_IMPORTED_MODULE_5__modalcompany_modalcompany__["a" /* ModalcompanyPage */], { companyinfo: companyinfo });
        myModal.onDidDismiss(companyinfo => {
            if (companyinfo != null) {
                this.firstname = companyinfo.name;
                this.title = companyinfo.title;
                this.company = companyinfo.company;
            }
        });
        myModal.present();
    }
    goBackSave() {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__buildcard_buildcard__["a" /* BuildcardPage */], { phone: this.phone,
            email: this.email,
            company: this.company,
            title: this.title,
            firstname: this.firstname,
            lastname: this.lastname });
    }
    goBackNoSave() {
        this.navCtrl.pop();
    }
};
NewcardPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-newcard',template:/*ion-inline-start:"C:\Users\Paul\workspace\ionic\business-card\src\pages\newcard\newcard.html"*/'<link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Raleway" />\n<!-- <ion-header class="background">\n -->\n  \n<!-- </ion-header >-->\n\n\n<ion-content padding class="background">\n	<ion-grid style="background-color: #f6f6f6">\n    	<ion-row>\n    		<ion-col style="font-size: 2.3em; vertical-align: middle; margin-left: .3em">\n    			 <ion-icon name="close" (click)="goBackNoSave()"></ion-icon>\n			</ion-col>\n			<ion-col style="text-align: center; font-size: 1.2em; line-height: 2em">\n				New Card\n			</ion-col>\n			<ion-col>\n				<ion-icon name="checkmark" style="float: right; margin-right: .3em; font-size: 2.3em; vertical-align: middle" (click)="goBackSave()"></ion-icon>\n			</ion-col>\n  		</ion-row>\n  	</ion-grid>\n	<ion-card style="background-color: #f6f6f6;">\n		<ion-grid style="padding: 0px">\n			<ion-row style="height: 8em; border-bottom: 1px solid white">\n			    <ion-col style="text-align: end; color: #fff; border-right: 1px solid #fff">\n			     	<ion-icon name="create"></ion-icon>\n			    </ion-col>\n			    <ion-col offset-3>\n			    	<ion-row>\n			    		<ion-col style="text-align: end; color: #fff;">\n			    			<ion-icon name="create"></ion-icon>\n			    		</ion-col>\n			    	</ion-row>\n			    	<ion-row>\n			    		<ion-col style="text-align: center; color: #fff; line-height: 1.5em; font-size: 2em">\n			    		LOGO\n			    		</ion-col>\n			    	</ion-row>\n			    </ion-col>\n			  </ion-row>\n			  <ion-row style="background-color: #add8e6" (click)="openModalCompany()">\n			    <ion-col col-md-3>\n			     	<ion-row style="font-size: 2em">\n			     		{{ firstname }} {{ lastname }}\n			     	</ion-row>\n			     	<ion-row>\n			     		<strong>{{ title }}</strong>\n			     	</ion-row>\n			     	<ion-row>\n			     		{{ company }}\n			     	</ion-row>\n			    </ion-col>\n			    <ion-col col-md-3>\n			    	\n			    </ion-col>\n			    <ion-col col-md-1 style="font-size: 2em; text-align: center; line-height: 2.5em">\n			    	<ion-row>\n			    		<ion-col>\n			    			<ion-icon name="share"></ion-icon>\n			    		</ion-col>\n			    		<ion-col>\n			    			<ion-icon name="more"></ion-icon>\n			    		</ion-col>\n			    	</ion-row>\n			    </ion-col>\n			  </ion-row>\n		</ion-grid>\n	</ion-card>\n	<ion-card style="padding: .2em">\n		<ion-grid (click)="openModalPhone()">\n			  <ion-row>\n			    <ion-col col-md-3>\n			     <ion-icon name="call"></ion-icon>\n			    </ion-col>\n			    <ion-col col-md-3>\n			    	<span>{{ phone }}</span>\n			    </ion-col>\n			    <ion-col col-md-3 style="text-align: center">\n			    	  <ion-icon name="chatboxes"></ion-icon>\n			    </ion-col>\n			  </ion-row>\n			</ion-grid>\n	</ion-card>\n	<ion-card style="padding: .2em">\n		<ion-grid (click)="openModal()">\n			<ion-row>\n			    <ion-col col-md-3>\n			    	 <ion-icon name="mail"></ion-icon>\n			    </ion-col>\n			    <ion-col col-md-3>\n			     	<span>{{ email }}</span>\n			    </ion-col>\n			    <ion-col col-md-3>\n			    </ion-col>\n			</ion-row>\n		</ion-grid>\n	</ion-card>\n	<div style="border-style: dashed; padding: .2em; border-color: lightgray; border-radius: 5%; width: 95%; margin: 0 auto">\n		<ion-grid>\n			<ion-row>\n				<ion-col style="text-align: center; color: lightgray; font-size: 2em">	\n					<ion-icon name="add-circle"></ion-icon>\n				</ion-col>\n			</ion-row>\n		</ion-grid>\n	</div>\n	\n	<!-- <ion-content padding>\n	 <button ion-button color="secondary" (click)="accessGallery()">Open Gallery</button>\n	 <img [src]="base64Image" *ngIf="base64Image" />\n	</ion-content> -->\n</ion-content>\n'/*ion-inline-end:"C:\Users\Paul\workspace\ionic\business-card\src\pages\newcard\newcard.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */]])
], NewcardPage);

//# sourceMappingURL=newcard.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
let ModalPage = class ModalPage {
    //test:string = this.name.nativeElement.value;
    constructor(navCtrl, navParams, view) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.view = view;
        this.email = "";
    }
    goBackNoSave() {
        this.view.dismiss();
    }
    goBackSave() {
        this.view.dismiss({ email: this.emai.nativeElement.value });
    }
    ionViewDidLoad() {
        this.email = this.navParams.get('email');
    }
};
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('emai'),
    __metadata("design:type", Object)
], ModalPage.prototype, "emai", void 0);
ModalPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-modal',template:/*ion-inline-start:"C:\Users\Paul\workspace\ionic\business-card\src\pages\modal\modal.html"*/'<ion-content padding>\n	<ion-grid style="background-color: #fff">\n    	<ion-row>\n    		<ion-col>\n    			 <ion-icon name="checkmark" style="float: left; margin-left: .3em; font-size: 2.3em; vertical-align: middle" (click)="goBackSave()"></ion-icon>\n			</ion-col>\n			<ion-col>\n\n			</ion-col>\n			<ion-col>\n				<ion-icon name="close" (click)="goBackNoSave()" style="font-size: 2.3em; vertical-align: middle; float: right"></ion-icon>\n			</ion-col>\n  		</ion-row>\n  		<ion-row>\n			<ion-col></ion-col>\n			<ion-col> <ion-icon style="display: block; margin: 0 auto; font-size: 3em; text-align: center" name="mail"></ion-icon></ion-col>\n			<ion-col></ion-col>\n		</ion-row>\n	</ion-grid>\n\n	<input type="Text" id="emailInput" style="text-align: center; border: none; border-bottom: 1px solid lightgray; margin-top:  .5em; font-size: 1.5em; width: 100%" #emai value="{{email}}" />\n</ion-content>\n'/*ion-inline-end:"C:\Users\Paul\workspace\ionic\business-card\src\pages\modal\modal.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */]])
], ModalPage);

//# sourceMappingURL=modal.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalphonePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ModalphonePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
let ModalphonePage = class ModalphonePage {
    constructor(navCtrl, navParams, view) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.view = view;
        this.phone = "";
    }
    goBackNoSave() {
        this.view.dismiss();
    }
    goBackSave() {
        this.view.dismiss({ phone: this.phon.nativeElement.value });
    }
    ionViewDidLoad() {
        this.phone = this.navParams.get('phone');
    }
};
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('phon'),
    __metadata("design:type", Object)
], ModalphonePage.prototype, "phon", void 0);
ModalphonePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-modalphone',template:/*ion-inline-start:"C:\Users\Paul\workspace\ionic\business-card\src\pages\modalphone\modalphone.html"*/'<ion-content padding>\n	<ion-grid style="background-color: #fff">\n\n    	<ion-row>\n    		<ion-col>\n    			 <ion-icon name="checkmark" style="float: left; margin-left: .3em; font-size: 2.3em; vertical-align: middle" (click)="goBackSave()"></ion-icon>\n			</ion-col>\n			<ion-col>\n\n			</ion-col>\n			<ion-col>\n				<ion-icon name="close" (click)="goBackNoSave()" style="font-size: 2.3em; vertical-align: middle; float: right"></ion-icon>\n			</ion-col>\n  		</ion-row>\n\n  		<ion-row>\n			<ion-col></ion-col>\n			<ion-col> <ion-icon style="display: block; margin: 0 auto; font-size: 3em; text-align: center" name="mail"></ion-icon></ion-col>\n			<ion-col></ion-col>\n		</ion-row>\n	</ion-grid>\n\n	<input type="Text" style="text-align: center; border: none; border-bottom: 1px solid lightgray; margin-top:  .5em; font-size: 1.5em; width: 100%" #phon value="{{phone}}" />\n</ion-content>\n'/*ion-inline-end:"C:\Users\Paul\workspace\ionic\business-card\src\pages\modalphone\modalphone.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */]])
], ModalphonePage);

//# sourceMappingURL=modalphone.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalcompanyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let ModalcompanyPage = class ModalcompanyPage {
    constructor(navCtrl, navParams, view) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.view = view;
        this.name = "";
        this.title = "";
        this.company = "";
    }
    goBackNoSave() {
        this.view.dismiss();
    }
    goBackSave() {
        this.view.dismiss({ name: this.nam.nativeElement.value,
            title: this.titl.nativeElement.value,
            company: this.compan.nativeElement.value });
    }
    ionViewDidLoad() {
        let employeeInfo = this.navParams.get('companyinfo');
        this.name = employeeInfo.name;
        this.title = employeeInfo.title;
        this.company = employeeInfo.company;
    }
};
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('nam'),
    __metadata("design:type", Object)
], ModalcompanyPage.prototype, "nam", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('titl'),
    __metadata("design:type", Object)
], ModalcompanyPage.prototype, "titl", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('compan'),
    __metadata("design:type", Object)
], ModalcompanyPage.prototype, "compan", void 0);
ModalcompanyPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-modalcompany',template:/*ion-inline-start:"C:\Users\Paul\workspace\ionic\business-card\src\pages\modalcompany\modalcompany.html"*/'<ion-content padding>\n<ion-grid style="background-color: #fff">\n    	<ion-row>\n    		<ion-col>\n    			 <ion-icon name="checkmark" style="float: left; margin-left: .3em; font-size: 2.3em; vertical-align: middle" (click)="goBackSave()"></ion-icon>\n			</ion-col>\n			<ion-col>\n\n			</ion-col>\n			<ion-col>\n				<ion-icon name="close" (click)="goBackNoSave()" style="font-size: 2.3em; vertical-align: middle; float: right"></ion-icon>\n			</ion-col>\n  		</ion-row>\n	</ion-grid>\n\n	<input type="Text" style="text-align: center; border: none; border-bottom: 1px solid lightgray; margin-top:  2em; font-size: 1.5em; width: 100%" #nam value="{{name}}" />\n	<input type="Text" style="text-align: center; border: none; border-bottom: 1px solid lightgray; margin-top:  2em; font-size: 1.5em; width: 100%" #titl value="{{title}}" />\n	<input type="Text" style="text-align: center; border: none; border-bottom: 1px solid lightgray; margin-top:  2em; font-size: 1.5em; width: 100%" #compan value="{{company}}" />\n</ion-content>\n'/*ion-inline-end:"C:\Users\Paul\workspace\ionic\business-card\src\pages\modalcompany\modalcompany.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */]])
], ModalcompanyPage);

//# sourceMappingURL=modalcompany.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__buildcard_buildcard__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__ = __webpack_require__(82);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};





/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
let LoginPage = class LoginPage {
    constructor(afAuth, navCtrl, navParams, storage) {
        this.afAuth = afAuth;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.user = {};
    }
    ionViewDidLoad() {
        console.log('ionViewDidLoad LoginPage');
    }
    login(user) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password);
                if (result) {
                    this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__buildcard_buildcard__["a" /* BuildcardPage */]);
                }
            }
            catch (e) {
                console.error(e);
            }
        });
    }
};
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"C:\Users\Paul\workspace\ionic\business-card\src\pages\login\login.html"*/'<link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Raleway" />\n<ion-header class="background">\n  <ion-navbar>\n    <span style="font-size: 1em; color: gray;margin-left: 31%">SIGN IN</span>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="background">\n		\n		<!-- <ion-label stacked>Username</ion-label> -->\n		<!-- <ion-input [(ngModel)]="email" class="input-label" placeholder="Email" type="text"></ion-input> \n\n		<ion-input [(ngModel)]="password" class="input-label" placeholder="Password" type="text"></ion-input>\n		<br><br><br><br>\n		<button class="sign-in-button" (click)="verifyCredentials()">\n			Sign In\n		</button>\n		{{ warning }} -->\n	\n	<ion-item>\n		<ion-label floating>Email</ion-label>\n		<ion-input type="text" [(ngModel)]="user.email"></ion-input>\n	</ion-item>\n\n	<ion-item>\n		<ion-label floating>Password</ion-label>\n		<ion-input type="text" [(ngModel)]="user.password"></ion-input>\n	</ion-item>\n\n	<br><br><br><br>\n\n	<button ion-button class="sign-in-button" (click)="login(user)">Sign In</button>\n	\n</ion-content>\n'/*ion-inline-end:"C:\Users\Paul\workspace\ionic\business-card\src\pages\login\login.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__buildcard_buildcard__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(82);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};




/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
let SignupPage = class SignupPage {
    constructor(afAuth, navCtrl, navParams) {
        this.afAuth = afAuth;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.user = {};
    }
    ionViewDidLoad() {
        console.log('ionViewDidLoad SignupPage');
    }
    register(user) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
                console.log(result);
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__buildcard_buildcard__["a" /* BuildcardPage */]);
            }
            catch (e) {
                console.error(e);
            }
        });
    }
};
SignupPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-signup',template:/*ion-inline-start:"C:\Users\Paul\workspace\ionic\business-card\src\pages\signup\signup.html"*/'<link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Raleway" />\n<ion-header class="background">\n  <ion-navbar>\n    <span style="font-size: 1em; color: gray;margin-left: 15%">CREATE YOUR ACCOUNT</span>\n  </ion-navbar>\n</ion-header>\n<ion-content padding class="background">\n		\n		<!-- <ion-input [(ngModel)]="firstname" class="input-label" type="text" placeholder="First Name"></ion-input>\n\n		<ion-input [(ngModel)]="lastname" class="input-label" type="text" placeholder="Last Name"></ion-input>\n\n		\n		<ion-input [(ngModel)]="email"  class="input-label" type="text" placeholder="Email"></ion-input>\n\n		\n		<ion-input [(ngModel)]="password" class="input-label" type="text" placeholder="Password"></ion-input>\n	\n		\n		<br>\n		<p style="font-size: .7em; color:gray; text-align: center;">By continuing, I agree to CardSwap\'s <strong>Terms</strong> and <strong>Privacy Policy</strong></p>\n		<br>\n		<button class="create-account-button" (click)="signUp()">\n			Create Account\n		</button>\n		<br><br> -->\n		<ion-item>\n			<ion-label floating>Email Address</ion-label>\n			<ion-input type="text" [(ngModel)]="user.email"></ion-input>\n		</ion-item>\n\n		<ion-item>\n			<ion-label floating>Password</ion-label>\n			<ion-input type="text" [(ngModel)]="user.password"></ion-input>\n		</ion-item>\n		<br>\n		<p style="font-size: .7em; color:gray; text-align: center;">By continuing, I agree to CardSwap\'s <strong>Terms</strong> and <strong>Privacy Policy</strong></p>\n\n	<button ion-button class="create-account-button" (click)="register(user)">CREATE ACCOUNT</button>\n	\n</ion-content>\n'/*ion-inline-end:"C:\Users\Paul\workspace\ionic\business-card\src\pages\signup\signup.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], SignupPage);

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 121:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 121;

/***/ }),

/***/ 163:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/buildcard/buildcard.module": [
		331,
		7
	],
	"../pages/login/login.module": [
		332,
		6
	],
	"../pages/modal/modal.module": [
		333,
		5
	],
	"../pages/modalcompany/modalcompany.module": [
		334,
		4
	],
	"../pages/modalphone/modalphone.module": [
		335,
		3
	],
	"../pages/newcard/newcard.module": [
		336,
		2
	],
	"../pages/sendcard/sendcard.module": [
		337,
		1
	],
	"../pages/signup/signup.module": [
		338,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 163;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signup_signup__ = __webpack_require__(112);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




let HomePage = class HomePage {
    constructor(navCtrl) {
        this.navCtrl = navCtrl;
    }
    onLoadLogin() {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    }
    onLoadSignUp() {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__signup_signup__["a" /* SignupPage */]);
    }
};
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"C:\Users\Paul\workspace\ionic\business-card\src\pages\home\home.html"*/'<link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Raleway" />\n<ion-content class="background">\n  <div style="margin-top: 25%;">\n  		<p style="text-align: center; font-size: 2.5em; margin:0; color: gray;">CARD<strong style="color: black">SWAP</strong></p>\n  		<p style="text-align: center; font-size: 1.2em; margin-top: .5em">Digital Business Cards</p>\n 		<br><br><br><br>\n		<button ion-button class="home-button" style="background-color: #5c5c5c" (click)="onLoadSignUp()">\n			Create Account\n		</button>\n		<br>\n		<button ion-button class="home-button" style="background-color: #3b5998">\n			Login with Facebook\n		</button>\n		<br>\n		<button ion-button class="home-button" style="background-color: #cc0000">\n			Sign in with Google+\n		</button>\n		<ion-label style="text-align: center; font-size: 1.2em" (click)="onLoadLogin()">\n			Sign In\n		</ion-label>\n</div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Paul\workspace\ionic\business-card\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(238);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 238:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export provideStorage */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_login_login__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_buildcard_buildcard__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_sendcard_sendcard__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_signup_signup__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_newcard_newcard__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_forms__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_sms__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_email_composer__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_camera__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_modal_modal__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_modalphone_modalphone__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_modalcompany_modalcompany__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_angularfire2__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__app_firebase_config__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_angularfire2_auth__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_crop__ = __webpack_require__(168);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















//import { SQLite, SQLiteObject } from '@ionic-native/sqlite';








//export function provideStorage() { return new Storage(); }
function provideStorage() {
    return new __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */](['sqlite']);
    // return new Storage(['sqlite', 'websql', 'indexeddb'], { name: '__mydb' });
}
let AppModule = class AppModule {
};
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_buildcard_buildcard__["a" /* BuildcardPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_sendcard_sendcard__["a" /* SendcardPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_signup_signup__["a" /* SignupPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_newcard_newcard__["a" /* NewcardPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_modal_modal__["a" /* ModalPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_modalphone_modalphone__["a" /* ModalphonePage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_modalcompany_modalcompany__["a" /* ModalcompanyPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/buildcard/buildcard.module#BuildcardPageModule', name: 'BuildcardPage', segment: 'buildcard', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/modal/modal.module#ModalPageModule', name: 'ModalPage', segment: 'modal', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/modalcompany/modalcompany.module#ModalcompanyPageModule', name: 'ModalcompanyPage', segment: 'modalcompany', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/modalphone/modalphone.module#ModalphonePageModule', name: 'ModalphonePage', segment: 'modalphone', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/newcard/newcard.module#NewcardPageModule', name: 'NewcardPage', segment: 'newcard', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/sendcard/sendcard.module#SendcardPageModule', name: 'SendcardPage', segment: 'sendcard', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_13__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["a" /* IonicStorageModule */].forRoot({
                name: '__mydb',
                driverOrder: ['indexeddb', 'sqlite', 'websql'],
            }),
            __WEBPACK_IMPORTED_MODULE_20_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_21__app_firebase_config__["a" /* FIREBASE_CONFIG */]),
            __WEBPACK_IMPORTED_MODULE_22_angularfire2_auth__["b" /* AngularFireAuthModule */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_buildcard_buildcard__["a" /* BuildcardPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_sendcard_sendcard__["a" /* SendcardPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_signup_signup__["a" /* SignupPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_newcard_newcard__["a" /* NewcardPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_modal_modal__["a" /* ModalPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_modalphone_modalphone__["a" /* ModalphonePage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_modalcompany_modalcompany__["a" /* ModalcompanyPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_14__ionic_native_sms__["a" /* SMS */],
            __WEBPACK_IMPORTED_MODULE_15__ionic_native_email_composer__["a" /* EmailComposer */],
            { provide: __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], useFactory: provideStorage },
            __WEBPACK_IMPORTED_MODULE_16__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_23__ionic_native_crop__["a" /* Crop */]
        ]
    })
], AppModule);

;
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 329:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(219);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





let MyApp = class MyApp {
    constructor(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
};
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\Paul\workspace\ionic\business-card\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\Paul\workspace\ionic\business-card\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 330:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const FIREBASE_CONFIG = {
    apiKey: "AIzaSyAHNfhFR94UxbPiY0bGESO4-3ZSbOD5lQA",
    authDomain: "login-7589b.firebaseapp.com",
    databaseURL: "https://login-7589b.firebaseio.com",
    projectId: "login-7589b",
    storageBucket: "login-7589b.appspot.com",
    messagingSenderId: "531589948952"
};
/* harmony export (immutable) */ __webpack_exports__["a"] = FIREBASE_CONFIG;

//# sourceMappingURL=app.firebase.config.js.map

/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BuildcardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sendcard_sendcard__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__newcard_newcard__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_crop__ = __webpack_require__(168);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the BuildcardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
let BuildcardPage = class BuildcardPage {
    constructor(crop, navCtrl, navParams, storage) {
        this.crop = crop;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.showMyCards = true;
        this.cards = [{ firstname: 'Paul', lastname: 'Cloward',
                phone: '8017338989', email: 'paul@aol.com', title: 'Software Dev', company: 'Monovo' },
            { firstname: 'Ali', lastname: 'Cloward',
                phone: '8017338989', email: 'paul@aol.com', title: 'Software Dev', company: 'Monovo' },
            { firstname: 'TJ', lastname: 'Cloward',
                phone: '8017338989', email: 'paul@aol.com', title: 'Software Dev', company: 'Monovo' },
            { firstname: 'Kevin', lastname: 'Cloward',
                phone: '8017338989', email: 'paul@aol.com', title: 'Software Dev', company: 'Monovo' }];
        console.log(navParams.get('email'));
    }
    ionViewDidLoad() {
        this.showMyCards = true;
        this.crop.crop('../../assets/img/portfolio.jpg', { quality: 75 })
            .then(newImage => console.log('new image path is: ' + newImage), error => console.error('Error cropping image', error));
        if (this.navParams.get("firstname") != null && this.navParams.get("lastname")) {
            this.cards.push({ firstname: this.navParams.get("firstname"),
                lastname: this.navParams.get("lastname"),
                phone: this.navParams.get("phone"),
                email: this.navParams.get("email"),
                title: this.navParams.get("title"),
                company: this.navParams.get("company") });
        }
        if (!this.navParams.get("username")) {
            console.log("Build card username is null");
            this.name = "Enter Name Here";
            this.email = "Enter Email Here";
            this.phone = "Enter Phone Here";
        }
        else {
            this.storage.get(this.navParams.get("username")).then((data) => {
                if (data === null) {
                    console.log("Build card data is null");
                    this.name = "Enter Name Here";
                    this.email = "Enter Email Here";
                    this.phone = "Enter Phone Here";
                }
                else {
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
    onLoadSendCardPage() {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__sendcard_sendcard__["a" /* SendcardPage */]);
    }
    onLoadNewCardPage() {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__newcard_newcard__["a" /* NewcardPage */]);
    }
    onLoadMyCards() {
        this.showMyCards = true;
        document.getElementById("txtMyCards").style.color = "gray";
        document.getElementById("txtMyCards").style.borderBottom = ".2em solid gray";
        document.getElementById("txtGroups").style.color = "lightgray";
        document.getElementById("txtReceived").style.color = "lightgray";
        document.getElementById("txtGroups").style.borderBottom = "none";
        document.getElementById("txtReceived").style.borderBottom = "none";
    }
    onLoadGroups() {
        this.showMyCards = false;
        document.getElementById("txtGroups").style.color = "gray";
        document.getElementById("txtGroups").style.borderBottom = ".2em solid gray";
        document.getElementById("txtMyCards").style.color = "lightgray";
        document.getElementById("txtReceived").style.color = "lightgray";
        document.getElementById("txtMyCards").style.borderBottom = "none";
        document.getElementById("txtReceived").style.borderBottom = "none";
    }
    onLoadReceived() {
        this.showMyCards = false;
        document.getElementById("txtReceived").style.color = "gray";
        document.getElementById("txtReceived").style.borderBottom = ".2em solid gray";
        document.getElementById("txtMyCards").style.color = "lightgray";
        document.getElementById("txtGroups").style.color = "lightgray";
        document.getElementById("txtMyCards").style.borderBottom = "none";
        document.getElementById("txtGroups").style.borderBottom = "none";
    }
    loadSendPage() {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__sendcard_sendcard__["a" /* SendcardPage */]);
    }
};
BuildcardPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-buildcard',template:/*ion-inline-start:"C:\Users\Paul\workspace\ionic\business-card\src\pages\buildcard\buildcard.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Build Card</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Raleway" />\n<ion-content padding class="background">\n	<div class="header">\n		CARD SWAP\n		<ion-icon style="float: right; font-size: 2em" name="menu"></ion-icon>\n	</div>\n	<ion-grid style="margin-top: 2.5em">\n		<ion-row>\n			<ion-col style="text-align: center">\n				<span id="txtMyCards" class="subheader" (click)="onLoadMyCards()" style="color: gray; border-bottom: .2em solid gray">My Cards</span>\n			</ion-col>\n			<ion-col style="text-align: center">\n				<span id="txtGroups" class="subheader" (click)="onLoadGroups()">Groups</span>\n			</ion-col>\n			<ion-col style="text-align: center">\n				<span id="txtReceived" class="subheader" (click)="onLoadReceived()">Received</span>\n			</ion-col>\n		</ion-row>\n	</ion-grid>\n\n	<div style="border: 1px solid gray; border-style: dashed; height: 12em; width: 100%; margin-top: 3em; text-align: center; border-radius: 5%">\n 		<div style="line-height: 4.3em; font-size: 3em; color: lightgray" (click)="onLoadNewCardPage()">\n 			<ion-icon name="add-circle"></ion-icon>\n 		</div>\n	</div>\n\n	<br><br><br><br>\n	\n	<div *ngFor="let card of cards">\n	<ion-card style="background-color: #f6f6f6;" *ngIf="showMyCards">\n		<ion-grid style="padding: 0px">\n			<ion-row style="border-bottom: 1px solid white">\n			    <ion-col style="border-right: 1px solid #fff; padding: 0em">\n			     	<img style="width: 100%" src="assets/img/portfolio.jpg" />\n			    </ion-col>\n			    <ion-col col-8>\n			    		<img style="width: 50%" src="assets/img/logo.jpg" />\n			    </ion-col>\n			  </ion-row>\n			  <ion-row style="background-color: #add8e6">\n			    <ion-col col-md-3>\n			     	<ion-row style="font-size: 2em">\n			     		{{ card.firstname }} {{ card.lastname }}\n			     	</ion-row>\n			     	<ion-row>\n			     		<strong>{{ card.title }}</strong>\n			     	</ion-row>\n			     	<ion-row>\n			     		{{ card.company }}\n			     	</ion-row>\n			    </ion-col>\n			    <ion-col col-md-3>\n			    	\n			    </ion-col>\n			    <ion-col col-md-1 style="font-size: 2em; text-align: center; line-height: 2.5em">\n			    	<ion-row>\n			    		<ion-col>\n			    			<ion-icon name="share" (click)="loadSendPage()"></ion-icon>\n			    		</ion-col>\n			    		<ion-col>\n			    			<ion-icon name="more"></ion-icon>\n			    		</ion-col>\n			    	</ion-row>\n			    </ion-col>\n			  </ion-row>\n		</ion-grid>\n	</ion-card>\n	<br><br><br>\n	</div>\n\n	<!-- <ion-card>\n		<ion-item>\n			<ion-input class="component-center" type="text" name="name" value="{{name}}"></ion-input>\n		</ion-item> \n\n		<ion-item>\n			<ion-input  class="component-center" type="text" name="email" value="{{email}}"></ion-input>\n		</ion-item>\n\n		<ion-item>\n			<ion-input  class="component-center" type="text" name="phone" value="{{phone}}"></ion-input>\n		</ion-item>\n	</ion-card> -->\n\n	<!-- <ion-buttons>\n		<button class="component-center" ion-button large (click)="onLoadSendCardPage()">Send</button>\n	</ion-buttons> -->\n</ion-content>\n'/*ion-inline-end:"C:\Users\Paul\workspace\ionic\business-card\src\pages\buildcard\buildcard.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__ionic_native_crop__["a" /* Crop */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
], BuildcardPage);

//# sourceMappingURL=buildcard.js.map

/***/ })

},[220]);
//# sourceMappingURL=main.js.map