webpackJsonp([27],{

/***/ 762:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForexPageModule", function() { return ForexPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__forex__ = __webpack_require__(801);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ForexPageModule = /** @class */ (function () {
    function ForexPageModule() {
    }
    ForexPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__forex__["a" /* ForexPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__forex__["a" /* ForexPage */])
            ],
        })
    ], ForexPageModule);
    return ForexPageModule;
}());

//# sourceMappingURL=forex.module.js.map

/***/ }),

/***/ 801:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForexPage; });
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





/**
 * Generated class for the ForexPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ForexPage = /** @class */ (function () {
    function ForexPage(navCtrl, clientdata, globalVars, navParams, loadingController, alertService, alertCtrl) {
        this.navCtrl = navCtrl;
        this.clientdata = clientdata;
        this.globalVars = globalVars;
        this.navParams = navParams;
        this.loadingController = loadingController;
        this.alertService = alertService;
        this.alertCtrl = alertCtrl;
        this.responded = false;
        this.accounts = [];
        this.accounts_no = [];
        this.langs = [];
        this.forex_types = [
            { name: 'TANZANIAN SHILLING', no: '1' },
            { name: ' US DOLLAR', no: '2' },
            { name: ' POUND STERLING', no: '3' },
            { name: 'EURO', no: '4' }
        ];
        this.unmasked_accounts = [];
        this.statements = [];
        this.objectblock = {
            username: this.globalVars.getUsername(), account_from: this.globalVars.getUsername(), lang: 'en', type: '1', ftype: '1'
        };
        this.langs = this.globalVars.doTranslate(this.globalVars.getLang());
        this.objectblock.username = this.globalVars.Username;
        this.accounts = globalVars.linked_acc;
        // this.objectblock.account_from = this.accounts[ 0 ].acc_number;
        this.submit();
    }
    ForexPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ForexPage');
    };
    ForexPage.prototype.ionViewDidEnter = function () {
        this.globalVars.reload();
    };
    ForexPage.prototype.goHome = function () {
        this.navCtrl.pop();
    };
    ForexPage.prototype.submit = function () {
        var _this = this;
        this.objectblock.type = this.objectblock.ftype;
        console.log(this.objectblock);
        this.alertService.showLoading("processing");
        this.clientdata.forex(this.objectblock)
            .subscribe(function (data) {
            data = _this.globalVars.testdec(data);
            console.log(data);
            if (data.length != 0) {
                _this.alertService.dismiss();
                if (!data.error) {
                    _this.responded = true;
                    _this.statements = data.field48;
                    console.log("Forex==" + _this.statements);
                }
                else if (data.error) {
                    _this.alertService.errorPop("There was an error Getting your Forex Rate");
                }
                else {
                    _this.alertService.errorPop("there was an error try again later");
                }
            }
            else {
                //console.log( "Forex  timeout" );
                _this.alertService.myLoadingDismiss();
                _this.alertService.errorPop("Forex Timeout Kindly try again");
            }
        }, function (err) {
            console.log(err);
            if (err != 'Request timed out kindly try again later') {
                err = "Connection error";
            }
            _this.alertService.dismiss();
            _this.alertService.errorPop(err);
        });
    };
    ForexPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-forex',template:/*ion-inline-start:"E:\Eclectics projects\PBZ\pbz_mobile_appApril\src\pages\forex\forex.html"*/'<!--\n  Generated template for the ForexPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!-- <ion-header>\n    <ion-navbar color="primary">\n        <ion-title>{{langs.forex}}</ion-title>\n        <ion-buttons end (click)="goHome()">\n            <button ion-button icon-only color="white">\n        <ion-icon name="home"></ion-icon>\n      </button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header> -->\n\n\n<ion-content class="back-view">\n        <ion-navbar color="primary">\n                <ion-title>{{langs.forex}}</ion-title>\n                <ion-buttons end (click)="goHome()">\n                    <button ion-button icon-only color="white">\n                <ion-icon name="home"></ion-icon>\n              </button>\n                </ion-buttons>\n            </ion-navbar>\n    <ion-card style="border-left:2px solid #00ADEE " *ngFor="let statement of statements" padding>\n        <p style="width:100%;color:#000;font-size:2vh;font-family: UbuntuBold;"> 1 {{statement.currency | uppercase}} </p>\n        <ion-row no-padding no-margin style="margin-bottom:2px;">\n            <ion-col no-padding>\n                <p style="color:grey;font-size:1.4vh;width:100%;font-family: Ubuntu"><b>{{ langs.buy}}</b> </p>\n                <p class="number-font" style="color: #00ADEE;font-size:1.8vh;font-family: Ubuntu">\n                    <b>   {{statement.buy | currency:\'TZS\' }}</b>\n                </p>\n            </ion-col>\n            <ion-col no-padding>\n                <p style="text-align:center;color:grey;font-size:1.4vh;width:100%;font-family: Ubuntu"><b>{{ langs.sell}}</b> </p>\n                <p class="number-font" style="color:#FF0909;text-align:center;font-size:1.8vh;font-family: Ubuntu">\n                    <b>   {{statement.sell  | currency:\'TZS\'}}</b>\n                </p>\n            </ion-col>\n        </ion-row>\n    </ion-card>\n</ion-content>'/*ion-inline-end:"E:\Eclectics projects\PBZ\pbz_mobile_appApril\src\pages\forex\forex.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__providers_clientdata_clientdata__["a" /* ClientdataProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_global_vars_global_vars__["a" /* GlobalVarsProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__providers_alert_service_alert_service__["a" /* AlertServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], ForexPage);
    return ForexPage;
}());

//# sourceMappingURL=forex.js.map

/***/ })

});
//# sourceMappingURL=27.js.map