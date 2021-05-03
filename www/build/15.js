webpackJsonp([15],{

/***/ 775:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register__ = __webpack_require__(814);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RegisterPageModule = /** @class */ (function () {
    function RegisterPageModule() {
    }
    RegisterPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__register__["a" /* RegisterPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__register__["a" /* RegisterPage */])
            ],
        })
    ], RegisterPageModule);
    return RegisterPageModule;
}());

//# sourceMappingURL=register.module.js.map

/***/ }),

/***/ 814:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_global_vars_global_vars__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_alert_service_alert_service__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_clientdata_clientdata__ = __webpack_require__(379);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_validator_validator__ = __webpack_require__(380);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(167);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var RegisterPage = /** @class */ (function () {
    function RegisterPage(storage, navCtrl, validator, globalVars, alertService, modalCtrl, navParams, clientdata, menu) {
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.validator = validator;
        this.globalVars = globalVars;
        this.alertService = alertService;
        this.modalCtrl = modalCtrl;
        this.navParams = navParams;
        this.clientdata = clientdata;
        this.menu = menu;
        this.objectblock = { email: '' };
        this.error = 0;
        this.firstform = true;
        this.selectedPage = 'pagerGreen';
        this.selectedPage2 = 'pagerGrey';
        this.ageLimit = "1994";
        this.langs = {};
        this.mpage = 1;
        this.langs = this.globalVars.doTranslate(this.globalVars.getLang());
    }
    RegisterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegisterPage');
    };
    RegisterPage.prototype.onPageDidEnter = function () {
        this.globalVars.pause();
        this.menu.enable(false);
    };
    //   pickDate(){
    // this.datePicker.show({
    //   date: new Date(),
    //   mode: 'date',
    //   androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK
    // }).then(
    //     date => {
    //         console.log( 'Got date: ', date );
    //         this.objectblock.dob = date;
    //     },
    //   err => console.log('Error occurred while getting date: ', err)
    // );
    //   }
    RegisterPage.prototype.submit = function () {
        if (this.objectblock.id == "" || this.objectblock.id == undefined || this.objectblock.id.length < 8 || this.objectblock.id.length > 30) {
            this.error = 6;
        }
        else if (this.objectblock.dob == "" || this.objectblock.dob == undefined) {
            this.error = 7;
        }
        else {
            this.terms();
        }
    };
    RegisterPage.prototype.back = function () {
        this.navCtrl.setRoot('LoginPage');
    };
    RegisterPage.prototype.terms = function () {
        var _this = this;
        var message = this.langs.accept_tncs;
        var template = "<div>" + message + '<br><a  href="https://pbzbank.co.tz/" >view terms and conditions</a>' + "</div>";
        var obj = { body: "", template: template, ttype: "", completed: false, pageTo: '' };
        var myModal = this.modalCtrl.create('ConfirmModalPage', obj);
        myModal.present();
        myModal.onDidDismiss(function (data) {
            if (data) {
                _this.register();
            }
            else { }
        });
    };
    RegisterPage.prototype.goHome = function () {
        this.navCtrl.setRoot('LoginPage');
    };
    RegisterPage.prototype.register = function () {
        var _this = this;
        this.objectblock.username = this.globalVars.trimPhome(this.objectblock.mobile);
        this.objectblock.mobile = this.globalVars.trimPhome(this.objectblock.mobile);
        this.alertService.showLoading(this.langs.submitting_txt);
        this.clientdata.register(this.objectblock)
            .subscribe(function (data) {
            data = _this.globalVars.testdec(data);
            console.log(data);
            if (data.length != 0) {
                _this.alertService.dismiss();
                if (!data.error) {
                    _this.storage.set('customer', _this.objectblock.first);
                    var encrypted_phoneno_uuid = '' + _this.globalVars.doAESencrypt(_this.objectblock.mobile, "9393099339");
                    _this.storage.set('xyz', encrypted_phoneno_uuid + "|" + _this.globalVars.trials);
                    _this.alertService.errorPop(data.message);
                    _this.navCtrl.setRoot('LoginPage');
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
            _this.alertService.errorPop(_this.langs.internet);
        });
    };
    RegisterPage.prototype.openedPage = function (page) {
        if (page == 1) {
            this.mpage = 1;
            this.selectedPage = 'pagerGrey';
            this.selectedPage2 = 'pagerGreen';
        }
        else {
            this.error = 0;
            if (this.objectblock.mobile == "" || this.objectblock.mobile == undefined || this.objectblock.mobile.length < 9) {
                this.error = 1;
            }
            else if (this.objectblock.first == "" || this.objectblock.first == undefined) {
                this.error = 2;
            }
            else if (this.objectblock.second == "" || this.objectblock.second == undefined) {
                this.error = 3;
            }
            else {
                this.mpage = 2;
                this.selectedPage = 'pagerGreen';
                this.selectedPage2 = 'pagerGrey';
            }
        }
    };
    RegisterPage.prototype.validate = function (thevalue) {
        switch (thevalue) {
            case "mobile": {
                if (this.validator.isMobile(this.objectblock.mobile))
                    this.error = 0;
                else
                    this.error = 1;
                break;
            }
            case "id": {
                if (this.validator.isID(this.objectblock.id))
                    this.error = 0;
                else
                    this.error = 6;
                break;
            }
            case "email": {
                if (this.validator.isEmail(this.objectblock.email))
                    this.error = 0;
                else
                    this.error = 5;
                break;
            }
            case "lname": {
                if (this.validator.isName(this.objectblock.last))
                    this.error = 0;
                else
                    this.error = 4;
                break;
            }
            case "sname": {
                if (this.validator.isName(this.objectblock.second))
                    this.error = 0;
                else
                    this.error = 3;
                break;
            }
            case "name": {
                if (this.validator.isName(this.objectblock.first))
                    this.error = 0;
                else
                    this.error = 2;
                break;
            }
            default: {
                this.error = 0;
                break;
            }
        }
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"E:\Eclectics projects\PBZ\pbz_mobile_appApril\src\pages\register\register.html"*/'<!-- <ion-header>\n    <ion-navbar color="primary">\n        <ion-title> {{langs.register}} </ion-title>\n        <ion-buttons end (click)="goHome()">\n            <button ion-button icon-only color="white">\n              <ion-icon name="home"></ion-icon>\n          </button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header> -->\n\n\n<ion-content class="back-view">\n        <ion-navbar color="primary">\n                <ion-title> {{langs.register}} </ion-title>\n                <ion-buttons end (click)="goHome()">\n                    <button ion-button icon-only color="white">\n                      <ion-icon name="home"></ion-icon>\n                  </button>\n                </ion-buttons>\n            </ion-navbar>\n    <ion-card padding>\n        <ion-row style="position:relative;display:flex;align-items:center">\n            <div style="position:absolute;border-radius:5px;top:50%;left: 50%;margin-right: -50%;transform: translate(-50%, -50%); -webkit-transform: translate(-50%, -50%);background:#10175D;height:2px;width:90%;z-index:1"></div>\n            <ion-col class="center">\n                <div class="center {{selectedPage}}" style="color:#fff;border-radius:50%;height:30px;width:30px;z-index:2;border:2px solid #00ADEE" (click)="openedPage(1)">1</div>\n            </ion-col>\n            <ion-col class="center">\n                <div class="center {{selectedPage2}}" style="color:#fff;border-radius:50%;height:30px;width:30px;z-index:2;border:2px solid #00ADEE" (click)="openedPage(2)">2</div>\n            </ion-col>\n        </ion-row>\n        <div *ngIf="mpage==1">\n            <div>\n                <div style="padding:3px;width:100%;color:#000;font-size:11px"> {{langs.username_prompt}}</div>\n                <ion-row style="position:relative;height:40px;font-size:12px;border:1px #00ADEE solid;padding:0px;">\n                    <ion-col col-2 style="margin:1px;background:#00ADEE;" class="center">\n                        <ion-icon name="phone-portrait" style="font-size:25px" color="pbzyellow"></ion-icon>\n                    </ion-col>\n                    <ion-col>\n                        <input (keyup)="validate(\'mobile\')" style="background:rgba(0,0,0,0);color:#000;height:100%;font-size:16px;font-style:bold;width:100%;border:none" type="tel" maxlength="10" placeholder="07**   ******" [(ngModel)]="objectblock.mobile" />\n                    </ion-col>\n                </ion-row>\n                <div *ngIf="error==1" style="padding:3px;width:100%;color:#FE1902;font-size:11px"> {{langs.valid_phone_number }}</div>\n            </div>\n            <div>\n                <div style="padding:3px;width:100%;color:#000;font-size:11px"> {{langs.fname}}</div>\n                <ion-row style="position:relative;height:40px;font-size:12px;border:1px #00ADEE solid;padding:0px;">\n                    <ion-col col-2 style="margin:1px;background:#00ADEE;" class="center">\n                        <ion-icon name="contacts" style="font-size:25px" color="pbzyellow"></ion-icon>\n                    </ion-col>\n                    <ion-col>\n                        <input (keyup)="validate(\'name\')" style="background:rgba(0,0,0,0);color:#000;height:100%;font-size:16px;font-style:bold;width:100%;border:none" type="text" maxlength="50" [(ngModel)]="objectblock.first" />\n                    </ion-col>\n                </ion-row>\n                <div *ngIf="error==2" style="padding:3px;width:100%;color:#FE1902;font-size:11px"> {{langs.valid_name }}</div>\n            </div>\n            <div>\n                <div style="padding:3px;width:100%;color:#000;font-size:11px"> {{langs.sname}}</div>\n                <ion-row style="position:relative;height:40px;font-size:12px;border:1px #00ADEE solid;padding:0px;">\n                    <ion-col col-2 style="margin:1px;background:#00ADEE;" class="center">\n                        <ion-icon name="contacts" style="font-size:25px" color="pbzyellow"></ion-icon>\n                    </ion-col>\n                    <ion-col>\n                        <input (keyup)="validate(\'sname\')" style="background:rgba(0,0,0,0);color:#000;height:100%;font-size:16px;font-style:bold;width:100%;border:none" type="text" maxlength="50" [(ngModel)]="objectblock.second" />\n                    </ion-col>\n                </ion-row>\n                <div *ngIf="error==3" style="padding:3px;width:100%;color:#FE1902;font-size:11px"> {{langs.valid_name }}</div>\n            </div>\n            <div>\n                <div style="padding:3px;width:100%;color:#000;font-size:11px"> {{langs.lname}}</div>\n                <ion-row style="position:relative;height:40px;font-size:12px;border:1px #00ADEE solid;padding:0px;">\n                    <ion-col col-2 style="margin:1px;background:#00ADEE;" class="center">\n                        <ion-icon name="contacts" style="font-size:25px" color="pbzyellow"></ion-icon>\n                    </ion-col>\n                    <ion-col>\n                        <input (keyup)="validate(\'lname\')" style="background:rgba(0,0,0,0);color:#000;height:100%;font-size:16px;font-style:bold;width:100%;border:none" type="text" maxlength="50" [(ngModel)]="objectblock.sir" />\n                    </ion-col>\n                </ion-row>\n                <div *ngIf="error==4" style="padding:3px;width:100%;color:#FE1902;font-size:11px"> {{langs.valid_name }}</div>\n            </div>\n        </div>\n        <div *ngIf="mpage==2">\n            <div>\n                <div style="padding:3px;width:100%;color:#000;font-size:11px"> {{langs.email}}</div>\n                <ion-row style="position:relative;height:40px;font-size:12px;border:1px #00ADEE solid;padding:0px;">\n                    <ion-col col-2 style="margin:1px;background:#00ADEE;" class="center">\n                        <ion-icon name="mail" style="font-size:25px" color="pbzyellow"></ion-icon>\n                    </ion-col>\n                    <ion-col>\n                        <input (keyup)="validate(\'email\')" style="background:rgba(0,0,0,0);color:#000;height:100%;font-size:16px;font-style:bold;width:100%;border:none" type="text" maxlength="50" [(ngModel)]="objectblock.email" />\n                    </ion-col>\n                </ion-row>\n                <div *ngIf="error==5" style="padding:3px;width:100%;color:#FE1902;font-size:11px"> {{langs.valid_email }}</div>\n            </div>\n            <div>\n                <div style="padding:3px;width:100%;color:#000;font-size:11px"> {{langs.id}}</div>\n                <ion-row style="position:relative;height:40px;font-size:12px;border:1px #00ADEE solid;padding:0px;">\n                    <ion-col col-2 style="margin:1px;background:#00ADEE;" class="center">\n                        <ion-icon name="contact" style="font-size:25px" color="pbzyellow"></ion-icon>\n                    </ion-col>\n                    <ion-col>\n                        <input (keyup)="validate(\'id\')" style="background:rgba(0,0,0,0);color:#000;height:100%;font-size:16px;font-style:bold;width:100%;border:none" type="text" maxlength="30" [(ngModel)]="objectblock.id" />\n                    </ion-col>\n                </ion-row>\n                <div *ngIf="error==6" style="padding:3px;width:100%;color:#FE1902;font-size:11px"> {{langs.valid_id}}</div>\n            </div>\n            <div>\n                <div style="padding:3px;width:100%;color:#000;font-size:11px"> {{langs.dob}}</div>\n                <ion-row style="position:relative;height:40px;font-size:12px;border:1px #00ADEE solid;padding:0px;">\n                    <ion-col col-2 style="margin:1px;background:#00ADEE;" class="center">\n                        <ion-icon name="calendar" style="font-size:25px" color="pbzyellow"></ion-icon>\n                    </ion-col>\n                    <ion-col>\n                        <ion-datetime style="background:rgba(0,0,0,0);color:#000;height:100%;font-size:16px;font-style:bold;border:none" displayFormat="DD-MMM-YYYY" [(ngModel)]="objectblock.dob"></ion-datetime>\n                    </ion-col>\n                </ion-row>\n                <div *ngIf="error==7" style="padding:3px;width:100%;color:#FE1902;font-size:11px">{{langs.valid_dob}}</div>\n            </div>\n            <div padding>\n                <p style="text-align:center;color:#000;font-size:12px;text-decoration:underline;">\n                    <a href="https://pbzbank.co.tz/termsandconditions/">   {{langs.terms}}</a>\n                </p>\n            </div>\n        </div>\n\n\n        <ion-row class="inputo" *ngIf="mpage==1">\n            <ion-col item-center>\n                <button ion-button block outline color="nmbblue" (click)="back()">\n										{{langs.back}}</button>\n            </ion-col>\n            <ion-col item-center>\n                <button ion-button block color="pbzyellow" (click)="openedPage(2)">\n						{{langs.next}} </button>\n            </ion-col>\n        </ion-row>\n        <ion-row class="inputo" *ngIf="mpage==2">\n            <ion-col item-center>\n                <button ion-button block outline color="nmbblue" (click)="openedPage(1)">\n										{{langs.back}}</button>\n            </ion-col>\n            <ion-col item-center>\n                <button ion-button block color="pbzyellow" (click)="submit()">\n										{{langs.submit_txt}}</button>\n            </ion-col>\n        </ion-row>\n    </ion-card>\n</ion-content>'/*ion-inline-end:"E:\Eclectics projects\PBZ\pbz_mobile_appApril\src\pages\register\register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_5__providers_validator_validator__["a" /* ValidatorProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_global_vars_global_vars__["a" /* GlobalVarsProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_alert_service_alert_service__["a" /* AlertServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_clientdata_clientdata__["a" /* ClientdataProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ })

});
//# sourceMappingURL=15.js.map