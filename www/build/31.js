webpackJsonp([31],{

/***/ 757:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmTransPageModule", function() { return ConfirmTransPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__confirm_trans__ = __webpack_require__(796);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ConfirmTransPageModule = /** @class */ (function () {
    function ConfirmTransPageModule() {
    }
    ConfirmTransPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__confirm_trans__["a" /* ConfirmTransPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__confirm_trans__["a" /* ConfirmTransPage */])
            ],
        })
    ], ConfirmTransPageModule);
    return ConfirmTransPageModule;
}());

//# sourceMappingURL=confirm-trans.module.js.map

/***/ }),

/***/ 796:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmTransPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_global_vars_global_vars__ = __webpack_require__(93);
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
 * Generated class for the ConfirmTransPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ConfirmTransPage = /** @class */ (function () {
    function ConfirmTransPage(globalVars, navCtrl, navParams) {
        this.globalVars = globalVars;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.langs = this.globalVars.doTranslate(this.globalVars.getLang());
    }
    ConfirmTransPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ConfirmTransPage');
    };
    ConfirmTransPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-confirm-trans',template:/*ion-inline-start:"E:\Eclectics projects\PBZ\pbz_mobile_appApril\src\pages\confirm-trans\confirm-trans.html"*/'<!--\n  Generated template for the ConfirmModalPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-content padding class="{{ title }}">\n  <ion-row padding class="padme">\n  </ion-row>\n  <ion-row padding class="error_image">\n      <img src="assets/images/{{ image }}.png" alt="">\n  </ion-row>\n  <div>\n      <ion-row padding>\n          <div class="t_label" style="color:#FFF;padding-top:10px;text-align: center"> {{ body_title }} </div>\n      </ion-row>\n      <ion-row>\n          <div class="white_line"> </div>\n      </ion-row>\n\n      <div *ngIf="yes==1">\n          <ion-row padding>\n              <div style="margin: auto;">\n                  <p class="mybal" style="color:#FFF"> {{ message }} </p>\n              </div>\n          </ion-row>\n      </div>\n      <div *ngIf="yes==2">\n          <h3 class="signin_title" style="color:#FFF;padding-top:10px"> {{ body_amount | currency:\'TZS\':\'symbol\':\'3.2-2\'}}</h3>\n          <ion-row padding>\n              <div style="margin: auto;">\n                  <p class="mybal" style="color:#FFF"> {{ message }} {{ body_amount | currency:\'TZS\':\'symbol\':\'3.2-2\'}}</p>\n                </div>\n          </ion-row>\n      </div>\n\n      <div *ngIf="yes==3">\n          <ion-row padding>\n              <div style="margin: auto;">\n                  <p class="mybal" style="color:#FFF"> {{ message }}\n                  </p>\n              </div>\n          </ion-row>\n      </div>\n\n\n  </div>\n\n  <div>\n      <button ion-button color="{{ button_color }}" block (click)="closeModal(true)">  {{langs.ok}} </button>\n  </div>\n\n</ion-content>'/*ion-inline-end:"E:\Eclectics projects\PBZ\pbz_mobile_appApril\src\pages\confirm-trans\confirm-trans.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_global_vars_global_vars__["a" /* GlobalVarsProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], ConfirmTransPage);
    return ConfirmTransPage;
}());

//# sourceMappingURL=confirm-trans.js.map

/***/ })

});
//# sourceMappingURL=31.js.map