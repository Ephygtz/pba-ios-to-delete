webpackJsonp([5],{

/***/ 748:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AirtimePageModule", function() { return AirtimePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__airtime__ = __webpack_require__(787);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AirtimePageModule = /** @class */ (function () {
    function AirtimePageModule() {
    }
    AirtimePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__airtime__["a" /* AirtimePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__airtime__["a" /* AirtimePage */])
            ],
        })
    ], AirtimePageModule);
    return AirtimePageModule;
}());

//# sourceMappingURL=airtime.module.js.map

/***/ }),

/***/ 785:
/***/ (function(module, exports, __webpack_require__) {

void function(global) {

  'use strict';

  //  ValueError :: String -> Error
  function ValueError(message) {
    var err = new Error(message);
    err.name = 'ValueError';
    return err;
  }

  //  create :: Object -> String,*... -> String
  function create(transformers) {
    return function(template) {
      var args = Array.prototype.slice.call(arguments, 1);
      var idx = 0;
      var state = 'UNDEFINED';

      return template.replace(
        /([{}])\1|[{](.*?)(?:!(.+?))?[}]/g,
        function(match, literal, _key, xf) {
          if (literal != null) {
            return literal;
          }
          var key = _key;
          if (key.length > 0) {
            if (state === 'IMPLICIT') {
              throw ValueError('cannot switch from ' +
                               'implicit to explicit numbering');
            }
            state = 'EXPLICIT';
          } else {
            if (state === 'EXPLICIT') {
              throw ValueError('cannot switch from ' +
                               'explicit to implicit numbering');
            }
            state = 'IMPLICIT';
            key = String(idx);
            idx += 1;
          }

          //  1.  Split the key into a lookup path.
          //  2.  If the first path component is not an index, prepend '0'.
          //  3.  Reduce the lookup path to a single result. If the lookup
          //      succeeds the result is a singleton array containing the
          //      value at the lookup path; otherwise the result is [].
          //  4.  Unwrap the result by reducing with '' as the default value.
          var path = key.split('.');
          var value = (/^\d+$/.test(path[0]) ? path : ['0'].concat(path))
            .reduce(function(maybe, key) {
              return maybe.reduce(function(_, x) {
                return x != null && key in Object(x) ?
                  [typeof x[key] === 'function' ? x[key]() : x[key]] :
                  [];
              }, []);
            }, [args])
            .reduce(function(_, x) { return x; }, '');

          if (xf == null) {
            return value;
          } else if (Object.prototype.hasOwnProperty.call(transformers, xf)) {
            return transformers[xf](value);
          } else {
            throw ValueError('no transformer named "' + xf + '"');
          }
        }
      );
    };
  }

  //  format :: String,*... -> String
  var format = create({});

  //  format.create :: Object -> String,*... -> String
  format.create = create;

  //  format.extend :: Object,Object -> ()
  format.extend = function(prototype, transformers) {
    var $format = create(transformers);
    prototype.format = function() {
      var args = Array.prototype.slice.call(arguments);
      args.unshift(this);
      return $format.apply(global, args);
    };
  };

  /* istanbul ignore else */
  if (true) {
    module.exports = format;
  } else if (typeof define === 'function' && define.amd) {
    define(function() { return format; });
  } else {
    global.format = format;
  }

}.call(this, this);


/***/ }),

