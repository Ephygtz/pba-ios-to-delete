webpackJsonp([20],{

/***/ 770:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationPageModule", function() { return NotificationPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__notification__ = __webpack_require__(809);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var NotificationPageModule = /** @class */ (function () {
    function NotificationPageModule() {
    }
    NotificationPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__notification__["a" /* NotificationPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__notification__["a" /* NotificationPage */]),
            ],
        })
    ], NotificationPageModule);
    return NotificationPageModule;
}());

//# sourceMappingURL=notification.module.js.map

/***/ }),

/***/ 809:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationPage; });
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





var NotificationPage = /** @class */ (function () {
    function NotificationPage(navCtrl, clientdata, globalVars, navParams, loadingController, alertService, alertCtrl) {
        this.navCtrl = navCtrl;
        this.clientdata = clientdata;
        this.globalVars = globalVars;
        this.navParams = navParams;
        this.loadingController = loadingController;
        this.alertService = alertService;
        this.alertCtrl = alertCtrl;
        this.notificationList = [];
        this.anotherList = [];
        this.objectblock = { type: 'notification', lang: 'en' };
        this.langs = this.globalVars.doTranslate(this.globalVars.getLang());
        this.submit();
    }
    NotificationPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ContactPage');
    };
    NotificationPage.prototype.goHome = function () {
        this.navCtrl.pop();
    };
    NotificationPage.prototype.getItems = function (ev) {
        this.list();
        var val = ev.target.value;
        if (val && val.trim() != '') {
            this.notificationList = this.notificationList.filter(function (utility) {
                return (utility.question.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
        else {
            this.list();
        }
    };
    NotificationPage.prototype.list = function () {
        this.notificationList = this.anotherList;
    };
    NotificationPage.prototype.submit = function () {
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
                    _this.notificationList = data.data;
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
    NotificationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-notification',template:/*ion-inline-start:"E:\Eclectics projects\PBZ\pbz_mobile_appApril\src\pages\notification\notification.html"*/'<!-- <ion-header>\n    <ion-navbar color="primary">\n        <ion-title> {{langs.notification}} </ion-title>\n        <ion-buttons right (click)="goHome()">\n            <button ion-button icon-only color="white">\n                <ion-icon name="home"></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n    <ion-searchbar (ionInput)="getItems($event)" showCancelButton="true" animated="true" mode="ios" autocomplete="on" color="primary" placeholder="{{langs.search}}"></ion-searchbar>\n\n</ion-header> -->\n\n\n<ion-content>\n        <ion-navbar color="primary">\n                <ion-title> {{langs.notification}} </ion-title>\n                <ion-buttons right (click)="goHome()">\n                    <button ion-button icon-only color="white">\n                        <ion-icon name="home"></ion-icon>\n                    </button>\n                </ion-buttons>\n            </ion-navbar>\n            <ion-searchbar (ionInput)="getItems($event)" showCancelButton="true" animated="true" mode="ios" autocomplete="on" color="primary" placeholder="{{langs.search}}"></ion-searchbar>\n        \n\n    <ion-list nolines>\n        <ion-card padding style="border-left:2px solid #00ADEE " *ngFor="let c of notificationList">\n\n            <p style="text-align:left;color:#00ADEE;font-size:12px;width:100%">\n                <b> {{c.title}} </b> </p>\n            <p style="text-align:left;color:grey;font-size:12px;width:100%">\n                {{c.body }} </p>\n\n        </ion-card>\n    </ion-list>\n\n\n</ion-content>'/*ion-inline-end:"E:\Eclectics projects\PBZ\pbz_mobile_appApril\src\pages\notification\notification.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__providers_clientdata_clientdata__["a" /* ClientdataProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_global_vars_global_vars__["a" /* GlobalVarsProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__providers_alert_service_alert_service__["a" /* AlertServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], NotificationPage);
    return NotificationPage;
}());

//# sourceMappingURL=notification.js.map

/***/ })

});
//# sourceMappingURL=20.js.map