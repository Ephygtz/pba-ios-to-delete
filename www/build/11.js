webpackJsonp([11],{

/***/ 781:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WakfuPageModule", function() { return WakfuPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__wakfu__ = __webpack_require__(820);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var WakfuPageModule = /** @class */ (function () {
    function WakfuPageModule() {
    }
    WakfuPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__wakfu__["a" /* WakfuPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__wakfu__["a" /* WakfuPage */])
            ],
        })
    ], WakfuPageModule);
    return WakfuPageModule;
}());

//# sourceMappingURL=wakfu.module.js.map

/***/ }),

/***/ 820:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WakfuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_global_vars_global_vars__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_alert_service_alert_service__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_clientdata_clientdata__ = __webpack_require__(379);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_contacts_contacts__ = __webpack_require__(381);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var WakfuPage = /** @class */ (function () {
    function WakfuPage(contactsProvider, navCtrl, globalVars, modalCtrl, alertService, clientdata, navParams) {
        this.contactsProvider = contactsProvider;
        this.navCtrl = navCtrl;
        this.globalVars = globalVars;
        this.modalCtrl = modalCtrl;
        this.alertService = alertService;
        this.clientdata = clientdata;
        this.navParams = navParams;
        this.accounts = [];
        this.unmasked_accounts = [];
        this.objectblock = {
            username: '', account_from: '', lang: '', account_to: '', biller_ref: '',
            ministry_name: '', refref: '', amount: '',
        };
        this.cname = "";
        this.amount = "";
        this.error = 0;
        this.ispay = false;
        this.avail = false;
        this.unpaid = false;
        this.langs = {};
        this.allNavdata = {};
        this.title = "";
        this.merchantname = "";
        this.merchantnumber = "";
        this.langs = this.globalVars.doTranslate(this.globalVars.getLang());
        this.objectblock.username = this.globalVars.Username;
        this.accounts = globalVars.linked_acc;
        this.objectblock.account_from = this.accounts[0].acc_number;
        this.allNavdata = navParams.get('data');
    }
    WakfuPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CollectionPage');
    };
    WakfuPage.prototype.goHome = function () {
        this.navCtrl.setRoot('HomePage');
    };
    WakfuPage.prototype.back = function () {
        if (this.ispay) {
            this.ispay = false;
            this.objectblock.account_to = "";
        }
        else
            this.navCtrl.pop();
    };
    WakfuPage.prototype.pickContact = function () {
        var _this = this;
        this.objectblock.accountto = "";
        this.contactsProvider.pickContact().then(function (contact) {
            if (contact.phoneNo.length > 1) {
                if (contact.phoneNo[0] == "" || contact.phoneNo[0] == undefined) {
                    _this.alertService.mytoastdown(_this.langs.valid_topup_number);
                }
                else {
                    _this.objectblock.account_to = contact.phoneNo[0];
                }
            }
            else {
                if (contact.phoneNo[0] == "" || contact.phoneNo[0] == undefined) {
                    _this.alertService.mytoastdown(_this.langs.valid_topup_number);
                }
                else {
                    _this.objectblock.account_to = contact.phoneNo[0];
                }
            }
        });
    };
    WakfuPage.prototype.ionViewDidEnter = function () {
        this.globalVars.reload();
    };
    WakfuPage.prototype.confirm = function () {
        var _this = this;
        var message = "Do you want to donate TZS: " + this.objectblock.amount;
        var template = "<div>" + message + "</div>";
        var obj = { body: "", template: template, ttype: "", completed: false, pageTo: '' };
        var myModal = this.modalCtrl.create('ConfirmModalPage', obj);
        myModal.present();
        myModal.onDidDismiss(function (data) {
            if (data) {
                _this.submit();
            }
        });
    };
    WakfuPage.prototype.submit = function () {
        var _this = this;
        this.objectblock.type = 'donate';
        if (this.objectblock.account_from === null || this.objectblock.account_from === '') {
            this.alertService.errorPop(this.langs.invalid_acc);
        }
        else if (this.objectblock.amount === null || this.objectblock.amount === '') {
            this.error = 4;
        }
        else {
            this.alertService.showLoading(this.langs.submitting_txt);
            this.clientdata.wakfu(this.objectblock)
                .subscribe(function (data) {
                data = _this.globalVars.testdec(data);
                console.log(data);
                if (data.length != 0) {
                    _this.alertService.dismiss();
                    if (!data.error) {
                        _this.alertService.errorPop(data.field48);
                        _this.navCtrl.pop();
                    }
                    else if (data.error) {
                        _this.alertService.errorPop(data.field48);
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
    WakfuPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-wakfu',template:/*ion-inline-start:"E:\Eclectics projects\PBZ\pbz_mobile_appApril\src\pages\wakfu\wakfu.html"*/'\n<ion-content class="back-view">\n    <ion-navbar color="primary">\n            <ion-title> Wakfu </ion-title>\n            <ion-buttons end (click)="goHome()">\n                    <button ion-button icon-only color="white">\n                      <ion-icon name="home"></ion-icon>\n                  </button>\n                </ion-buttons>\n        </ion-navbar>\n<ion-card padding *ngIf="!avail">\n   \n\n    <div>\n        <div>\n            <br>\n            <p item-center style="text-align:center;color:#00ADEE;font-size:1.5vh;">Donate</p>\n        \n         \n            <div>\n                <div style="padding:3px;width:100%;color:#000;font-size:1.5vh"> {{langs.from_acc_text}}</div>\n              \n                <ion-row style="position:relative;height:auto;font-size:1.6vh;border:1px #00ADEE solid;padding:0px;">\n                    <ion-col col-2 style="margin:1px;background:#00ADEE;" class="center">\n                        <ion-icon name="contact" style="font-size:25px" color="pbzyellow"></ion-icon>\n                    </ion-col>\n                    <ion-col>\n                        <ion-select [(ngModel)]="objectblock.account_from"  interface="popover" style="text-align:right; ">\n                            <ion-option style=" padding: 0.3rem 0; background: transparent;\n                        color: white;" *ngFor="let ac of accounts" value="{{ac.acc_number}}"> {{ac.acc_name}}\n                            </ion-option>\n                        </ion-select>\n                    </ion-col>\n                </ion-row>\n                <div *ngIf="error==1" style="padding:3px;width:100%;color:#FE1902;font-size:1.5vh"> {{langs.valid_account }}</div>\n            </div>\n          \n\n            <br>\n            <p  item-right style="text-align:left;color:#B3B3B3;font-size:1.9vh;">Enter Amount</p>\n            <ion-row  style="position:relative;height:50px;font-size:12px;border:1px #00ADEE solid;padding:0px;">\n                <ion-col col-2 style="margin:1px;background:#00ADEE;" class="center">\n                    <ion-icon name="cash" style="font-size:25px" color="pbzyellow"></ion-icon>\n                </ion-col>\n                <ion-col>\n                    <input style="background:rgba(0,0,0,0);color:#000;height:100%;font-size:16px;font-style:bold;width:100%;border:none" type="tel" maxlength="50" [(ngModel)]="objectblock.amount" />\n                </ion-col>\n            </ion-row>\n            <div *ngIf="error==4" style="padding:3px;width:100%;color:#FE1902;font-size:1.5vh"> Please Enter an amount</div>\n       \n\n\n            <br>\n        </div>\n        <ion-row>\n            <ion-col>\n                <button  ion-button block color="pbzyellow" (click)="confirm()" no-border style="border-radius:25px;font-size:1.9vh;width:auto;margin-left:auto;margin-right:auto;min-width:120px">\n        {{langs.submit_txt}}\n    </button>\n            </ion-col>\n            <ion-col>\n                <button  ion-button block color="danger" (click)="back()" no-border style="border-radius:25px;font-size:1.9vh;width:auto;margin-left:auto;margin-right:auto;min-width:120px">\n        {{langs.cancel }}\n    </button>\n            </ion-col>\n        </ion-row>\n        \n    </div>\n</ion-card>\n\n<ion-card padding *ngIf="avail">\n    <br>\n    <div padding style="text-align:center;color:#000;font-size:12px;width:100%;width:100%">{{langs.service_title |uppercase}} </div>\n\n    <img src="assets/svg/receipt/wait.svg" style="height:50px;width:auto;margin:auto;display:flex;" />\n\n    <div padding style="text-align:center;color:#000;font-size:10px;width:100%;width:100%"> {{langs.service_body |uppercase}}\n    </div>\n    <ion-row>\n        <ion-col item-center>\n            <button ion-button block color="pbzyellow" (click)="back()">\n                                    {{langs.back }} </button>\n        </ion-col>\n    </ion-row>\n</ion-card>\n\n</ion-content>'/*ion-inline-end:"E:\Eclectics projects\PBZ\pbz_mobile_appApril\src\pages\wakfu\wakfu.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__providers_contacts_contacts__["a" /* ContactsProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_global_vars_global_vars__["a" /* GlobalVarsProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_alert_service_alert_service__["a" /* AlertServiceProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_clientdata_clientdata__["a" /* ClientdataProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], WakfuPage);
    return WakfuPage;
}());

//# sourceMappingURL=wakfu.js.map

/***/ })

});
//# sourceMappingURL=11.js.map