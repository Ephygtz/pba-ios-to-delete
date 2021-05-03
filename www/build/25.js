webpackJsonp([25],{

/***/ 766:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(805);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */])
            ],
        })
    ], HomePageModule);
    return HomePageModule;
}());

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 805:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_alert_service_alert_service__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_global_vars_global_vars__ = __webpack_require__(93);
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





var HomePage = /** @class */ (function () {
    function HomePage(appCtrl, clientdata, navCtrl, alertService, modalCtrl, alertCtrl, globalVars, navParams) {
        this.appCtrl = appCtrl;
        this.clientdata = clientdata;
        this.navCtrl = navCtrl;
        this.alertService = alertService;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.globalVars = globalVars;
        this.navParams = navParams;
        this.firstform = 1;
        this.customerdat = {};
        this.langs = {};
        this.myDate = new Date().toString();
        this.accounts = [];
        this.greet = "hello";
        this.response_message = "hello";
        this.actualBalance = "0000";
        this.availableBalance = "0000";
        this.objectblock = {
            username: this.globalVars.getUsername(), account_from: '', lang: 'en', type: 'MWALLET'
        };
        this.tab = { pay: 'selected', borrow: 'unselected', save: 'unselected' };
        this.show = 'pay';
        this.sel = "";
        // this.menuCtrl.enable( true, 'myMenu' );
        this.langs = this.globalVars.doTranslate(this.globalVars.getLang());
        this.customerdat = this.globalVars.customer_details;
        this.accounts = globalVars.linked_acc;
        console.log(globalVars.allData);
        this.greet = this.getGreetingTime(new Date());
        // this.objectblock.account_from = this.accounts[ 0 ].acc_number;
        this.load();
    }
    HomePage.prototype.load = function () {
        this.quick_list = [
            { name: this.langs.government, image: 'assets/svg/qr.svg', link: 'GovernmentPage' },
            { name: this.langs.funds_transfer, image: 'assets/svg/transfer.svg', link: 'FundstransferPage' },
            { name: this.langs.withdraw_cash, image: 'assets/svg/withdraw.svg', link: 'WithdrawPage' },
            { name: this.langs.airtime_topup, image: 'assets/svg/airtime.svg', link: 'TopupPage' },
            { name: this.langs.bill_payments, image: 'assets/svg/bill.svg', link: 'UtilitypaymentPage' },
            { name: this.langs.forex, image: 'assets/svg/s_advance.svg', link: 'ForexPage' },
            // { name: this.langs.other_services, image: 'assets/svg/unsecure.svg', link: 'SettingsPage' },
            { name: this.langs.cheque, image: 'assets/svg/card.svg', link: 'ChequerequestPage' },
            { name: this.langs.change_pin_txt, image: 'assets/svg/secure.svg', link: 'ChangePinPage' },
            { name: this.langs.enquiries, image: 'assets/svg/enquire.svg', link: 'EnquiriesPage' },
            { name: this.langs.load_malipo, image: 'assets/svg/withdraw.svg', link: 'showcomingsoon' },
            { name: this.langs.paymerchant, image: 'assets/svg/merchant.svg', link: 'MerchantPage' },
            { name: this.langs.wakfu, image: 'assets/svg/loan.svg', link: 'WakfuPage' }
            // { name: this.langs.language, image: 'assets/svg/language.svg', link: 'lang' }
        ];
    };
    HomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HomePage');
    };
    HomePage.prototype.check = function (ppage) {
        this.navCtrl.push(ppage);
    };
    HomePage.prototype.logout = function () {
        // this.appCtrl.getActiveNav().popToRoot();
        this.navCtrl.setRoot('LoginPage');
    };
    HomePage.prototype.ionViewDidEnter = function () {
        this.globalVars.reload();
    };
    HomePage.prototype.goHome = function () {
        this.exit();
    };
    HomePage.prototype.sideMenu = function () {
        var myModal = this.modalCtrl.create('SidemenuPage');
        myModal.present();
    };
    HomePage.prototype.getGreetingTime = function (currentTime) {
        if (!currentTime) {
            return this.langs.hello;
        }
        var splitAfternoon = 12; // 24hr time to split the afternoon
        var splitEvening = 17; // 24hr time to split the evening
        var currentHour = parseFloat(currentTime.getHours());
        if (currentHour >= splitAfternoon && currentHour <= splitEvening) {
            // Between 12 PM and 5PM
            return this.langs.afternoon;
        }
        else if (currentHour >= splitEvening) {
            // Between 5PM and Midnight
            return this.langs.evening;
        }
        // Between dawn and noon
        return this.langs.morning;
    };
    HomePage.prototype.exit = function () {
        var _this = this;
        var message = this.langs.exiting;
        var template = "<div>" + message + "</div>";
        var obj = { body: "", template: template, ttype: "", completed: false, pageTo: '' };
        var myModal = this.modalCtrl.create('ConfirmModalPage', obj);
        myModal.present();
        myModal.onDidDismiss(function (data) {
            if (data) {
                _this.navCtrl.push('LoginPage');
            }
            else {
            }
        });
    };
    HomePage.prototype.enquiry = function () {
        this.navCtrl.push('BalancePage', { data: '255768043263' });
    };
    HomePage.prototype.showcomingsoon = function () {
        this.alertService.errorPop('Service Unavailable. Coming Soon');
    };
    HomePage.prototype.close = function () {
        this.firstform = 1;
    };
    HomePage.prototype.showConfirm = function () {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: this.langs.language,
            subTitle: this.langs.preferred_lang_txt,
            cssClass: 'popa',
            buttons: [
                {
                    text: 'ENGLISH',
                    handler: function () {
                        _this.globalVars.setLang('en');
                        _this.langs = _this.globalVars.doTranslate(_this.globalVars.getLang());
                        _this.load();
                    }
                },
                {
                    text: 'KISWAHILI',
                    handler: function () {
                        _this.globalVars.setLang('ki');
                        _this.langs = _this.globalVars.doTranslate(_this.globalVars.getLang());
                        _this.load();
                    }
                }
            ]
        });
        confirm.present();
    };
    HomePage.prototype.changelang = function (langus) {
        console.log(langus);
        if (langus == 'ki') {
            this.globalVars.setLang('ki');
            this.langs = this.globalVars.doTranslate(this.globalVars.getLang());
        }
        else if (langus == 'en') {
            this.globalVars.setLang('en');
            this.langs = this.globalVars.doTranslate(this.globalVars.getLang());
        }
    };
    HomePage.prototype.openPage = function (ppage) {
        if (ppage == 'lang') {
            this.showConfirm();
        }
        else if (ppage == 'showcomingsoon') {
            this.showcomingsoon();
        }
        else {
            this.navCtrl.push(ppage);
        }
    };
    HomePage.prototype.submit = function (item) {
        var _this = this;
        this.objectblock.account_from = item.acc_number;
        this.sel = item.acc_name;
        this.firstform = 3;
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
            console.log(this.objectblock);
            this.clientdata.balance(this.objectblock)
                .subscribe(function (data) {
                data = _this.globalVars.testdec(data);
                console.log(data);
                if (data.length != 0) {
                    if (!data.error) {
                        _this.actualBalance = data.actual;
                        _this.availableBalance = data.available;
                        _this.globalVars.actualBalance = _this.actualBalance;
                        _this.myDate = new Date().toLocaleString();
                        _this.firstform = 2;
                    }
                    else if (data.error) {
                        _this.firstform = 1;
                        _this.response_message = data.message;
                    }
                    else {
                        console.log("there was an error try again later");
                        _this.firstform = 1;
                    }
                }
                else {
                    console.log("Balance Timeout Kindly try again");
                    _this.firstform = 1;
                }
            }, function (err) {
                console.log(err);
                _this.alertService.dismiss();
                _this.firstform = 1;
                _this.alertService.mytoastdown(_this.langs.tech);
            });
        }
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"E:\Eclectics projects\PBZ\pbz_mobile_appApril\src\pages\home\home.html"*/'\n<ion-header style="background:#00ADEE">\n    <ion-navbar color="primary">\n        <ion-buttons left (click)="sideMenu()">\n            <button ion-button>\n                <ion-icon name="menu" color="white" style="font-size:25px"></ion-icon>\n            </button>\n        </ion-buttons>\n\n\n        <img src=\'assets/logo_long.png\' style="height:30px;margin:auto;padding-left:5vh " />\n        <ion-buttons end>\n            <button ion-button (click)="logout()">\n                <ion-icon name="md-exit" color="white" style="font-size:25px"></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n    <!-- <div style="padding:5px;text-align:center;width:100%;color:#FFF;font-size:2.0vh;font-family:Ubuntu">\n        {{greet|uppercase }} {{customerdat.customer |uppercase }} </div>-->\n</ion-header>\n\n<ion-content padding>\n\n   \n    <ion-list no-margin no-padding>\n        <ion-list-header style="margin-bottom: 2px; background: transparent">\n            <ion-avatar item-start >\n              <img src="assets/svg/profile.svg" style="height: 50px; width: 50px; margin: 10x">\n          \n             <!-- <img src="assets/svg/hom.svg" style="width:2.8vh" />-->\n          \n            </ion-avatar>\n            <p style="margin-top: 1.5px">{{greet|uppercase }}</p>\n            <p style="font-size: 1.9vh; font-weight: bold" text-wrap ion-text>{{customerdat.customer |uppercase }}</p>\n        </ion-list-header>\n    </ion-list>\n\n    <div style="height:80vh;">\n\n        <ion-row>\n            <ion-col text-center>\n\n                <button (click)="check(\'MinistatementPage\')" color="primary" outline ion-button\n                    style="font-size:1.5vh; height: 4vh; width: 17vh; border-radius:7px">\n                    {{langs.mini}}\n                </button>\n            </ion-col>\n            <ion-col text-center>\n\n                <button (click)="check(\'FullstatementPage\')" color="primary" outline ion-button\n                    style="font-size:1.5vh; height: 4vh; width: 17vh; border-radius:7px">\n                    {{langs.full}}\n                </button>\n            </ion-col>\n        </ion-row>\n        <div style="height:1vh;">\n        </div>\n\n        <ion-row>\n            <ion-col text-center>\n\n                <button (click)="check(\'BalancePage\')" color="primary" outline ion-button\n                    style="font-size:1.5vh; height: 4vh; width: 20vh; border-radius:7px">\n                    {{langs.bal}}\n                </button>\n            </ion-col>\n        </ion-row>\n        <div style="height:1vh;">\n        </div>\n        <div\n            style="padding:5px;text-align:center;width:100%;color:#000;font-size:1.8vh;font-family:UbuntuBold;margin-bottom:2vh">\n            {{langs.main_services |uppercase }} </div>\n        <div style="height:0.3vh;">\n        </div>\n\n        <ion-row text-center>\n            <ion-col col-4 no-padding *ngFor="let item of quick_list">\n                <div class="outer">\n                    <div style=" display:flex;margin:auto;height:6vh;width:6vh;" (click)="openPage(item.link)">\n                        <img src="{{item.image}}" />\n                    </div>\n                    <p class="para"> {{item.name}} </p>\n                </div>\n            </ion-col>\n        </ion-row>\n\n        <!--<ion-row text-center style="color:#333">\n            <ion-col col-4 no-padding *ngFor="let utility of utilities;let i=index" (click)="openPage(utility)">\n                <div class="outer">\n                    <div style=" display:flex;margin:auto;height:6vh;width:6vh;">\n                        <img src="{{utility.icon}}" style="border-radius:50%" /> </div>\n                    <p class="para">\n                        {{utility.title}}</p>\n                </div>\n            </ion-col>\n        </ion-row>-->\n\n\n\n    </div>\n</ion-content>'/*ion-inline-end:"E:\Eclectics projects\PBZ\pbz_mobile_appApril\src\pages\home\home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_4__providers_clientdata_clientdata__["a" /* ClientdataProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_alert_service_alert_service__["a" /* AlertServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__providers_global_vars_global_vars__["a" /* GlobalVarsProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

});
//# sourceMappingURL=25.js.map