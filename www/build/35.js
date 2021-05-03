webpackJsonp([35],{

/***/ 749:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BalancePageModule", function() { return BalancePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__balance__ = __webpack_require__(788);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var BalancePageModule = /** @class */ (function () {
    function BalancePageModule() {
    }
    BalancePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__balance__["a" /* BalancePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__balance__["a" /* BalancePage */])
            ],
        })
    ], BalancePageModule);
    return BalancePageModule;
}());

//# sourceMappingURL=balance.module.js.map

/***/ }),

/***/ 788:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BalancePage; });
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





var BalancePage = /** @class */ (function () {
    function BalancePage(navCtrl, clientdata, globalVars, navParams, loadingController, alertService, alertCtrl) {
        this.navCtrl = navCtrl;
        this.clientdata = clientdata;
        this.globalVars = globalVars;
        this.navParams = navParams;
        this.loadingController = loadingController;
        this.alertService = alertService;
        this.alertCtrl = alertCtrl;
        this.accounts = [];
        this.accounts_no = [];
        this.response = false;
        this.page = 1;
        this.error = 1;
        this.actualBalance = "";
        this.availableBalance = "";
        this.stat_title = "STATEMENTS";
        this.myDate = new Date().toString();
        this.unmasked_accounts = [];
        this.objectblock = {
            username: this.globalVars.getUsername(), account_from: '', lang: 'en', type: 'MWALLET'
        };
        this.langs = this.globalVars.doTranslate(this.globalVars.getLang());
        this.objectblock.username = this.globalVars.Username;
        this.accounts = globalVars.linked_acc;
        this.objectblock.account_from = this.accounts[0].acc_number;
    }
    BalancePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BalancePage');
    };
    BalancePage.prototype.openPage = function (page) {
        this.navCtrl.push(page);
    };
    BalancePage.prototype.goHome = function () {
        this.navCtrl.setRoot('MainPage');
    };
    BalancePage.prototype.ionViewDidEnter = function () {
        this.globalVars.reload();
    };
    BalancePage.prototype.submit = function () {
        var _this = this;
        if (this.objectblock.account_from === null || this.objectblock.account_from === '' ||
            this.objectblock.account_from === undefined) {
            this.alertService.errorPop(this.langs.valid_acc);
        }
        else {
            this.objectblock.account_from = this.objectblock.account_from + "";
            if (this.objectblock.account_from.substring(0, 3) == "255") {
                this.objectblock.type = 'MWALLET';
            }
            else {
                this.objectblock.type = 'CBS';
            }
            console.log(this.objectblock);
            this.alertService.showLoading(this.langs.submitting_txt);
            this.clientdata.balance(this.objectblock)
                .subscribe(function (data) {
                data = _this.globalVars.testdec(data);
                console.log(data);
                if (data.length != 0) {
                    _this.alertService.dismiss();
                    if (!data.error) {
                        _this.actualBalance = data.actual;
                        _this.availableBalance = data.available;
                        _this.datetime = new Date().toLocaleString();
                        _this.response = true;
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
                    _this.alertService.dismiss();
                    _this.alertService.errorPop(_this.langs.tech);
                    _this.navCtrl.pop();
                }
            }, function (err) {
                console.log(err);
                _this.alertService.dismiss();
                _this.alertService.errorPop(_this.langs.tech);
            });
        }
    };
    BalancePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-balance',template:/*ion-inline-start:"E:\Eclectics projects\PBZ\pbz_mobile_appApril\src\pages\balance\balance.html"*/'<!--\n  Generated template for the SendMoneyPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!-- <ion-header>\n\n    <ion-navbar color="primary">\n        <ion-title> {{langs.enquiries}} </ion-title>\n        <ion-buttons end (click)="goHome()">\n            <button ion-button icon-only color="white">\n              <ion-icon name="home"></ion-icon>\n          </button>\n        </ion-buttons>\n    </ion-navbar>\n\n</ion-header> -->\n\n\n<ion-content class="back-view">\n        <ion-navbar color="primary">\n                <ion-title> {{langs.enquiries}} </ion-title>\n                <ion-buttons end (click)="goHome()">\n                    <button ion-button icon-only color="white">\n                      <ion-icon name="home"></ion-icon>\n                  </button>\n                </ion-buttons>\n            </ion-navbar>\n    <div *ngIf="!response">\n        <ion-card padding>\n\n            <div>\n                <div style="padding:3px;width:100%;color:#000;font-size:1.6vh"> {{langs.from_acc_text}}</div>\n                <!-- <ion-row style="position:relative;height:40px;font-size:1.6vh;border:1px #00ADEE solid;padding:0px;">\n                    <ion-col col-2 style="margin:1px;background:#00ADEE;" class="center">\n                        <ion-icon name="contact" style="font-size:25px" color="pbzyellow"></ion-icon>\n                    </ion-col>\n                    <ion-col>\n                        <select [(ngModel)]="objectblock.account_from" style="background:rgba(0,0,0,0);color:#000;height:100%;font-size:16px;font-style:bold;width:100%;border:none">\n                        <option *ngFor="let ac of accounts"  value="{{ac.acc_number}}"> {{ac.acc_name}}</option>\n                      \n                    </select> </ion-col>\n                </ion-row> -->\n\n                <ion-row style="position:relative;height:auto;font-size:1.6vh;border:1px #00ADEE solid;padding:0px;">\n                    <ion-col col-2 style="margin:1px;background:#00ADEE;" class="center">\n                        <ion-icon name="contact" style="font-size:25px" color="pbzyellow"></ion-icon>\n                    </ion-col>\n                    <ion-col>\n                        <ion-select  interface="popover" [(ngModel)]="objectblock.account_from" style="text-align:right">\n                            <ion-option style=" padding: 0.3rem 0; background: transparent;\n                        color: white;" *ngFor="let ac of accounts" value="{{ac.acc_number}}"> {{ac.acc_name}}\n                            </ion-option>\n                        </ion-select>\n                    </ion-col>\n                </ion-row>\n                <div *ngIf="error==1" style="padding:3px;width:100%;color:#FE1902;font-size:1.6vh"> {{langs.valid_account }}</div>\n            </div>\n\n            <ion-row no-padding>\n                <ion-col item-center>\n                    <button ion-button block color="pbzyellow" (click)="submit()">\n										{{langs.submit_txt}}</button>\n                </ion-col>\n            </ion-row>\n        </ion-card>\n    </div>\n\n\n    <div *ngIf="response">\n        <ion-card padding>\n            <p style="text-align:center;color:grey;font-size:2.5vh;width:100%">\n                <b> {{langs.balance}} for   {{objectblock.account_from}} </b>\n            </p>\n            <p style="text-align:center;width:100%;color:grey">as at {{myDate | date:\'medium\'}} </p>\n            <div>\n\n                <ion-row padding>\n                    <ion-col no-padding text-center>\n                        <p style="color:#00ADEE;font-size:1.5vh;"><b>{{ langs.actual_bal}}</b> </p>\n                        <p class="number-font" style="color: grey;text-align:center;font-size:1.9vh;">\n                            <b>   {{actualBalance | currency:\'TZS\' }}</b>\n                        </p>\n                    </ion-col>\n                    <ion-col no-padding text-center>\n                        <p style="color:#00ADEE;font-size:1.5vh;"><b>{{ langs.avail_bal}}</b> </p>\n                        <p class="number-font" style="color: grey;text-align:center;font-size:1.9vh;">\n                            <b>   {{availableBalance  | currency:\'TZS\'}}</b>\n                        </p>\n                    </ion-col>\n                </ion-row>\n            </div>\n\n        </ion-card>\n    </div>\n</ion-content>'/*ion-inline-end:"E:\Eclectics projects\PBZ\pbz_mobile_appApril\src\pages\balance\balance.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__providers_clientdata_clientdata__["a" /* ClientdataProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_global_vars_global_vars__["a" /* GlobalVarsProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__providers_alert_service_alert_service__["a" /* AlertServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], BalancePage);
    return BalancePage;
}());

//# sourceMappingURL=balance.js.map

/***/ })

});
//# sourceMappingURL=35.js.map