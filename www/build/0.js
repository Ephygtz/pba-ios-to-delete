webpackJsonp([0],{

/***/ 784:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransferPageModule", function() { return TransferPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__transfer__ = __webpack_require__(823);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TransferPageModule = /** @class */ (function () {
    function TransferPageModule() {
    }
    TransferPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__transfer__["a" /* TransferPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__transfer__["a" /* TransferPage */])
            ],
        })
    ], TransferPageModule);
    return TransferPageModule;
}());

//# sourceMappingURL=transfer.module.js.map

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

/***/ 823:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransferPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_global_vars_global_vars__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_alert_service_alert_service__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_clientdata_clientdata__ = __webpack_require__(379);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_validator_validator__ = __webpack_require__(380);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_contacts_contacts__ = __webpack_require__(381);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_string_format__ = __webpack_require__(785);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_string_format___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_string_format__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__banks__ = __webpack_require__(824);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var TransferPage = /** @class */ (function () {
    function TransferPage(contactsProvider, validator, clientdata, navCtrl, navParams, modalCtrl, globalVars, loadingController, alertService, alertCtrl) {
        this.contactsProvider = contactsProvider;
        this.validator = validator;
        this.clientdata = clientdata;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.globalVars = globalVars;
        this.loadingController = loadingController;
        this.alertService = alertService;
        this.alertCtrl = alertCtrl;
        this.title = "";
        this.account = "";
        this.cname = "";
        this.all_accounts = [];
        this.accounts = [];
        this.accounts2 = [];
        this.allbanks = [];
        // objectblock: any = { biller_ref:'', username: '', account_from: '', account_to: '', lang: '', amount: '', type: 'MWallet' };
        this.objectblock = { biller_ref: '', username: '', account_from: '', account_to: '', lang: '', amount: '', receivername: '', reason: '', receiverbank: '', type: 'MWallet' };
        this.objt = { account_to: '', lang: '', acc_type: 'core' };
        this.own = false;
        this.avail = true;
        this.buton = true;
        this.langs = {};
        this.actualBalance = "0";
        this.status = "";
        this.part = "";
        this.error = 0;
        this.firstname = true;
        this.all_unmasked_accounts = [];
        this.unmasked_accounts = [];
        this.benkii = [];
        this.mydata = navParams.get("data");
        this.title = this.mydata.title;
        this.objectblock.biller_ref = this.mydata.name;
        this.actualBalance = globalVars.actualBalance;
        this.part = this.mydata.part;
        this.langs = this.globalVars.doTranslate(this.globalVars.getLang());
        this.allbanks = __WEBPACK_IMPORTED_MODULE_8__banks__["a" /* banks */];
        this.objectblock.username = this.globalVars.Username;
        this.accounts = globalVars.linked_acc;
        this.accounts2 = globalVars.linked_acc;
        this.objectblock.account_from = this.accounts[0].acc_number;
        this.avail = this.mydata.active;
        this.objectblock.firstname = this.globalVars.customer_details.firstname;
        this.objectblock.receiverbank = this.allbanks[0].A + "-" + this.allbanks[0].B;
        //console.log("treeeeeees",this.part)
        if (this.part == '1') {
            this.objectblock.account_to = this.accounts2[0].acc_number;
        }
        else {
            this.objectblock.account_to = "";
        }
    }
    TransferPage.prototype.goHome = function () {
        this.navCtrl.setRoot('HomePage');
    };
    TransferPage.prototype.pickContact = function () {
        var _this = this;
        this.objectblock.accountto = "";
        this.contactsProvider.pickContact().then(function (contact) {
            console.log(contact);
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
    TransferPage.prototype.amountChange = function () {
        if (this.objectblock.amount != this.globalVars.cleanDigit(this.objectblock.amount)) {
            this.error = 3;
        }
        else {
            this.actualBalance = this.globalVars.actualBalance;
            this.actualBalance = parseFloat(this.actualBalance) - parseFloat(this.objectblock.amount) + "";
            this.error = 0;
        }
    };
    TransferPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TransferPage');
    };
    TransferPage.prototype.submit = function () {
        var _this = this;
        if (this.objectblock.account_from == null || this.objectblock.account_from == "") {
            this.error = 1;
        }
        else if (this.objectblock.account_to == undefined || this.objectblock.account_to == "" || this.objectblock.account_to == null) {
            this.error = 2;
        }
        else if (this.objectblock.amount === undefined || this.objectblock.amount === "" || this.objectblock.amount === undefined || this.objectblock.amount != this.globalVars.cleanDigit(this.objectblock.amount)) {
            this.error = 3;
        }
        else if (this.part != "3" && this.objectblock.account_to === this.objectblock.account_from) {
            this.alertService.errorPop(this.langs.same_acc);
            this.error = 4;
        }
        else {
            if (this.part == "3") {
                this.objectblock.type = "mno";
            }
            // if ( this.part == "2" ){
            //   this.enq();
            // }
            // else if (this.part=="3"){
            //   this.enq2();
            // }
            // else{
            //   console.log("but we are heree******")
            //   let message = Format( this.langs.ft_meso, this.objectblock);
            //   let template = "<div>" + message + "</div>";
            //   let obj = { body: "", template: template, ttype: "", completed: false, pageTo: '' };
            //   let myModal = this.modalCtrl.create( 'ConfirmModalPage', obj );
            //   myModal.present();
            //   myModal.onDidDismiss( data => {
            //     if ( data ) { this.request();  } } );
            // }
            if (this.part !== "2") {
                // console.log("but we are heree******")
                var message = __WEBPACK_IMPORTED_MODULE_7_string_format___default()(this.langs.ft_meso, this.objectblock);
                var template = "<div>" + message + "</div>";
                var obj = { body: "", template: template, ttype: "", completed: false, pageTo: '' };
                var myModal = this.modalCtrl.create('ConfirmModalPage', obj);
                myModal.present();
                myModal.onDidDismiss(function (data) {
                    if (data) {
                        _this.request();
                    }
                });
            }
            else {
                this.enq();
            }
        }
    };
    TransferPage.prototype.submit2 = function () {
        var _this = this;
        this.benkii = this.objectblock.receiverbank;
        var names = this.benkii.split("-");
        var bankname = names[0];
        var bankcode = names[1];
        this.objectblock.bankcode = bankcode;
        this.objectblock.bankname = bankname;
        if (this.objectblock.account_from == null || this.objectblock.account_from == "") {
            this.error = 1;
        }
        else if (this.objectblock.account_to == undefined || this.objectblock.account_to == "" || this.objectblock.account_to == null) {
            this.error = 2;
        }
        else if (this.objectblock.amount === undefined || this.objectblock.amount === "" || this.objectblock.amount === undefined || this.objectblock.amount != this.globalVars.cleanDigit(this.objectblock.amount)) {
            this.error = 3;
        }
        else if (this.objectblock.receiverbank === undefined || this.objectblock.receiverbank === "") {
            this.error = 6;
        }
        else if (this.objectblock.receivername === undefined || this.objectblock.receivername === "") {
            this.error = 7;
        }
        else if (this.objectblock.reason === undefined || this.objectblock.reason === "") {
            this.error = 5;
        }
        else if (this.part != "3" && this.objectblock.account_to === this.objectblock.account_from) {
            this.alertService.errorPop(this.langs.same_acc);
            this.error = 4;
        }
        else {
            if (this.part == "3") {
                this.objectblock.type = "mno";
            }
            else if (this.part == "7") {
                this.objectblock.type = "localbanks";
                // this.request();
            }
            if (this.part != "2") {
                var message = __WEBPACK_IMPORTED_MODULE_7_string_format___default()(this.langs.ft_meso, this.objectblock);
                var template = "<div>" + message + "</div>";
                var obj = { body: "", template: template, ttype: "", completed: false, pageTo: '' };
                var myModal = this.modalCtrl.create('ConfirmModalPage', obj);
                myModal.present();
                myModal.onDidDismiss(function (data) {
                    if (data) {
                        _this.request();
                    }
                });
            }
            else {
                this.enq();
            }
        }
    };
    TransferPage.prototype.ionViewDidEnter = function () {
        this.globalVars.reload();
    };
    TransferPage.prototype.enq = function () {
        var _this = this;
        this.objectblock.account_from = this.objectblock.account_from + "";
        if (this.objectblock.type == 'MWallet') {
            this.objt.acc_type = 'wallet';
            this.objt.account_to = this.globalVars.trimPhome(this.objectblock.account_to);
            this.objectblock.account_to = this.globalVars.trimPhome(this.objectblock.account_to);
        }
        else {
            this.objt.acc_type = 'core';
            this.objt.account_to = this.objectblock.account_to;
        }
        this.objt.username = this.objectblock.account_from;
        this.objt.lang = this.globalVars.getLang();
        this.alertService.showLoading("processingggg");
        this.clientdata.enquire(this.objt)
            .subscribe(function (data) {
            data = _this.globalVars.testdec(data);
            console.log(data);
            _this.alertService.dismiss();
            if (data.length != 0) {
                console.log(data);
                if (!data.error) {
                    var message = __WEBPACK_IMPORTED_MODULE_7_string_format___default()(_this.langs.pbz_ft_meso, _this.objectblock, data.field48);
                    var template = "<div>" + message + "</div>";
                    var obj = { body: "", template: template, ttype: "", completed: false, pageTo: '' };
                    var myModal = _this.modalCtrl.create('ConfirmModalPage', obj);
                    myModal.present();
                    myModal.onDidDismiss(function (data) {
                        if (data) {
                            _this.request();
                        }
                    });
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
        }, function (error) {
            _this.alertService.dismiss();
            _this.alertService.errorPop(_this.langs.tech);
        });
    };
    TransferPage.prototype.enq2 = function () {
        var _this = this;
        this.objectblock.account_from = this.objectblock.account_from + "";
        if (this.objectblock.type == 'MWallet') {
            this.objt.acc_type = 'wallet';
            this.objt.account_to = this.globalVars.trimPhome(this.objectblock.account_to);
            this.objectblock.account_to = this.globalVars.trimPhome(this.objectblock.account_to);
        }
        else {
            this.objt.acc_type = 'core';
            this.objt.account_to = this.objectblock.account_to;
        }
        this.objt.username = this.objectblock.account_from;
        this.objt.lang = this.globalVars.getLang();
        this.objt.biller_ref = this.objectblock.biller_ref;
        this.alertService.showLoading("processingggggggg");
        this.clientdata.enquiremno(this.objt)
            .subscribe(function (data) {
            data = _this.globalVars.testdec(data);
            console.log(data);
            _this.alertService.dismiss();
            if (data.length != 0) {
                console.log(data);
                if (!data.error) {
                    var message = __WEBPACK_IMPORTED_MODULE_7_string_format___default()(_this.langs.pbz_ft_meso, _this.objectblock, data.field48);
                    var template = "<div>" + message + "</div>";
                    var obj = { body: "", template: template, ttype: "", completed: false, pageTo: '' };
                    var myModal = _this.modalCtrl.create('ConfirmModalPage', obj);
                    myModal.present();
                    myModal.onDidDismiss(function (data) {
                        if (data) {
                            _this.request();
                        }
                    });
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
        }, function (error) {
            _this.alertService.dismiss();
            _this.alertService.errorPop(_this.langs.tech);
        });
    };
    TransferPage.prototype.back = function () {
        this.navCtrl.pop();
    };
    TransferPage.prototype.request = function () {
        var _this = this;
        if (this.objectblock.type == 'mno') {
            this.objectblock.account_to = this.globalVars.trimPhome(this.objectblock.account_to);
        }
        this.alertService.showLoading(this.langs.submitting_txt);
        this.clientdata.funds(this.objectblock)
            .subscribe(function (data) {
            data = _this.globalVars.testdec(data);
            console.log(data);
            if (data.length != 0) {
                _this.alertService.dismiss();
                if (!data.error) {
                    _this.alertService.errorPop(data.message);
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
            }
        }, function (err) {
            _this.alertService.dismiss();
            _this.alertService.errorPop(_this.langs.tech);
        });
    };
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
    TransferPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-transfer',template:/*ion-inline-start:"E:\Eclectics projects\PBZ\pbz_mobile_appApril\src\pages\transfer\transfer.html"*/'<!-- <ion-header>\n    <ion-navbar color="primary">\n        <ion-title> {{mydata.name}} </ion-title>\n        <ion-buttons end (click)="goHome()">\n            <button ion-button icon-only color="white">\n                <ion-icon name="home"></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header> -->\n<ion-content class="back-view">\n        <ion-navbar color="primary">\n                <ion-title> {{mydata.name}} </ion-title>\n                <ion-buttons end (click)="goHome()">\n                    <button ion-button icon-only color="white">\n                        <ion-icon name="home"></ion-icon>\n                    </button>\n                </ion-buttons>\n            </ion-navbar>\n    <!--<div padding>\n        <img src="{{mydata.icon}}" style="margin:auto;display:block;border-radius:50%;width:50px">\n    </div>-->\n    <div *ngIf="avail">\n        <ion-card padding *ngIf="part==\'3\'">\n            <div>\n                <div style="padding:3px;width:100%;color:#000;font-size:11px"> {{langs.from_acc_text}}</div>\n                <ion-row style="position:relative;font-size:12px;border:1px #00ADEE solid;padding:0px;">\n                    <ion-col col-2 style="margin:1px;background:#00ADEE;" class="center">\n                        <ion-icon name="contact" style="font-size:25px" color="pbzyellow"></ion-icon>\n                    </ion-col>\n                    <ion-col>\n                        <ion-select [(ngModel)]="objectblock.account_from"  interface="popover" style="text-align:right">\n                            <ion-option style=" padding: 0.3rem 0; background: transparent;\n                        color: white;" *ngFor="let ac of accounts" value="{{ac.acc_number}}"> {{ac.acc_name}}\n                            </ion-option>\n                        </ion-select>\n                    </ion-col>\n                </ion-row>\n                <div *ngIf="error==1" style="padding:3px;width:100%;color:#FE1902;font-size:11px"> {{langs.valid_acc }}\n                </div>\n            </div>\n            <div>\n                <br>\n                <div style="padding:3px;width:100%;color:#000;font-size:11px">{{ title }} Account</div>\n                <ion-row style="position:relative;font-size:12px;border:1px #00ADEE solid;padding:0px;">\n                    <ion-col col-2 style="margin:1px;background:#00ADEE;" class="center">\n                        <ion-icon name="person" style="font-size:25px" color="pbzyellow"></ion-icon>\n                    </ion-col>\n                    <ion-col>\n                        <input\n                            style="background:rgba(0,0,0,0);color:#000;height:50px;font-size:16px;font-style:bold;width:100%;border:none; text-align: right"\n                            type="text" maxlength="16" [(ngModel)]="objectblock.account_to" />\n                    </ion-col>\n                    <ion-col col-2 class="center" (click)="pickContact()">\n                        <ion-icon name="search" style="font-size:25px" color="primary"></ion-icon>\n                    </ion-col>\n                </ion-row>\n                <div *ngIf="error==2" style="padding:3px;width:100%;color:#FE1902;font-size:11px"> {{langs.valid_acc }}\n                </div>\n            </div>\n            <br>\n            <div>\n                <ion-row>\n                    <ion-col col-6 text-left style="padding:3px;color:#000;font-size:11px"> {{langs.amount}}</ion-col>\n                    <!--<ion-col *ngIf="actualBalance" text-right style="color:#FE1902;font-size:11px;font-style:bold"> <b>BAL:{{actualBalance| number}} </b></ion-col>-->\n                </ion-row>\n                <ion-row style="position:relative;font-size:12px;border:1px #00ADEE solid;padding:0px;">\n                    <ion-col col-2 style="margin:1px;background:#00ADEE;" class="center">\n                        <ion-icon name="cash" style="font-size:25px" color="pbzyellow"></ion-icon>\n                    </ion-col>\n                    <ion-col>\n                        <input (keyup)="amountChange()"\n                            style="background:rgba(0,0,0,0);color:#000;height:50px;font-size:16px;font-style:bold;width:100%;border:none; text-align: right"\n                            type="tel" maxlength="50" [(ngModel)]="objectblock.amount" />\n                    </ion-col>\n                </ion-row>\n                <div *ngIf="error==3" style="padding:3px;width:100%;color:#FE1902;font-size:11px">\n                    {{langs.valid_amount }}</div>\n            </div>\n            <button ion-button block color="pbzyellow" (click)="submit()">\n                Send</button>\n        </ion-card>\n        <ion-card padding *ngIf="part==\'2\'">\n            <div style="margin-bottom:10px;">\n                <div style=" padding:3px;width:100%;color:#000;font-size:11px"> {{langs.from_acc_text}}</div>\n                <!-- <ion-row style="position:relative;height:40px;font-size:12px;border:1px #00ADEE solid;padding:0px;">\n                    <ion-col col-2 style="margin:1px;background:#00ADEE;" class="center">\n                        <ion-icon name="contact" style="font-size:25px" color="pbzyellow"></ion-icon>\n                    </ion-col>\n                    <ion-col>\n                        <select [(ngModel)]="objectblock.account_from" style="background:rgba(0,0,0,0);color:#000;height:100%;font-size:16px;font-style:bold;width:100%;border:none">\n                        <option *ngFor="let ac of accounts"  value="{{ac.acc_number}}"> {{ac.acc_name}}</option>\n                      \n                    </select> </ion-col>\n                </ion-row> -->\n\n                <ion-row style="position:relative;height:auto;font-size:1.6vh;border:1px #00ADEE solid;padding:0px;">\n                    <ion-col col-2 style="margin:1px;background:#00ADEE;" class="center">\n                        <ion-icon name="contact" style="font-size:25px" color="pbzyellow"></ion-icon>\n                    </ion-col>\n                    <ion-col>\n                        <ion-select [(ngModel)]="objectblock.account_from"  interface="popover" style="text-align:right">\n                            <ion-option style=" padding: 0.3rem 0; background: transparent;\n                        color: white;" *ngFor="let ac of accounts" value="{{ac.acc_number}}"> {{ac.acc_name}}\n                            </ion-option>\n                        </ion-select>\n                    </ion-col>\n                </ion-row>\n                <div *ngIf="error==1" style="padding:3px;width:100%;color:#FE1902;font-size:11px"> {{langs.valid_acc }}\n                </div>\n            </div>\n            <br>\n            <ion-row>\n                <ion-segment [(ngModel)]="objectblock.type" color="black">\n                    <ion-segment-button value="MWallet">\n                        {{langs.to_wallet}}\n                    </ion-segment-button>\n                    <ion-segment-button value="Core">\n                        {{langs.to_core}}\n                    </ion-segment-button>\n                </ion-segment>\n            </ion-row>\n            <br>\n            <div>\n               <!-- <ion-row style="position:relative;font-size:12px;border:1px #00ADEE solid;padding:0px;">\n                    <ion-col col-2 style="margin:1px;background:#00ADEE;" class="center">\n                        <ion-icon name="person" style="font-size:25px" color="pbzyellow"></ion-icon>\n                    </ion-col>\n                    <ion-col>\n                        <input\n                            style="background:rgba(0,0,0,0);color:#000;height:50px;font-size:16px;font-style:bold;width:100%;border:none; text-align: right"\n                            type="text" maxlength="16" [(ngModel)]="objectblock.account_to" />\n                    </ion-col>\n                    <ion-col col-2 class="center" (click)="pickContact()">\n                        <ion-icon name="search" style="font-size:25px" color="primary"></ion-icon>\n                    </ion-col>\n                </ion-row>-->\n\n\n                <div style="padding:3px;width:100%;color:#000;font-size:11px">{{ objectblock.type }} Account</div>\n              \n\n                <!--<ion-row style="position:relative;height:50px;font-size:12px;border:1px #00ADEE solid;padding:0px;">\n                    <ion-col col-2 style="margin:1px;background:#00ADEE;" class="center">\n                        <ion-icon name="person" style="font-size:25px" color="pbzyellow"></ion-icon>\n                    </ion-col>\n                    <ion-col>\n                        <input\n                            style="background:rgba(0,0,0,0);color:#000;height:100%;font-size:16px;font-style:bold;width:100%;border:none; text-align: right"\n                            type="text" maxlength="50" [(ngModel)]="objectblock.account_to" />\n                    </ion-col>\n                    <ion-col col-2 class="center" (click)="pickContact()">\n                        <ion-icon name="search" style="font-size:25px" color="primary"></ion-icon>\n                    </ion-col>\n                </ion-row>-->\n\n\n\n\n                <ion-row style="position:relative;height:50px;font-size:12px;border:1px #00ADEE solid;padding:0px;">\n                        <ion-col col-2 style="margin:1px;background:#00ADEE;" class="center">\n                            <ion-icon name="person" style="font-size:25px" color="pbzyellow"></ion-icon>\n                        </ion-col>\n                        <ion-col>\n                            <input\n                                style="background:rgba(0,0,0,0);color:#000;height:100%;font-size:16px;font-style:bold;width:100%;border:none; text-align: right"\n                                type="text" maxlength="50" [(ngModel)]="objectblock.account_to" />\n                        </ion-col>\n                        <ion-col col-2 class="center" (click)="pickContact()">\n                            <ion-icon name="search" style="font-size:25px" color="primary"></ion-icon>\n                        </ion-col>\n                    </ion-row>\n\n\n\n\n\n                <div *ngIf="error==2" style="padding:3px;width:100%;color:#FE1902;font-size:11px"> {{langs.valid_acc }}\n                </div>\n                <div *ngIf="error==4" style="padding:3px;width:100%;color:#FE1902;font-size:11px"> {{langs.same_acc }}\n                </div>\n            </div>\n<br>\n            <div>\n            <!--    <ion-row>\n                    <ion-col col-6 text-left style="padding:3px;color:#000;font-size:11px"> {{langs.amount}}</ion-col>\n                </ion-row>\n                <ion-row style="position:relative;height:50px;font-size:12px;border:1px #00ADEE solid;padding:0px;">\n                    <ion-col col-2 style="margin:1px;background:#00ADEE;" class="center">\n                        <ion-icon name="cash" style="font-size:25px" color="pbzyellow"></ion-icon>\n                    </ion-col>\n                    <ion-col>\n                        <input\n                            style="background:rgba(0,0,0,0);color:#000;height:50px;font-size:16px;font-style:bold;width:100%;border:none; text-align: right"\n                            type="tel" maxlength="50" [(ngModel)]="objectblock.amount" />\n                    </ion-col>\n                </ion-row>-->\n\n                \n                <div style="padding:3px;width:100%;color:#000;font-size:11px">{{ langs.amount }} </div>\n              \n\n                <ion-row style="position:relative;height:50px;font-size:12px;border:1px #00ADEE solid;padding:0px;">\n                    <ion-col col-2 style="margin:1px;background:#00ADEE;" class="center">\n                        <ion-icon name="cash" style="font-size:25px" color="pbzyellow"></ion-icon>\n                    </ion-col>\n                    <ion-col>\n                        <input\n                            style="background:rgba(0,0,0,0);color:#000;height:100%;font-size:16px;font-style:bold;width:100%;border:none; text-align: right"\n                            type="text" maxlength="50" [(ngModel)]="objectblock.amount" />\n                    </ion-col>\n                   \n                </ion-row>\n\n\n\n\n                <div *ngIf="error==3" style="padding:3px;width:100%;color:#FE1902;font-size:11px">\n                    {{langs.valid_amount }}</div>\n            </div>\n            <button ion-button block color="pbzyellow" (click)="submit()">\n                {{langs.submit_txt}}</button>\n        </ion-card>\n\n        <ion-card padding *ngIf="part==\'7\'">\n            <div style="margin-bottom:10px;">\n                <div style=" padding:3px;width:100%;color:#000;font-size:11px"> {{langs.from_acc_text}}</div>\n                <ion-row style="position:relative;height:55px;font-size:12px;border:1px #00ADEE solid;padding:0px;">\n                    <ion-col col-2 style="margin:1px;background:#00ADEE;" class="center">\n                        <ion-icon name="contact" style="font-size:25px" color="pbzyellow"></ion-icon>\n                    </ion-col>\n                    <ion-col>\n                        <ion-select [(ngModel)]="objectblock.account_from"  interface="popover" style="text-align:right; font-size: 11px">\n                            <ion-option style=" padding: 0.3rem 0; background: transparent;\n                        color: white;" *ngFor="let ac of accounts" value="{{ac.acc_number}}"> {{ac.acc_name}}\n                            </ion-option>\n                        </ion-select>\n                    </ion-col>\n                </ion-row>\n                <div *ngIf="error==1" style="padding:3px;width:100%;color:#FE1902;font-size:11px"> {{langs.valid_acc }}\n                </div>\n            </div>\n\n<br>\n\n            <div>\n                <ion-row>\n                    <ion-col col-6 text-left style="padding:3px;color:#000;font-size:11px"> {{langs.receiverbank}}\n                    </ion-col>\n                </ion-row>\n                <ion-row style="position:relative;height:55px;font-size:7px;border:1px #00ADEE solid;padding:0px;">\n                    <ion-col col-2 style="background:#00ADEE;" class="center">\n                        <ion-icon name="briefcase" style="font-size:25px" color="pbzyellow"></ion-icon>\n                    </ion-col>\n\n                    <ion-col>\n                        <ion-select [(ngModel)]="objectblock.receiverbank"  interface="popover" style="text-align:right;font-size: 10px">\n                            <ion-option text-wrap style=" background: transparent;\n                        color: white;" *ngFor="let allb of allbanks" value="{{allb.A}}-{{allb.B}}"> {{allb.A}}\n                            </ion-option>\n                        </ion-select>\n                    </ion-col>\n\n                    <!-- <ion-col>\n                        <select [(ngModel)]="objectblock.receiverbank"\n                            style="background:rgba(0,0,0,0);color:#000;height:100%;font-size:16px;font-style:bold;width:100%;border:none">\n                            <option *ngFor="let al of allbanks" value="{{bank.A}}"> {{al.A}}</option>\n\n                        </select> </ion-col> -->\n                </ion-row>\n                <div *ngIf="error==7" style="padding:3px;width:100%;color:#FE1902;font-size:11px">\n                    {{langs.valid_bank }}</div>\n            </div>\n            <br>\n\n            <div>\n                <div style="padding:3px;width:100%;color:#000;font-size:11px"> {{langs.to_acc_text }} </div>\n                <ion-row style="position:relative;height:50px;font-size:12px;border:1px #00ADEE solid;padding:0px;">\n                    <ion-col col-2 style="margin:1px;background:#00ADEE;" class="center">\n                        <ion-icon name="person" style="font-size:25px" color="pbzyellow"></ion-icon>\n                    </ion-col>\n                    <ion-col>\n                        <input\n                            style="background:rgba(0,0,0,0);color:#000;height:100%;font-size:16px;font-style:bold;width:100%;border:none; text-align: right"\n                            type="text" maxlength="16" [(ngModel)]="objectblock.account_to" />\n                    </ion-col>\n                    <ion-col col-2 class="center" (click)="pickContact()">\n                        <ion-icon name="search" style="font-size:25px" color="primary"></ion-icon>\n                    </ion-col>\n                </ion-row>\n                <div *ngIf="error==2" style="padding:3px;width:100%;color:#FE1902;font-size:11px"> {{langs.valid_acc }}\n                </div>\n                <div *ngIf="error==4" style="padding:3px;width:100%;color:#FE1902;font-size:11px"> {{langs.same_acc }}\n                </div>\n            </div>\n            <br>\n            <div>\n               <!-- <ion-row>\n                    <ion-col col-6 text-left style="padding:3px;color:#000;font-size:11px"> {{langs.receivername}}\n                    </ion-col>\n                </ion-row>-->\n                <div style="padding:3px;width:100%;color:#000;font-size:11px"> {{langs.receivername }} </div>\n                \n              <!--  <ion-row style="position:relative;height:50px;font-size:12px;border:1px #00ADEE solid;padding:0px;">\n                    <ion-col col-2 style="margin:1px;background:#00ADEE;" class="center">\n                        <ion-icon name="clipboard" style="font-size:25px" color="pbzyellow"></ion-icon>\n                    </ion-col>\n                    <ion-col>\n                        <input\n                            style="background:rgba(0,0,0,0);color:#000;height:50px;font-size:16px;font-style:bold;width:100%;border:none;text-align: right"\n                            type="text" maxlength="50" [(ngModel)]="objectblock.receivername" />\n                    </ion-col>\n                </ion-row>-->\n                <ion-row style="position:relative;height:50px;font-size:12px;border:1px #00ADEE solid;padding:0px;">\n                    <ion-col col-2 style="margin:1px;background:#00ADEE;" class="center">\n                        <ion-icon name="clipboard" style="font-size:25px" color="pbzyellow"></ion-icon>\n                    </ion-col>\n                    <ion-col>\n                        <input\n                            style="background:rgba(0,0,0,0);color:#000;height:100%;font-size:16px;font-style:bold;width:100%;border:none; text-align: right"\n                            type="text" maxlength="50" [(ngModel)]="objectblock.receivername" />\n                    </ion-col>\n                   \n                </ion-row>\n\n\n\n\n                <div *ngIf="error==6" style="padding:3px;width:100%;color:#FE1902;font-size:11px">\n                    {{langs.valid_receivername }}</div>\n            </div>\n            <br>\n            <div>\n              <!--  <ion-row>\n                    <ion-col col-6 text-left style="padding:3px;color:#000;font-size:11px"> {{langs.reason1}}</ion-col>\n                </ion-row>-->\n               <!--<ion-row style="position:relative;height:50px;font-size:12px;border:1px #00ADEE solid;padding:0px;">\n                    <ion-col col-2 style="margin:1px;background:#00ADEE;" class="center">\n                        <ion-icon name="clipboard" style="font-size:25px" color="pbzyellow"></ion-icon>\n                    </ion-col>\n                    <ion-col>\n                        <input\n                            style="background:rgba(0,0,0,0);color:#000;height:50px;font-size:16px;font-style:bold;width:100%;border:none;text-align: right;"\n                            type="text" maxlength="50" [(ngModel)]="objectblock.reason" />\n                    </ion-col>\n                </ion-row>-->\n                <div style="padding:3px;width:100%;color:#000;font-size:11px"> {{langs.reason1 }} </div>\n                \n\n                <ion-row style="position:relative;height:50px;font-size:12px;border:1px #00ADEE solid;padding:0px;">\n                    <ion-col col-2 style="margin:1px;background:#00ADEE;" class="center">\n                        <ion-icon name="clipboard" style="font-size:25px" color="pbzyellow"></ion-icon>\n                    </ion-col>\n                    <ion-col>\n                        <input\n                            style="background:rgba(0,0,0,0);color:#000;height:100%;font-size:16px;font-style:bold;width:100%;border:none; text-align: right"\n                            type="text" maxlength="50" [(ngModel)]="objectblock.reason" />\n                    </ion-col>\n                   \n                </ion-row>\n\n                <div *ngIf="error==5" style="padding:3px;width:100%;color:#FE1902;font-size:11px">\n                    {{langs.valid_reason }}</div>\n            </div>\n            <br>\n            <div>\n             <!--   <ion-row>\n                    <ion-col col-6 text-left style="padding:3px;color:#000;font-size:11px"> {{langs.amount}}</ion-col>\n                </ion-row>\n                <ion-row style="position:relative;height:50px;font-size:12px;border:1px #00ADEE solid;padding:0px;">\n                    <ion-col col-2 style="margin:1px;background:#00ADEE;" class="center">\n                        <ion-icon name="cash" style="font-size:25px" color="pbzyellow"></ion-icon>\n                    </ion-col>\n                    <ion-col>\n                        <input\n                            style="background:rgba(0,0,0,0);color:#000;height:50px;font-size:16px;font-style:bold;width:100%;border:none; text-align: right"\n                            type="tel" maxlength="50" [(ngModel)]="objectblock.amount" />\n                    </ion-col>\n                </ion-row>-->\n\n                <div style="padding:3px;width:100%;color:#000;font-size:11px"> {{langs.amount }} </div>\n                \n\n                <ion-row style="position:relative;height:50px;font-size:12px;border:1px #00ADEE solid;padding:0px;">\n                    <ion-col col-2 style="margin:1px;background:#00ADEE;" class="center">\n                        <ion-icon name="cash" style="font-size:25px" color="pbzyellow"></ion-icon>\n                    </ion-col>\n                    <ion-col>\n                        <input\n                            style="background:rgba(0,0,0,0);color:#000;height:100%;font-size:16px;font-style:bold;width:100%;border:none; text-align: right"\n                            type="text" maxlength="50" [(ngModel)]="objectblock.amount" />\n                    </ion-col>\n                   \n                </ion-row>\n                <div *ngIf="error==3" style="padding:3px;width:100%;color:#FE1902;font-size:11px">\n                    {{langs.valid_amount }}</div>\n            </div>\n            <br>\n            <button ion-button block color="pbzyellow" (click)="submit2()">\n                {{langs.submit_txt}}</button>\n        </ion-card>\n\n\n        <ion-card padding *ngIf="part==\'1\'">\n            <div>\n                <!-- <ion-row style="position:relative;height:40px;font-size:12px;border:1px #00ADEE solid;padding:0px;">\n                    <ion-col col-2 style="margin:1px;background:#00ADEE;" class="center">\n                        <ion-icon name="contact" style="font-size:25px" color="pbzyellow"></ion-icon>\n                    </ion-col>\n                    <ion-col>\n                        <select [(ngModel)]="objectblock.account_from" style="background:rgba(0,0,0,0);color:#000;height:100%;font-size:16px;font-style:bold;width:100%;border:none">\n                        <option *ngFor="let ac of accounts"  value="{{ac.acc_number}}"> {{ac.acc_name}}</option>\n                    </select> </ion-col>\n                </ion-row> -->\n                <div style="padding:3px;width:100%;color:#000;font-size:11px"> {{langs.from_acc_text}}</div>\n              \n                <ion-row style="position:relative;height:auto;font-size:1.6vh;border:1px #00ADEE solid;padding:0px;">\n                    <ion-col col-2 style="margin:1px;background:#00ADEE;" class="center">\n                        <ion-icon name="contact" style="font-size:25px" color="pbzyellow"></ion-icon>\n                    </ion-col>\n                    <ion-col>\n                        <ion-select [(ngModel)]="objectblock.account_from"  interface="popover" style="text-align:right">\n                            <ion-option style=" padding: 0.3rem 0; background: transparent;\n                        color: white;" *ngFor="let ac of accounts" value="{{ac.acc_number}}"> {{ac.acc_name}}\n                            </ion-option>\n                        </ion-select>\n                    </ion-col>\n                </ion-row>\n                <div *ngIf="error==1" style="padding:3px;width:100%;color:#FE1902;font-size:11px"> {{langs.valid_acc }}\n                </div>\n            </div>\n<br>\n            <div>\n                <div style="padding:3px;width:100%;color:#000;font-size:11px"> {{langs.to_acc_text}}</div>\n               <!-- <ion-row style="position:relative;height:50px;font-size:12px;border:1px #00ADEE solid;padding:0px;">\n                    <ion-col col-2 style="margin:1px;background:#00ADEE;" class="center">\n                        <ion-icon name="contact" style="font-size:25px" color="pbzyellow"></ion-icon>\n                    </ion-col>\n                    <ion-col>\n                        <ion-select [(ngModel)]="objectblock.account_to"  interface="popover" style="text-align:right">\n                            <ion-option style=" padding: 0.3rem 0; background: transparent;\n                        color: white;" *ngFor="let ac of accounts" value="{{ac.acc_number}}"> {{ac.acc_name}}\n                            </ion-option>\n                        </ion-select>\n                    </ion-col>\n                </ion-row>-->\n\n\n\n                <ion-row style="position:relative;height:auto;font-size:1.6vh;border:1px #00ADEE solid;padding:0px;">\n                        <ion-col col-2 style="margin:1px;background:#00ADEE;" class="center">\n                            <ion-icon name="contact" style="font-size:25px" color="pbzyellow"></ion-icon>\n                        </ion-col>\n                        <ion-col>\n                                <ion-select [(ngModel)]="objectblock.account_to"  interface="popover" style="text-align:right">\n                                        <ion-option style=" padding: 0.3rem 0; background: transparent;\n                                    color: white;" *ngFor="let ac of accounts" value="{{ac.acc_number}}"> {{ac.acc_name}}\n                                        </ion-option>\n                                    </ion-select>\n                            </ion-col>\n                    </ion-row>\n\n\n\n\n\n                <div *ngIf="error==2" style="padding:3px;width:100%;color:#FE1902;font-size:11px"> {{langs.valid_acc }}\n                </div>\n            </div>\n            <br>\n            <div>\n\n\n\n               <!-- <ion-row>\n                    <ion-col col-6 text-left style="padding:3px;color:#000;font-size:11px"> {{langs.amount}}</ion-col>\n                </ion-row>\n                <ion-row style="position:relative;height:50px;font-size:12px;border:1px #00ADEE solid;padding:0px;">\n                    <ion-col col-2 style="margin:1px;background:#00ADEE;" class="center">\n                        <ion-icon name="cash" style="font-size:25px" color="pbzyellow"></ion-icon>\n                    </ion-col>\n                    <ion-col>\n                        <input\n                            style="background:rgba(0,0,0,0);color:#000;height:50px;font-size:16px;font-style:bold;width:100%;border:none; text-align: right"\n                            type="tel" maxlength="50" [(ngModel)]="objectblock.amount" />\n                    </ion-col>\n                </ion-row>-->\n\n                <div style="padding:3px;width:100%;color:#000;font-size:11px"> {{langs.amount}}</div>\n              \n                <ion-row style="position:relative;height:auto;font-size:1.6vh;border:1px #00ADEE solid;padding:0px;">\n                    <ion-col col-2 style="margin:1px;background:#00ADEE;" class="center">\n                        <ion-icon name="cash" style="font-size:25px" color="pbzyellow"></ion-icon>\n                    </ion-col>\n                    <ion-col>\n                            <input\n                                style="background:rgba(0,0,0,0);color:#000;height:50px;font-size:16px;font-style:bold;width:100%;border:none; text-align: right"\n                                type="tel" maxlength="50" [(ngModel)]="objectblock.amount" />\n                        </ion-col>\n                </ion-row>\n\n\n\n                <div *ngIf="error==3" style="padding:3px;width:100%;color:#FE1902;font-size:11px">\n                    {{langs.valid_amount }}</div>\n            </div>\n            <button ion-button block color="pbzyellow" (click)="submit()">\n                {{langs.submit_txt}}</button>\n        </ion-card>\n    </div>\n\n    <ion-card padding *ngIf="!avail">\n        <br>\n        <div padding style="text-align:center;color:#000;font-size:12px;width:100%;width:100%">\n            {{langs.service_title |uppercase}} </div>\n\n        <img src="assets/svg/receipt/wait.svg" style="height:40px;width:auto;margin:auto;display:flex;" />\n\n        <div padding style="text-align:center;color:#000;font-size:10px;width:100%;width:100%">\n            {{langs.service_body |uppercase}}\n        </div>\n        <ion-row>\n            <ion-col item-center>\n                <button ion-button block color="pbzyellow" (click)="back()">\n                    {{langs.back }} </button>\n            </ion-col>\n        </ion-row>\n    </ion-card>\n</ion-content>'/*ion-inline-end:"E:\Eclectics projects\PBZ\pbz_mobile_appApril\src\pages\transfer\transfer.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_6__providers_contacts_contacts__["a" /* ContactsProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__providers_contacts_contacts__["a" /* ContactsProvider */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__providers_validator_validator__["a" /* ValidatorProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__providers_validator_validator__["a" /* ValidatorProvider */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__providers_clientdata_clientdata__["a" /* ClientdataProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_clientdata_clientdata__["a" /* ClientdataProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_2__providers_global_vars_global_vars__["a" /* GlobalVarsProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_global_vars_global_vars__["a" /* GlobalVarsProvider */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_3__providers_alert_service_alert_service__["a" /* AlertServiceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_alert_service_alert_service__["a" /* AlertServiceProvider */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _k || Object])
    ], TransferPage);
    return TransferPage;
}());

//# sourceMappingURL=transfer.js.map

/***/ }),

/***/ 824:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Banks */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return banks; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Banks = /** @class */ (function () {
    function Banks() {
    }
    Banks = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], Banks);
    return Banks;
}());

var banks = [
    {
        "A": "ACCESSBANK TANZANIA LTD",
        "B": "ACTZTZTZ"
    },
    {
        "A": "AFRICAN BANKING CORPORATION",
        "B": "FMBZTZTX"
    },
    {
        "A": "AGRICULTURAL BANK OF CHINA",
        "B": "ABOCCNBJ"
    },
    {
        "A": "AKIBA COMMERCIAL BANK LTD",
        "B": "AKCOTZTZ"
    },
    {
        "A": "AZANIA BANK LIMITED",
        "B": "AZANTZTZ"
    },
    {
        "A": "BANK M TANZANIA LIMITED",
        "B": "BNKMTZTZ"
    },
    {
        "A": "BANK OF AFRICA TANZANIA ",
        "B": "EUAFTZTZ"
    },
    {
        "A": "BANK OF BARODA LTD",
        "B": "BARBTZTZ"
    },
    {
        "A": "BANK OF CHINA",
        "B": "BKCHCNBJ"
    },
    {
        "A": "BANK OF COMMUNICATIONS LTD",
        "B": "COMMCN3X"
    },
    {
        "A": "BANK OF INDIA LIMITED",
        "B": "BKIDTZTZ"
    },
    {
        "A": "BANK OF QINGDAO",
        "B": "QCCBCNBQ"
    },
    {
        "A": "BANK OF TANZANIA",
        "B": "TANZTZTX"
    },
    {
        "A": "BANK OF TOKYO-MITSUBISHI ",
        "B": "BOTKJPJT"
    },
    {
        "A": "BANKMUSCAT SAOG",
        "B": "BMUSOMRX"
    },
    {
        "A": "BARCLAYS BANK TANZANIA ",
        "B": "BARCTZTZ"
    },
    {
        "A": "CITIBANK N.A.",
        "B": "CITIUS33"
    },
    {
        "A": "CITIBANK TANZANIA LTD",
        "B": "CITITZTZ"
    },
    {
        "A": "CITIGROUP GLOBAL MARKETS",
        "B": "CITIDEFF"
    },
    {
        "A": "COMMERCIAL BANK OF AFRICA ",
        "B": "CBAFTZTZ"
    },
    {
        "A": "COVENANT BANK FOR WOMEN ",
        "B": "CBFWTZTZ"
    },
    {
        "A": "CRDB BANK PLC",
        "B": "CORUTZTZ"
    },
    {
        "A": "DANSKE BANK",
        "B": "DABASESX"
    },
    {
        "A": "DAR ES SALAAM COMMUNITY BANK ",
        "B": "DASUTZTZ"
    },
    {
        "A": "DEUTSCHE BANK A.G.",
        "B": "DEUTNL2A"
    },
    {
        "A": "DIAMOND TRUST BANK TANZANIA ",
        "B": "DTKETZTZ"
    },
    {
        "A": "ECOBANK TANZANIA LIMITED",
        "B": "ECOCTZTZ"
    },
    {
        "A": "EQUITY BANK TANZANIA LIMITED",
        "B": "EQBLTZTZ"
    },
    {
        "A": "EXIM BANK (TANZANIA) LTD",
        "B": "EXTNTZTZ"
    },
    {
        "A": "FBME BANK LTD",
        "B": "FBMETZTZ"
    },
    {
        "A": "HABIB AFRICAN BANK LIMITED",
        "B": "HABLTZTZ"
    },
    {
        "A": "I  M BANK LIMITED",
        "B": "IMBLTZTZ"
    },
    {
        "A": "INTERNATIONAL COMMERCIAL BANK ",
        "B": "BKMYTZTZ"
    },
    {
        "A": "KCB BANK TANZANIA LIMITED",
        "B": "KCBLTZTZ"
    },
    {
        "A": "KCB BANK UGANDA LIMITED",
        "B": "KCBLUGKA"
    },
    {
        "A": "KILIMANJARO CO-OPERATIVE BANK ",
        "B": "KLMJTZTZ"
    },
    {
        "A": "MAENDELEO BANK LTD",
        "B": "MBTLTZTZ"
    },
    {
        "A": "MASHREQBANK PSC",
        "B": "MSHQUS33"
    },
    {
        "A": "MKOMBOZI COMMERCIAL BANK",
        "B": "MKCBTZTZ"
    },
    {
        "A": "MWANGA COMMUNITY BANK LTD",
        "B": "MWCBTZTZ"
    },
    {
        "A": "NATIONAL BANK OF COMMERCE LTD",
        "B": "NLCBTZTX"
    },
    {
        "A": "NATIONAL MICROFINANCE BANK ",
        "B": "NMIBTZTZ"
    },
    {
        "A": "NIC BANK LIMITED",
        "B": "SFICTZTZ"
    },
    {
        "A": "OCBC BANK (MALAYSIA) BERHAD",
        "B": "OCBCMYKL"
    },
    {
        "A": "PEOPLES BANK OF ZANZIBAR LTD",
        "B": "PBZATZTZ"
    },
    {
        "A": "RABOBANK NEDERLAND",
        "B": "RABONL2U"
    },
    {
        "A": "STANBIC BANK TANZANIA LTD.",
        "B": "SBICTZTX"
    },
    {
        "A": "STANBIC BANK UGANDA LIMITED",
        "B": "SBICUGKX"
    },
    {
        "A": "STANDARD CHARTERED BANK",
        "B": "SCBLAEAD"
    },
    {
        "A": "STANDARD CHARTERED BANK",
        "B": "SCBLTZTX"
    },
    {
        "A": "SUMITOMO MITSUI BANKING",
        "B": "SMBCJPJT"
    },
    {
        "A": "TANZANIA POSTAL BANK",
        "B": "TAPBTZTZ"
    },
    {
        "A": "UBL BANK (TANZANIA) LIMITED",
        "B": "UNILTZTZ"
    },
    {
        "A": "UCHUMI COMMERCIAL BANK  (T) LTD",
        "B": "UCCTTZTZ"
    },
    {
        "A": "UNITED BANK FOR AFRICA (T) LTD",
        "B": "UNAFTZTZ"
    }
];
//# sourceMappingURL=banks.js.map

/***/ })

});
//# sourceMappingURL=0.js.map