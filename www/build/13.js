webpackJsonp([13],{

/***/ 777:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidemenuPageModule", function() { return SidemenuPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sidemenu__ = __webpack_require__(816);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SidemenuPageModule = /** @class */ (function () {
    function SidemenuPageModule() {
    }
    SidemenuPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__sidemenu__["a" /* SidemenuPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__sidemenu__["a" /* SidemenuPage */])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__sidemenu__["a" /* SidemenuPage */]
            ]
        })
    ], SidemenuPageModule);
    return SidemenuPageModule;
}());

//# sourceMappingURL=sidemenu.module.js.map

/***/ }),

/***/ 816:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidemenuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_global_vars_global_vars__ = __webpack_require__(93);
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
 * Generated class for the SidemenuPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var SidemenuPage = /** @class */ (function () {
    function SidemenuPage(appCtrl, navCtrl, navParams, viewCtrl, alertCtrl, globalVars) {
        this.appCtrl = appCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.alertCtrl = alertCtrl;
        this.globalVars = globalVars;
        this.pages = [];
        this.langs = this.globalVars.doTranslate(this.globalVars.getLang());
        // this.customerdat = this.globalVars.customer_details;
        this.load();
    }
    SidemenuPage.prototype.openPage = function (page) {
        this.viewCtrl.dismiss();
        if (page.component == 'HomePage') {
            this.navCtrl.setRoot('HomePage');
        }
        else if (page.component == 'LoginPage') {
            this.navCtrl.setRoot('LoginPage');
        }
        else if (page.component == 'SettingsPage') {
            this.showConfirm();
        }
        else {
            this.navCtrl.push(page.component);
        }
    };
    SidemenuPage.prototype.ionViewDidEnter = function () {
        this.globalVars.reload();
    };
    SidemenuPage.prototype.load = function () {
        this.pages = [
            { title: this.langs.home, component: 'HomePage', icon: 'assets/svg/white/home.svg' },
            { title: this.langs.profile, component: 'ProfilePage', icon: 'assets/svg/white/profile.svg' },
            { title: this.langs.contact_us, component: 'ContactPage', icon: 'assets/svg/white/contact.svg' },
            { title: this.langs.change_pin_txt, component: 'ChangePinPage', icon: 'assets/svg/white/kibubu.svg' },
            //{ title: this.langs.language, component: 'SettingsPage', icon:'assets/svg/white/language.svg' },
            { title: this.langs.language, component: 'SettingsPage', icon: 'assets/svg/white/language.svg', link: 'lang' },
            { title: this.langs.logout, component: 'LoginPage', icon: 'assets/svg/white/logout.svg' },
        ];
    };
    SidemenuPage.prototype.showConfirm = function () {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: this.langs.language,
            subTitle: this.langs.preferred_lang_txt,
            cssClass: 'popa',
            buttons: [
                {
                    text: 'ENGLISH',
                    handler: function () {
                        _this.globalVars.setLang('en');
                        _this.langs = _this.globalVars.doTranslate(_this.globalVars.getLang());
                        _this.navCtrl.push('HomePage');
                        //   this.navCtrl.push(ppage);
                        // this.load();
                    }
                },
                {
                    text: 'KISWAHILI',
                    handler: function () {
                        _this.globalVars.setLang('ki');
                        _this.langs = _this.globalVars.doTranslate(_this.globalVars.getLang());
                        _this.navCtrl.push('HomePage');
                        // this.load();
                    }
                }
            ]
        });
        confirm.present();
    };
    SidemenuPage.prototype.changelang = function (langus) {
        console.log(langus);
        if (langus == 'ki') {
            this.globalVars.setLang('ki');
            this.langs = this.globalVars.doTranslate(this.globalVars.getLang());
        }
        else if (langus == 'en') {
            this.globalVars.setLang('en');
            this.langs = this.globalVars.doTranslate(this.globalVars.getLang());
        }
    };
    SidemenuPage.prototype.goHome = function () {
        this.navCtrl.setRoot('HomePage');
    };
    SidemenuPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SidemenuPage');
    };
    SidemenuPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sidemenu',template:/*ion-inline-start:"E:\Eclectics projects\PBZ\pbz_mobile_appApril\src\pages\sidemenu\sidemenu.html"*/'<!--<ion-menu [content]="content"  >-->\n\n<ion-content class="bg">\n\n\n\n\n\n    <div class="mycont" style="width: 50%">\n        <ion-row no-border style="background:#00ADEE;height:150px">\n            <img src="assets/logo.png" style="height:80px;margin:auto;display: block;" />\n            <!--<div style="padding:5px;text-align:center;width:100%;color:#000;font-size:12px;font-family:Ubuntu">\n                {{globalVars.Username }} </div>-->\n        </ion-row>\n\n        <div style="background:#888;padding:5px;text-align:center;width:100%;color:#fff;font-size:12px;font-family:Ubuntu">\n            {{langs.other_services |uppercase }} </div>\n\n        <ion-list no-lines style="">\n\n            <ion-item transparent *ngFor="let p of pages " (click)="openPage(p) " style="margin:auto;font-family:Ubuntu;color:#FFF;font-size:12px;text-transform:uppercase;display:flex;background:rgb(0,0,0,0)">\n                <ion-avatar item-left transparent>\n                    <img style="height:24px;width:auto;margin:auto;margin-left:10px;margin-top:5px " src="{{p.icon}} " />\n                </ion-avatar>\n                {{p.title}}\n            </ion-item>\n\n\n            <!--\n            <ion-item *ngFor="let utility of pages;let i=index " (click)="openPage(utility) ">\n                <ion-avatar item-left>\n                    <ion-icon name="{{utility.icon}} " style="font-size:25px "></ion-icon>\n                </ion-avatar>\n                <div style="font-family:Ubuntu;color:#2F98FB;font-size:11px;text-transform:uppercase; "> {{utility.title}} </div>\n                <button ion-button icon-only clear item-right>\n            <ion-icon name="ios-arrow-forward " color="primary "></ion-icon>\n          </button>\n            </ion-item>-->\n        </ion-list>\n\n    </div>\n\n</ion-content>\n\n\n<!--</ion-menu>\n<ion-nav  #content ></ion-nav>-->'/*ion-inline-end:"E:\Eclectics projects\PBZ\pbz_mobile_appApril\src\pages\sidemenu\sidemenu.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__providers_global_vars_global_vars__["a" /* GlobalVarsProvider */]])
    ], SidemenuPage);
    return SidemenuPage;
}());

//# sourceMappingURL=sidemenu.js.map

/***/ })

});
//# sourceMappingURL=13.js.map