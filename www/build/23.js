webpackJsonp([23],{

/***/ 768:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(807);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */])
            ],
        })
    ], LoginPageModule);
    return LoginPageModule;
}());

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 807:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_global_vars_global_vars__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_alert_service_alert_service__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_clientdata_clientdata__ = __webpack_require__(379);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_validator_validator__ = __webpack_require__(380);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var LoginPage = /** @class */ (function () {
    function LoginPage(menuCtrl, platform, validator, storage, clientdata, navCtrl, modalCtrl, mymenu, menu, globalVars, loadingController, alertService, alertCtrl) {
        var _this = this;
        this.menuCtrl = menuCtrl;
        this.platform = platform;
        this.validator = validator;
        this.storage = storage;
        this.clientdata = clientdata;
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.mymenu = mymenu;
        this.menu = menu;
        this.globalVars = globalVars;
        this.loadingController = loadingController;
        this.alertService = alertService;
        this.alertCtrl = alertCtrl;
        this.dir = "ltr";
        this.slideIndex = 0;
        this.error = 0;
        this.objectblock = {
            username: '', device_id: '0.08', lang: '', type: ''
        };
        this.isPhoneSaved = false;
        this.relationship = "en";
        this.phoneError = false;
        this.encryptIsPresent = false;
        this.isCustomer = false;
        this.langs = {};
        this.language = 'en';
        this.light = 'light';
        this.pager = true;
        this.auto = '3000';
        this.isdisable = true;
        this.langs = this.globalVars.doTranslate(this.globalVars.getLang());
        this.language = this.globalVars.getLang();
        this.slides;
        this.quick_list;
        this.dir = platform.dir();
        this.load();
        this.storage.get('pbz').then(function (val) {
            if (val) {
                _this.globalVars.isLoggedIn = true;
                var decrypted = _this.globalVars.doAESdecrypt(val, "9393099339");
                console.log(decrypted);
                var dd = decrypted.split("|");
                _this.globalVars.Username = dd[0];
                _this.globalVars.trials = dd[1];
                _this.isCustomer = _this.globalVars.isLoggedIn;
                _this.objectblock.username = _this.globalVars.Username;
            }
            _this.objectblock.imsi = _this.globalVars.simnumber;
            _this.objectblock.lang = _this.language;
            _this.objectblock.type = "slides";
            _this.submit();
        });
    }
    LoginPage.prototype.load = function () {
        this.quick_list = [
            { name: this.langs.language, image: 'assets/svg/black/language.svg', link: 'lang' },
            { name: this.langs.forex, image: 'assets/svg/black/forex.svg', link: 'ForexPage' },
            { name: 'FAQs', image: 'assets/svg/black/faq.svg', link: 'FaqsPage' },
            { name: 'ATMs', image: 'assets/svg/black/atm.svg', link: 'AtmsPage' },
            { name: this.langs.contact_us, image: 'assets/svg/black/contact.svg', link: 'ContactPage' },
            { name: this.langs.notification, image: 'assets/svg/black/notification.svg', link: 'NotificationPage' },
            { name: this.langs.products, image: 'assets/svg/black/faq.svg', link: 'ProductsPage' },
        ];
    };
    LoginPage.prototype.showConfirm = function () {
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
                        _this.load();
                    }
                },
                {
                    text: 'KISWAHILI',
                    handler: function () {
                        _this.globalVars.setLang('ki');
                        _this.langs = _this.globalVars.doTranslate(_this.globalVars.getLang());
                        _this.load();
                    }
                }
            ]
        });
        confirm.present();
    };
    LoginPage.prototype.popmeth = function (message) {
        var _this = this;
        var template = "<div>" + message + "</div>";
        var obj = { body: "", template: template, ttype: "", completed: true, pageTo: '' };
        var myModal = this.modalCtrl.create('ConfirmModalPage', obj);
        myModal.present();
        myModal.onDidDismiss(function (data) {
            if (data) {
                _this.alertService.directExit();
            }
            else {
                // this.alertService.directExit();
            }
        });
    };
    LoginPage.prototype.ionViewDidEnter = function () {
        this.globalVars.pause();
    };
    LoginPage.prototype.submit = function () {
        var _this = this;
        console.log(this.objectblock);
        this.clientdata.faq(this.objectblock)
            .subscribe(function (data) {
            data = _this.globalVars.testdec(data);
            console.log(data);
            if (data.length != 0) {
                if (!data.error) {
                    _this.slides = data.data;
                    // this.slides.splice( 0, 1 );
                    // this.slider.initialSlide
                }
                else if (data.error) {
                    _this.alertService.mytoastdown(_this.langs.tech_error);
                }
                else {
                    _this.alertService.mytoastdown(_this.langs.tech_error);
                }
            }
            else {
                _this.alertService.mytoastdown(_this.langs.tech_error);
            }
        }, function (err) {
            _this.alertService.errorPop(_this.langs.internet);
        });
    };
    LoginPage.prototype.changelang = function (langus) {
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
    LoginPage.prototype.goRegister = function () {
        this.navCtrl.push('RegisterPage');
    };
    LoginPage.prototype.openPage = function (ppage) {
        if (ppage == 'lang') {
            this.showConfirm();
        }
        else {
            this.navCtrl.push(ppage);
        }
    };
    LoginPage.prototype.userNameChanged = function () {
        if (this.globalVars.isLoggedIn) {
            this.alertService.showPin();
        }
        else {
            this.navCtrl.push('OtpPage');
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("slider"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Slides */])
    ], LoginPage.prototype, "slider", void 0);
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"E:\Eclectics projects\PBZ\pbz_mobile_appApril\src\pages\login\login.html"*/'<ion-content *ngIf="!slides">\n    <ion-row *ngIf="!slides" no-border style="background:#00ADEE;height:25vh">\n        <img src="assets/logo.png" style="height:10vh;margin:auto;display: block;" />\n    </ion-row>\n\n    <div *ngIf="!isCustomer" style="background:#FAC201;padding:0.5vh;text-align:center;width:100%;color:#000;font-size:1.5vh;font-family:Ubuntu">\n        {{langs.get_started| uppercase}}</div>\n    <div *ngIf="isCustomer" style="background:#00ADEE;padding:0.5vh;text-align:center;width:100%;color:#fff;font-size:1.5vh;font-family:Ubuntu">\n        {{langs.easy| uppercase}}</div>\n\n    <!--<ion-row>\n        <ion-col *ngFor="let item of quick_list" col-4 (click)="openPage(item.link)">\n            <div style="text-align:center;height:80px;margin:2px;border:1px #000 solid;border-radius:8%">\n                <div style="display:flex;margin:auto;height:40px;width:40px;">\n                    <img style="height:auto;width:20px;margin:auto; " src="{{item.image}}" />\n                </div>\n                <p class="pop"> {{item.name}} </p>\n            </div>\n        </ion-col>\n    </ion-row>-->\n\n    <ion-row text-center padding>\n        <ion-col col-4 no-padding *ngFor="let item of quick_list">\n            <div class="outer">\n                <div style=" display:flex;margin:auto;height:6vh;width:6vh;" (click)="openPage(item.link)">\n                    <img src="{{item.image}}" />\n                </div>\n                <p class="para"> {{item.name}} </p>\n            </div>\n        </ion-col>\n    </ion-row>\n    <ion-select [hidden]="true" interface="popover" [selectOptions]="selectOptions" style="font-weight:bold;max-width:auto;min-width:95%;text-align:right">\n\n    </ion-select>\n\n</ion-content>\n\n<ion-content *ngIf="slides">\n\n\n    <ion-slides *ngIf="slides" pager autoplay="5000" loop="true" speed="500" style="height:25vh">\n        <ion-slide padding *ngFor="let slide of slides " [ngStyle]="{ \'background\': \'linear-gradient(65deg, rgba(31, 31, 31, 0.67)14%, rgba(31, 31, 31, .4)75%),url(\'+ slide.imageUrl + \')\', \'background-size\': \'cover\'} ">\n            <p style="padding-left:5px;color:#fff;font-size:1.8vh;width:100%;font-family:Ubuntu; ">{{slide.title | uppercase}}</p>\n            <p style="padding-left:5px;color:#fff;font-size:1.5vh;width:100%;font-family:Ubuntu; ">{{slide.description | uppercase}}</p>\n        </ion-slide>\n    </ion-slides>\n\n\n\n\n    <div *ngIf="!isCustomer" style="background:#FAC201;padding:0.5vh;text-align:center;width:100%;color:#000;font-size:1.5vh;font-family:Ubuntu">\n        {{langs.get_started| uppercase}}</div>\n    <div *ngIf="isCustomer" style="background:#00ADEE;padding:0.5vh;text-align:center;width:100%;color:#fff;font-size:1.5vh;font-family:Ubuntu">\n        {{langs.easy| uppercase}}</div>\n\n\n    <ion-row text-center padding>\n        <ion-col col-4 no-padding *ngFor="let item of quick_list">\n            <div class="outer">\n                <div style=" display:flex;margin:auto;height:6vh;width:6vh;" (click)="openPage(item.link)">\n                    <img src="{{item.image}}" />\n                </div>\n                <p class="para"> {{item.name}} </p>\n            </div>\n        </ion-col>\n    </ion-row>\n\n    <ion-select [hidden]="true" interface="popover" [selectOptions]="selectOptions" style="font-weight:bold;max-width:auto;min-width:95%;text-align:right">\n\n    </ion-select>\n\n</ion-content>\n\n<ion-toolbar transparent class="hide-on-keyboard-open footer-back" style="position:fixed;bottom:0;">\n    <ion-row>\n        <ion-col col-6>\n            <button ion-button block color="pbzyellow" (click)="goRegister()" style="font-size:2.0vh;" text-capitalize>\n							{{langs.register}}\n							</button>\n        </ion-col>\n        <ion-col col-6>\n            <button ion-button block color="primary" (click)="userNameChanged()" style="font-size:2.0vh;" text-capitalize>\n							{{langs.login}}\n							</button>\n        </ion-col>\n    </ion-row>\n</ion-toolbar>'/*ion-inline-end:"E:\Eclectics projects\PBZ\pbz_mobile_appApril\src\pages\login\login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_6__providers_validator_validator__["a" /* ValidatorProvider */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_5__providers_clientdata_clientdata__["a" /* ClientdataProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_global_vars_global_vars__["a" /* GlobalVarsProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_alert_service_alert_service__["a" /* AlertServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ })

});
//# sourceMappingURL=23.js.map