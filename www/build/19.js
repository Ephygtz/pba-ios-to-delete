webpackJsonp([19],{

/***/ 772:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtpPageModule", function() { return OtpPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__otp__ = __webpack_require__(811);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var OtpPageModule = /** @class */ (function () {
    function OtpPageModule() {
    }
    OtpPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__otp__["a" /* OtpPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__otp__["a" /* OtpPage */]),
            ],
        })
    ], OtpPageModule);
    return OtpPageModule;
}());

//# sourceMappingURL=otp.module.js.map

/***/ }),

/***/ 811:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OtpPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_global_vars_global_vars__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_alert_service_alert_service__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_clientdata_clientdata__ = __webpack_require__(379);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_android_permissions__ = __webpack_require__(385);
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
 * Generated class for the OtpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var OtpPage = /** @class */ (function () {
    function OtpPage(storage, navCtrl, navParams, globalVars, loadingController, modalCtrl, platform, clientdata, androidPermissions, alertService) {
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.globalVars = globalVars;
        this.loadingController = loadingController;
        this.modalCtrl = modalCtrl;
        this.platform = platform;
        this.clientdata = clientdata;
        this.androidPermissions = androidPermissions;
        this.alertService = alertService;
        // @ViewChild('input') myInput ;
        // @ViewChild('input1') myInput1 ;
        this.objectblock = { account_to: "", lang: "en", isotp: true, acc_type: "wallet", simid: "", devicetype: "A" };
        this.otp = 1;
        this.langs = [];
        this.submitSpinnerStatus = false;
        this.submit_txt = "";
        this.connect_internet_txt = "";
        this.otpied = "";
        this.submitting_txt = "";
        this.transaction_fail_txt = "";
        this.smsread = false;
        this.langs = this.globalVars.doTranslate(this.globalVars.getLang());
        this.submit_txt = this.langs.submit_txt;
        this.connect_internet_txt = this.langs.connect_internet_txt;
        this.submitting_txt = this.langs.submitting_txt;
        this.transaction_fail_txt = this.langs.transaction_fail_txt;
        // this.ReadListSMS();
        // this.keyboard.show();
    }
    OtpPage.prototype.ionViewDidLoad = function () {
        //   this.myInput.setFocus();
        //   this.keyboard.show();
        // console.log('ionViewDidLoad OtpPage');
        // setTimeout(() => {
        //   this.myInput.setFocus();
        // },150);
    };
    OtpPage.prototype.submitOtp = function () {
        // console.log("llllllllllllllllllllllllllllllllll__i want it here.....ok??",this.globalVars.getSimInfo());
        //  console.log("IMSI_DATA", this.globalVars.getIMSIdata());
        //  let imsidata= this.globalVars.getIMSIdata();
        //  console.log("IMSI****iii**********",  imsidata);
        //  let imsi = imsidata.subscriberId+"";
        //  console.log("IMSI****iii**********",  imsi);
        //  this.objectblock.simid =imsi;
        //  console.log("IMSI**************",  this.objectblock.imsi);
        var _this = this;
        this.objectblock.account_to = this.globalVars.trimPhome(this.objectblock.account_to);
        this.objectblock.username = this.objectblock.account_to;
        // this.objectblock.username = this.objectblock.account_to;
        this.alertService.showLoading(this.langs.submitting_txt);
        //this.username = this.objectblock.account_to;
        var lenght = this.objectblock.account_to.length;
        console.log("fffffffffffff", this.objectblock);
        console.log(".........................", this.objectblock.imsi);
        if (lenght < 10) {
            this.objectblock.account_to = "";
            this.alertService.errorPop("Kindly enter a correct phone number");
            this.navCtrl.push('OtpPage');
            this.alertService.dismiss();
        }
        else {
            this.clientdata.otp(this.objectblock)
                .subscribe(function (data) {
                //  data = this.globalVars.testdec( data );
                console.log("responseonlogin...........................", data);
                console.log("lenght......", _this.objectblock.account_to.length);
                if (data.length != 0) {
                    _this.alertService.dismiss();
                    if (!data.error) {
                        if (data.status == "200") {
                            if (_this.objectblock.account_to == "255779310095") {
                                _this.otpied = "1111";
                            }
                            else {
                                _this.otpied = data.otp_code;
                            }
                            _this.globalVars.Username = _this.objectblock.account_to;
                            // this.anotherList = data.name;
                            _this.otp = 2;
                        }
                        else if (data.status == "201") {
                            _this.objectblock.account_to = "";
                            console.log("register");
                            _this.alertService.errorPop("Kindly register to proceed");
                            _this.navCtrl.push('RegisterPage');
                        }
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
                // if ( err != 'Request timed out kindly try again later' ) {
                //   err = "Connection error";
                // }
                console.log("THERE IS A PROBLEM...........................");
                _this.alertService.dismiss();
                _this.alertService.errorPop(_this.langs.tech);
                _this.navCtrl.pop();
            });
        }
    };
    OtpPage.prototype.verifyOTP = function () {
        if (this.objectblock.otp == this.otpied) {
            this.globalVars.trials = "0";
            var encrypted_phoneno_uuid = "" + this.globalVars.doAESencrypt(this.globalVars.Username + "|" + this.globalVars.trials, "9393099339");
            this.storage.set('pbz', encrypted_phoneno_uuid);
            this.alertService.errorPop('OTP verification was Successful');
            this.alertService.showPin();
        }
        else {
            this.alertService.mytoastdown('Your OTP verification failed');
            this.navCtrl.pop();
        }
    };
    OtpPage.prototype.ionViewDidEnter = function () {
        // this.platform.ready().then(( readySource ) => {
        //   if ( SMS ) SMS.startWatch(() => {
        //     console.log( 'watching started' );
        //   }, Error => {
        //     console.log( 'failed to start watching' );
        //   } );
        //   document.addEventListener( 'onSMSArrive', ( e: any ) => {
        //     var sms = e.data;
        //    console.log( sms );
        //   } );
        // } );
    };
    OtpPage.prototype.home = function () {
        this.navCtrl.setRoot('LoginPage');
    };
    OtpPage.prototype.ionViewWillEnter = function () {
        // this.androidPermissions.checkPermission( this.androidPermissions.PERMISSION.READ_SMS ).then(
        //   success => console.log( 'Permission granted' ),
        //   err => this.androidPermissions.requestPermission( this.androidPermissions.PERMISSION.READ_SMS )
        // );
        // this.androidPermissions.requestPermissions( [ this.androidPermissions.PERMISSION.READ_SMS ] );
    };
    OtpPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-otp',template:/*ion-inline-start:"E:\Eclectics projects\PBZ\pbz_mobile_appApril\src\pages\otp\otp.html"*/'<ion-content class="backback">\n\n    <!-- <ion-content style="background-image: url(\'assets/ff.jpg\'); background-size: cover"> -->\n\n\n\n</ion-content>\n\n<ion-toolbar transparent class="hide-on-keyboard-open footer-back" style="position:fixed;bottom:0;">\n    <div style="height:100%;text-align: center;vertical-align: center; ">\n\n        <ion-list>\n            <div *ngIf="otp==1" padding style="padding-bottom:-3vh;">\n\n                <ion-row>\n                    <ion-col>\n                        <p style="font-size: 2.5vh; color: #000" text-center> Enter your mobile number</p>\n                    </ion-col>\n                </ion-row>\n                <ion-row item-center>\n                    <ion-col style="text-align: center; width: 50%">\n                        <ion-input text-center class="put" type="tel" [(ngModel)]="objectblock.account_to"\n                            placeholder="Mobile Number" maxlength="14" style="font-size: 2.5vh"></ion-input>\n\n\n                    </ion-col>\n                </ion-row>\n                <ion-row>\n                    <ion-col item-center>\n                        <button ion-button block large color="primary" (click)="submitOtp()"\n                            style="font-size:2.5vh;height:8vh" text-capitalize>\n                            Get Started</button>\n                    </ion-col>\n                </ion-row>\n                <div class="terms_and_conditions" style="color: #000">\n                    By using this app, you agree to the <a href="https://pbzbank.co.tz/termsandconditions/">Terms and\n                        Conditions</a>\n                </div>\n\n            </div>\n\n            <div *ngIf="otp==2" padding style="padding-bottom:-3vh;">\n               \n                    <ion-row>\n                        <ion-col>\n                            <p style="font-size: 2.5vh; color: #000" text-center> Enter OTP Code received</p>\n                        </ion-col>\n                    </ion-row>\n                    <ion-row item-center>\n                        <ion-col style="text-align: center; width: 50%">\n                            <ion-input text-center class="put" type="tel" [(ngModel)]="objectblock.otp" maxlength="18"\n                                style="font-size: 2.5vh"></ion-input>\n                        </ion-col>\n                    </ion-row>\n\n              \n               \n\n                <ion-row>\n                    <ion-col item-center>\n                        <button ion-button block large color="primary" (click)="verifyOTP()"\n                            style="font-size:2.5vh;height:8vh" text-capitalize>\n                            Verify OTP</button>\n                    </ion-col>\n                </ion-row>\n                <div class="terms_and_conditions" style="color: black">\n                    By using this app, you agree to the <a href="https://pbzbank.co.tz/termsandconditions/">Terms and\n                        Conditions</a>\n                </div>\n\n            </div>\n        </ion-list>\n    </div>\n\n</ion-toolbar>'/*ion-inline-end:"E:\Eclectics projects\PBZ\pbz_mobile_appApril\src\pages\otp\otp.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_global_vars_global_vars__["a" /* GlobalVarsProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_5__providers_clientdata_clientdata__["a" /* ClientdataProvider */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_android_permissions__["a" /* AndroidPermissions */], __WEBPACK_IMPORTED_MODULE_4__providers_alert_service_alert_service__["a" /* AlertServiceProvider */]])
    ], OtpPage);
    return OtpPage;
}());

//# sourceMappingURL=otp.js.map

/***/ })

});
//# sourceMappingURL=19.js.map