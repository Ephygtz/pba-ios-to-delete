webpackJsonp([34],{

/***/ 750:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BillsPageModule", function() { return BillsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bills__ = __webpack_require__(789);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var BillsPageModule = /** @class */ (function () {
    function BillsPageModule() {
    }
    BillsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__bills__["a" /* BillsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__bills__["a" /* BillsPage */])
            ],
        })
    ], BillsPageModule);
    return BillsPageModule;
}());

//# sourceMappingURL=bills.module.js.map

/***/ }),

/***/ 789:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BillsPage; });
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
 * Generated class for the BillsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BillsPage = /** @class */ (function () {
    function BillsPage(globalVars, navCtrl, navParams) {
        this.globalVars = globalVars;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.paymento = 1;
        this.pre = { name: "", accountid: "", amount: "", message: "", duedate: "" };
        this.langs = {};
        this.accounts = [];
        this.objectblock = {
            username: '', account_from: '', lang: '', biller_ref: '', biller_name: '', amount: '', iscorporate: false
        };
        this.avail = false;
        this.data = navParams.get("title");
        this.title = this.data.utility.name;
        this.langs = this.globalVars.doTranslate(this.globalVars.getLang());
        this.objectblock.username = this.globalVars.Username;
        this.accounts = globalVars.linked_acc;
        this.objectblock.account_from = this.accounts[0].acc_number;
        this.avail = this.data.utility.active;
    }
    BillsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BillsPage');
    };
    BillsPage.prototype.goHome = function () {
        this.navCtrl.setRoot('MainPage');
    };
    BillsPage.prototype.ionViewDidEnter = function () {
        this.globalVars.reload();
    };
    BillsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-bills',template:/*ion-inline-start:"E:\Eclectics projects\PBZ\pbz_mobile_appApril\src\pages\bills\bills.html"*/'<!--\n  Generated template for the SendMoneyPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!-- <ion-header>\n\n    <ion-navbar color="primary">\n    \n        <ion-title> {{ title }} </ion-title>\n        <ion-buttons end (click)="goHome()">\n            <button ion-button icon-only color="white">\n              <ion-icon name="home"></ion-icon>\n          </button>\n        </ion-buttons>\n    </ion-navbar>\n\n</ion-header> -->\n\n\n<ion-content class="back-view">\n        <ion-navbar color="primary">\n                <!-- <ion-title> Bill Payments </ion-title> -->\n                <ion-title> {{ title }} </ion-title>\n                <ion-buttons end (click)="goHome()">\n                    <button ion-button icon-only color="white">\n                      <ion-icon name="home"></ion-icon>\n                  </button>\n                </ion-buttons>\n            </ion-navbar>\n    <ion-card padding *ngIf="avail">\n\n    </ion-card>\n\n\n    <ion-card padding *ngIf="!avail">\n        <br>\n        <div padding style="text-align:center;color:#000;font-size:12px;width:100%;width:100%">{{langs.service_title |uppercase}} </div>\n\n        <img src="assets/svg/receipt/wait.svg" style="height:50px;width:auto;margin:auto;display:flex;" />\n\n        <div padding style="text-align:center;color:#000;font-size:10px;width:100%;width:100%"> {{langs.service_body |uppercase}}\n        </div>\n        <ion-row>\n            <ion-col item-center>\n                <button ion-button block color="pbzyellow" (click)="back()">\n										{{langs.back }} </button>\n            </ion-col>\n        </ion-row>\n    </ion-card>\n\n</ion-content>'/*ion-inline-end:"E:\Eclectics projects\PBZ\pbz_mobile_appApril\src\pages\bills\bills.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_global_vars_global_vars__["a" /* GlobalVarsProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], BillsPage);
    return BillsPage;
}());

//# sourceMappingURL=bills.js.map

/***/ })

});
//# sourceMappingURL=34.js.map