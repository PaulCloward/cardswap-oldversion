webpackJsonp([4],{

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SendcardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_sms__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_email_composer__ = __webpack_require__(157);
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
        selector: 'page-sendcard',template:/*ion-inline-start:"C:\Users\Paul\workspace\ionic\business-card\src\pages\sendcard\sendcard.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Send Card</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n	<ion-card>\n		<ion-item>\n			<ion-label stacked>Phone Number</ion-label>\n			<ion-input [(ngModel)]="phoneNumber" type="tel"></ion-input>\n		</ion-item>\n\n		<ion-item>\n			<ion-label stacked>Message</ion-label>\n			<ion-input [(ngModel)]="textMessage" type="text"></ion-input>\n		</ion-item>\n\n		<ion-item>\n\n			<button ion-button (click)="sendEmail()">\n				Send\n			</button>\n		</ion-item>\n	</ion-card>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Paul\workspace\ionic\business-card\src\pages\sendcard\sendcard.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_sms__["a" /* SMS */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_email_composer__["a" /* EmailComposer */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
], SendcardPage);

//# sourceMappingURL=sendcard.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__buildcard_buildcard__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(34);
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
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
let LoginPage = class LoginPage {
    constructor(navCtrl, navParams, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
    }
    ionViewDidLoad() {
        console.log('ionViewDidLoad LoginPage');
    }
    verifyCredentials() {
        this.storage.get(this.username).then((data) => {
            if (data === null) {
                this.warning = "Username doesn't exist";
            }
            else {
                this.compareUsernamePassword(data.password);
            }
        });
    }
    compareUsernamePassword(password) {
        var key = {
            username: this.username
        };
        if (this.password === password) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__buildcard_buildcard__["a" /* BuildcardPage */], key);
        }
        else {
            this.warning = "Username and Password do not match";
        }
    }
    onLoadBuildCardPage() {
        /*var data = {
          name: this.fullname,
          email: this.email,
          phone: this.phone
        };
    
        this.navCtrl.push(BuildcardPage, data);*/
    }
};
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"C:\Users\Paul\workspace\ionic\business-card\src\pages\login\login.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Login Page</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="background" class="background">\n	<ion-card>\n		<ion-item>\n			<ion-label stacked>Username</ion-label>\n			<ion-input [(ngModel)]="username" type="text"></ion-input>\n		</ion-item> \n\n		<ion-item>\n			<ion-label stacked>Password</ion-label>\n			<ion-input [(ngModel)]="password" type="text"></ion-input>\n		</ion-item>\n\n		<ion-item>\n			<button ion-button (click)="verifyCredentials()">\n				Login\n			</button>\n		</ion-item>\n			{{ warning }}\n	</ion-card>\n	\n</ion-content>\n'/*ion-inline-end:"C:\Users\Paul\workspace\ionic\business-card\src\pages\login\login.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__buildcard_buildcard__ = __webpack_require__(52);
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
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
let SignupPage = class SignupPage {
    constructor(navCtrl, navParams, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
    }
    ionViewDidLoad() {
        console.log('ionViewDidLoad SignupPage');
    }
    signUp() {
        this.storage.get(this.username).then((data) => {
            if (data !== null) {
                console.log("Username already exists!");
            }
            else {
                var key = {
                    username: this.username
                };
                var value = {
                    password: this.password, name: this.name, email: this.email, phone: this.phone
                };
                this.storage.set(key.username, value);
                console.log("Submitted!");
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__buildcard_buildcard__["a" /* BuildcardPage */], key);
            }
        });
    }
    getSignUp() {
        this.storage.get(this.getusername).then((data) => {
            if (data === null) {
                this.printDetails = "Username doesn't exist!";
            }
            else {
                this.printDetails = "name: " + data.name + "<br/>password: " + data.password + "<br/>email: " + data.email + "<br/>phone: " + data.phone;
            }
        });
    }
};
SignupPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-signup',template:/*ion-inline-start:"C:\Users\Paul\workspace\ionic\business-card\src\pages\signup\signup.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Sign Up</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n	<ion-card>\n\n		<ion-label stacked>Username</ion-label>\n		<ion-input [(ngModel)]="username" type="text"></ion-input>\n\n		<ion-label stacked>Password</ion-label>\n		<ion-input [(ngModel)]="password" type="text"></ion-input>\n\n		<ion-label stacked>Name</ion-label>\n		<ion-input [(ngModel)]="name" type="text"></ion-input>\n	\n		<ion-label stacked>Email</ion-label>\n		<ion-input [(ngModel)]="email" type="text"></ion-input>\n	\n		<ion-label stacked>Phone Number</ion-label>\n		<ion-input [(ngModel)]="phone" type="tel"></ion-input>\n	\n		<ion-buttons>\n			<button ion-button (click)="signUp()">\n				Sign up\n			</button>\n		</ion-buttons>\n		<br><br>\n\n		<ion-input [(ngModel)]="getusername" type="text"></ion-input>\n		<ion-buttons>\n			<button ion-button (click)="getSignUp()">\n				Get Info From Username\n			</button>\n		</ion-buttons>\n\n		<ion-label [innerHTML]="printDetails"></ion-label>\n	</ion-card>\n	\n</ion-content>\n'/*ion-inline-end:"C:\Users\Paul\workspace\ionic\business-card\src\pages\signup\signup.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
], SignupPage);

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 113:
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
webpackEmptyAsyncContext.id = 113;

/***/ }),

