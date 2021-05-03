webpackJsonp([4],{

/***/ 751:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePinPageModule", function() { return ChangePinPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__change_pin__ = __webpack_require__(790);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ChangePinPageModule = /** @class */ (function () {
    function ChangePinPageModule() {
    }
    ChangePinPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__change_pin__["a" /* ChangePinPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__change_pin__["a" /* ChangePinPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__change_pin__["a" /* ChangePinPage */]
            ]
        })
    ], ChangePinPageModule);
    return ChangePinPageModule;
}());

//# sourceMappingURL=change-pin.module.js.map

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

/***/ 790:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangePinPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_global_vars_global_vars__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_api_connect_api_connect__ = __webpack_require__(382);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_alert_service_alert_service__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_clientdata_clientdata__ = __webpack_require__(379);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_toast__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_device__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_string_format__ = __webpack_require__(785);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_string_format___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_string_format__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var ChangePinPage = /** @class */ (function () {
    function ChangePinPage(clientdata, navCtrl, navParams, globalVars, loadingController, modalCtrl, alertService, toast, apiConnect, storage, device, platform) {
        this.clientdata = clientdata;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.globalVars = globalVars;
        this.loadingController = loadingController;
        this.modalCtrl = modalCtrl;
        this.alertService = alertService;
        this.toast = toast;
        this.apiConnect = apiConnect;
        this.storage = storage;
        this.device = device;
        this.platform = platform;
        this.objectblock = { username: '', old: '', new: '' };
        this.body = "";
        this.mobileNo = "";
        this.userNumber = "";
        this.error = 0;
        this.pin_list = ["0000", "1234", "1111", "2222", "3333", "4444", "5555", "6666", "7777", "8888", "9999"];
        this.langs = [];
        this.pin = { confirm: '', old: '', new: '' };
        this.objectblock.username = this.globalVars.Username;
        this.langs = this.globalVars.doTranslate(this.globalVars.getLang());
    }
    ChangePinPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChangePinPage');
    };
    ChangePinPage.prototype.goHome = function () {
        this.navCtrl.setRoot('MainPage');
    };
    ChangePinPage.prototype.submit = function () {
        var _this = this;
        if (this.pin.old == '' || this.pin.old == null || this.pin.old == undefined) {
            this.error = 1;
        }
        else if (this.pin.new == '' || this.pin.new == null || this.pin.new == undefined) {
            this.error = 2;
        }
        else if (this.pin.confirm == '' || this.pin.confirm !== this.pin.new || this.pin.confirm == undefined) {
            this.error = 3;
        }
        else if (this.pin.old == this.pin.new) {
            this.error = 4;
        }
        // else if ( this.pin_list.includes( this.pin.new ) ) {
        //   this.error = 5;
        // }  
        else {
            this.error = 0;
            this.objectblock.old = this.globalVars.hashpin(this.objectblock.username + this.pin.old);
            this.objectblock.new = this.globalVars.hashpin(this.objectblock.username + this.pin.new);
            var message = __WEBPACK_IMPORTED_MODULE_9_string_format___default()(this.langs.pin_change_meso, this.globalVars.Username);
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
    };
    ChangePinPage.prototype.ionViewDidEnter = function () {
        this.globalVars.reload();
    };
    ChangePinPage.prototype.request = function () {
        var _this = this;
        this.alertService.showLoading(this.langs.submitting_txt);
        this.clientdata.changepin(this.objectblock)
            .subscribe(function (data) {
            data = _this.globalVars.testdec(data);
            console.log(data);
            if (data.length != 0) {
                console.log(data);
                _this.alertService.dismiss();
                if (!data.error) {
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
                _this.alertService.dismiss();
                _this.alertService.errorPop(_this.langs.tech);
            }
        }, function (err) {
            console.log(err);
            _this.alertService.dismiss();
            _this.alertService.errorPop(_this.langs.tech);
        });
    };
    ChangePinPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-change-pin',template:/*ion-inline-start:"E:\Eclectics projects\PBZ\pbz_mobile_appApril\src\pages\change-pin\change-pin.html"*/'<!-- <ion-header>\n    <ion-navbar color="primary">\n        <ion-title> {{langs.change_pin_txt}} </ion-title>\n        <ion-buttons end (click)="goHome()">\n            <button ion-button icon-only color="white">\n              <ion-icon name="home"></ion-icon>\n          </button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header> -->\n\n\n<ion-content class="back-view">\n        <ion-navbar color="primary">\n                <ion-title> {{langs.change_pin_txt}} </ion-title>\n                <ion-buttons end (click)="goHome()">\n                    <button ion-button icon-only color="white">\n                      <ion-icon name="home"></ion-icon>\n                  </button>\n                </ion-buttons>\n            </ion-navbar>\n    <ion-card padding>\n        <div>\n            <div style="padding:3px;width:100%;color:#000;font-size:11px"> {{langs.old_pin}}</div>\n            <ion-row style="position:relative;height:40px;font-size:12px;border:1px #00ADEE solid;padding:0px;">\n                <ion-col col-2 style="margin:1px;background:#00ADEE;" class="center">\n                    <ion-icon name="key" style="font-size:25px" color="pbzyellow"></ion-icon>\n                </ion-col>\n                <ion-col>\n                    <input style="-webkit-text-security:disc;background:rgba(0,0,0,0);color:#000;height:100%;font-size:16px;font-style:bold;width:100%;border:none" type="tel" maxlength="4" [(ngModel)]="pin.old" />\n                </ion-col>\n            </ion-row>\n            <div *ngIf="error==1" style="padding:3px;width:100%;color:#FE1902;font-size:11px"> {{langs.valid_pin_txt }}</div>\n        </div>\n        <div>\n            <div style="padding:3px;width:100%;color:#000;font-size:11px"> {{langs.new_pin}}</div>\n            <ion-row style="position:relative;height:40px;font-size:12px;border:1px #00ADEE solid;padding:0px;">\n                <ion-col col-2 style="margin:1px;background:#00ADEE;" class="center">\n                    <ion-icon name="key" style="font-size:25px" color="pbzyellow"></ion-icon>\n                </ion-col>\n                <ion-col>\n                    <input style="-webkit-text-security:disc;background:rgba(0,0,0,0);color:#000;height:100%;font-size:16px;font-style:bold;width:100%;border:none" type="tel" maxlength="4" [(ngModel)]="pin.new" />\n                </ion-col>\n            </ion-row>\n            <div *ngIf="error==2" style="padding:3px;width:100%;color:#FE1902;font-size:11px"> {{langs.valid_new_pin_txt }}</div>\n        </div>\n        <div>\n            <div style="padding:3px;width:100%;color:#000;font-size:11px"> {{langs.confirm_new_pin}}</div>\n            <ion-row style="position:relative;height:40px;font-size:12px;border:1px #00ADEE solid;padding:0px;">\n                <ion-col col-2 style="margin:1px;background:#00ADEE;" class="center">\n                    <ion-icon name="key" style="font-size:25px" color="pbzyellow"></ion-icon>\n                </ion-col>\n                <ion-col>\n                    <input style="-webkit-text-security:disc;background:rgba(0,0,0,0);color:#000;height:100%;font-size:16px;font-style:bold;width:100%;border:none" type="tel" maxlength="4" [(ngModel)]="pin.confirm" />\n                </ion-col>\n            </ion-row>\n            <div *ngIf="error==3" style="padding:3px;width:100%;color:#FE1902;font-size:11px"> {{langs.new_pin_match }}</div>\n            <div *ngIf="error==4" style="padding:3px;width:100%;color:#FE1902;font-size:11px"> {{langs.old_pin_match }}</div>\n            <div *ngIf="error==5" style="padding:3px;width:100%;color:#FE1902;font-size:11px"> {{langs.weak_pin }}</div>\n        </div>\n        <button class="submit-button" color="pbzyellow" ion-button (click)="submit()" block>{{langs.submit_txt}}</button>\n </ion-card>\n</ion-content>'/*ion-inline-end:"E:\Eclectics projects\PBZ\pbz_mobile_appApril\src\pages\change-pin\change-pin.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__providers_clientdata_clientdata__["a" /* ClientdataProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_global_vars_global_vars__["a" /* GlobalVarsProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */], __WEBPACK_IMPORTED_MODULE_4__providers_alert_service_alert_service__["a" /* AlertServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_toast__["a" /* Toast */], __WEBPACK_IMPORTED_MODULE_3__providers_api_connect_api_connect__["a" /* ApiConnectProvider */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_8__ionic_native_device__["a" /* Device */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */]])
    ], ChangePinPage);
    return ChangePinPage;
}());

//# sourceMappingURL=change-pin.js.map

/***/ })

});
//# sourceMappingURL=4.js.map