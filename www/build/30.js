webpackJsonp([30],{

/***/ 758:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactPageModule", function() { return ContactPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact__ = __webpack_require__(797);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ContactPageModule = /** @class */ (function () {
    function ContactPageModule() {
    }
    ContactPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__contact__["a" /* ContactPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__contact__["a" /* ContactPage */]),
            ],
        })
    ], ContactPageModule);
    return ContactPageModule;
}());

//# sourceMappingURL=contact.module.js.map

/***/ }),

/***/ 797:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_call_number__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_global_vars_global_vars__ = __webpack_require__(93);
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
 * Generated class for the ContactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ContactPage = /** @class */ (function () {
    function ContactPage(globalVars, callNumber, navCtrl, navParams) {
        this.globalVars = globalVars;
        this.callNumber = callNumber;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.contactsList = [];
        this.langs = this.globalVars.doTranslate(this.globalVars.getLang());
        this.list();
    }
    ContactPage.prototype.ionViewDidLoad = function () {
    };
    ContactPage.prototype.ionViewDidEnter = function () {
        this.globalVars.reload();
    };
    ContactPage.prototype.call = function (numb) {
        numb = numb.replace(/\s/g, "");
        console.log(numb);
        this.callNumber.callNumber(numb, true)
            .then(function (res) { return console.log('Launched dialer!', res); })
            .catch(function (err) { return console.log('Error launching dialer', err); });
    };
    ContactPage.prototype.goHome = function () {
        this.navCtrl.pop();
    };
    ContactPage.prototype.getItems = function (ev) {
        // Reset items back to all of the items
        this.list();
        console.log("We are about to search");
        // set val to the value of the searchbar
        var val = ev.target.value;
        console.log(val);
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.contactsList = this.contactsList.filter(function (utility) {
                console.log("FT search");
                console.log(utility.location);
                return (utility.location.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
        else {
            this.list();
        }
    };
    ContactPage.prototype.list = function () {
        this.contactsList = [
            {
                name: 'HEAD OFFICE',
                location: '2nd Floor ZIC Building,Mpirani – Zanzibar',
                tel1: '+255 77 323 5544',
                tel2: '+255 77 752 8033',
                fax: '+255 24 223 1121',
                email: 'info@pbzbank.co.tz'
            },
            {
                name: 'MALINDI BRANCH',
                location: 'Malindi, Zanzibar',
                tel1: '+255 24 223 0569',
                tel2: '',
                fax: ' +255 24 223 8482',
                email: 'malindi@pbzbank.co.tz'
            },
            {
                name: 'MLANDEGE BRANCH',
                location: 'Mlandege, Zanzibar',
                tel1: '+255 24 223 8349',
                tel2: '',
                fax: '+255 24 223 8359',
                email: 'mlandege@pbzbank.co.tz'
            },
            {
                name: 'FORODHANI BRANCH',
                location: 'Forodhani, Zanzibar',
                tel1: '+255 24 223 6046',
                tel2: '',
                fax: '+255 24 223 4539',
                email: 'forodhani@pbzbank.co.tz'
            },
            {
                name: 'CHAKE CHAKE BRANCH',
                location: 'Pemba, Zanzibar',
                tel1: '+255 245 2351',
                tel2: '',
                fax: '+255 245 2139',
                email: 'chakechake@pbzbank.co.tz'
            },
            {
                name: 'TAZARA  BRANCH',
                location: 'Tazara, Dar es Salaam',
                tel1: '+255 22 286 2520',
                tel2: '',
                fax: '+255 24 223 6208',
                email: 'tazara@pbzltd.com'
            },
            {
                name: 'KARIAKOO  BRANCH',
                location: 'Kariakoo, Dar es Salaam',
                tel1: '+255 222 184 610',
                tel2: '',
                fax: '+255 222 184 609',
                email: 'kariakoo@pbzbank.co.tz'
            },
            {
                name: 'MWANAKWEREKWE  BRANCH',
                location: 'Mwanakwerekwe, Zanzibar',
                tel1: '+255 24 223 1389',
                tel2: '',
                fax: '',
                email: 'kwerekwe@pbzbank.co.tz'
            },
            {
                name: 'MTWARA  BRANCH',
                location: 'Tano Road, Mtwara',
                tel1: '+255 232 333 173',
                tel2: '+255 232 333 174',
                fax: '+255 232 333 175',
                email: 'mtwara@pbzbank.co.tz'
            },
            {
                name: 'MAZIZINI SERVICE CENTRE',
                location: 'Mazizini, Zanzibar',
                tel1: '+255732947033',
                tel2: '',
                fax: '',
                email: 'mazizini@pbzbank.co.tz'
            },
            {
                name: 'KIWENGWA SERVICE CENTRE',
                location: 'Kiwengwa, Zanzibar',
                tel1: '+255 732940155',
                tel2: '',
                fax: '',
                email: 'kiwengwa@pbzbank.co.tz'
            },
            {
                name: 'MAKUNDUCHI SERVICE CENTRE',
                location: 'Makunduchi, Zanzibar',
                tel1: '+255 732947034',
                tel2: '',
                fax: '+255 245 2139',
                email: 'makunduchi@pbzbank.co.tz'
            },
            {
                name: 'WETE SERVICE CENTRE',
                location: 'Wete, Zanzibar',
                tel1: '+255 242454285',
                tel2: '',
                fax: '',
                email: 'wete@pbzbank.co.tz'
            },
            {
                name: 'MKOANI  SERVICE CENTRE',
                location: 'Mkoani, Zanzibar',
                tel1: '+255 242456057',
                tel2: '',
                fax: '',
                email: 'mkoani@pbzbank.co.tz'
            },
        ];
        console.log(JSON.stringify(this.contactsList));
    };
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"E:\Eclectics projects\PBZ\pbz_mobile_appApril\src\pages\contact\contact.html"*/'<!-- <ion-header>\n    <ion-navbar color="primary">\n        <ion-title> {{langs.contact_us}} </ion-title>\n        <ion-buttons right (click)="goHome()">\n            <button ion-button icon-only color="white">\n                <ion-icon name="home"></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n    <ion-searchbar (ionInput)="getItems($event)" showCancelButton="true" animated="true" mode="ios" autocomplete="on" color="primary" placeholder="{{langs.search}}"></ion-searchbar>\n\n</ion-header> -->\n<ion-content>\n        <ion-navbar color="primary">\n                <ion-title> {{langs.contact_us}} </ion-title>\n                <ion-buttons right (click)="goHome()">\n                    <button ion-button icon-only color="white">\n                        <ion-icon name="home"></ion-icon>\n                    </button>\n                </ion-buttons>\n            </ion-navbar>\n            <ion-searchbar (ionInput)="getItems($event)" showCancelButton="true" animated="true" mode="ios" autocomplete="on" color="primary" placeholder="{{langs.search}}"></ion-searchbar>\n        \n       \n    <ion-list nolines>\n\n\n        <ion-card style="padding:5px" *ngFor="let c of contactsList">\n            <div (click)="call(c.tel1)" style="float:right;">\n                <button ion-fab mini color="pbzyellow"> \n              <ion-icon name="call"></ion-icon>\n               </button>\n            </div>\n            <p style="text-align:left;color:#00ADEE;font-size:12px;width:100%;text-transform:uppercase;">\n                <b> {{c.name}} </b> </p>\n            <p style="text-align:left;color:grey;font-size:11px;width:100%;text-transform:uppercase;">\n                {{c.location }} </p>\n            <ion-row>\n                <ion-col col-6>\n                    <p style="color:#000;font-size:11px;width:100%;text-transform:uppercase;">\n                        Telephone: <br><b style="font-size:10px;text-transform:lowercase"> {{c.tel1}} <br> {{c.tel2}}</b> </p>\n                </ion-col>\n                <ion-col col-6>\n                    <p style="color:#000;font-size:11px;width:100%;text-transform:uppercase;">\n                        Fax :<br> <b style="font-size:10px;text-transform:lowercase">  {{c.fax}} </b></p>\n                </ion-col>\n            </ion-row>\n            <p style="padding-left:5px;color:#000;font-size:11px;width:100%;text-transform:uppercase;">\n                Email: <b style="font-size:10px;text-transform:lowercase"> {{c.email}}  </b></p>\n\n\n        </ion-card>\n    </ion-list>\n\n\n</ion-content>'/*ion-inline-end:"E:\Eclectics projects\PBZ\pbz_mobile_appApril\src\pages\contact\contact.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_global_vars_global_vars__["a" /* GlobalVarsProvider */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_call_number__["a" /* CallNumber */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ })

});
//# sourceMappingURL=30.js.map