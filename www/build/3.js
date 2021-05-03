webpackJsonp([3],{

/***/ 752:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChequerequestPageModule", function() { return ChequerequestPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chequerequest__ = __webpack_require__(791);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ChequerequestPageModule = /** @class */ (function () {
    function ChequerequestPageModule() {
    }
    ChequerequestPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__chequerequest__["a" /* ChequerequestPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__chequerequest__["a" /* ChequerequestPage */])
            ],
        })
    ], ChequerequestPageModule);
    return ChequerequestPageModule;
}());

//# sourceMappingURL=chequerequest.module.js.map

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

/***/ 791:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChequerequestPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_alert_service_alert_service__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_clientdata_clientdata__ = __webpack_require__(379);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_global_vars_global_vars__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_string_format__ = __webpack_require__(785);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_string_format___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_string_format__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ChequerequestPage = /** @class */ (function () {
    function ChequerequestPage(navCtrl, modalCtrl, clientdata, globalVars, navParams, loadingController, alertService, alertCtrl) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.clientdata = clientdata;
        this.globalVars = globalVars;
        this.navParams = navParams;
        this.loadingController = loadingController;
        this.alertService = alertService;
        this.alertCtrl = alertCtrl;
        this.accounts = [];
        this.accounts_no = [];
        this.error = 0;
        this.objectblock = {
            username: '', account_from: '', lang: 'en', startleaf: '', stopleaf: '', type: '1'
        };
        this.cheques = [
            { name: 'PERSONAL CHEQUE 50 LEAVES', no: '1' },
            { name: ' COMPANY CHEQUE 50 LEAVES', no: '2' },
            { name: 'CORPORATE - GOVERNMENT CHEQUE 100 LEAVES', no: '3' },
            { name: 'CORPORATE BACK STAMP 100 LEAVES', no: '4' },
            { name: 'BANKER CHEQUE 100 LEAVES', no: '5' }
        ];
        this.unmasked_accounts = [];
        this.langs = this.globalVars.doTranslate(this.globalVars.getLang());
        this.objectblock.username = this.globalVars.Username;
        this.accounts = globalVars.linked_acc;
        this.objectblock.account_from = this.accounts[0].acc_number;
    }
    ChequerequestPage.prototype.goHome = function () {
        this.navCtrl.setRoot('HomePage');
    };
    ChequerequestPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChequerequestPage');
    };
    ChequerequestPage.prototype.submit = function () {
        var _this = this;
        if (this.objectblock.account_from === null || this.objectblock.account_from === '') {
            this.alertService.errorPop(this.langs.valid_acc);
        }
        else {
            var message = __WEBPACK_IMPORTED_MODULE_5_string_format___default()(this.langs.cheque_req_meso, this.objectblock.account_from);
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
    ChequerequestPage.prototype.ionViewDidEnter = function () {
        this.globalVars.reload();
    };
    ChequerequestPage.prototype.request = function () {
        var _this = this;
        this.alertService.showLoading(this.langs.submitting_txt);
        this.clientdata.requestcheque(this.objectblock)
            .subscribe(function (data) {
            if (data.length != 0) {
                data = _this.globalVars.testdec(data);
                console.log(data);
                _this.alertService.dismiss();
                if (!data.error) {
                    _this.alertService.errorPop(data.field48);
                }
                else if (data.error) {
                    _this.alertService.errorPop(data.field48);
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
            _this.alertService.errorPop(_this.langs.internet);
        });
    };
    ChequerequestPage.prototype.stop = function () {
        var _this = this;
        if (this.objectblock.account_from === null || this.objectblock.account_from === '') {
            this.alertService.errorPop(this.langs.valid_acc);
        }
        else if (this.objectblock.startleaf === null || this.objectblock.startleaf === '') {
            this.error = 1;
        }
        else if (this.objectblock.stopleaf === null || this.objectblock.stopleaf === '') {
            this.objectblock.stopleaf = this.objectblock.startleaf;
        }
        else {
            var message = __WEBPACK_IMPORTED_MODULE_5_string_format___default()(this.langs.stop_cheque_meso, this.globalVars.Username);
            var template = "<div>" + message + "</div>";
            var obj = { body: "", template: template, ttype: "", completed: false, pageTo: '' };
            var myModal = this.modalCtrl.create('ConfirmModalPage', obj);
            myModal.present();
            myModal.onDidDismiss(function (data) {
                if (data) {
                    _this.requeststop();
                }
                else { }
            });
        }
    };
    ChequerequestPage.prototype.requeststop = function () {
        var _this = this;
        this.alertService.showLoading(this.langs.submitting_txt);
        this.clientdata.stopcheque(this.objectblock)
            .subscribe(function (data) {
            data = _this.globalVars.testdec(data);
            console.log(data);
            if (data.length != 0) {
                _this.alertService.dismiss();
                if (!data.error) {
                    _this.alertService.errorPop(data.field48);
                }
                else if (data.error) {
                    _this.alertService.errorPop(data.field48);
                }
                else {
                    _this.alertService.errorPop(_this.langs.tech);
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
    ChequerequestPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-chequerequest',template:/*ion-inline-start:"E:\Eclectics projects\PBZ\pbz_mobile_appApril\src\pages\chequerequest\chequerequest.html"*/'<!-- <ion-header>\n    <ion-navbar color="primary">\n        <ion-title> {{langs.cheque}} </ion-title>\n        <ion-buttons end (click)="goHome()">\n            <button ion-button icon-only color="white">\n                <ion-icon name="home"></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header> -->\n\n\n<ion-content class="back-view">\n        <ion-navbar color="primary">\n                <ion-title> {{langs.cheque}} </ion-title>\n                <ion-buttons end (click)="goHome()">\n                    <button ion-button icon-only color="white">\n                        <ion-icon name="home"></ion-icon>\n                    </button>\n                </ion-buttons>\n            </ion-navbar>\n    <ion-card padding>\n        <div>\n            <div style="padding:3px;width:100%;color:#000;font-size:11px"> {{langs.from_acc_text}}</div>\n            <!-- <ion-row style="position:relative;height:40px;font-size:12px;border:1px #00ADEE solid;padding:0px;">\n                <ion-col col-2 style="margin:1px;background:#00ADEE;" class="center">\n                    <ion-icon name="contact" style="font-size:25px" color="pbzyellow"></ion-icon>\n                </ion-col>\n                <ion-col>\n                    <select [(ngModel)]="objectblock.account_from"\n                        style="background:rgba(0,0,0,0);color:#000;height:100%;font-size:16px;font-style:bold;width:100%;border:none">\n                        <option *ngFor="let ac of accounts" value="{{ac.acc_number}}"> {{ac.acc_name}}</option>\n                    </select> </ion-col>\n            </ion-row> -->\n            <ion-row style="position:relative;height:auto;font-size:1.6vh;border:1px #00ADEE solid;padding:0px;">\n                <ion-col col-2 style="margin:1px;background:#00ADEE;" class="center">\n                    <ion-icon name="contact" style="font-size:25px" color="pbzyellow"></ion-icon>\n                </ion-col>\n                <ion-col>\n                    <ion-select [(ngModel)]="objectblock.account_from" style="text-align:right">\n                        <ion-option style=" padding: 0.3rem 0; background: transparent;\n                    color: white;" *ngFor="let ac of accounts" value="{{ac.acc_number}}"> {{ac.acc_name}}\n                        </ion-option>\n                    </ion-select>\n                </ion-col>\n            </ion-row>\n            <div *ngIf="error==1" style="padding:3px;width:100%;color:#FE1902;font-size:11px"> {{langs.valid_account }}\n            </div>\n        </div>\n        <div>\n            <div style="padding:3px;width:100%;color:#000;font-size:11px"> {{langs.cheque_type}}</div>\n            <ion-row style="position:relative;height:40px;font-size:12px;border:1px #00ADEE solid;padding:0px;">\n                <ion-col col-2 style="margin:1px;background:#00ADEE;" class="center">\n                    <ion-icon name="contact" style="font-size:25px" color="pbzyellow"></ion-icon>\n                </ion-col>\n                <ion-col>\n                    <select [(ngModel)]="objectblock.type"\n                        style="background:rgba(0,0,0,0);color:#000;height:100%;font-size:11px;font-style:bold;width:100%;border:none">\n                        <option *ngFor="let ac of cheques" value="{{ac.no}}"> {{ac.name}}</option>\n                    </select> </ion-col>\n            </ion-row>\n            <div *ngIf="error==2" style="padding:3px;width:100%;color:#FE1902;font-size:11px"> {{langs.valid_account }}\n            </div>\n        </div>\n\n        <button ion-button block color="pbzyellow" (click)="submit()">\n            {{langs.submit_txt}}</button>\n\n\n\n\n    </ion-card>\n</ion-content>'/*ion-inline-end:"E:\Eclectics projects\PBZ\pbz_mobile_appApril\src\pages\chequerequest\chequerequest.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */], __WEBPACK_IMPORTED_MODULE_3__providers_clientdata_clientdata__["a" /* ClientdataProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_global_vars_global_vars__["a" /* GlobalVarsProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2__providers_alert_service_alert_service__["a" /* AlertServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], ChequerequestPage);
    return ChequerequestPage;
}());

//# sourceMappingURL=chequerequest.js.map

/***/ })

});
//# sourceMappingURL=3.js.map