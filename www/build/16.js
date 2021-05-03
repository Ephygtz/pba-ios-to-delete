webpackJsonp([16],{

/***/ 774:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile__ = __webpack_require__(813);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProfilePageModule = /** @class */ (function () {
    function ProfilePageModule() {
    }
    ProfilePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__profile__["a" /* ProfilePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__profile__["a" /* ProfilePage */])
            ],
        })
    ], ProfilePageModule);
    return ProfilePageModule;
}());

//# sourceMappingURL=profile.module.js.map

/***/ }),

/***/ 813:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
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





var ProfilePage = /** @class */ (function () {
    function ProfilePage(navCtrl, clientdata, globalVars, navParams, loadingController, alertService, alertCtrl) {
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
        this.customerdat = globalVars.customer_details;
    }
    ProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfilePage');
    };
    ProfilePage.prototype.ionViewDidEnter = function () {
        this.globalVars.reload();
    };
    ProfilePage.prototype.openPage = function (page) {
        this.navCtrl.push(page);
    };
    ProfilePage.prototype.goHome = function () {
        this.navCtrl.setRoot('HomePage');
    };
    ProfilePage.prototype.submit = function () {
        var _this = this;
        if (this.objectblock.account_from === null || this.objectblock.account_from === '' ||
            this.objectblock.account_from === undefined) {
            this.alertService.errorPop(this.langs.invalid_acc);
        }
        else {
            this.objectblock.account_from = this.objectblock.account_from + "";
            if (this.objectblock.account_from.substring(0, 3) == "255") {
                this.objectblock.type = 'MWALLET';
            }
            else {
                this.objectblock.type = 'CBS';
            }
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
                    _this.alertService.myLoadingDismiss();
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
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"E:\Eclectics projects\PBZ\pbz_mobile_appApril\src\pages\profile\profile.html"*/'<ion-header>\n    <ion-navbar color="primary">\n        <ion-title> {{langs.profile}} </ion-title>\n        <ion-buttons end (click)="goHome()">\n            <button ion-button icon-only color="white">\n              <ion-icon name="home"></ion-icon>\n          </button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n\n\n<ion-content class="back-view">\n    <ion-card padding>\n        <ion-row>\n            <ion-col col-3>\n                <ion-avatar item-left>\n                    <img src="assets/images/profile.png" style="height:50px">\n                </ion-avatar>\n            </ion-col>\n            <ion-col>\n                <p style="margin:0px;padding:0px;width:100%;color:#000;font-size:12px;font-family:Ubuntu">{{langs.customer_name}} </p>\n                <p style="text-align:left;color:#000;font-size:14px;width:100%;font-family:Ubuntu;">\n                    {{customerdat.customer}}\n                </p>\n            </ion-col>\n        </ion-row>\n        <ion-row no-padding no-margin style="margin-bottom:2px;">\n            <!--<ion-col no-padding text-left>\n                <p style="width:100%;color:#00ADEE;font-size:11px;font-family:Ubuntu">{{langs.email}} </p>\n                <p style="width:100%;color:#000;font-size:12px"> {{customerdat.email}} </p>\n            </ion-col>-->\n            <ion-col no-padding text-left>\n                <p style="width:100%;color:#00ADEE;font-size:11px;font-family:Ubuntu">{{langs.username_prompt}} </p>\n                <p style="width:100%;color:#000;font-size:12px">{{customerdat.phonenumber}} </p>\n            </ion-col>\n            <ion-col no-padding text-center>\n                <p style="width:100%;color:#00ADEE;font-size:11px;font-family:Ubuntu">{{langs.id}} </p>\n                <p style="width:100%;color:#000;font-size:12px">{{customerdat.idnumber}} </p>\n            </ion-col>\n        </ion-row>\n        <ion-row no-padding no-margin style="margin-bottom:2px;">\n            <!--<ion-col no-padding text-left>\n                <p style="width:100%;color:#00ADEE;font-size:11px;font-family:Ubuntu">{{langs.username_prompt}} </p>\n                <p style="width:100%;color:#000;font-size:12px">{{customerdat.phonenumber}} </p>\n            </ion-col>-->\n            <!--<ion-col no-padding text-center>\n                <p style="width:100%;color:#00ADEE;font-size:11px;font-family:Ubuntu">{{langs.dob}} </p>\n                <p style="width:100%;color:#000;font-size:12px"> {{customerdat.dob}}</p>\n            </ion-col>-->\n        </ion-row>\n    </ion-card>\n</ion-content>'/*ion-inline-end:"E:\Eclectics projects\PBZ\pbz_mobile_appApril\src\pages\profile\profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__providers_clientdata_clientdata__["a" /* ClientdataProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_global_vars_global_vars__["a" /* GlobalVarsProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__providers_alert_service_alert_service__["a" /* AlertServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ })

});
//# sourceMappingURL=16.js.map