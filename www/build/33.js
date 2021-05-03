webpackJsonp([33],{

/***/ 754:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChequesPageModule", function() { return ChequesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cheques__ = __webpack_require__(793);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ChequesPageModule = /** @class */ (function () {
    function ChequesPageModule() {
    }
    ChequesPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__cheques__["a" /* ChequesPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__cheques__["a" /* ChequesPage */])
            ],
        })
    ], ChequesPageModule);
    return ChequesPageModule;
}());

//# sourceMappingURL=cheques.module.js.map

/***/ }),

/***/ 793:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChequesPage; });
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



var ChequesPage = /** @class */ (function () {
    function ChequesPage(navCtrl, navParams, globalVars) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.globalVars = globalVars;
        this.langs = {};
        this.langs = this.globalVars.doTranslate(this.globalVars.getLang());
    }
    ChequesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChequesPage');
    };
    ChequesPage.prototype.ionViewDidEnter = function () {
        this.globalVars.reload();
    };
    ChequesPage.prototype.goHome = function () {
        this.navCtrl.setRoot('HomePage');
    };
    ChequesPage.prototype.openPage = function (mypage) {
        this.navCtrl.push('ChequerequestPage', {
            title: mypage
        });
    };
    ChequesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cheques',template:/*ion-inline-start:"E:\Eclectics projects\PBZ\pbz_mobile_appApril\src\pages\cheques\cheques.html"*/'<!-- <ion-header>\n    <ion-navbar color="primary">\n        <ion-title> {{langs.cheque_title}} </ion-title>\n        <ion-buttons right (click)="goHome()">\n            <button ion-button icon-only color="white">\n              <ion-icon name="home"></ion-icon>\n          </button>\n        </ion-buttons>\n    </ion-navbar>\n\n</ion-header> -->\n<ion-content padding>\n\n        <ion-navbar color="primary">\n                <ion-title> {{langs.cheque_title}} </ion-title>\n                <ion-buttons right (click)="goHome()">\n                    <button ion-button icon-only color="white">\n                      <ion-icon name="home"></ion-icon>\n                  </button>\n                </ion-buttons>\n            </ion-navbar>\n    <div style="padding:0.9vh;font-size:1.8vh"> {{langs.cheque_title |uppercase}} </div>\n    <ion-row text-center style="color:#333">\n        <ion-col col-4 no-padding (click)="openPage(\'Request\')">\n            <div class="outer">\n                <div style=" display:flex;margin:auto;height:6vh;width:6vh;">\n                    <img src="assets/images/sub/request_cheque.png" style="border-radius:50%" /> </div>\n                <p class="para">\n                    {{langs.cheque}}</p>\n            </div>\n        </ion-col>\n    </ion-row>\n\n</ion-content>'/*ion-inline-end:"E:\Eclectics projects\PBZ\pbz_mobile_appApril\src\pages\cheques\cheques.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_global_vars_global_vars__["a" /* GlobalVarsProvider */]])
    ], ChequesPage);
    return ChequesPage;
}());

//# sourceMappingURL=cheques.js.map

/***/ })

});
//# sourceMappingURL=33.js.map