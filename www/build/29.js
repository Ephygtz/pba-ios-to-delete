webpackJsonp([29],{

/***/ 760:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnquiriesPageModule", function() { return EnquiriesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__enquiries__ = __webpack_require__(799);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EnquiriesPageModule = /** @class */ (function () {
    function EnquiriesPageModule() {
    }
    EnquiriesPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__enquiries__["a" /* EnquiriesPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__enquiries__["a" /* EnquiriesPage */])
            ],
        })
    ], EnquiriesPageModule);
    return EnquiriesPageModule;
}());

//# sourceMappingURL=enquiries.module.js.map

/***/ }),

/***/ 799:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnquiriesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_global_vars_global_vars__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_alert_service_alert_service__ = __webpack_require__(94);
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
 * Generated class for the MobilemoneyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EnquiriesPage = /** @class */ (function () {
    function EnquiriesPage(alertService, navCtrl, globalVars, navParams) {
        this.alertService = alertService;
        this.navCtrl = navCtrl;
        this.globalVars = globalVars;
        this.navParams = navParams;
        this.langs = {};
        this.langs = this.globalVars.doTranslate(this.globalVars.getLang());
        this.govaList = [
            { name: this.langs.balance, image: 'assets/icon/zan.jpg', link: 'BalancePage' },
            { name: this.langs.mini, image: 'assets/images/utility.jpg', link: 'MinistatementPage' },
            { name: this.langs.full, image: 'assets/icon/union.jpg', link: 'FullstatementPage' },
        ];
    }
    EnquiriesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad GovernmentPage');
    };
    EnquiriesPage.prototype.goHome = function () {
        this.navCtrl.setRoot('HomePage');
    };
    EnquiriesPage.prototype.openpage = function (dat) {
        this.navCtrl.push(dat);
    };
    EnquiriesPage.prototype.ionViewDidEnter = function () {
        this.globalVars.reload();
    };
    EnquiriesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-enquiries',template:/*ion-inline-start:"E:\Eclectics projects\PBZ\pbz_mobile_appApril\src\pages\enquiries\enquiries.html"*/'<!--\n  Generated template for the MobilemoneyPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!-- <ion-header>\n\n    <ion-navbar color="primary">\n\n        <ion-title> {{langs.enquiries}} </ion-title>\n\n\n        <ion-buttons right (click)="goHome()">\n            <button ion-button icon-only color="white">\n            <ion-icon name="home"></ion-icon>\n        </button>\n        </ion-buttons>\n    </ion-navbar>\n\n</ion-header> -->\n\n\n<ion-content padding >\n\n        <ion-navbar color="primary">\n\n                <ion-title> {{langs.enquiries}} </ion-title>\n        \n        \n                <ion-buttons right (click)="goHome()">\n                    <button ion-button icon-only color="white">\n                    <ion-icon name="home"></ion-icon>\n                </button>\n                </ion-buttons>\n            </ion-navbar>\n\n    <div style="padding:0.9vh;font-size:1.8vh"> {{langs.enquiries |uppercase}} </div>\n    <ion-row text-center style="color:#333">\n        <ion-col col-4 no-padding *ngFor="let item of govaList" (click)="openpage(item.link)">\n            <div class="outer">\n                <div style=" display:flex;margin:auto;height:6vh;width:6vh;">\n                    <img src="{{item.image}}" style="border-radius:50%" /> </div>\n                <p class="para">\n                    {{item.name}}</p>\n            </div>\n        </ion-col>\n    </ion-row>\n\n</ion-content>'/*ion-inline-end:"E:\Eclectics projects\PBZ\pbz_mobile_appApril\src\pages\enquiries\enquiries.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_alert_service_alert_service__["a" /* AlertServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_global_vars_global_vars__["a" /* GlobalVarsProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], EnquiriesPage);
    return EnquiriesPage;
}());

//# sourceMappingURL=enquiries.js.map

/***/ })

});
//# sourceMappingURL=29.js.map