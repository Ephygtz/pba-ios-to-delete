webpackJsonp([36],{

/***/ 753:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AtmsPageModule", function() { return AtmsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__atms__ = __webpack_require__(792);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AtmsPageModule = /** @class */ (function () {
    function AtmsPageModule() {
    }
    AtmsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__atms__["a" /* AtmsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__atms__["a" /* AtmsPage */]),
            ],
        })
    ], AtmsPageModule);
    return AtmsPageModule;
}());

//# sourceMappingURL=atms.module.js.map

/***/ }),

/***/ 792:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AtmsPage; });
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





// import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator/ngx';
var AtmsPage = /** @class */ (function () {
    function AtmsPage(navCtrl, clientdata, globalVars, navParams, loadingController, alertService, alertCtrl) {
        this.navCtrl = navCtrl;
        this.clientdata = clientdata;
        this.globalVars = globalVars;
        this.navParams = navParams;
        this.loadingController = loadingController;
        this.alertService = alertService;
        this.alertCtrl = alertCtrl;
        this.atmList = [];
        this.anotherList = [];
        this.objectblock = { type: 'atms', lang: '' };
        this.langs = this.globalVars.doTranslate(this.globalVars.getLang());
        this.submit();
    }
    AtmsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ContactPage');
    };
    AtmsPage.prototype.navigate = function (item) {
        // let options: LaunchNavigatorOptions = {
        //   start: 'London, ON',
        //   app: LaunchNavigator.APPS.UBER
        // }
        // this.launchNavigator.navigate( 'Toronto, ON', options )
        //   .then(
        //   success => console.log( 'Launched navigator' ),
        //   error => console.log( 'Error launching navigator', error )
        //   );
    };
    AtmsPage.prototype.goHome = function () {
        this.navCtrl.pop();
    };
    AtmsPage.prototype.getItems = function (ev) {
        this.list();
        var val = ev.target.value;
        if (val && val.trim() != '') {
            this.atmList = this.atmList.filter(function (utility) {
                return (utility.Branch.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
        else {
            this.list();
        }
    };
    AtmsPage.prototype.list = function () {
        this.atmList = this.anotherList;
    };
    AtmsPage.prototype.ionViewDidEnter = function () {
        this.globalVars.reload();
    };
    AtmsPage.prototype.submit = function () {
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
                    _this.atmList = data.data;
                    console.log(data.data);
                    _this.latitude = data.data.Latitude;
                    _this.longitude = data.data.Longitude;
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
    AtmsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-atms',template:/*ion-inline-start:"E:\Eclectics projects\PBZ\pbz_mobile_appApril\src\pages\atms\atms.html"*/'\n\n<ion-content >\n        <ion-navbar color="primary">\n                <ion-title> ATMS </ion-title>\n                <ion-buttons right (click)="goHome()">\n                    <button ion-button icon-only color="white">\n                        <ion-icon name="home"></ion-icon>\n                    </button>\n                </ion-buttons>\n            </ion-navbar>\n            <ion-searchbar (ionInput)="getItems($event)" showCancelButton="true" animated="true" mode="ios" autocomplete="on" color="primary" placeholder="{{langs.search}}"></ion-searchbar>\n        \n    <!--{ "Sno": "1", "ATM Code": "PBZ00601", "Short Name": "PBZ ATM 12", "Branch": "Kariakoo", "Location": "Kariakoo", "District": "Ilala", "Region": "Dar-es-Salaam", "Main Location": "Tanzania Main Land", "Latitude ": " 6°49\'8.15\"S", " longitude": " 39°16\'30.77\"E"\n    }-->\n    <ion-list nolines>\n        <ion-card padding style="border-left:2px solid #00ADEE " *ngFor="let c of atmList | slice: -10 ">\n            <p style="text-align:left;color:#000;font-size:12px;width:100%">\n                {{c.Branch }} - {{c.Location }} </p>\n            <p style="text-align:left;color:grey;font-size:10px;width:100%">\n                {{c.shortName }} {{c.Region }} </p>\n            <!-- <a href="https://www.google.com/maps/dir/-6.1689491,39.2028291">View Location On Google Map</a> -->\n\n        </ion-card>\n    </ion-list>\n\n</ion-content>'/*ion-inline-end:"E:\Eclectics projects\PBZ\pbz_mobile_appApril\src\pages\atms\atms.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__providers_clientdata_clientdata__["a" /* ClientdataProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_global_vars_global_vars__["a" /* GlobalVarsProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__providers_alert_service_alert_service__["a" /* AlertServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], AtmsPage);
    return AtmsPage;
}());

//# sourceMappingURL=atms.js.map

/***/ })

});
//# sourceMappingURL=36.js.map