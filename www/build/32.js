webpackJsonp([32],{

/***/ 756:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmModalPageModule", function() { return ConfirmModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__confirm_modal__ = __webpack_require__(795);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ConfirmModalPageModule = /** @class */ (function () {
    function ConfirmModalPageModule() {
    }
    ConfirmModalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__confirm_modal__["a" /* ConfirmModalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__confirm_modal__["a" /* ConfirmModalPage */])
            ],
        })
    ], ConfirmModalPageModule);
    return ConfirmModalPageModule;
}());

//# sourceMappingURL=confirm-modal.module.js.map

/***/ }),

/***/ 795:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmModalPage; });
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



var ConfirmModalPage = /** @class */ (function () {
    function ConfirmModalPage(appCtrl, navParams, navCtrl, viewCtrl, globalVars, loadingController) {
        this.appCtrl = appCtrl;
        this.navParams = navParams;
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.globalVars = globalVars;
        this.loadingController = loadingController;
        this.template = "<div></div>";
        this.completed = false;
        this.pageTo = "Login";
        this.body = navParams.get('body');
        this.template = navParams.get('template');
        this.completed = navParams.get('completed');
        this.pageTo = navParams.get('pageTo');
        this.ttype = navParams.get('ttype');
        this.langs = this.globalVars.doTranslate(this.globalVars.getLang());
    }
    ConfirmModalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ConfirmModal');
    };
    ConfirmModalPage.prototype.closeModal = function (proceed) {
        console.log(proceed);
        this.viewCtrl.dismiss(proceed);
    };
    ConfirmModalPage.prototype.closeModal2 = function (proceed) {
        if (this.pageTo == 'LoginPage')
            this.navCtrl.setRoot('LoginPage');
        else
            this.viewCtrl.dismiss(proceed);
    };
    ConfirmModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-confirm-modal',template:/*ion-inline-start:"E:\Eclectics projects\PBZ\pbz_mobile_appApril\src\pages\confirm-modal\confirm-modal.html"*/'<!--\n  Generated template for the ConfirmModalPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-content class="bg">\n\n    <div class="container2">\n\n        <div class="row row2 center kati " style="width:100%;padding:0px;">\n            <div style="color:#000000; padding:0px;" class="raisedlay back-view ">\n                <div\n                    style="width:100%;color:#fff;padding:5px;text-align:center;font-family:Ubuntu;font-weight: bold; background-color: #00ADEE">\n                    <h6>PBZ MOBILE</h6>\n                </div>\n                <div [innerHTML]="template"\n                    style="color:#000;font-size:14px;font-family:Ubuntu;width:250px;padding:20px 20px 0px 20px">\n                </div>\n                <ion-row *ngIf="!completed" style="padding:10px;">\n                    <ion-col col-6>\n                        <button ion-button outline block mode="ios" color="danger" (click)="closeModal(false)"\n                            style="width:70%">\n                            {{langs.cancel}}\n                        </button>\n                    </ion-col>\n                    <ion-col col-6>\n                        <button ion-button block mode="ios" color="pbzyellow" (click)="closeModal(true)"\n                            style="width:70%">\n                            {{langs.ok}}\n                        </button>\n                    </ion-col>\n                </ion-row>\n                <ion-row *ngIf="completed" padding>\n                    <ion-col class="center">\n                        <button ion-button block mode="ios" color="pbzyellow" (click)="closeModal2(true)"\n                            style="width:70%">\n                            {{langs.close}}\n                        </button>\n                    </ion-col>\n                </ion-row>\n            </div>\n        </div>\n\n    </div>\n</ion-content>'/*ion-inline-end:"E:\Eclectics projects\PBZ\pbz_mobile_appApril\src\pages\confirm-modal\confirm-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_global_vars_global_vars__["a" /* GlobalVarsProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
    ], ConfirmModalPage);
    return ConfirmModalPage;
}());

//# sourceMappingURL=confirm-modal.js.map

/***/ })

});
//# sourceMappingURL=32.js.map