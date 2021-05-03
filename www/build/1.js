webpackJsonp([1],{

/***/ 782:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WithdrawPageModule", function() { return WithdrawPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__withdraw__ = __webpack_require__(821);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var WithdrawPageModule = /** @class */ (function () {
    function WithdrawPageModule() {
    }
    WithdrawPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__withdraw__["a" /* WithdrawPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__withdraw__["a" /* WithdrawPage */]),
            ],
        })
    ], WithdrawPageModule);
    return WithdrawPageModule;
}());

//# sourceMappingURL=withdraw.module.js.map

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

/***/ 821:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WithdrawPage; });
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







//import { BarcodeScanner } from '@ionic-native/barcode-scanner';

var WithdrawPage = /** @class */ (function () {
    function WithdrawPage(contactsProvider, validator, clientdata, navCtrl, navParams, modalCtrl, globalVars, loadingController, alertService, alertCtrl) {
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
        this.isChange = 1;
        this.error = 0;
        //objectblock: any = { username: '', agent_id:'', account_from: '', account_to: '', lang: '', amount: '', type: 'MWallet' };
        this.objt = { account_to: '', lang: '' };
        this.accounts = [];
        this.langs = {};
        this.objectblock = { agent_commission: '', username: '', agentcommission: '', agent_id: '', account_from: '', account_to: '', lang: '', amount: '', type: 'MWallet' };
        this.langs = this.globalVars.doTranslate(this.globalVars.getLang());
        this.objectblock.username = this.globalVars.Username;
        this.accounts = globalVars.linked_acc;
        this.objectblock.account_from = this.accounts[0].acc_number;
    }
    WithdrawPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad WithdrawPage');
    };
    WithdrawPage.prototype.switch = function (any) {
        this.isChange = any;
    };
    WithdrawPage.prototype.submit = function () {
        var _this = this;
        if (this.objectblock.account_from == null || this.objectblock.account_from == "") {
            this.error = 1;
        }
        else if (this.objectblock.account_to == undefined || this.objectblock.account_to == "") {
            this.error = 2;
        }
        else if (this.objectblock.amount === undefined || this.objectblock.amount === "" || this.objectblock.amount === undefined || this.objectblock.amount != this.globalVars.cleanDigit(this.objectblock.amount)) {
            this.error = 3;
        }
        else {
            if (this.isChange == 1) {
                var message = "Do you want to withdraw TZS " + this.objectblock.amount + " from Account :" + this.objectblock.account_from + " to: ATM No " + this.objectblock.account_to + "?";
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
    /* scanQR() {
       console.log("Scanning QR");
       this.barcodeScanner.scan().then((barcodeData) => {
         let barcodeResponse = barcodeData.text;
         this.objectblock.account_to = barcodeResponse;
       }, (err) => { });
     }*/
    WithdrawPage.prototype.ionViewDidEnter = function () {
        this.globalVars.reload();
    };
    WithdrawPage.prototype.goHome = function () {
        this.navCtrl.setRoot('MainPage');
    };
    WithdrawPage.prototype.enq = function () {
        var _this = this;
        this.objt.account_to = (this.objectblock.account_to).toUpperCase();
        this.objectblock.agent_id = (this.objectblock.account_to).toUpperCase();
        this.objt.lang = this.globalVars.getLang();
        console.log(this.objt);
        this.alertService.showLoading(this.langs.submitting_txt);
        this.clientdata.agent_inq(this.objt)
            .subscribe(function (data) {
            _this.objectblock.account_to = data.account;
            _this.objectblock.agent_commission = data.agent_commission;
            console.log(_this.objectblock.agent_commission, "8888888888888888888");
            _this.alertService.dismiss();
            if (data.length != 0) {
                console.log(data);
                if (!data.error) {
                    _this.objectblock.agent_commission = data.commissionaccount;
                    var message = __WEBPACK_IMPORTED_MODULE_7_string_format___default()(_this.langs.withdraw_agent_meso, _this.objectblock, data);
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
            console.log(err);
            _this.alertService.dismiss();
            _this.alertService.errorPop(_this.langs.tech);
            _this.navCtrl.pop();
        });
    };
    WithdrawPage.prototype.request = function () {
        var _this = this;
        console.log("Withdraw.........................: ", this.objectblock);
        this.alertService.showLoading(this.langs.submitting_txt);
        this.clientdata.withdrawal(this.objectblock)
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
            _this.navCtrl.pop();
        });
    };
    WithdrawPage.prototype.back = function () {
        this.navCtrl.pop();
    };
    WithdrawPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-withdraw',template:/*ion-inline-start:"E:\Eclectics projects\PBZ\pbz_mobile_appApril\src\pages\withdraw\withdraw.html"*/'\n<ion-content>\n        <ion-navbar color="primary">\n                <ion-title> {{langs.withdraw_txt}} </ion-title>\n                <ion-buttons right (click)="goHome()">\n                    <button ion-button icon-only color="white">\n                        <ion-icon name="home"></ion-icon>\n                    </button>\n                </ion-buttons>\n            </ion-navbar>\n    \n    <ion-list>\n        <!--<ion-item (click)="switch(1)">\n            <ion-avatar item-left>\n                <img style="border:1px#00ADEE solid;border-radius:50%;height:40px;width:40px;margin:auto;" src="assets/images/white/setting.png" />\n            </ion-avatar>\n            <div style="font-family:Ubuntu;color:#2F98FB;font-size:11px;text-transform:uppercase;"> {{langs.pbz_agent_txt}} </div>\n            <button ion-button icon-only clear item-right>\n            <ion-icon name="ios-arrow-forward" color="primary"></ion-icon>\n          </button>\n        </ion-item>-->\n\n        <div *ngIf="isChange==1" style="background:#EEEEEE">\n            <div padding style="background:#fff">\n                <div>\n                    <div style="padding:3px;width:100%;color:#000;font-size:11px"> {{langs.from_acc_text}}</div>\n                    <!-- <ion-row style="position:relative;height:40px;font-size:12px;border:1px #2F98FB solid;padding:0px;">\n                        <ion-col col-2 style="margin:1px;background:#2F98FB;" class="center">\n                            <ion-icon name="contact" style="font-size:25px" color="pbzyellow"></ion-icon>\n                        </ion-col>\n                        <ion-col>\n                            <select [(ngModel)]="objectblock.account_from" style="background:rgba(0,0,0,0);color:#000;height:100%;font-size:16px;font-style:bold;width:100%;border:none">\n                        <option *ngFor="let ac of accounts"  value="{{ac.acc_number}}"> {{ac.acc_name}}</option>\n                      \n                    </select> </ion-col>\n                    </ion-row> -->\n                    <!-- <ion-row style="position:relative;height:auto;font-size:1.6vh;border:1px #00ADEE solid;padding:0px;">\n                        <ion-col col-2 style="margin:1px;background:#00ADEE;" class="center">\n                            <ion-icon name="contact" style="font-size:25px" color="pbzyellow"></ion-icon>\n                        </ion-col>\n                        <ion-col>\n                            <ion-select [(ngModel)]="objectblock.account_from" style="text-align:right">\n                                <ion-option style=" padding: 0.3rem 0; background: transparent;\n                            color: white;" *ngFor="let ac of accounts" value="{{ac.acc_number}}"> {{ac.acc_name}}\n                                </ion-option>\n                            </ion-select>\n                        </ion-col>\n                    </ion-row> -->\n\n                    <ion-row style="position:relative;height:auto;font-size:1.6vh;border:1px #00ADEE solid;padding:0px;">\n                        <ion-col col-2 style="margin:1px;background:#00ADEE;" class="center">\n                            <ion-icon name="contact" style="font-size:25px" color="pbzyellow"></ion-icon>\n                        </ion-col>\n                        <ion-col>\n                            <ion-select  interface="popover" [(ngModel)]="objectblock.account_from" style="text-align:right">\n                                <ion-option style=" padding: 0.3rem 0; background: transparent;\n                            color: white;" *ngFor="let ac of accounts" value="{{ac.acc_number}}"> {{ac.acc_name}}\n                                </ion-option>\n                            </ion-select>\n                        </ion-col>\n                    </ion-row>\n                    <div *ngIf="error==1" style="padding:3px;width:100%;color:#FE1902;font-size:11px"> {{langs.valid_acc }}</div>\n                </div>\n\n                <br>\n\n                <div>\n                    <div style="padding:3px;width:100%;color:#000;font-size:11px">Agent Number</div>\n                    <ion-row style="position:relative;height:50px;font-size:12px;border:1px #2F98FB solid;padding:0px;">\n                        <ion-col col-2 style="margin:1px;background:#2F98FB;" class="center">\n                            <ion-icon name="person" style="font-size:25px" color="pbzyellow"></ion-icon>\n                        </ion-col>\n                        <ion-col>\n                            <input style="background:rgba(0,0,0,0);color:#000;height:100%;font-size:16px;font-style:bold;width:100%;border:none; text-align: right" type="text" maxlength="16" [(ngModel)]="objectblock.account_to" />\n                        </ion-col>\n                        <ion-col col-2 style="margin:1px;" class="center" (click)="scanQR()">\n                            <ion-icon name="qr-scanner" style="font-size:25px" color="primary"></ion-icon>\n                        </ion-col>\n                    </ion-row>\n                    <div *ngIf="error==2" style="padding:3px;width:100%;color:#FE1902;font-size:11px"> {{langs.valid_acc }}</div>\n                </div>\n\n                <br>\n                <div>\n                    <ion-row>\n                        <ion-col col-6 text-left style="padding:3px;color:#000;font-size:11px"> {{langs.amount}}</ion-col>\n                    </ion-row>\n                    <ion-row style="position:relative;height:50px;font-size:12px;border:1px #2F98FB solid;padding:0px;">\n                        <ion-col col-2 style="margin:1px;background:#2F98FB;" class="center">\n                            <ion-icon name="cash" style="font-size:25px" color="pbzyellow"></ion-icon>\n                        </ion-col>\n                        <ion-col>\n                            <input style="background:rgba(0,0,0,0);color:#000;height:100%;font-size:16px;font-style:bold;width:100%;border:none; text-align: right" type="tel" maxlength="50" [(ngModel)]="objectblock.amount" />\n                        </ion-col>\n                    </ion-row>\n                    <div *ngIf="error==3" style="padding:3px;width:100%;color:#FE1902;font-size:11px"> {{langs.valid_amount }}</div>\n                </div>\n\n                <button ion-button block color="pbzyellow" (click)="enq()">\n										{{langs.submit_txt}}</button>\n\n            </div>\n        </div>\n\n\n        <div *ngIf="isChange==2" style="background:#EEEEEE">\n\n        </div>\n    </ion-list>\n</ion-content>'/*ion-inline-end:"E:\Eclectics projects\PBZ\pbz_mobile_appApril\src\pages\withdraw\withdraw.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__providers_contacts_contacts__["a" /* ContactsProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_validator_validator__["a" /* ValidatorProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_clientdata_clientdata__["a" /* ClientdataProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_global_vars_global_vars__["a" /* GlobalVarsProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__providers_alert_service_alert_service__["a" /* AlertServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], WithdrawPage);
    return WithdrawPage;
}());

//# sourceMappingURL=withdraw.js.map

/***/ })

});
//# sourceMappingURL=1.js.map