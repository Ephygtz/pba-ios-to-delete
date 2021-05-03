webpackJsonp([2],{

/***/ 755:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollectionPageModule", function() { return CollectionPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__collection__ = __webpack_require__(794);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CollectionPageModule = /** @class */ (function () {
    function CollectionPageModule() {
    }
    CollectionPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__collection__["a" /* CollectionPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__collection__["a" /* CollectionPage */])
            ],
        })
    ], CollectionPageModule);
    return CollectionPageModule;
}());

//# sourceMappingURL=collection.module.js.map

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

/***/ 794:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CollectionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_global_vars_global_vars__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_alert_service_alert_service__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_clientdata_clientdata__ = __webpack_require__(379);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_contacts_contacts__ = __webpack_require__(381);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_string_format__ = __webpack_require__(785);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_string_format___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_string_format__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CollectionPage = /** @class */ (function () {
    function CollectionPage(contactsProvider, navCtrl, globalVars, modalCtrl, alertService, clientdata, navParams) {
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
        this.langs = this.globalVars.doTranslate(this.globalVars.getLang());
        this.objectblock.username = this.globalVars.Username;
        this.accounts = globalVars.linked_acc;
        this.objectblock.account_from = this.accounts[0].acc_number;
        this.allNavdata = navParams.get('data');
        this.title = this.allNavdata.title;
        this.objectblock.biller_ref = this.allNavdata.name;
        if (this.title == 'Union payment') {
            this.avail = true;
        }
        //    if ( this.title == 'Zanzibar Other Institutions' )
        // { 
        //     console.log( "............go direct......");
        // // this.gotonext();
        //  this.navCtrl.push( 'GovernmentPage2');
        //  } 
    }
    //  gotonext() {
    //        console.log( "............humu2shouldgo......",this.objectblock.biller_ref );
    //       //  this.navCtrl.setRoot('HomePage');
    //    this.navCtrl.push( 'FundstransferPage');
    // }
    //     ionViewDidLoad() {
    //   console.log('ionViewDidLoad CollectionPage');
    // }
    CollectionPage.prototype.goHome = function () {
        this.navCtrl.setRoot('HomePage');
    };
    CollectionPage.prototype.back = function () {
        if (this.ispay) {
            this.ispay = false;
            this.objectblock.account_to = "";
        }
        else
            this.navCtrl.pop();
    };
    CollectionPage.prototype.pickContact = function () {
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
    CollectionPage.prototype.enquire = function () {
        var _this = this;
        if (this.objectblock.account_to === null || this.objectblock.account_to === '' || this.objectblock.account_to === undefined) {
            this.error = 1;
        }
        else {
            this.alertService.showLoading(this.langs.submitting_txt);
            this.clientdata.collectionspre(this.objectblock, this.allNavdata.url)
                .subscribe(function (data) {
                data = _this.globalVars.testdec(data);
                console.log(data);
                if (data.length != 0) {
                    _this.alertService.dismiss();
                    if (!data.error) {
                        _this.pre = data;
                        _this.ispay = true;
                        _this.objectblock.amount = _this.pre.amount;
                        _this.objectblock.refref = _this.pre.referenceNo;
                        if (_this.pre.status == '2') {
                            _this.unpaid = false;
                        }
                        else {
                            _this.unpaid = true;
                        }
                    }
                    else if (data.error) {
                        _this.alertService.errorPop(data.field48);
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
                _this.alertService.errorPop(_this.langs.tech);
            });
        }
    };
    CollectionPage.prototype.submit = function () {
        var _this = this;
        if (this.objectblock.account_from === null || this.objectblock.account_from === '') {
            this.alertService.errorPop(this.langs.invalid_acc);
        }
        else {
            console.log(".................ll", this.pre);
            this.objectblock.account_to = this.pre.account_number;
            this.objectblock.ministry_code = this.pre.ministrycode;
            this.objectblock.ministry_name = this.pre.controlnumber;
            this.objectblock.refref = this.pre.refenceNo;
            if (this.objectblock.refref === null || this.objectblock.refref === '') {
                this.objectblock.refref = "00";
            }
            var message = __WEBPACK_IMPORTED_MODULE_6_string_format___default()(this.langs.collection_meso, this.objectblock, this.pre);
            var template = "<div>" + message + "</div>";
            var obj = { body: "", template: template, ttype: "", completed: false, pageTo: '' };
            var myModal = this.modalCtrl.create('ConfirmModalPage', obj);
            myModal.present();
            myModal.onDidDismiss(function (data) {
                if (data) {
                    _this.request();
                }
                else { }
            });
        }
    };
    CollectionPage.prototype.ionViewDidEnter = function () {
        this.globalVars.reload();
    };
    CollectionPage.prototype.request = function () {
        var _this = this;
        this.alertService.showLoading(this.langs.submitting_txt);
        this.clientdata.paygovernement(this.objectblock)
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
    CollectionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-collection',template:/*ion-inline-start:"E:\Eclectics projects\PBZ\pbz_mobile_appApril\src\pages\collection\collection.html"*/'<!-- <ion-header>\n\n    <ion-navbar color="primary">\n        <ion-title> {{ title }} </ion-title>\n        <ion-buttons end (click)="goHome()">\n                <button ion-button icon-only color="white">\n                  <ion-icon name="home"></ion-icon>\n              </button>\n            </ion-buttons>\n    </ion-navbar>\n\n</ion-header> -->\n\n\n<ion-content class="back-view">\n        <ion-navbar color="primary">\n                <ion-title> {{ title }} </ion-title>\n                <ion-buttons end (click)="goHome()">\n                        <button ion-button icon-only color="white">\n                          <ion-icon name="home"></ion-icon>\n                      </button>\n                    </ion-buttons>\n            </ion-navbar>\n    <ion-card padding *ngIf="!avail">\n        <div *ngIf="!ispay">\n\n          <div *ngIf="znzotherinstitutions2">\n                <div style="padding:3px;width:100%;color:#000;font-size:1.5vh"> {{langs.from_acc_text}}</div>\n                <!-- <ion-row style="position:relative;height:40px;font-size:1.6vh;border:1px #00ADEE solid;padding:0px;">\n                    <ion-col col-2 style="margin:1px;background:#00ADEE;" class="center">\n                        <ion-icon name="contact" style="font-size:25px" color="pbzyellow"></ion-icon>\n                    </ion-col>\n                    <ion-col>\n                        <select [(ngModel)]="objectblock.account_from" style="background:rgba(0,0,0,0);color:#000;height:100%;font-size:1.9vh;font-style:bold;width:100%;border:none">\n                        <option *ngFor="let ac of accounts"  value="{{ac.acc_number}}"> {{ac.acc_name}}</option>\n                      \n                    </select> </ion-col>\n                </ion-row> -->\n\n                <ion-row style="position:relative;height:auto;font-size:1.6vh;border:1px #00ADEE solid;padding:0px;">\n                    <ion-col col-2 style="margin:1px;background:#00ADEE;" class="center">\n                        <ion-icon name="contact" style="font-size:25px" color="pbzyellow"></ion-icon>\n                    </ion-col>\n                    <ion-col>\n                        <ion-select [(ngModel)]="objectblock.account_from"  interface="popover" style="text-align:right; ">\n                            <ion-option style=" padding: 0.3rem 0; background: transparent;\n                        color: white;" *ngFor="let ac of accounts" value="{{ac.acc_number}}"> {{ac.acc_name}}\n                            </ion-option>\n                        </ion-select>\n                    </ion-col>\n                </ion-row>\n                <div *ngIf="error==1" style="padding:3px;width:100%;color:#FE1902;font-size:1.5vh"> {{langs.valid_account }}</div>\n            </div>\n            <br>\n            <div>\n                <div style="padding:3px;width:100%;color:#000;font-size:1.5vh"> {{langs.from_acc_text}}</div>\n                <!-- <ion-row style="position:relative;height:40px;font-size:1.6vh;border:1px #00ADEE solid;padding:0px;">\n                    <ion-col col-2 style="margin:1px;background:#00ADEE;" class="center">\n                        <ion-icon name="contact" style="font-size:25px" color="pbzyellow"></ion-icon>\n                    </ion-col>\n                    <ion-col>\n                        <select [(ngModel)]="objectblock.account_from" style="background:rgba(0,0,0,0);color:#000;height:100%;font-size:1.9vh;font-style:bold;width:100%;border:none">\n                        <option *ngFor="let ac of accounts"  value="{{ac.acc_number}}"> {{ac.acc_name}}</option>\n                      \n                    </select> </ion-col>\n                </ion-row> -->\n\n                <ion-row style="position:relative;height:auto;font-size:1.6vh;border:1px #00ADEE solid;padding:0px;">\n                    <ion-col col-2 style="margin:1px;background:#00ADEE;" class="center">\n                        <ion-icon name="contact" style="font-size:25px" color="pbzyellow"></ion-icon>\n                    </ion-col>\n                    <ion-col>\n                        <ion-select [(ngModel)]="objectblock.account_from"  interface="popover" style="text-align:right; ">\n                            <ion-option style=" padding: 0.3rem 0; background: transparent;\n                        color: white;" *ngFor="let ac of accounts" value="{{ac.acc_number}}"> {{ac.acc_name}}\n                            </ion-option>\n                        </ion-select>\n                    </ion-col>\n                </ion-row>\n                <div *ngIf="error==1" style="padding:3px;width:100%;color:#FE1902;font-size:1.5vh"> {{langs.valid_account }}</div>\n            </div>\n<br>\n            <div >\n                <div style="padding:3px;width:100%;color:#000;font-size:1.5vh"> {{langs.control_no}}</div>\n                <ion-row style="position:relative;font-size:16px; height: 50px;border:1px #00ADEE solid;padding:0px;">\n                    <!-- <ion-col col-2 style="margin:1px;background:#00ADEE;" class="center">\n                        <ion-icon name="person" style="font-size:25px" color="pbzyellow"></ion-icon>\n                    </ion-col> -->\n\n                    <ion-col col-2 style="background:#00ADEE;" class="center">\n                        <ion-icon name="person" style="font-size:25px" color="pbzyellow"></ion-icon>\n                    </ion-col>\n\n\n                    <ion-col>\n                        <input style="background:rgba(0,0,0,0);color:#000;height:150%;font-size:16px;font-style:bold;width:100%;border:none; text-align: right" type="text" maxlength="16" [(ngModel)]="objectblock.account_to" />\n                     </ion-col>\n                    <ion-col col-2  class="center" (click)="pickContact()">\n                        <ion-icon name="search" style="font-size:2.5vh" color="primary"></ion-icon>\n                    </ion-col>\n                </ion-row>\n                <div *ngIf="error==1" style="padding:3px;width:100%;color:#FE1902;font-size:1.5vh"> {{langs.enter_cotrol }}</div>\n            </div>\n        \n               \n            <ion-row>\n                <ion-col item-center>\n                    <button ion-button block color="pbzyellow" (click)="enquire()">\n										{{langs.submit_txt}}</button>\n                </ion-col>\n            </ion-row>\n        </div>\n\n        <div *ngIf="ispay">\n            <div>\n                <br>\n                <p item-center style="text-align:center;color:#00ADEE;font-size:1.5vh;">{{pre.message | uppercase}}</p>\n                <p *ngIf="!unpaid" item-center style="text-align:center;color:#000;font-size:1.9vh;">{{langs.paid | uppercase }}</p>\n                <p *ngIf="unpaid" item-center style="text-align:center;color:#000;font-size:1.9vh;">{{langs.not_paid | uppercase }}</p>\n                <ion-row no-padding>\n                    <ion-col col-6 item-center style="margin:auto">\n                        <p item-center style="text-align:left;color:#B3B3B3;font-size:1.5vh;">{{langs.customer_name}} <br/>\n                            <b style="text-align:left;color:#000;font-size:1.6vh;">   {{pre.payername}}</b> </p>\n                    </ion-col>\n                    <ion-col col-6 item-center style="margin:auto">\n                        <p item-right style="text-align:right;color:#B3B3B3;font-size:1.5vh;"> {{langs.email}} <br/>\n                            <b style="text-align:left;color:#000;font-size:1.6vh;"> {{pre.payeremail}} </b> </p>\n                    </ion-col>\n                </ion-row>\n\n                <ion-row no-padding>\n                    <ion-col col-6 item-center style="margin:auto">\n                        <p item-center style="text-align:left;color:#B3B3B3;font-size:1.5vh;">{{langs.control_no}} <br/>\n                            <b style="text-align:left;color:#000;font-size:1.6vh;"> {{pre.controlnumber}}</b>\n                        </p>\n                    </ion-col>\n                    <ion-col col-6 item-center style="margin:auto">\n                        <p item-right style="text-align:right;color:#B3B3B3;font-size:1.5vh;"> {{langs.expiry}} <br/>\n                            <b style="text-align:left;color:#000;font-size:1.6vh;">{{pre.expiry}}</b> </p>\n                    </ion-col>\n                </ion-row>\n                <ion-row no-padding>\n                    <ion-col col-6 item-center style="margin:auto">\n                        <p item-center style="text-align:left;color:#B3B3B3;font-size:1.5vh;">{{langs.fee_name}} <br/>\n                            <b style="text-align:left;color:#000;font-size:1.6vh;"> {{pre.feename}}</b>\n                        </p>\n                    </ion-col>\n                    <ion-col col-6 item-center style="margin:auto">\n                        <p item-right style="text-align:right;color:#B3B3B3;font-size:1.5vh;"> {{langs.ministry_name}} <br/>\n                            <b style="text-align:left;color:#000;font-size:1.6vh;">{{pre.ministryname}}</b> </p>\n                    </ion-col>\n                </ion-row>\n\n                <ion-row no-padding>\n                    <ion-col col-6 item-center style="margin:auto">\n                        <p item-center style="text-align:left;color:#B3B3B3;font-size:1.5vh;">{{langs.reason}} <br/>\n                            <b style="text-align:left;color:#000;font-size:1.6vh;">{{pre.reason}}</b>\n                        </p>\n                    </ion-col>\n                    <ion-col col-6 item-center style="margin:auto">\n                        <p item-right style="text-align:right;color:#B3B3B3;font-size:1.5vh;"> {{langs.amount}} <br/>\n                            <b style="text-align:left;color:#000;font-size:1.6vh;"> {{pre.amount}}</b> </p>\n                    </ion-col>\n                </ion-row>\n\n                <br>\n                <p *ngIf="pre.full_payment" item-right style="text-align:left;color:#B3B3B3;font-size:1.9vh;">Enter Amount</p>\n                <ion-row *ngIf="pre.full_payment" style="position:relative;height:50px;font-size:12px;border:1px #00ADEE solid;padding:0px;">\n                    <ion-col col-2 style="margin:1px;background:#00ADEE;" class="center">\n                        <ion-icon name="cash" style="font-size:25px" color="pbzyellow"></ion-icon>\n                    </ion-col>\n                    <ion-col>\n                        <input style="background:rgba(0,0,0,0);color:#000;height:100%;font-size:16px;font-style:bold;width:100%;border:none" type="tel" maxlength="50" [(ngModel)]="objectblock.amount" />\n                    </ion-col>\n                </ion-row>\n\n\n\n                <br>\n            </div>\n            <ion-row>\n                <ion-col>\n                    <button *ngIf="unpaid" ion-button block color="pbzyellow" (click)="submit()" no-border style="border-radius:25px;font-size:1.9vh;width:auto;margin-left:auto;margin-right:auto;min-width:120px">\n            {{langs.submit_txt}}\n        </button>\n                </ion-col>\n                <ion-col>\n                    <button *ngIf="unpaid" ion-button block color="danger" (click)="back()" no-border style="border-radius:25px;font-size:1.9vh;width:auto;margin-left:auto;margin-right:auto;min-width:120px">\n            {{langs.cancel }}\n        </button>\n                </ion-col>\n            </ion-row>\n            <button *ngIf="!unpaid" ion-button block color="pbzyellow" (click)="back()" no-border style="border-radius:25px;font-size:1.9vh;width:auto;margin-left:auto;margin-right:auto;min-width:120px">\n            {{langs.back }}\n        </button>\n        </div>\n    </ion-card>\n\n    <ion-card padding *ngIf="avail">\n        <br>\n        <div padding style="text-align:center;color:#000;font-size:12px;width:100%;width:100%">{{langs.service_title |uppercase}} </div>\n\n        <img src="assets/svg/receipt/wait.svg" style="height:50px;width:auto;margin:auto;display:flex;" />\n\n        <div padding style="text-align:center;color:#000;font-size:10px;width:100%;width:100%"> {{langs.service_body |uppercase}}\n        </div>\n        <ion-row>\n            <ion-col item-center>\n                <button ion-button block color="pbzyellow" (click)="back()">\n										{{langs.back }} </button>\n            </ion-col>\n        </ion-row>\n    </ion-card>\n\n</ion-content>'/*ion-inline-end:"E:\Eclectics projects\PBZ\pbz_mobile_appApril\src\pages\collection\collection.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__providers_contacts_contacts__["a" /* ContactsProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_global_vars_global_vars__["a" /* GlobalVarsProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_alert_service_alert_service__["a" /* AlertServiceProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_clientdata_clientdata__["a" /* ClientdataProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], CollectionPage);
    return CollectionPage;
}());

//# sourceMappingURL=collection.js.map

/***/ })

});
//# sourceMappingURL=2.js.map