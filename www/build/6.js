webpackJsonp([6],{

/***/ 780:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilitypaymentPageModule", function() { return UtilitypaymentPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utilitypayment__ = __webpack_require__(819);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var UtilitypaymentPageModule = /** @class */ (function () {
    function UtilitypaymentPageModule() {
    }
    UtilitypaymentPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__utilitypayment__["a" /* UtilitypaymentPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__utilitypayment__["a" /* UtilitypaymentPage */])
            ],
        })
    ], UtilitypaymentPageModule);
    return UtilitypaymentPageModule;
}());

//# sourceMappingURL=utilitypayment.module.js.map

/***/ }),

/***/ 786:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Menus */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return govern; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return governothers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return billers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return airtime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return mno; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ft_eng; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return ft_kis; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Menus = /** @class */ (function () {
    function Menus() {
    }
    Menus = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], Menus);
    return Menus;
}());

var govern = [
    {
        "title": "ZNZ Payments",
        "name": "ZNZ",
        "url": "znz",
        "icon": "assets/icon/zan.jpg",
        "active": true,
    },
    {
        "title": "UNION",
        "name": "UNION",
        "url": "union",
        "active": true,
        "icon": "assets/icon/zan.jpg"
    }
    // ,
    // {
    //   "title": "Zanzibar Other Institutions",
    //   "name": "znzotherinstitutions",
    //   "url": "znzotherinstitutions",
    //   "active": true,
    //   "icon": "assets/icon/zan.jpg"
    // }
];
var governothers = [
    {
        "title": "BPRA",
        "name": "BPRA",
        "url": "union",
        "active": true,
        "icon": "assets/icon/zan.jpg"
    },
    {
        "title": "ZFDA",
        "name": "ZFDA",
        "url": "union",
        "active": true,
        "icon": "assets/icon/zan.jpg"
    },
    {
        "title": "ZRB",
        "name": "TAXES",
        "url": "zrb",
        "active": true,
        "icon": "assets/icon/zan.jpg"
    },
    // {
    //   "title": "ZRB Non Taxes",
    //   "name": "MVR",
    //   "url": "zrb",
    //   "active": true,
    //   "icon": "assets/icon/zan.jpg"  }
    //   ,
    {
        "title": "ZIC",
        "name": "ZIC",
        "url": "union",
        "active": true,
        "icon": "assets/icon/zan.jpg"
    },
    {
        "title": "SUZA",
        "name": "SUZA",
        "url": "zrb",
        "active": true,
        "icon": "assets/icon/zan.jpg"
    },
    {
        "title": "GLORIOUS ACADEMY",
        "name": "GLORIOUS",
        "url": "zrb",
        "active": true,
        "icon": "assets/icon/zan.jpg"
    }
];
var billers = [{
        "name": "TUKUZA",
        "icon": "assets/bills/school-fees.png",
        "title": "TUKUZA ",
        "services": [{}],
        "active": false
    },
    {
        "name": "LUKU",
        "icon": "assets/bills/luku.png",
        "title": "LUKU ",
        "services": [{}],
        "active": false
    },
    {
        "name": "DSTV",
        "icon": "assets/bills/dstv.png",
        "title": "DSTV",
        "services": [{}],
        "active": false
    },
    {
        "name": "ZUKU",
        "icon": "assets/bills/zuku.png",
        "title": "ZUKU",
        "services": [{}],
        "active": false
    },
    {
        "name": "TTCL",
        "icon": "assets/bills/ttcl.png",
        "title": "TTCL",
        "services": [{}],
        "active": false
    },
    {
        "name": "NHC",
        "icon": "assets/bills/nhc.jpg",
        "title": "NHC",
        "services": [{}],
        "active": false
    },
    {
        "name": "Smile 4G",
        "icon": "assets/bills/smile.png",
        "title": "Smile 4G",
        "services": [{}],
        "active": false
    },
    {
        "name": "Precision Air",
        "icon": "assets/bills/precision.png",
        "title": "Precision Air",
        "services": [{}],
        "active": false
    }
];
var airtime = [{
        "name": "Zantel",
        "icon": "assets/bills/zantel.png",
        "title": "Zantel",
        "part": "1",
        "active": true
    },
    {
        "name": "Tigo",
        "icon": "assets/bills/tigo.png",
        "title": "Tigo",
        "part": "1",
        "active": true
    },
    {
        "name": "Vodacom ",
        "icon": "assets/bills/vodacom.png",
        "title": "Vodacom",
        "part": "2",
        "active": true
    },
    {
        "name": "Halotel ",
        "icon": "assets/bills/halotel.png",
        "title": "Halotel",
        "part": "2",
        "active": true
    },
    {
        "name": "Airtel ",
        "icon": "assets/bills/airtel.png",
        "title": "Airtel",
        "part": "2",
        "active": true
    },
    {
        "name": "TTCL ",
        "icon": "assets/bills/ttcl.png",
        "title": "TTCL",
        "part": "2",
        "active": true
    }
];
var mno = [{
        "name": "TigoPesa",
        "icon": "assets/send/tigopesa.png",
        "title": "TigoPesa",
        "part": "3",
        "active": true
    },
    {
        "name": "EzyPesa",
        "icon": "assets/send/ezypesa.jpg",
        "title": "EzyPesa",
        "part": "3",
        "active": true
    },
    {
        "name": "HaloPesa",
        "icon": "assets/send/halotel.png",
        "title": "HaloPesa",
        "part": "3",
        "active": true
    },
    {
        "name": "TTCLPESA",
        "icon": "assets/send/ttcl.png",
        "title": "TTCL",
        "part": "3",
        "active": true
    },
    {
        "name": "AirtelMoney",
        "icon": "assets/send/airtelmoney.jpg",
        "title": "AirtelMoney",
        "part": "3",
        "active": true
    },
    {
        "name": "VodaPesa",
        "icon": "assets/send/mpesa.png",
        "title": "VodaPesa",
        "part": "3",
        "active": true
    }
];
var ft_eng = {
    "own": [{
            "name": "My Accounts",
            "icon": "assets/icon/wallet.png",
            "title": "My Accounts",
            "part": "1",
            "active": true
        },
        {
            "name": "PBZ Other Accounts",
            "icon": "assets/send/pbz.png",
            "title": "Other PBZ Accounts",
            "part": "2",
            "active": true
        },
        {
            "name": "cardless",
            "icon": "assets/icon/union.jpg",
            "title": "Cardless",
            "part": "3",
            "active": true
        }
    ],
    "banks": [{
            "name": "ToLocalBanks",
            "icon": "assets/icon/bank.png",
            "title": "Local Banks",
            "part": "7",
            "active": true
        },
        {
            "name": "To International Banks",
            "icon": "assets/icon/bank.png",
            "title": "International Banks",
            "part": "2",
            "active": false
        }
    ]
};
var ft_kis = {
    "own": [{
            "name": "My Accounts",
            "icon": "assets/icon/wallet.png",
            "title": "Accounti Zangu",
            "part": "1",
            "active": true
        },
        {
            "name": "PBZ Other Accounts",
            "icon": "assets/send/pbz.png",
            "title": "Accounti Zinginezo",
            "part": "2",
            "active": true
        },
        {
            "name": "cardless",
            "icon": "assets/icon/union.jpg",
            "title": "Bila Cardi",
            "part": "3",
            "active": true
        },
    ],
    "banks": [{
            "name": "To Local Banks",
            "icon": "assets/icon/bank.png",
            "title": "Banki Za mtaa ",
            "part": "2",
            "active": false
        },
        {
            "name": "To International Banks",
            "icon": "assets/icon/bank.png",
            "title": "benki za kimataifa ",
            "part": "2",
            "active": false
        }
    ]
};
//# sourceMappingURL=menus.js.map