/***/ 787:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AirtimePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_global_vars_global_vars__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_alert_service_alert_service__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_clientdata_clientdata__ = __webpack_require__(379);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_validator_validator__ = __webpack_require__(380);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_contacts_contacts__ = __webpack_require__(381);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_string_format__ = __webpack_require__(785);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_string_format___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_string_format__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AirtimePage = /** @class */ (function () {
    function AirtimePage(modalCtrl, contactsProvider, validator, clientdata, alertService, globalVars, navCtrl, navParams) {
        this.modalCtrl = modalCtrl;
        this.contactsProvider = contactsProvider;
        this.validator = validator;
        this.clientdata = clientdata;
        this.alertService = alertService;
        this.globalVars = globalVars;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.objectblock = { receiverno: '', amount: '', lang: '', account_from: '', biller_ref: '', receiver: 'showmine', username: '' };
        this.accounts = [];
        this.responded = false;
        this.error = 0;
        this.cname = "";
        this.unmasked_accounts = [];
        this.field100 = "TIGOTOPUP";
        this.avail = false;
        this.objectblock.receiver = 'showmine';
        this.data = navParams.get("data");
        this.title = this.data.title;
        this.langs = this.globalVars.doTranslate(this.globalVars.getLang());
        this.objectblock.username = this.globalVars.Username;
        this.accounts = globalVars.linked_acc;
        this.objectblock.account_from = this.accounts[0].acc_number;
        this.customer = globalVars.customer_details;
        this.objectblock.recepient = "my";
        this.avail = this.data.active;
        console.log("over here");
        // this.avail = false;  
        if (this.title == "Halotel") {
            this.objectblock.field100 = "HALOTELTOPUP";
        }
        else if (this.title == "Zantel") {
            this.objectblock.field100 = "ZANTELTOPUP";
        }
        else if (this.title == "Tigo") {
            this.objectblock.field100 = "TIGOTOPUP";
        }
        else if (this.title == "Airtel") {
            this.objectblock.field100 = "AIRTELTOPUP";
        }
        else if (this.title == "Vodacom") {
            this.objectblock.field100 = "VODACOMTOPUP";
        }
        else if (this.title == "TTCL") {
            this.objectblock.field100 = "TTCLTOPUP";
        }
        this.checkRecepeint(this.objectblock.recepient);
    }
    AirtimePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AirtimePage');
    };
    AirtimePage.prototype.goHome = function () {
        this.navCtrl.setRoot('HomePage');
    };
    AirtimePage.prototype.checkRecepeint = function (recepient) {
        if (recepient == 'my') {
            console.log("my.............");
            this.objectblock.account_to = this.globalVars.getUsername();
        }
    };
    AirtimePage.prototype.pickContact = function () {
        var _this = this;
        this.objectblock.account_to = "";
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
    AirtimePage.prototype.submit = function () {
        var _this = this;
        console.log("dfghjgyuioipok...............................", this.objectblock.account_to);
        console.log(this.objectblock);
        if (this.objectblock.account_from == null || this.objectblock.account_from == "") {
            this.error = 1;
        }
        else if (this.objectblock.account_to == undefined || this.objectblock.account_to == "" || this.objectblock.account_to == null) {
            this.error = 2;
        }
        else if (this.objectblock.amount === undefined || this.objectblock.amount === "" || this.objectblock.amount === undefined || this.objectblock.amount != this.globalVars.cleanDigit(this.objectblock.amount)) {
            this.error = 3;
        }
        var message = __WEBPACK_IMPORTED_MODULE_7_string_format___default()(this.langs.topup_meso, this.title, this.objectblock);
        var template = "<div>" + message + "</div>";
        var obj = { body: "", template: template, ttype: "", completed: false, pageTo: '' };
        var myModal = this.modalCtrl.create('ConfirmModalPage', obj);
        myModal.present();
        myModal.onDidDismiss(function (data) {
            if (data) {
                _this.request();
            }
        });
    };
    AirtimePage.prototype.ionViewDidEnter = function () {
        this.globalVars.reload();
    };
    AirtimePage.prototype.request = function () {
        var _this = this;
        this.alertService.showLoading(this.langs.submitting_txt);
        this.clientdata.airtime(this.objectblock)
            .subscribe(function (data) {
            data = _this.globalVars.testdec(data);
            console.log("hereeeeee", data);
            if (data.length != 0) {
                console.log(data);
                _this.alertService.dismiss();
                if (!data.error) {
                    _this.alertService.errorPop(data.message);
                    _this.navCtrl.pop();
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
                _this.alertService.dismiss();
                _this.alertService.errorPop(_this.langs.tech);
                _this.navCtrl.pop();
            }
        }, function (err) {
            console.log(err);
            _this.alertService.dismiss();
            _this.alertService.errorPop(_this.langs.tech);
        });
    };
    AirtimePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-airtime',template:/*ion-inline-start:"E:\Eclectics projects\PBZ\pbz_mobile_appApril\src\pages\airtime\airtime.html"*/'<!--\n  Generated template for the SendMoneyPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!-- <ion-header>\n\n    <ion-navbar color="primary">\n        <ion-title> {{ title }} </ion-title>\n        <ion-buttons end (click)="goHome()">\n            <button ion-button icon-only color="white">\n                <ion-icon name="home"></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n\n</ion-header> -->\n\n\n<ion-content class="back-view">\n        <ion-toolbar color="primary">\n                <ion-title> {{ title }} </ion-title>\n                <ion-buttons end (click)="goHome()">\n                    <button ion-button icon-only color="white">\n                        <ion-icon name="home"></ion-icon>\n                    </button>\n                </ion-buttons>\n        </ion-toolbar>\n    <ion-card padding *ngIf="avail">\n        <div>\n            <div style="padding:3px;width:100%;color:#000;font-size:11px"> {{langs.from_acc_text}}</div>\n            <!-- <ion-row style="position:relative;height:40px;font-size:12px;border:1px #00ADEE solid;padding:0px;">\n                <ion-col col-2 style="margin:1px;background:#00ADEE;" class="center">\n                    <ion-icon name="contact" style="font-size:25px" color="pbzyellow"></ion-icon>\n                </ion-col>\n                <ion-col>\n                    <select [(ngModel)]="objectblock.account_from" style="background:rgba(0,0,0,0);color:#000;height:100%;font-size:16px;font-style:bold;width:100%;border:none">\n                        <option *ngFor="let ac of accounts"  value="{{ac.acc_number}}"> {{ac.acc_name}}</option>\n                      \n                    </select> </ion-col>\n            </ion-row> -->\n            <ion-row style="position:relative;height:auto;font-size:1.6vh;border:1px #00ADEE solid;padding:0px;">\n                <ion-col col-2 style="margin:1px;background:#00ADEE;" class="center">\n                    <ion-icon name="contact" style="font-size:25px" color="pbzyellow"></ion-icon>\n                </ion-col>\n                <ion-col>\n                    <ion-select [(ngModel)]="objectblock.account_from" interface="popover" style="text-align:right">\n                        <ion-option style=" padding: 0.3rem 0; background: transparent;\n                    color: white;" *ngFor="let ac of accounts" value="{{ac.acc_number}}"> {{ac.acc_name}}\n                        </ion-option>\n                    </ion-select>\n                </ion-col>\n            </ion-row>\n            <div *ngIf="error==1" style="padding:3px;width:100%;color:#FE1902;font-size:11px"> {{langs.valid_account }}\n            </div>\n        </div>\n\n\n\n        <ion-row padding item-center radio-group [(ngModel)]="objectblock.recepient"\n            (ngModelChange)="checkRecepeint(objectblock.recepient)">\n            <ion-col item-center>\n                <ion-radio value="my"></ion-radio>\n                <span style="font-size:11px;color:#00ADEE">{{langs.my_phone}} <span\n                        class="phone-number">{{customer.phonenumber}}</span></span>\n            </ion-col>\n            <ion-col item-center>\n                <ion-radio value="other"></ion-radio>\n                <span style="font-size:11px;color:#00ADEE">{{langs.other_phone}}</span>\n            </ion-col>\n        </ion-row>\n\n        <div *ngIf="objectblock.recepient==\'other\'">\n            <div style="padding:3px;width:100%;color:#000;font-size:11px"> ({{ title }}) {{langs.username_prompt}}</div>\n            <ion-row style="position:relative;height:50px;font-size:12px;border:1px #00ADEE solid;padding:0px;">\n                <ion-col col-2 style="margin:1px;background:#00ADEE;" class="center">\n                    <ion-icon name="person" style="font-size:25px" color="pbzyellow"></ion-icon>\n                </ion-col>\n                <ion-col>\n                    <input\n                        style="background:rgba(0,0,0,0);color:#000;height:100%;font-size:16px;font-style:bold;width:100%;border:none"\n                        type="text" maxlength="16" [(ngModel)]="objectblock.account_to" />\n                </ion-col>\n                <ion-col col-2 style="margin:1px;" class="center" (click)="pickContact()">\n                    <ion-icon name="search" style="font-size:25px" color="primary"></ion-icon>\n                </ion-col>\n            </ion-row>\n            <div *ngIf="error==2" style="padding:3px;width:100%;color:#FE1902;font-size:11px">\n                {{langs.valid_phone_number }}</div>\n        </div>\n      \n        <div>\n            <ion-row>\n                <ion-col col-6 text-left style="padding:3px;color:#000;font-size:11px"> {{langs.amount}}</ion-col>\n                <!--<ion-col *ngIf="actualBalance" text-right style="color:#FE1902;font-size:11px;font-style:bold"> <b>BAL:{{actualBalance| number}} </b></ion-col>-->\n            </ion-row>\n            <ion-row style="position:relative;height:50px;font-size:12px;border:1px #00ADEE solid;padding:0px;">\n                <ion-col col-2 style="margin:1px;background:#00ADEE;" class="center">\n                    <ion-icon name="cash" style="font-size:25px" color="pbzyellow"></ion-icon>\n                </ion-col>\n                <ion-col>\n                    <input\n                        style="background:rgba(0,0,0,0);color:#000;height:100%;font-size:16px;font-style:bold;width:100%;border:none;text-align: right"\n                        type="tel" maxlength="50" [(ngModel)]="objectblock.amount" />\n                </ion-col>\n            </ion-row>\n            <div *ngIf="error==3" style="padding:3px;width:100%;color:#FE1902;font-size:11px"> {{langs.valid_amount }}\n            </div>\n        </div>\n\n        <button ion-button block color="pbzyellow" (click)="submit()">\n            {{langs.submit_txt}}</button>\n    </ion-card>\n\n    <ion-card padding *ngIf="!avail">\n      \n        <div padding style="text-align:center;color:#000;font-size:12px;width:100%;width:100%">\n            {{langs.service_title |uppercase}} </div>\n\n        <img src="assets/svg/receipt/wait.svg" style="height:50px;width:auto;margin:auto;display:flex;" />\n\n        <div padding style="text-align:center;color:#000;font-size:10px;width:100%;width:100%">\n            {{langs.service_body |uppercase}}\n        </div>\n        <ion-row>\n            <ion-col item-center>\n                <button ion-button block color="pbzyellow" (click)="back()">\n                    {{langs.back }} </button>\n            </ion-col>\n        </ion-row>\n    </ion-card>\n\n</ion-content>'/*ion-inline-end:"E:\Eclectics projects\PBZ\pbz_mobile_appApril\src\pages\airtime\airtime.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */], __WEBPACK_IMPORTED_MODULE_6__providers_contacts_contacts__["a" /* ContactsProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_validator_validator__["a" /* ValidatorProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_clientdata_clientdata__["a" /* ClientdataProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_alert_service_alert_service__["a" /* AlertServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_global_vars_global_vars__["a" /* GlobalVarsProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], AirtimePage);
    return AirtimePage;
}());

//# sourceMappingURL=airtime.js.map

/***/ })

});
//# sourceMappingURL=5.js.map