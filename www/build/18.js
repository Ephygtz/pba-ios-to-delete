webpackJsonp([18],{

/***/ 771:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PinModalPageModule", function() { return PinModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pin_modal__ = __webpack_require__(810);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PinModalPageModule = /** @class */ (function () {
    function PinModalPageModule() {
    }
    PinModalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__pin_modal__["a" /* PinModalPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__pin_modal__["a" /* PinModalPage */])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__pin_modal__["a" /* PinModalPage */]
            ]
        })
    ], PinModalPageModule);
    return PinModalPageModule;
}());

//# sourceMappingURL=pin-modal.module.js.map

/***/ }),

/***/ 810:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PinModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_global_vars_global_vars__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_alert_service_alert_service__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_clientdata_clientdata__ = __webpack_require__(379);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PinModalPage = /** @class */ (function () {
    function PinModalPage(storage, modalCtrl, platform, clientdata, appCtrl, navParams, viewCtrl, alertService, globalVars, loadingController, navCtrl) {
        this.storage = storage;
        this.modalCtrl = modalCtrl;
        this.platform = platform;
        this.clientdata = clientdata;
        this.appCtrl = appCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.alertService = alertService;
        this.globalVars = globalVars;
        this.loadingController = loadingController;
        this.navCtrl = navCtrl;
        this.template = "<div></div>";
        this.completed = false;
        this.pageTo = "Login";
        this.pin = "";
        this.platform1 = "";
        this.rate = 0;
        this.steps = 0;
        this.accounts = [];
        this.dataObject = {};
        this.one = "numberinput1";
        this.two = "numberinput1";
        this.three = "numberinput1";
        this.four = "numberinput1";
        this.encryptIsPresent = false;
        this.objectblock = {
            username: '', password: '', lang: 'en', platform1: 'A', version: '0.03'
        };
        this.langs = {};
        this.objectblock.username = globalVars.Username;
        this.langs = this.globalVars.doTranslate(this.globalVars.getLang());
    }
    PinModalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ConfirmModal');
    };
    PinModalPage.prototype.ionViewDidEnter = function () {
        this.initializeBackButtonCustomHandler();
    };
    PinModalPage.prototype.ionViewWillLeave = function () {
        this.unregisterBackButtonAction && this.unregisterBackButtonAction();
    };
    PinModalPage.prototype.initializeBackButtonCustomHandler = function () {
        var _this = this;
        this.unregisterBackButtonAction = this.platform.registerBackButtonAction(function () {
            _this.customHandleBackButton();
        }, 10);
    };
    PinModalPage.prototype.customHandleBackButton = function () {
        this.exit();
    };
    PinModalPage.prototype.submit = function () {
        if (this.pin.length == 4) {
            this.viewCtrl.dismiss();
            this.login();
        }
    };
    PinModalPage.prototype.exit = function () {
        // let message = this.langs.exiting;
        // let template = "<div>" + message + "</div>";
        // let obj = { body: "", template: template, ttype: "", completed: false, pageTo: '' };
        // let myModal = this.modalCtrl.create( 'ConfirmModalPage', obj );
        // myModal.present();
        // myModal.onDidDismiss( data => {
        //   console.log( "Data =>" + data );
        //   if ( data ) {
        //     this.platform.exitApp();
        //   }
        //   else {
        //   }
        // } );
        this.navCtrl.setRoot('LoginPage');
    };
    PinModalPage.prototype.login = function () {
        var _this = this;
        if (this.objectblock.username === null || this.objectblock.username === ''
            || this.objectblock.username.length < 9) {
            this.popmeth(this.langs.valid_topup_number);
        }
        else {
            this.objectblock.platform1 = 'A';
            this.objectblock.password = this.pin;
            this.objectblock.username = this.globalVars.trimPhome(this.objectblock.username);
            this.objectblock.password = this.globalVars.hashpin(this.objectblock.username + this.objectblock.password);
            this.alertService.showLoading(this.langs.submitting_txt);
            this.clientdata.login(this.objectblock)
                .subscribe(function (data) {
                _this.alertService.dismiss();
                data = _this.globalVars.testdec(data);
                console.log(data);
                if (data.length != 0) {
                    if (!data.error) {
                        console.log(data);
                        _this.globalVars.trials = "0";
                        var encrypted_phoneno_uuid = "" + _this.globalVars.doAESencrypt(data.mwallet_account + "|" + _this.globalVars.trials, "9393099339");
                        _this.storage.set('pbz', encrypted_phoneno_uuid);
                        var is_first_login = data.is_first_login;
                        _this.globalVars.Username = data.mwallet_account;
                        _this.globalVars.customer_details = data.customer_info;
                        _this.globalVars.linked_acc = data.linked_acc;
                        _this.globalVars.trials = data.trials;
                        _this.globalVars.partial = data.partial_reg;
                        _this.globalVars.is_first_login = data.is_first_login;
                        _this.globalVars.token = data.token;
                        _this.globalVars.wallet_balance = data.wallet_bal;
                        _this.objectblock.password = "";
                        _this.pin = "";
                        if (is_first_login) {
                            _this.navCtrl.setRoot('ChangePinPage');
                        }
                        else {
                            _this.navCtrl.setRoot('HomePage');
                        }
                    }
                    else if (data.error) {
                        _this.objectblock.password = "";
                        _this.pin = "";
                        if (data.field48.includes('Account not found')) {
                            _this.popmeth(data.message);
                            // this.navCtrl.setRoot( 'RegisterPage' );
                        }
                        else if (data.field48.includes('Wrong password')) {
                            if (_this.globalVars.trials == "2") {
                                _this.blockPin();
                            }
                            else {
                                _this.globalVars.trials = parseInt(_this.globalVars.trials) + 1 + "";
                                var encrypted_phoneno_uuid = '' + _this.globalVars.doAESencrypt(_this.globalVars.Username + "|" + _this.globalVars.trials, "9393099339");
                                _this.storage.set('pbz', encrypted_phoneno_uuid);
                                console.log(_this.globalVars.trials);
                                _this.popmeth(_this.langs.wrong_credentials);
                                // this.navCtrl.setRoot( 'LoginPage' );
                            }
                        }
                        else {
                            _this.popmeth(data.message);
                        }
                    }
                    else {
                        _this.popmeth(_this.langs.tech);
                        _this.objectblock.password = "";
                        _this.pin = "";
                    }
                }
                else {
                    _this.objectblock.password = "";
                    _this.pin = "";
                    // this.alertService.dismiss();
                    _this.popmeth(_this.langs.tech);
                }
            }, function (error) {
                _this.objectblock.password = "";
                _this.pin = "";
                _this.alertService.dismiss();
                console.log(error);
                _this.popmeth(_this.langs.internet);
            });
        }
    };
    PinModalPage.prototype.popmeth = function (message) {
        var _this = this;
        var template = "<div>" + message + "</div>";
        var obj = { body: "", template: template, ttype: "", completed: true, pageTo: '' };
        var myModal = this.modalCtrl.create('ConfirmModalPage', obj);
        myModal.present();
        myModal.onDidDismiss(function (data) {
            // console.log( "Data =>" + data );
            // if ( data ) {
            //   this.navCtrl.setRoot( 'LoginPage' );
            // }
            // else {
            //   this.navCtrl.setRoot( 'LoginPage' );
            // }
            _this.navCtrl.setRoot('LoginPage');
        });
    };
    PinModalPage.prototype.change = function () {
        this.navCtrl.setRoot('RegisterPage');
    };
    PinModalPage.prototype.blockPin = function () {
        var _this = this;
        this.clientdata.block(this.objectblock)
            .subscribe(function (data) {
            data = _this.globalVars.testdec(data);
            console.log(data);
            if (data.length != 0) {
                if (!data.error) {
                    _this.popmeth(data.message);
                    _this.globalVars.trials = "0";
                }
                else if (data.error) {
                    _this.popmeth(_this.langs.acc_blocked);
                }
                else {
                    _this.popmeth(_this.langs.acc_blocked);
                }
            }
            else {
                _this.popmeth(_this.langs.tech);
            }
        }, function (err) {
            console.log(err);
            _this.popmeth(_this.langs.tech);
        });
    };
    PinModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-pin-modal',template:/*ion-inline-start:"E:\Eclectics projects\PBZ\pbz_mobile_appApril\src\pages\pin-modal\pin-modal.html"*/'<ion-content  class="backback" >\n  \n\n  \n</ion-content>\n<ion-toolbar transparent class="hide-on-keyboard-open footer-back" style="position:fixed;bottom:0;">\n    <div style="height:100%;text-align: center;vertical-align: center; ">\n\n        \n        <div padding style="padding-bottom:-3vh;">\n           \n            <div>\n                <p style="font-size: 3vh;color: #000" text-center>{{langs.hello}} {{globalVars.customer}} </p>\n            </div>\n            <ion-row>\n                <ion-col>\n                    <p style="font-size: 2.5vh; color: #000" text-center> {{langs.secure_pin}}</p>\n                </ion-col>\n            </ion-row>\n            <ion-row item-center>\n                <ion-col style="text-align: center; width: 50%">\n                    <ion-input text-center class="put" type="password" [(ngModel)]="pin" maxlength="4" style="font-size: 2.5vh"></ion-input>\n                </ion-col>\n            </ion-row>\n\n            <ion-row>\n                <ion-col item-center>\n                    <button ion-button block large color="primary" (click)="submit()" style="font-size:2.5vh;height:8vh" text-capitalize>\n										{{langs.login}}</button>\n                </ion-col>\n            </ion-row>\n        </div>\n    </div>\n</ion-toolbar>'/*ion-inline-end:"E:\Eclectics projects\PBZ\pbz_mobile_appApril\src\pages\pin-modal\pin-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_5__providers_clientdata_clientdata__["a" /* ClientdataProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */], __WEBPACK_IMPORTED_MODULE_4__providers_alert_service_alert_service__["a" /* AlertServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_global_vars_global_vars__["a" /* GlobalVarsProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]])
    ], PinModalPage);
    return PinModalPage;
}());

//# sourceMappingURL=pin-modal.js.map

/***/ })

});
//# sourceMappingURL=18.js.map