/***/ }),

/***/ 819:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UtilitypaymentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_global_vars_global_vars__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_alert_service_alert_service__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_clientdata_clientdata__ = __webpack_require__(379);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__menus__ = __webpack_require__(786);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UtilitypaymentPage = /** @class */ (function () {
    function UtilitypaymentPage(clientdata, navCtrl, globalVars, alertService, navParams) {
        this.clientdata = clientdata;
        this.navCtrl = navCtrl;
        this.globalVars = globalVars;
        this.alertService = alertService;
        this.navParams = navParams;
        this.utilities = [];
        this.langs = this.globalVars.doTranslate(this.globalVars.getLang());
        this.utilities = __WEBPACK_IMPORTED_MODULE_5__menus__["b" /* billers */];
    }
    UtilitypaymentPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UtilitypaymentPage');
    };
    UtilitypaymentPage.prototype.goHome = function () {
        this.navCtrl.setRoot('HomePage');
    };
    UtilitypaymentPage.prototype.ionViewDidEnter = function () {
        this.globalVars.reload();
    };
    UtilitypaymentPage.prototype.openPage = function (event) {
        var thatt = {};
        thatt = {
            paymento: 1, utility: event
        };
        this.navCtrl.push('BillsPage', {
            title: thatt
        });
    };
    UtilitypaymentPage.prototype.getItems = function (ev) {
        this.utilities;
        var val = ev.target.value;
        if (val && val.trim() != '') {
            this.utilities = this.utilities.filter(function (utility) {
                return (utility.title.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
        else {
            this.utilities = this.globalVars.allData.billers;
        }
    };
    UtilitypaymentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-utilitypayment',template:/*ion-inline-start:"E:\Eclectics projects\PBZ\pbz_mobile_appApril\src\pages\utilitypayment\utilitypayment.html"*/'\n<!-- <ion-header>\n    <ion-navbar color="primary">\n        <ion-title> {{langs.bill_payments}} </ion-title>\n        <ion-buttons right (click)="goHome()">\n            <button ion-button icon-only color="white">\n                <ion-icon name="home"></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n    <ion-searchbar (ionInput)="getItems($event)" showCancelButton="true" animated="true" mode="ios" autocomplete="on" color="primary" placeholder="{{langs.search}}"></ion-searchbar>\n\n</ion-header> -->\n<ion-content class="page-home">\n        <ion-navbar color="primary">\n                <ion-title> {{langs.bill_payments}} </ion-title>\n                <ion-buttons right (click)="goHome()">\n                    <button ion-button icon-only color="white">\n                        <ion-icon name="home"></ion-icon>\n                    </button>\n                </ion-buttons>\n            </ion-navbar>\n            <ion-searchbar (ionInput)="getItems($event)" showCancelButton="true" animated="true" mode="ios" autocomplete="on" color="primary" placeholder="{{langs.search}}"></ion-searchbar>\n        \n    <ion-list>\n        <ion-item *ngFor="let utility of utilities;let i=index" (click)="openPage(utility)">\n            <ion-avatar item-left>\n                <img style="border:1px#00ADEE solid;border-radius:50%;height:40px;width:40px;margin:auto;" src="{{utility.icon}}" />\n            </ion-avatar>\n            <div style="font-family:Ubuntu;color:#2F98FB;font-size:11px;text-transform:uppercase;"> {{utility.title}} </div>\n            <button ion-button icon-only clear item-right>\n            <ion-icon name="ios-arrow-forward" color="primary"></ion-icon>\n          </button>\n        </ion-item>\n    </ion-list>\n\n</ion-content>'/*ion-inline-end:"E:\Eclectics projects\PBZ\pbz_mobile_appApril\src\pages\utilitypayment\utilitypayment.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__providers_clientdata_clientdata__["a" /* ClientdataProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_global_vars_global_vars__["a" /* GlobalVarsProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_alert_service_alert_service__["a" /* AlertServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], UtilitypaymentPage);
    return UtilitypaymentPage;
}());

//# sourceMappingURL=utilitypayment.js.map

/***/ })

});
//# sourceMappingURL=6.js.map