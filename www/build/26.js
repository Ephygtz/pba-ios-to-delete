webpackJsonp([26],{

/***/ 765:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FullstatementPageModule", function() { return FullstatementPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fullstatement__ = __webpack_require__(804);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FullstatementPageModule = /** @class */ (function () {
    function FullstatementPageModule() {
    }
    FullstatementPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__fullstatement__["a" /* FullstatementPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__fullstatement__["a" /* FullstatementPage */])
            ],
        })
    ], FullstatementPageModule);
    return FullstatementPageModule;
}());

//# sourceMappingURL=fullstatement.module.js.map

/***/ }),

/***/ 804:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FullstatementPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_global_vars_global_vars__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_alert_service_alert_service__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_clientdata_clientdata__ = __webpack_require__(379);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_validator_validator__ = __webpack_require__(380);
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
 * Generated class for the FullstatementPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FullstatementPage = /** @class */ (function () {
    function FullstatementPage(validator, clientdata, navCtrl, navParams, modalCtrl, globalVars, loadingController, alertService, alertCtrl) {
        this.validator = validator;
        this.clientdata = clientdata;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.globalVars = globalVars;
        this.loadingController = loadingController;
        this.alertService = alertService;
        this.alertCtrl = alertCtrl;
        this.accounts = [];
        this.objectblock = {
            username: '',
            account_from: '', startdate: "", enddate: "", lang: '', email: ''
        };
        this.statements = [];
        this.langs = {};
        this.error = 0;
        this.langs = this.globalVars.doTranslate(this.globalVars.getLang());
        this.objectblock.username = this.globalVars.Username;
        this.accounts = globalVars.linked_acc;
        this.objectblock.account_from = this.accounts[0].acc_number;
    }
    FullstatementPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FullstatementPage');
    };
    FullstatementPage.prototype.goHome = function () {
        this.navCtrl.setRoot('HomePage');
    };
    FullstatementPage.prototype.processDiff = function (diff) {
        var seconds = diff / 1000;
        var minutes = seconds / 60;
        var hours = minutes / 60;
        var days = hours / 24;
        if (days > 365) {
            return true;
        }
        else {
            return false;
        }
    };
    FullstatementPage.prototype.validate = function (thevalue) {
        switch (thevalue) {
            case "email": {
                if (this.validator.isEmail(this.objectblock.email))
                    this.error = 0;
                else
                    this.error = 1;
                break;
            }
        }
    };
    FullstatementPage.prototype.submit = function () {
        var _this = this;
        this.start = Date.parse(this.objectblock.startdate);
        this.end = Date.parse(this.objectblock.enddate);
        this.difference = this.end - this.start;
        console.log(this.objectblock);
        if (this.objectblock.email == undefined || this.objectblock.email == "") {
            this.error = 1;
        }
        else if (this.objectblock.startdate == undefined || this.objectblock.startdate == "") {
            this.error = 2;
        }
        else if (this.objectblock.enddate == undefined || this.objectblock.enddate == "") {
            this.error = 3;
        }
        else if (this.difference <= 0) {
            this.error = 4;
        }
        else if (this.processDiff(this.difference)) {
            this.error = 5;
        }
        else {
            this.objectblock.date_from = this.objectblock.enddate;
            this.objectblock.date_to = this.objectblock.startdate;
            this.alertService.showLoading(this.langs.submitting_txt);
            this.clientdata.fullstatement(this.objectblock)
                .subscribe(function (data) {
                data = _this.globalVars.testdec(data);
                console.log(data);
                if (data.length != 0) {
                    _this.alertService.dismiss();
                    if (!data.error) {
                        _this.alertService.errorPop(data.message);
                    }
                    else if (data.error) {
                        _this.alertService.errorPop(data.message);
                    }
                    else {
                        _this.alertService.errorPop(_this.langs.tech);
                    }
                }
                else {
                    _this.alertService.myLoadingDismiss();
                    _this.alertService.errorPop(_this.langs.tech);
                }
            }, function (err) {
                console.log(err);
                _this.alertService.dismiss();
                _this.alertService.errorPop(_this.langs.tech);
            });
        }
    };
    FullstatementPage.prototype.ionViewDidEnter = function () {
        this.globalVars.reload();
    };
    FullstatementPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-fullstatement',template:/*ion-inline-start:"E:\Eclectics projects\PBZ\pbz_mobile_appApril\src\pages\fullstatement\fullstatement.html"*/'<!--\n  Generated template for the SendMoneyPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!-- <ion-header>\n\n    <ion-navbar color="primary">\n        <ion-title> {{langs.full}} </ion-title>\n        <ion-buttons end (click)="goHome()">\n            <button ion-button icon-only color="white">\n              <ion-icon name="home"></ion-icon>\n          </button>\n        </ion-buttons>\n\n\n    </ion-navbar>\n\n</ion-header> -->\n\n\n<ion-content class="back-view">\n        <ion-navbar color="primary">\n                <ion-title> {{langs.full}} </ion-title>\n                <ion-buttons end (click)="goHome()">\n                    <button ion-button icon-only color="white">\n                      <ion-icon name="home"></ion-icon>\n                  </button>\n                </ion-buttons>\n        \n        \n            </ion-navbar>\n    <ion-card padding>\n        <div>\n            <div style="padding:3px;width:100%;color:#000;font-size:11px"> {{langs.from_acc_text}}</div>\n            <!-- <ion-row style="position:relative;height:40px;font-size:12px;border:1px #00ADEE solid;padding:0px;">\n                <ion-col col-2 style="margin:1px;background:#00ADEE;" class="center">\n                    <ion-icon name="contact" style="font-size:25px" color="pbzyellow"></ion-icon>\n                </ion-col>\n                <ion-col>\n                    <select [(ngModel)]="objectblock.account_from" style="background:rgba(0,0,0,0);color:#000;height:100%;font-size:16px;font-style:bold;width:100%;border:none">\n                        <option *ngFor="let ac of accounts"  value="{{ac.acc_number}}"> {{ac.acc_name}}</option>\n                      \n                    </select> </ion-col>\n            </ion-row> -->\n            <ion-row style="position:relative;height:auto;font-size:1.6vh;border:1px #00ADEE solid;padding:0px;">\n                <ion-col col-2 style="margin:1px;background:#00ADEE;" class="center">\n                    <ion-icon name="contact" style="font-size:25px" color="pbzyellow"></ion-icon>\n                </ion-col>\n                <ion-col>\n                    <ion-select  interface="popover" [(ngModel)]="objectblock.account_from" style="text-align:right">\n                        <ion-option style=" padding: 0.3rem 0; background: transparent;\n                    color: white;" *ngFor="let ac of accounts" value="{{ac.acc_number}}"> {{ac.acc_name}}\n                        </ion-option>\n                    </ion-select>\n                </ion-col>\n            </ion-row>\n            <div *ngIf="error==6" style="padding:3px;width:100%;color:#FE1902;font-size:11px"> {{langs.valid_account }}</div>\n        </div>\n        <div>\n            <div style="padding:3px;width:100%;color:#000;font-size:11px"> {{langs.email}}</div>\n            <ion-row style="position:relative;height:40px;font-size:12px;border:1px #00ADEE solid;padding:0px;">\n                <ion-col col-2 style="margin:1px;background:#00ADEE;" class="center">\n                    <ion-icon name="mail" style="font-size:25px" color="pbzyellow"></ion-icon>\n                </ion-col>\n                <ion-col>\n                    <input (keyup)="validate(\'email\')" style="background:rgba(0,0,0,0);color:#000;height:100%;font-size:16px;font-style:bold;width:100%;border:none" type="text" maxlength="50" [(ngModel)]="objectblock.email" />\n                </ion-col>\n            </ion-row>\n            <div *ngIf="error==1" style="padding:3px;width:100%;color:#FE1902;font-size:11px"> {{langs.valid_email }}</div>\n        </div>\n        <div>\n            <p style="padding:3px;text-align:left;color:#00ADEE;font-size:10px;width:100%"><b>{{langs.select_duration}}</b> </p>\n            <ion-row>\n                <ion-col col-6>\n                    <div>\n                        <div style="padding:3px;width:100%;color:#000;font-size:11px"> {{langs.from}}:</div>\n                        <ion-row style="position:relative;height:40px;font-size:11px;border:1px #00ADEE solid;padding:0px;">\n\n                            <ion-col>\n                                <ion-datetime style="background:rgba(0,0,0,0);color:#000;height:100%;font-size:16px;font-style:bold;border:none" displayFormat="DD-MMM-YYYY" [(ngModel)]="objectblock.startdate"></ion-datetime>\n\n                            </ion-col>\n                        </ion-row>\n                    </div>\n                </ion-col>\n                <ion-col col-6>\n                    <div>\n                        <div style="padding:3px;width:100%;color:#000;font-size:11px"> {{langs.to}}:</div>\n                        <ion-row style="position:relative;height:40px;font-size:11px;border:1px #00ADEE solid;padding:0px;">\n\n                            <ion-col>\n                                <ion-datetime style="background:rgba(0,0,0,0);color:#000;height:100%;font-size:16px;font-style:bold;border:none" displayFormat="DD-MMM-YYYY" [(ngModel)]="objectblock.enddate"></ion-datetime>\n                            </ion-col>\n                        </ion-row>\n                    </div>\n                </ion-col>\n            </ion-row>\n            <div *ngIf="error==2" style="padding:3px;width:100%;color:#FE1902;font-size:11px"> {{langs.valid_startdate }}</div>\n            <div *ngIf="error==3" style="padding:3px;width:100%;color:#FE1902;font-size:11px"> {{langs.valid_enddate }}</div>\n            <div *ngIf="error==4" style="padding:3px;width:100%;color:#FE1902;font-size:11px"> {{langs.valid_startdate_great }}</div>\n            <div *ngIf="error==5" style="padding:3px;width:100%;color:#FE1902;font-size:11px"> {{langs.exceeded_yr }}</div>\n        </div>\n        <ion-row>\n            <ion-col item-center>\n                <button ion-button block color="pbzyellow" (click)="submit()">\n										{{langs.submit_txt}}</button>\n            </ion-col>\n        </ion-row>\n    </ion-card>\n</ion-content>'/*ion-inline-end:"E:\Eclectics projects\PBZ\pbz_mobile_appApril\src\pages\fullstatement\fullstatement.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__providers_validator_validator__["a" /* ValidatorProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_clientdata_clientdata__["a" /* ClientdataProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_global_vars_global_vars__["a" /* GlobalVarsProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__providers_alert_service_alert_service__["a" /* AlertServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], FullstatementPage);
    return FullstatementPage;
}());

//# sourceMappingURL=fullstatement.js.map

/***/ })

});
//# sourceMappingURL=26.js.map