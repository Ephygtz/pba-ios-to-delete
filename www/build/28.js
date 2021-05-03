webpackJsonp([28],{

/***/ 759:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqsPageModule", function() { return FaqsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__faqs__ = __webpack_require__(798);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FaqsPageModule = /** @class */ (function () {
    function FaqsPageModule() {
    }
    FaqsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__faqs__["a" /* FaqsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__faqs__["a" /* FaqsPage */]),
            ],
        })
    ], FaqsPageModule);
    return FaqsPageModule;
}());

//# sourceMappingURL=faqs.module.js.map

/***/ }),

/***/ 798:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FaqsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_global_vars_global_vars__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_alert_service_alert_service__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_clientdata_clientdata__ = __webpack_require__(379);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FaqsPage = /** @class */ (function () {
    function FaqsPage(navCtrl, clientdata, globalVars, navParams, loadingController, alertService, alertCtrl) {
        this.navCtrl = navCtrl;
        this.clientdata = clientdata;
        this.globalVars = globalVars;
        this.navParams = navParams;
        this.loadingController = loadingController;
        this.alertService = alertService;
        this.alertCtrl = alertCtrl;
        this.faqList = [];
        this.anotherList = [];
        this.objectblock = { type: 'faqs', lang: 'en' };
        this.langs = this.globalVars.doTranslate(this.globalVars.getLang());
        this.submit();
    }
    FaqsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ContactPage');
    };
    FaqsPage.prototype.ionViewDidEnter = function () {
        this.globalVars.reload();
    };
    FaqsPage.prototype.goHome = function () {
        this.navCtrl.pop();
    };
    FaqsPage.prototype.getItems = function (ev) {
        this.list();
        var val = ev.target.value;
        if (val && val.trim() != '') {
            this.faqList = this.faqList.filter(function (utility) {
                return (utility.question.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
        else {
            this.list();
        }
    };
    FaqsPage.prototype.list = function () {
        this.faqList = this.anotherList;
    };
    FaqsPage.prototype.submit = function () {
        var _this = this;
        this.alertService.showLoading(this.langs.submitting_txt);
        this.clientdata.faq(this.objectblock)
            .subscribe(function (data) {
            data = _this.globalVars.testdec(data);
            console.log(data);
            if (data.length != 0) {
                _this.alertService.dismiss();
                if (!data.error) {
                    _this.anotherList = data.data;
                    _this.faqList = data.data;
                }
                else if (data.error) {
                    _this.alertService.errorPop(data.message);
                    _this.navCtrl.pop();
                }
                else {
                    _this.alertService.errorPop(_this.langs.tech);
                    _this.navCtrl.pop();
                }
            }
            else {
                _this.alertService.myLoadingDismiss();
                _this.alertService.errorPop(_this.langs.tech);
                _this.navCtrl.pop();
            }
        }, function (err) {
            console.log(err);
            if (err != 'Request timed out kindly try again later') {
                err = "Connection error";
            }
            _this.alertService.dismiss();
            _this.alertService.errorPop(_this.langs.tech);
            _this.navCtrl.pop();
        });
    };
    FaqsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-faqs',template:/*ion-inline-start:"E:\Eclectics projects\PBZ\pbz_mobile_appApril\src\pages\faqs\faqs.html"*/'<!-- <ion-header>\n    <ion-navbar color="primary">\n        <ion-title> FAQs </ion-title>\n        <ion-buttons right (click)="goHome()">\n            <button ion-button icon-only color="white">\n                <ion-icon name="home"></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n    <ion-searchbar (ionInput)="getItems($event)" showCancelButton="true" animated="true" mode="ios" autocomplete="on" color="primary" placeholder="{{langs.search}}"></ion-searchbar>\n\n</ion-header> -->\n\n\n<ion-content>\n    <ion-navbar color="primary">\n        <ion-title> FAQs </ion-title>\n        <ion-buttons right (click)="goHome()">\n            <button ion-button icon-only color="white">\n                <ion-icon name="home"></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n    <ion-searchbar (ionInput)="getItems($event)" showCancelButton="true" animated="true" mode="ios" autocomplete="on"\n        color="primary" placeholder="{{langs.search}}"></ion-searchbar>\n\n\n    <ion-list nolines>\n        <ion-card padding style="border-left:2px solid #00ADEE " *ngFor="let c of faqList">\n\n            <p style="text-align:left;color:#00ADEE;font-size:1.5vh;width:100%">\n                <b> {{c.question}} </b> </p>\n            <p style="text-align:left;color:grey;font-size:1.6vh;width:100%">\n                {{c.answer }} </p>\n\n        </ion-card>\n    </ion-list>\n\n\n</ion-content>'/*ion-inline-end:"E:\Eclectics projects\PBZ\pbz_mobile_appApril\src\pages\faqs\faqs.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__providers_clientdata_clientdata__["a" /* ClientdataProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_global_vars_global_vars__["a" /* GlobalVarsProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__providers_alert_service_alert_service__["a" /* AlertServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], FaqsPage);
    return FaqsPage;
}());

//# sourceMappingURL=faqs.js.map

/***/ })

});
//# sourceMappingURL=28.js.map