/***/ 154:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/buildcard/buildcard.module": [
		272,
		3
	],
	"../pages/login/login.module": [
		273,
		2
	],
	"../pages/sendcard/sendcard.module": [
		274,
		1
	],
	"../pages/signup/signup.module": [
		275,
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
webpackAsyncContext.id = 154;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signup_signup__ = __webpack_require__(105);
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
        selector: 'page-home',template:/*ion-inline-start:"C:\Users\Paul\workspace\ionic\business-card\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Business Card App\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="background">\n  <div style="margin-top: 10%;">\n\n  <!-- <button (click)="onLoadSignUp()" ion-button full>Sign Up</button>\n  <button (click)="onLoadLogin()" ion-button full>Login</button> -->\n\n  <ion-card>\n		<ion-item>\n			<button ion-button large (click)="onLoadSignUp()">\n				Sign Up\n			</button>\n		\n			<button ion-button large (click)="onLoadLogin()">\n				Login\n			</button>\n		</ion-item>\n	</ion-card>\n</div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Paul\workspace\ionic\business-card\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(219);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export provideStorage */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_login_login__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_buildcard_buildcard__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_sendcard_sendcard__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_signup_signup__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_sms__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_email_composer__ = __webpack_require__(157);
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
            __WEBPACK_IMPORTED_MODULE_11__pages_signup_signup__["a" /* SignupPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/buildcard/buildcard.module#BuildcardPageModule', name: 'BuildcardPage', segment: 'buildcard', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/sendcard/sendcard.module#SendcardPageModule', name: 'SendcardPage', segment: 'sendcard', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_12__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["a" /* IonicStorageModule */].forRoot({
                name: '__mydb',
                driverOrder: ['indexeddb', 'sqlite', 'websql']
            })
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_buildcard_buildcard__["a" /* BuildcardPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_sendcard_sendcard__["a" /* SendcardPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_signup_signup__["a" /* SignupPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_13__ionic_native_sms__["a" /* SMS */],
            __WEBPACK_IMPORTED_MODULE_14__ionic_native_email_composer__["a" /* EmailComposer */],
            { provide: __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], useFactory: provideStorage }
        ]
    })
], AppModule);

;
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(199);
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
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BuildcardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sendcard_sendcard__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(34);
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
    constructor(navCtrl, navParams, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
    }
    ionViewDidLoad() {
        console.log('ionViewDidLoad BuildcardPage');
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
};
BuildcardPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-buildcard',template:/*ion-inline-start:"C:\Users\Paul\workspace\ionic\business-card\src\pages\buildcard\buildcard.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Build Card</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="background">\n	<ion-card>\n		<ion-item>\n			<ion-input class="component-center" type="text" name="name" value="{{name}}"></ion-input>\n		</ion-item> \n\n		<ion-item>\n			<ion-input  class="component-center" type="text" name="email" value="{{email}}"></ion-input>\n		</ion-item>\n\n		<ion-item>\n			<ion-input  class="component-center" type="text" name="phone" value="{{phone}}"></ion-input>\n		</ion-item>\n	</ion-card>\n\n	<br>\n	<ion-buttons>\n		<button class="component-center" ion-button large (click)="onLoadSendCardPage()">Send</button>\n	</ion-buttons>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Paul\workspace\ionic\business-card\src\pages\buildcard\buildcard.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
], BuildcardPage);

//# sourceMappingURL=buildcard.js.map

/***/ })

},[200]);
//# sourceMappingURL=main.js.map