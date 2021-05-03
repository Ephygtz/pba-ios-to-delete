webpackJsonp([14],{

/***/ 776:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPageModule", function() { return SettingsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings__ = __webpack_require__(815);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SettingsPageModule = /** @class */ (function () {
    function SettingsPageModule() {
    }
    SettingsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__settings__["a" /* SettingsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__settings__["a" /* SettingsPage */])
            ],
        })
    ], SettingsPageModule);
    return SettingsPageModule;
}());

//# sourceMappingURL=settings.module.js.map

/***/ }),

/***/ 815:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_alert_service_alert_service__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_global_vars_global_vars__ = __webpack_require__(93);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SettingsPage = /** @class */ (function () {
    function SettingsPage(navCtrl, alertService, alertCtrl, modalCtrl, globalVars, navParams) {
        this.navCtrl = navCtrl;
        this.alertService = alertService;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.globalVars = globalVars;
        this.navParams = navParams;
        this.langus = "en";
        this.langs = {};
        this.isChange = true;
        this.langs = this.globalVars.doTranslate(this.globalVars.getLang());
        this.quick_list = [
            { name: this.langs.cheque, image: 'assets/svg/card.svg', link: 'ChequesPage' },
            { name: this.langs.change_pin_txt, image: 'assets/svg/secure.svg', link: 'ChangePinPage' },
            { name: this.langs.enquiries, image: 'assets/svg/enquire.svg', link: 'EnquiriesPage' },
            { name: this.langs.language, image: 'assets/svg/language.svg', link: 'lang' },
        ];
    }
    SettingsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SettingsPage');
    };
    SettingsPage.prototype.goHome = function () {
        this.navCtrl.setRoot('HomePage');
    };
    SettingsPage.prototype.openPage = function (ppage) {
        if (ppage == 'lang') {
            this.showConfirm();
        }
        else {
            this.navCtrl.push(ppage);
        }
    };
    SettingsPage.prototype.showConfirm = function () {
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
    SettingsPage.prototype.load = function () {
        this.quick_list = [
            { name: this.langs.cheque, image: 'assets/svg/card.svg', link: 'ChequesPage' },
            { name: this.langs.change_pin_txt, image: 'assets/svg/secure.svg', link: 'ChangePinPage' },
            { name: this.langs.enquiries, image: 'assets/svg/enquire.svg', link: 'EnquiriesPage' },
            { name: this.langs.language, image: 'assets/svg/language.svg', link: 'lang' },
            { name: this.langs.forex, image: 'assets/svg/black/forex.svg', link: 'ForexPage' }
        ];
    };
    SettingsPage.prototype.switch = function () {
        this.isChange = true;
    };
    SettingsPage.prototype.ionViewDidEnter = function () {
        this.globalVars.reload();
    };
    SettingsPage.prototype.changelang = function () {
        if (this.langus == 'ki') {
            this.globalVars.setLang('ki');
            this.navCtrl.setRoot('HomePage');
        }
        else if (this.langus == 'en') {
            this.globalVars.setLang('en');
            this.navCtrl.setRoot('HomePage');
        }
    };
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-settings',template:/*ion-inline-start:"E:\Eclectics projects\PBZ\pbz_mobile_appApril\src\pages\settings\settings.html"*/'<!-- <ion-header>\n    <ion-navbar color="primary">\n        <ion-title> </ion-title>\n        <ion-buttons end (click)="goHome()">\n            <button ion-button icon-only color="white">\n            <ion-icon name="home"></ion-icon>\n        </button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header> -->\n<ion-content class="back-view">\n\n        <ion-navbar color="primary">\n                <ion-title> </ion-title>\n                <ion-buttons end (click)="goHome()">\n                    <button ion-button icon-only color="white">\n                    <ion-icon name="home"></ion-icon>\n                </button>\n                </ion-buttons>\n            </ion-navbar>\n    <div style="height:60vh;">\n        <div style="background:#888;padding:5px;text-align:center;width:100%;color:#fff;font-size:12px;font-family:Ubuntu">\n            {{langs.other_services |uppercase }} </div>\n\n        <ion-row>\n            <ion-col col-6 *ngFor=" let item of quick_list ">\n                <div class="outside " (click)="openPage(item.link) ">\n                    <div style="display:flex;margin:auto;height:13vh;width:100%;background:#fff ">\n                        <img style="height:auto;width:25px;margin:auto; " src="{{item.image}} " />\n                    </div>\n                    <p class="mypop "> {{item.name}} </p>\n                </div>\n            </ion-col>\n        </ion-row>\n    </div>\n\n</ion-content>'/*ion-inline-end:"E:\Eclectics projects\PBZ\pbz_mobile_appApril\src\pages\settings\settings.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_alert_service_alert_service__["a" /* AlertServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */], __WEBPACK_IMPORTED_MODULE_3__providers_global_vars_global_vars__["a" /* GlobalVarsProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ })

});
//# sourceMappingURL=14.js.map