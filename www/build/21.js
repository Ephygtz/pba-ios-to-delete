webpackJsonp([21],{

/***/ 769:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MinistatementPageModule", function() { return MinistatementPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ministatement__ = __webpack_require__(808);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MinistatementPageModule = /** @class */ (function () {
    function MinistatementPageModule() {
    }
    MinistatementPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__ministatement__["a" /* MinistatementPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__ministatement__["a" /* MinistatementPage */])
            ],
        })
    ], MinistatementPageModule);
    return MinistatementPageModule;
}());

//# sourceMappingURL=ministatement.module.js.map

/***/ }),

/***/ 808:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MinistatementPage; });
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





var MinistatementPage = /** @class */ (function () {
    function MinistatementPage(navCtrl, clientdata, globalVars, navParams, loadingController, alertService, alertCtrl) {
        this.navCtrl = navCtrl;
        this.clientdata = clientdata;
        this.globalVars = globalVars;
        this.navParams = navParams;
        this.loadingController = loadingController;
        this.alertService = alertService;
        this.alertCtrl = alertCtrl;
        this.statements = [];
        this.buton = true;
        this.unmasked_accounts = [];
        this.objectblock = {
            username: this.globalVars.getUsername(),
            account_from: '', lang: 'en', type: ''
        };
        this.langs = this.globalVars.doTranslate(this.globalVars.getLang());
        this.objectblock.username = this.globalVars.Username;
        this.accounts = globalVars.linked_acc;
        this.objectblock.account_from = this.accounts[0].acc_number;
    }
    MinistatementPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MinistatementPage');
    };
    MinistatementPage.prototype.goHome = function () {
        this.navCtrl.setRoot('HomePage');
    };
    MinistatementPage.prototype.ionViewDidEnter = function () {
        this.globalVars.reload();
    };
    MinistatementPage.prototype.submit = function () {
        var _this = this;
        if (this.objectblock.account_from === null || this.objectblock.account_from === '' || this.objectblock.account_from === undefined) {
            this.error = 1;
        }
        else {
            if (this.objectblock.account_from.substring(0, 3) == "255") {
                this.objectblock.type = 'MWALLET';
            }
            else {
                this.objectblock.type = 'CBS';
            }
            this.alertService.showLoading(this.langs.submitting_txt);
            this.clientdata.ministatement(this.objectblock)
                .subscribe(function (data) {
                data = _this.globalVars.testdec(data);
                console.log(data);
                if (data.length != 0) {
                    _this.alertService.dismiss();
                    if (!data.error) {
                        _this.response = true;
                        _this.status = data.message;
                        _this.statements = data.statement;
                        _this.datetime = new Date().toLocaleString();
                        _this.buton = false;
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
    MinistatementPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-ministatement',template:/*ion-inline-start:"E:\Eclectics projects\PBZ\pbz_mobile_appApril\src\pages\ministatement\ministatement.html"*/'<!-- <ion-header>\n    <ion-navbar color="primary">\n        <ion-title> {{langs.mini}} </ion-title>\n        <ion-buttons end (click)="goHome()">\n            <button ion-button icon-only color="white">\n                <ion-icon name="home"></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header> -->\n<ion-content>\n\n    <ion-navbar color="primary">\n        <ion-title> {{langs.mini}} </ion-title>\n        <ion-buttons end (click)="goHome()">\n            <button ion-button icon-only color="white">\n                <ion-icon name="home"></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n    <div *ngIf="!response">\n        <ion-card padding>\n            <div>\n                <div style="padding:3px;width:100%;color:#000;font-size:1.6vh"> {{langs.from_acc_text}}</div>\n                <ion-row style="position:relative;height:auto;font-size:1.6vh;border:1px #00ADEE solid;padding:0px;">\n                    <ion-col col-2 style="margin:1px;background:#00ADEE;" class="center">\n                        <ion-icon name="contact" style="font-size:25px" color="pbzyellow"></ion-icon>\n                    </ion-col>\n                    <ion-col>\n                        <ion-select interface="popover" [(ngModel)]="objectblock.account_from" style="text-align:right">\n                            <ion-option style=" padding: 0.3rem 0; background: transparent;\n                        color: white;" *ngFor="let ac of accounts" value="{{ac.acc_number}}"> {{ac.acc_name}}\n                            </ion-option>\n                        </ion-select>\n                    </ion-col>\n                </ion-row>\n                <div *ngIf="error==1" style="padding:3px;width:100%;color:#FE1902;font-size:1.6vh">\n                    {{langs.valid_account }}</div>\n            </div>\n            <ion-row>\n                <ion-col item-center>\n                    <button ion-button block color="pbzyellow" (click)="submit()">\n                        {{langs.submit_txt}}</button>\n                </ion-col>\n            </ion-row>\n        </ion-card>\n    </div>\n    <div *ngIf="response">\n        <p style="text-align:center;color:grey;font-size:1.6vh;width:100%"> {{langs.last_five}} {{datetime}} </p>\n        <ion-list>\n            <ion-row style="margin:3px;border-bottom: 1px solid #B3B3B3" no-padding\n                *ngFor="let statement of statements">\n                <ion-col col-2 item-center style="margin:auto">\n                    <div class="date">\n                        <div class="inner">{{statement.date | date:\'d\'}} <span>{{statement.date | date:\'MMM\'}}</span>\n                        </div>\n                    </div>\n                </ion-col>\n                <ion-col item-center style="margin:auto">\n                    <p item-center style="text-align:left;color:#000;font-family:Ubuntu;font-size:1.6vh;">\n                        {{statement.narration | uppercase }} OF {{statement.amount | currency: \'TZS\'}} AT\n                        {{statement.date | date :\'shortTime\'}}</p>\n                    <p item-end *ngIf="statement.ttype==\'D\'" style="text-align:left;color:#FE1902;font-size:1.5vh;">\n                        {{langs.debit}}: {{statement.amount | currency: \'TZS\'}} </p>\n                    <p item-end *ngIf="statement.ttype==\'C\'" style="text-align:left;color:#53EB02;font-size:1.5vh;">\n                        {{langs.credit}}: {{statement.amount | currency: \'TZS\'}} </p>\n                </ion-col>\n            </ion-row>\n        </ion-list>\n    </div>\n</ion-content>'/*ion-inline-end:"E:\Eclectics projects\PBZ\pbz_mobile_appApril\src\pages\ministatement\ministatement.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__providers_clientdata_clientdata__["a" /* ClientdataProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_global_vars_global_vars__["a" /* GlobalVarsProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__providers_alert_service_alert_service__["a" /* AlertServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], MinistatementPage);
    return MinistatementPage;
}());

//# sourceMappingURL=ministatement.js.map

/***/ })

});
//# sourceMappingURL=21.js.map