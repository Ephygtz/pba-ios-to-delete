webpackJsonp([12],{

/***/ 779:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TutorialPageModule", function() { return TutorialPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tutorial__ = __webpack_require__(818);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TutorialPageModule = /** @class */ (function () {
    function TutorialPageModule() {
    }
    TutorialPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__tutorial__["a" /* TutorialPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__tutorial__["a" /* TutorialPage */]),
            ],
        })
    ], TutorialPageModule);
    return TutorialPageModule;
}());

//# sourceMappingURL=tutorial.module.js.map

/***/ }),

/***/ 818:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TutorialPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_global_vars_global_vars__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_alert_service_alert_service__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_clientdata_clientdata__ = __webpack_require__(379);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_validator_validator__ = __webpack_require__(380);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_connectivity_service_connectivity_service__ = __webpack_require__(386);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var TutorialPage = /** @class */ (function () {
    function TutorialPage(platform, validator, storage, clientdata, navCtrl, modalCtrl, mymenu, menu, connect, globalVars, loadingController, alertService, alertCtrl) {
        this.platform = platform;
        this.validator = validator;
        this.storage = storage;
        this.clientdata = clientdata;
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.mymenu = mymenu;
        this.menu = menu;
        this.connect = connect;
        this.globalVars = globalVars;
        this.loadingController = loadingController;
        this.alertService = alertService;
        this.alertCtrl = alertCtrl;
        this.dir = "ltr";
        this.slideIndex = 0;
        this.slides = [];
        this.error = 0;
        this.objectblock = { type: 'slides_', lang: 'en' };
        this.isPhoneSaved = false;
        this.relationship = "en";
        this.phoneError = false;
        this.encryptIsPresent = false;
        this.isCustomer = false;
        this.langs = {};
        this.language = 'ki';
        this.light = 'pbzyellow';
        this.pager = true;
        this.auto = '3000';
        this.isdisable = true;
        this.langs = this.globalVars.doTranslate(this.globalVars.getLang());
        this.language = this.globalVars.getLang();
        this.dir = platform.dir();
        this.slides = [
            {
                title: this.langs.in_charge,
                description: this.langs.incharge_loan,
                imageUrl: 'assets/slide2.png',
            },
            {
                title: this.langs.easy,
                description: this.langs.created_mind,
                imageUrl: 'assets/slide1.png',
            }
        ];
        if (this.connect.isOnline) {
            this.isdisable = false;
            this.submit();
        }
        else {
            this.popmeth(this.langs.internet);
        }
    }
    TutorialPage.prototype.popmeth = function (message) {
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
                _this.alertService.directExit();
            }
        });
    };
    TutorialPage.prototype.onPageDidEnter = function () {
        this.globalVars.pause();
        this.menu.enable(false);
    };
    TutorialPage.prototype.changelang = function (langus) {
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
    TutorialPage.prototype.goRegister = function () {
        this.navCtrl.setRoot('LoginPage');
    };
    TutorialPage.prototype.userNameChanged = function () {
        if (this.objectblock.username.length >= 10) {
            this.setNumber();
        }
    };
    TutorialPage.prototype.setNumber = function () {
        if (this.objectblock.username === "" || this.objectblock.username === undefined || this.objectblock.username.length < 9 || !this.globalVars.trimPhome(this.objectblock.username).startsWith('2557')) {
            this.error = 0;
        }
        else {
            this.globalVars.setUsername("255" + this.objectblock.username.substr(this.objectblock.username.length - 9));
            this.checkExistence();
        }
    };
    TutorialPage.prototype.checkExistence = function () {
        this.encryptIsPresent = true;
        this.navCtrl.push('PinModalPage');
        this.isCustomer = true;
        this.globalVars.setUsername("255" + this.objectblock.username.substr(this.objectblock.username.length - 9));
    };
    TutorialPage.prototype.backD = function () {
        this.alertService.showPin();
    };
    TutorialPage.prototype.onSlideChanged = function () {
        this.slideIndex = this.slider.getActiveIndex();
    };
    TutorialPage.prototype.goToApp = function () {
        this.navCtrl.setRoot('LoginPage');
    };
    TutorialPage.prototype.skip = function () {
        this.slider.slideTo(4, 500);
        this.light = "primary";
        this.auto = '30000';
        this.pager = false;
    };
    TutorialPage.prototype.nextSlide = function () {
        this.slider.slideNext();
    };
    TutorialPage.prototype.submit = function () {
        var _this = this;
        console.log(this.objectblock);
        this.clientdata.faq(this.objectblock)
            .subscribe(function (data) {
            data = _this.globalVars.testdec(data);
            console.log(data);
            if (data.length != 0) {
                if (!data.error) {
                    _this.slides = _this.slides.concat(data.data);
                    _this.slides.splice(0, 1);
                    _this.slider.initialSlide;
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
            _this.alertService.mytoastdown(_this.langs.internet);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("slider"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Slides */])
    ], TutorialPage.prototype, "slider", void 0);
    TutorialPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tutorial',template:/*ion-inline-start:"E:\Eclectics projects\PBZ\pbz_mobile_appApril\src\pages\tutorial\tutorial.html"*/'<ion-header no-border no-lines>\n    <ion-navbar transparent style="box-shadow: transparent" hideBackButton>\n        <ion-segment [(ngModel)]="language" color="{{light}}">\n            <ion-segment-button value="en" (click)="changelang(\'en\')">\n                ENGLISH\n            </ion-segment-button>\n            <ion-segment-button value="ki" (click)="changelang(\'ki\')">\n                KISWAHILI\n            </ion-segment-button>\n        </ion-segment>\n    </ion-navbar>\n</ion-header>\n\n<ion-content fullscreen="true" class=" no-padding-top" style=" background: #EEEEEE;">\n    <ion-slides #slider pager={{pager}} autoplay="{{auto}}" loop="true" speed="500" (ionSlideWillChange)="onSlideChanged()">\n        <ion-slide *ngFor="let slide of slides" class="slide-background slider-background drop-in" [ngStyle]="{\'background\': \'linear-gradient(-45deg, rgba(49, 161, 216, 0.67)4%, rgba(26, 35 ,126 , .5)45%),url(\'+ slide.imageUrl +\')\'}">\n            <div class="text-wrapper">\n                <div class="slide-text">\n                    <p> <b [innerHTML]="slide.title"></b></p>\n                    <p [innerHTML]="slide.description"></p>\n                </div>\n            </div>\n        </ion-slide>\n    </ion-slides>\n    <!--  [ngStyle]="{\'background-image\': \'url(\' + slide.imageUrl +\')\'}" -->\n</ion-content>\n<ion-toolbar color="primary" no-border style="margin:0px;position:fixed;bottom:0">\n    <div style="width:100%;margin:0px;padding:0px;background-color:#4dc5f1" class="pop-in">\n        <button [disabled]="isdisable" ion-button color="primary" large full (click)="goRegister()" style="font-weight:500 ;letter-spacing:5px;color: #FDF331">{{ langs.login }}</button>\n    </div>\n</ion-toolbar>'/*ion-inline-end:"E:\Eclectics projects\PBZ\pbz_mobile_appApril\src\pages\tutorial\tutorial.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_6__providers_validator_validator__["a" /* ValidatorProvider */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_5__providers_clientdata_clientdata__["a" /* ClientdataProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_7__providers_connectivity_service_connectivity_service__["a" /* ConnectivityServiceProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_global_vars_global_vars__["a" /* GlobalVarsProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_alert_service_alert_service__["a" /* AlertServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], TutorialPage);
    return TutorialPage;
}());

//# sourceMappingURL=tutorial.js.map

/***/ })

});
//# sourceMappingURL=12.js.map