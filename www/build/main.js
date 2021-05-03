webpackJsonp([37],{

/***/ 179:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 179;

/***/ }),

/***/ 226:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/airtime/airtime.module": [
		748,
		5
	],
	"../pages/atms/atms.module": [
		753,
		36
	],
	"../pages/balance/balance.module": [
		749,
		35
	],
	"../pages/bills/bills.module": [
		750,
		34
	],
	"../pages/change-pin/change-pin.module": [
		751,
		4
	],
	"../pages/chequerequest/chequerequest.module": [
		752,
		3
	],
	"../pages/cheques/cheques.module": [
		754,
		33
	],
	"../pages/collection/collection.module": [
		755,
		2
	],
	"../pages/confirm-modal/confirm-modal.module": [
		756,
		32
	],
	"../pages/confirm-trans/confirm-trans.module": [
		757,
		31
	],
	"../pages/contact/contact.module": [
		758,
		30
	],
	"../pages/enquiries/enquiries.module": [
		760,
		29
	],
	"../pages/faqs/faqs.module": [
		759,
		28
	],
	"../pages/forex/forex.module": [
		762,
		27
	],
	"../pages/fullstatement/fullstatement.module": [
		765,
		26
	],
	"../pages/fundstransfer/fundstransfer.module": [
		761,
		10
	],
	"../pages/government/government.module": [
		763,
		8
	],
	"../pages/government2/government2.module": [
		764,
		9
	],
	"../pages/home/home.module": [
		766,
		25
	],
	"../pages/loading/loading.module": [
		767,
		24
	],
	"../pages/login/login.module": [
		768,
		23
	],
	"../pages/merchant/merchant.module": [
		783,
		22
	],
	"../pages/ministatement/ministatement.module": [
		769,
		21
	],
	"../pages/notification/notification.module": [
		770,
		20
	],
	"../pages/otp/otp.module": [
		772,
		19
	],
	"../pages/pin-modal/pin-modal.module": [
		771,
		18
	],
	"../pages/products/products.module": [
		773,
		17
	],
	"../pages/profile/profile.module": [
		774,
		16
	],
	"../pages/register/register.module": [
		775,
		15
	],
	"../pages/settings/settings.module": [
		776,
		14
	],
	"../pages/sidemenu/sidemenu.module": [
		777,
		13
	],
	"../pages/topup/topup.module": [
		778,
		7
	],
	"../pages/transfer/transfer.module": [
		784,
		0
	],
	"../pages/tutorial/tutorial.module": [
		779,
		12
	],
	"../pages/utilitypayment/utilitypayment.module": [
		780,
		6
	],
	"../pages/wakfu/wakfu.module": [
		781,
		11
	],
	"../pages/withdraw/withdraw.module": [
		782,
		1
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 226;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 379:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientdataProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__(453);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_global_vars_global_vars__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_alert_service_alert_service__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular__ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






// import { HTTP, HTTPResponse } from '@ionic-native/http';
// import { Network } from '@ionic-native/network';

// declare var Connection;
var ClientdataProvider = /** @class */ (function () {
    function ClientdataProvider(alert, http, platform, globalVars) {
        this.alert = alert;
        this.http = http;
        this.platform = platform;
        this.globalVars = globalVars;
        this.android_events_url = '';
        //Prod  
        this.url = 'https://epayment.pbzbank.co.tz/pbzapi/api/public/index.php/api/v1/';
        //Test  
        //url = 'http://154.127.1.123:82/pbzapi/api/public/index.php/api/v1/'; 
        //url = 'http://172.20.1.58:82/pbzapi/api/public/index.php/api/v1/';
        //  url = 'http://192.168.137.181/pbzapi/api/public/index.php/api/v1/';
        //localhost
        //url = 'http://localhost/pbzapi/api/public/index.php/api/v1/';
        //sign2 is for  new live pos
        this.login_url = this.url + 'signin3';
        this.chamalogin_url = this.url + 'chamasignin';
        this.register_url = this.url + 'signup';
        this.update_url = this.url + 'update';
        this.balance_url = this.url + 'balance';
        this.chamabalance_url = this.url + 'chamabalance';
        this.mini_url = this.url + 'ministatement';
        this.forex_url = this.url + 'forex';
        this.chamamini_url = this.url + 'chamaministatement';
        this.full_url = this.url + 'fullstatement';
        this.bill_url = this.url + 'billpayment';
        this.payGov_url = this.url + 'makecollections';
        this.ftrans_url = this.url + 'fundstransfer';
        this.ftransname_url = this.url + 'getname';
        this.mpwithdraw_url = this.url + 'mpesawithdraw';
        this.buygoods_url = this.url + 'buygoods';
        this.creategroup_url = this.url + 'creategroup';
        this.faq_url = this.url + 'faq';
        this.jointbalance_url = this.url + 'jointbalance';
        this.jointministatement_url = this.url + 'jointministatement';
        this.jointwithdraw_url = this.url + 'jointwithdraw';
        this.jointapprove_url = this.url + 'jointapprove';
        this.addmember_url = this.url + 'addmember';
        this.approvemember_url = this.url + 'approvemember';
        this.removemember_url = this.url + 'removemember';
        this.changerolemember_url = this.url + 'changerolemember';
        this.ftrans_mt_url = this.url + 'fundmt';
        this.agent_url = this.url + 'agentenq';
        this.airtime_url = this.url + 'airtime';
        this.loanlimit_url = this.url + 'loanlimit';
        this.loanpayment_url = this.url + 'loanpayment';
        this.loanrequest_url = this.url + 'loanapplication';
        this.till_payment_url = this.url + 'tillpayment';
        this.change_pin_url = this.url + 'pinchange';
        this.cardless_url = this.url + 'cardless';
        this.withdrawal_url = this.url + 'customer_withdraw';
        this.mtwithdrawal_url = this.url + 'mtwithdrawal';
        this.requestcheque_url = this.url + 'requestcheque';
        this.stopcheque_url = this.url + 'stopcheque';
        this.requestatm_url = this.url + 'requestatm';
        this.stopatm_url = this.url + 'stopatm';
        this.mtdeposit_url = this.url + 'mtdeposit';
        this.loanguarantor_url = this.url + 'loanguarantor';
        this.fixeddeposit_url = this.url + 'fixeddeposit';
        this.fixedwithdrawal_url = this.url + 'fixedwithdrawal';
        this.feespayment_url = this.url + 'feespayment';
        this.presentment_url = this.url + 'billpresentment';
        this.collections_url = this.url + 'collectionspre';
        this.paymerchant_url = this.url + 'paymerchant';
        this.parkingpresentment_url = this.url + 'parkingpresentment';
        this.parking_url = this.url + 'parking';
        this.getmpesa_url = this.url + 'mpesadeposit';
        this.otp_url = this.url + 'otp';
        this.block_url = this.url + 'block';
        this.sms_url = this.url + 'smssubscribe';
        this.enquire_url = this.url + 'enquiry';
        this.enquire_mno_url = this.url + 'enquirymno';
        this.merchantft_url = this.url + 'merchantft';
        this.wakfu_url = this.url + 'wakfu';
        this.key = "ab765f9ewrt5hgf";
        this.iv = "ab765f987654321098765a98765abcd0";
    }
    /* getPostNative(user: any, url: string) {
       let head = {
         "Access-Control-Allow-Origin": "*",
         'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
         'Accept': 'application/json',
         "content-type": "application/json"
       }
                              
   
     //  console.log("IMSI_DATA", this.globalVars.getIMSIdata());
       let imsidata= this.globalVars.getIMSIdata();
      // console.log("IMSI****ppppp**********",  imsidata);
       let simid = imsidata.subscriberId+"";
   
       let platformVersion = this.platform.versions();
       console.log("android version>>>>>", platformVersion.num);
       
    
       user.version = '0.12';
       user.device_id = this.globalVars.uiid;
       user.simid=simid;
       user.devicetype='A';
   
       user.lang = this.globalVars.lang;
       var body = this.JSONify(user);
   
       console.log("Request_To_API2=>" + body);
       // let options = new RequestOptions({headers: headers });
   
       // this.httpNative.setSSLCertMode("pinned").then(resp => {
       //   console.log("SSL success " + resp);
       // })
       //   .catch(error => {
       //     console.log("SSL error " + error);
       //   } );
   
       // this.httpNative.setDataSerializer("json");
       // console.log("Beginning Post");
   
       // let request = { 'data': 'user' }
       // console.log("Url => " + url + " Request => " + user);
       // this.httpNative.setDataSerializer("json");
       // return Observable.fromPromise(
       //   this.httpNative.post(url, user, { 'content-type': 'application/json' }).then(this.handleSuccess).catch(this.handleErrorNative)
       // );
     }
   
     getPost(user: any, url: string) {
   
       let headers = new Headers({
         "Access-Control-Allow-Origin": "*",
         'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
         'Accept': 'application/json',
         "content-type": "application/json"
       });
      // console.log("IMSI_DATA", this.globalVars.getIMSIdata());
       let imsidata= this.globalVars.getIMSIdata();
      // console.log("IMSI****000**********",  imsidata);
       let simid = imsidata.subscriberId+"";
       user.devicetype='A';
       user.version = '0.12';
       user.device_id = this.globalVars.uiid;
       //user.imsi = this.globalVars.simnumber;
       user.lang = this.globalVars.lang;
       user.username = this.globalVars.Username;
       user.simid=simid;
       //  var body = JSON.stringify(user);
       console.log(JSON.stringify(user));
       var body = this.JSONify(user);
       console.log(body);
   
       let options = new RequestOptions({ headers: headers });
   
       return this.http.post(url, body, options)
         .timeout(85000)
         .map(
           (data: Response) =>
             data.json()
         )
         .catch(this.handleError);
     }*/
    ClientdataProvider.prototype.getPostNative = function (user, url) {
        var head = {
            "Access-Control-Allow-Origin": "*",
            'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
            'Accept': 'application/json',
            "content-type": "application/json"
        };
        var platformVersion = '9'; //this.platform.versions();
        console.log("android version>>>tenten>>", platformVersion);
        //  console.log("IMSI_DATA", this.globalVars.getIMSIdata());
        var imsidata = this.globalVars.getIMSIdata();
        console.log("IMSI****ppppp**********", imsidata);
        var simid = imsidata.subscriberId + "";
        user.version = '0.13';
        user.devicetype = 'A';
        user.androidvesrion = '9'; //platformVersion.num
        if (user.platformVersion < 10) {
            var imsidata_1 = this.globalVars.getIMSIdata();
            var simid_1 = imsidata_1.subscriberId + "";
            //user.device_id = '01928374655555';
            user.simid = simid_1;
            // user.device_id = '0192837465';
            user.device_id = this.globalVars.uiid;
        }
        else {
            // let simid = '0192837465';//imsidata.subscriberId+"";
            // user.simid=simid;
            // user.device_id = '0192837465';
            // let imsidata= this.globalVars.getIMSIdata();
            //let simid = imsidata.subscriberId+"";
            // user.simid=simid;
            user.simid = '0192837465';
            user.device_id = '0192837465';
            // user.device_id = this.globalVars.uiid;
        }
        user.lang = this.globalVars.lang;
        var body = this.JSONify(user);
        console.log("Request_To_API2=>" + body);
        // let options = new RequestOptions({headers: headers });
        // this.httpNative.setSSLCertMode("pinned").then(resp => {
        //   console.log("SSL success " + resp);
        // })
        //   .catch(error => {
        //     console.log("SSL error " + error);
        //   } );
        // this.httpNative.setDataSerializer("json");
        // console.log("Beginning Post");
        // let request = { 'data': 'user' }
        // console.log("Url => " + url + " Request => " + user);
        // this.httpNative.setDataSerializer("json");
        // return Observable.fromPromise(
        //   this.httpNative.post(url, user, { 'content-type': 'application/json' }).then(this.handleSuccess).catch(this.handleErrorNative)
        // );
    };
    ClientdataProvider.prototype.getPost = function (user, url) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            "Access-Control-Allow-Origin": "*",
            'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
            'Accept': 'application/json',
            "content-type": "application/json"
        });
        //let platformVersion = this.platform.versions();
        // console.log("android version>>>teneleventenoi>>", platformVersion.android.num);
        // console.log("IMSI_DATA", this.globalVars.getIMSIdata());
        // console.log("IMSI****000**********",  imsidata);
        user.devicetype = 'IOS';
        user.version = '0.13';
        //user.imsi = this.globalVars.simnumber;
        user.lang = this.globalVars.lang;
        user.username = this.globalVars.Username;
        // let simid = imsidata.subscriberId+"";
        // user.simid=simid;
        user.platformVersion = "11"; //platformVersion.android.num;
        //  var body = JSON.stringify(user);
        if (user.platformVersion < 10) {
            //     let imsidata= this.globalVars.getIMSIdata();
            //   let simid = imsidata.subscriberId+"";
            //   user.simid=simid;
            //  // user.device_id = '0192837465here';
            //  user.device_id = this.globalVars.uiid;
            /// user.simid=simid;
            user.simid = '019283746554';
            user.device_id = '019283746554';
            //   console.log("android version>>>we here1111>>", platformVersion.android.num);
        }
        else {
            // let simid = '0192837465';//imsidata.subscriberId+"";
            // user.simid=simid;
            // user.device_id = '0192837465';
            //let imsidata= this.globalVars.getIMSIdata();
            //let simid = imsidata.subscriberId+"";
            /// user.simid=simid;
            user.simid = '019283746554';
            user.device_id = '019283746554';
            //user.device_id = this.globalVars.uiid;
            //  console.log("android version>>>we here222>>", platformVersion.android.num);
        }
        console.log(JSON.stringify(user));
        var body = this.JSONify(user);
        console.log(body);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(url, body, options)
            .timeout(85000)
            .map(function (data) {
            return data.json();
        })
            .catch(this.handleError);
    };
    ClientdataProvider.prototype.getPost2 = function (user, url) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            "Access-Control-Allow-Origin": "*",
            'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
            'Accept': 'application/json',
            "content-type": "application/json"
        });
        var platformVersion = '10'; //this.platform.versions();
        // console.log("android version>>>teneleventenoi>>", platformVersion.android.num);
        // console.log("IMSI_DATA", this.globalVars.getIMSIdata());
        // console.log("IMSI****000**********",  imsidata);
        user.devicetype = 'A';
        user.version = '0.13';
        //user.imsi = this.globalVars.simnumber;
        user.lang = this.globalVars.lang;
        user.username = this.globalVars.Username;
        // let simid = imsidata.subscriberId+"";
        // user.simid=simid;
        user.platformVersion = '10'; //platformVersion.android.num;
        //  var body = JSON.stringify(user);
        if (user.platformVersion < 10) {
            var imsidata = this.globalVars.getIMSIdata();
            var simid = imsidata.subscriberId + "";
            user.simid = simid;
            // user.device_id = '0192837465here';
            user.device_id = this.globalVars.uiid;
            //   console.log("android version>>>we here1111>>", platformVersion.android.num);
        }
        else {
            // let simid = '0192837465';//imsidata.subscriberId+"";
            // user.simid=simid;
            // user.device_id = '0192837465';
            //let imsidata= this.globalVars.getIMSIdata();
            //let simid = imsidata.subscriberId+"";
            /// user.simid=simid;
            user.simid = '019283746554';
            user.device_id = '019283746554';
            //user.device_id = this.globalVars.uiid;
            //  console.log("android version>>>we here222>>", platformVersion.android.num);
        }
        console.log(JSON.stringify(user));
        var body = this.JSONify(user);
        console.log(body);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(url, body, options)
            .timeout(85000)
            .map(function (data) {
            return data.json();
        })
            .catch(this.handleError);
    };
    ClientdataProvider.prototype.JSONify = function (data) {
        var source = JSON.stringify(data);
        var encypted = this.globalVars.testenc(source);
        return JSON.stringify({ data: encypted });
    };
    ClientdataProvider.prototype.enquiremno = function (user) { return this.getPost(user, this.enquire_mno_url); };
    ClientdataProvider.prototype.enquire = function (user) { return this.getPost(user, this.enquire_url); };
    ClientdataProvider.prototype.register = function (user) { return this.getPost(user, this.register_url); };
    ClientdataProvider.prototype.login = function (user) { return this.getPost(user, this.login_url); };
    ClientdataProvider.prototype.chamalogin = function (user) { return this.getPost(user, this.chamalogin_url); };
    ClientdataProvider.prototype.balance = function (user) { return this.getPost(user, this.balance_url); };
    ClientdataProvider.prototype.chamabalance = function (user) { return this.getPost(user, this.chamabalance_url); };
    ClientdataProvider.prototype.ministatement = function (user) { return this.getPost(user, this.mini_url); };
    ClientdataProvider.prototype.forex = function (user) { return this.getPost(user, this.forex_url); };
    ClientdataProvider.prototype.chamaministatement = function (user) { return this.getPost(user, this.chamamini_url); };
    ClientdataProvider.prototype.fullstatement = function (user) { return this.getPost(user, this.full_url); };
    ClientdataProvider.prototype.bill = function (user) { return this.getPost(user, this.bill_url); };
    ClientdataProvider.prototype.paygovernement = function (user) { return this.getPost(user, this.payGov_url); };
    ClientdataProvider.prototype.airtime = function (user) { return this.getPost(user, this.airtime_url); };
    ClientdataProvider.prototype.funds = function (user) { return this.getPost(user, this.ftrans_url); };
    ClientdataProvider.prototype.getaccname = function (user) { return this.getPost(user, this.ftransname_url); };
    ClientdataProvider.prototype.mpesawithdraw = function (user) { return this.getPost(user, this.mpwithdraw_url); };
    ClientdataProvider.prototype.buygoods = function (user) { return this.getPost(user, this.buygoods_url); };
    ClientdataProvider.prototype.creategroup = function (user) { return this.getPost(user, this.creategroup_url); };
    ClientdataProvider.prototype.faq = function (user) { return this.getPost(user, this.faq_url); };
    ClientdataProvider.prototype.jointbal = function (user) { return this.getPost(user, this.jointbalance_url); };
    ClientdataProvider.prototype.jointmini = function (user) { return this.getPost(user, this.jointministatement_url); };
    ClientdataProvider.prototype.jointwithdraw = function (user) { return this.getPost(user, this.jointwithdraw_url); };
    ClientdataProvider.prototype.jointapprove = function (user) { return this.getPost(user, this.jointapprove_url); };
    ClientdataProvider.prototype.addmember = function (user) { return this.getPost(user, this.addmember_url); };
    ClientdataProvider.prototype.removemember = function (user) { return this.getPost(user, this.removemember_url); };
    ClientdataProvider.prototype.approvemember = function (user) { return this.getPost(user, this.approvemember_url); };
    ClientdataProvider.prototype.changerolemember = function (user) { return this.getPost(user, this.changerolemember_url); };
    ClientdataProvider.prototype.fundsmt = function (user) { return this.getPost(user, this.ftrans_mt_url); };
    ClientdataProvider.prototype.tillpayment = function (user) { return this.getPost(user, this.till_payment_url); };
    ClientdataProvider.prototype.loanlimit = function (user) { return this.getPost(user, this.loanlimit_url); };
    ClientdataProvider.prototype.loanpayment = function (user) { return this.getPost(user, this.loanpayment_url); };
    ClientdataProvider.prototype.loanrequest = function (user) { return this.getPost(user, this.loanrequest_url); };
    ClientdataProvider.prototype.changepin = function (user) { return this.getPost(user, this.change_pin_url); };
    ClientdataProvider.prototype.cardless = function (user) { return this.getPost(user, this.cardless_url); };
    ClientdataProvider.prototype.withdrawal = function (user) { return this.getPost(user, this.withdrawal_url); };
    ClientdataProvider.prototype.mtwithdrawal = function (user) { return this.getPost(user, this.mtwithdrawal_url); };
    ClientdataProvider.prototype.update = function (user) { return this.getPost(user, this.update_url); };
    ClientdataProvider.prototype.requestcheque = function (user) { return this.getPost(user, this.requestcheque_url); };
    ClientdataProvider.prototype.stopcheque = function (user) { return this.getPost(user, this.stopcheque_url); };
    ClientdataProvider.prototype.loanguarantor = function (user) { return this.getPost(user, this.loanguarantor_url); };
    ClientdataProvider.prototype.requestatm = function (user) { return this.getPost(user, this.requestatm_url); };
    ClientdataProvider.prototype.stopatm = function (user) { return this.getPost(user, this.stopatm_url); };
    ClientdataProvider.prototype.fixeddeposit = function (user) { return this.getPost(user, this.fixeddeposit_url); };
    ClientdataProvider.prototype.fixedwithdrawal = function (user) { return this.getPost(user, this.fixedwithdrawal_url); };
    ClientdataProvider.prototype.feespayment = function (user) { return this.getPost(user, this.feespayment_url); };
    ClientdataProvider.prototype.presentment = function (user) { return this.getPost(user, this.presentment_url); };
    ClientdataProvider.prototype.collectionspre = function (user, title) { return this.getPost(user, this.url + title); };
    ClientdataProvider.prototype.paymerchant = function (user) { return this.getPost(user, this.paymerchant_url); };
    ClientdataProvider.prototype.parkingpresentment = function (user) { return this.getPost(user, this.parkingpresentment_url); };
    ClientdataProvider.prototype.parking = function (user) { return this.getPost(user, this.parking_url); };
    ClientdataProvider.prototype.otp = function (user) { return this.getPost(user, this.otp_url); };
    ClientdataProvider.prototype.sms = function (user) { return this.getPost(user, this.sms_url); };
    ClientdataProvider.prototype.getMpesa = function (user) { return this.getPost(user, this.getmpesa_url); };
    ClientdataProvider.prototype.block = function (user) { return this.getPost(user, this.block_url); };
    ClientdataProvider.prototype.agent_inq = function (user) { return this.getPost(user, this.agent_url); };
    ClientdataProvider.prototype.merchantft = function (user) { return this.getPost(user, this.merchantft_url); };
    ClientdataProvider.prototype.wakfu = function (user) {
        return this.getPost(user, this.wakfu_url);
    };
    ClientdataProvider.prototype.handleError = function (error) {
        //console.log(error);
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["Observable"].throw(error.json());
    };
    var _a, _b, _c, _d;
    ClientdataProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__providers_alert_service_alert_service__["a" /* AlertServiceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__providers_alert_service_alert_service__["a" /* AlertServiceProvider */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["m" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["m" /* Platform */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__providers_global_vars_global_vars__["a" /* GlobalVarsProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_global_vars_global_vars__["a" /* GlobalVarsProvider */]) === "function" && _d || Object])
    ], ClientdataProvider);
    return ClientdataProvider;
}());

//# sourceMappingURL=clientdata.js.map

/***/ }),

/***/ 380:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidatorProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the ValidatorProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ValidatorProvider = /** @class */ (function () {
    function ValidatorProvider(http) {
        this.http = http;
        console.log('Hello ValidatorProvider Provider');
    }
    ValidatorProvider.prototype.cleanDigit = function (numb) {
        var ni = numb.match(/^[0-9]+$/);
        ni = parseInt(ni);
        return ni.toString();
    };
    ValidatorProvider.prototype.isEmail = function (email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        //console.log(email);
        if (re.test(email)) {
            return true;
        }
        else {
            return false;
        }
    };
    ValidatorProvider.prototype.isName = function (name) {
        return true;
    };
    ValidatorProvider.prototype.isMobile = function (mobile) {
        var res = false;
        if (mobile.length == 10) {
            if (mobile.startsWith("07") || mobile.startsWith("06")) {
                res = true;
            }
            else {
                res = false;
            }
        }
        else {
            res = false;
        }
        return res;
    };
    ValidatorProvider.prototype.isID = function (id) {
        var res = false;
        if (id.length >= 8) {
            res = true;
        }
        else {
            res = false;
        }
        return res;
    };
    ValidatorProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], ValidatorProvider);
    return ValidatorProvider;
}());

//# sourceMappingURL=validator.js.map

/***/ }),

/***/ 381:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_contacts__ = __webpack_require__(334);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the Contacts provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var ContactsProvider = /** @class */ (function () {
    function ContactsProvider(contacts) {
        this.contacts = contacts;
        console.log('Hello Contacts Provider');
    }
    ContactsProvider.prototype.pickContact = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.contacts.pickContact().then(function (data) {
                _this.contact = data;
                var phoneNumbers = [];
                for (var i = 0; i < _this.contact.phoneNumbers.length; i++) {
                    var rawContact = _this.contact.phoneNumbers[i].value.replace(/[^\d]/g, '').replace(/\D/g, '');
                    var formattedContact = _this.validateResponse(rawContact);
                    if (formattedContact != "") {
                        phoneNumbers.push(formattedContact);
                    }
                }
                if (_this.contact.displayName != undefined || _this.contact.displayName != null) {
                    _this.name = _this.contact.displayName;
                }
                else {
                    _this.name = " ";
                }
                _this.mycontact = { phoneNo: phoneNumbers, name: _this.name };
                resolve(_this.mycontact);
            }, function (error) { return console.error('Error saving contact.', error); });
        });
    };
    ContactsProvider.prototype.validateResponse = function (res) {
        var validateResponse = "";
        if (res.indexOf("7") == 0) {
            res = "0" + res;
            if (!(/^\d{10}$/.test(res))) {
                validateResponse = "";
                return validateResponse;
            }
            else {
                validateResponse = res;
                return validateResponse;
            }
        }
        else if (res.substring(0, 4) == "+255") {
            if (!(/^\d{10}$/.test(res))) {
                validateResponse = "";
                return validateResponse;
            }
            else {
                validateResponse = res;
                return validateResponse;
            }
        }
        else if (res.substring(0, 3) == "255") {
            res = res.replace("255", "0");
            if (!(/^\d{10}$/.test(res))) {
                validateResponse = "";
                return validateResponse;
            }
            else {
                validateResponse = res;
                return validateResponse;
            }
        }
        else if (res.substring(0, 1) != "0") {
            validateResponse = "";
            return validateResponse;
        }
        else if (!(/^\d{10}$/.test(res))) {
            validateResponse = "";
            return validateResponse;
        }
        else {
            validateResponse = res;
            return validateResponse;
        }
    };
    ContactsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_contacts__["a" /* Contacts */]])
    ], ContactsProvider);
    return ContactsProvider;
}());

//# sourceMappingURL=contacts.js.map

/***/ }),

/***/ 382:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiConnectProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/*
  Generated class for the ApiConnectProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ApiConnectProvider = /** @class */ (function () {
    function ApiConnectProvider() {
        console.log('Hello ApiConnectProvider Provider');
    }
    ApiConnectProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], ApiConnectProvider);
    return ApiConnectProvider;
}());

//# sourceMappingURL=api-connect.js.map

/***/ }),

/***/ 386:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConnectivityServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_network__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ConnectivityServiceProvider = /** @class */ (function () {
    function ConnectivityServiceProvider(platform, network) {
        this.platform = platform;
        this.network = network;
        this.onDevice = this.platform.is('cordova');
    }
    ConnectivityServiceProvider.prototype.isOnline = function () {
        if (this.onDevice && this.network.type) {
            return this.network.type !== Connection.NONE;
        }
        else {
            return navigator.onLine;
        }
    };
    ConnectivityServiceProvider.prototype.isOffline = function () {
        if (this.onDevice && this.network.type) {
            return this.network.type === Connection.NONE;
        }
        else {
            return !navigator.onLine;
        }
    };
    ConnectivityServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_1__ionic_native_network__["a" /* Network */]])
    ], ConnectivityServiceProvider);
    return ConnectivityServiceProvider;
}());

//# sourceMappingURL=connectivity-service.js.map

/***/ }),

/***/ 387:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(392);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 392:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(376);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(377);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_device__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_sim__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_android_permissions__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_network__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_contacts__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_social_sharing__ = __webpack_require__(744);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_toast__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_storage__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ng_idle_keepalive__ = __webpack_require__(745);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_call_number__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__app_component__ = __webpack_require__(747);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_alert_service_alert_service__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_clientdata_clientdata__ = __webpack_require__(379);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_global_vars_global_vars__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_api_connect_api_connect__ = __webpack_require__(382);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__providers_validator_validator__ = __webpack_require__(380);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__providers_contacts_contacts__ = __webpack_require__(381);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__providers_connectivity_service_connectivity_service__ = __webpack_require__(386);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









//import { Sim, SimOriginal } from '@ionic-native/sim';





//import {Uid} from '@ionic-native/uid';

// import { HTTP, HTTPResponse } from '@ionic-native/http';

//import { BarcodeScanner } from '@ionic-native/barcode-scanner';

// import { DatePicker } from '@ionic-native/date-picker';
// import { LaunchNavigator } from '@ionic-native/launch-navigator/ngx';
//providers








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_17__app_component__["a" /* MyApp */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_17__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/airtime/airtime.module#AirtimePageModule', name: 'AirtimePage', segment: 'airtime', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/balance/balance.module#BalancePageModule', name: 'BalancePage', segment: 'balance', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/bills/bills.module#BillsPageModule', name: 'BillsPage', segment: 'bills', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/change-pin/change-pin.module#ChangePinPageModule', name: 'ChangePinPage', segment: 'change-pin', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/chequerequest/chequerequest.module#ChequerequestPageModule', name: 'ChequerequestPage', segment: 'chequerequest', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/atms/atms.module#AtmsPageModule', name: 'AtmsPage', segment: 'atms', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cheques/cheques.module#ChequesPageModule', name: 'ChequesPage', segment: 'cheques', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/collection/collection.module#CollectionPageModule', name: 'CollectionPage', segment: 'collection', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/confirm-modal/confirm-modal.module#ConfirmModalPageModule', name: 'ConfirmModalPage', segment: 'confirm-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/confirm-trans/confirm-trans.module#ConfirmTransPageModule', name: 'ConfirmTransPage', segment: 'confirm-trans', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/contact/contact.module#ContactPageModule', name: 'ContactPage', segment: 'contact', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/faqs/faqs.module#FaqsPageModule', name: 'FaqsPage', segment: 'faqs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/enquiries/enquiries.module#EnquiriesPageModule', name: 'EnquiriesPage', segment: 'enquiries', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/fundstransfer/fundstransfer.module#FundstransferPageModule', name: 'FundstransferPage', segment: 'fundstransfer', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/forex/forex.module#ForexPageModule', name: 'ForexPage', segment: 'forex', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/government/government.module#GovernmentPageModule', name: 'GovernmentPage', segment: 'government', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/government2/government2.module#GovernmentPage2Module', name: 'GovernmentPage2', segment: 'government2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/fullstatement/fullstatement.module#FullstatementPageModule', name: 'FullstatementPage', segment: 'fullstatement', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/loading/loading.module#LoadingPageModule', name: 'LoadingPage', segment: 'loading', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ministatement/ministatement.module#MinistatementPageModule', name: 'MinistatementPage', segment: 'ministatement', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/notification/notification.module#NotificationPageModule', name: 'NotificationPage', segment: 'notification', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pin-modal/pin-modal.module#PinModalPageModule', name: 'PinModalPage', segment: 'pin-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/otp/otp.module#OtpPageModule', name: 'OtpPage', segment: 'otp', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/products/products.module#ProductsPageModule', name: 'ProductsPage', segment: 'products', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/settings/settings.module#SettingsPageModule', name: 'SettingsPage', segment: 'settings', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sidemenu/sidemenu.module#SidemenuPageModule', name: 'SidemenuPage', segment: 'sidemenu', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/topup/topup.module#TopupPageModule', name: 'TopupPage', segment: 'topup', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tutorial/tutorial.module#TutorialPageModule', name: 'TutorialPage', segment: 'tutorial', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/utilitypayment/utilitypayment.module#UtilitypaymentPageModule', name: 'UtilitypaymentPage', segment: 'utilitypayment', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/wakfu/wakfu.module#WakfuPageModule', name: 'WakfuPage', segment: 'wakfu', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/withdraw/withdraw.module#WithdrawPageModule', name: 'WithdrawPage', segment: 'withdraw', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/merchant/merchant.module#MerchantPageModule', name: 'MerchantPage', segment: 'merchant', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/transfer/transfer.module#TransferPageModule', name: 'TransferPage', segment: 'transfer', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_15__ng_idle_keepalive__["a" /* NgIdleKeepaliveModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_14__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_17__app_component__["a" /* MyApp */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_android_permissions__["a" /* AndroidPermissions */], __WEBPACK_IMPORTED_MODULE_16__ionic_native_call_number__["a" /* CallNumber */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_device__["a" /* Device */], __WEBPACK_IMPORTED_MODULE_11__ionic_native_contacts__["a" /* Contacts */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_10__ionic_native_network__["a" /* Network */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_social_sharing__["a" /* SocialSharing */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_toast__["a" /* Toast */], __WEBPACK_IMPORTED_MODULE_8__ionic_native_sim__["a" /* Sim */],
                { provide: __WEBPACK_IMPORTED_MODULE_3__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_24__providers_connectivity_service_connectivity_service__["a" /* ConnectivityServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_18__providers_alert_service_alert_service__["a" /* AlertServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_19__providers_clientdata_clientdata__["a" /* ClientdataProvider */],
                __WEBPACK_IMPORTED_MODULE_20__providers_global_vars_global_vars__["a" /* GlobalVarsProvider */],
                __WEBPACK_IMPORTED_MODULE_21__providers_api_connect_api_connect__["a" /* ApiConnectProvider */],
                __WEBPACK_IMPORTED_MODULE_22__providers_validator_validator__["a" /* ValidatorProvider */],
                __WEBPACK_IMPORTED_MODULE_23__providers_contacts_contacts__["a" /* ContactsProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 448:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Language */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return eng; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return kis; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Language = /** @class */ (function () {
    function Language() {
    }
    Language = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], Language);
    return Language;
}());

var eng = {
    "username_prompt": "Mobile Number",
    "password_prompt": "Password",
    "login": "Login",
    "quick_opt": "Quick Options",
    "register": "Register",
    "swipe_right": "Swipe right to learn more about PBZ Mobile App",
    "home": "Home",
    "get_started": " Register Today and get started",
    "easy": "Welcome back to PBZ Mobile",
    "in_charge": "Be in Charge",
    "easy_payment": "Easy Payment",
    "paybill_home": "Pay you bills and arrears at the comfort of you home",
    "incharge_loan": "be in charge of your bank account and take control",
    "created_mind": "created with you in mind, giving you the opportunity to take control",
    "profile": "My Profile",
    "fname": "First Name",
    "sname": "Second Name",
    "lname": "Last Name",
    "id": "Id Number /Passport",
    "trial_exceeded": "You have exceeded your trial. Kindly visit the nearest branch to be activated",
    "dob": "Date of Birth",
    "tell_a_friend": "Tell a Friend",
    "contact_us": "Contact Us",
    "location": "Locate Us",
    "help": "Help",
    "language": "Change Language",
    "faq": "FAQs",
    "gorvenment": "Government Collections",
    "welcome": "Welcome",
    "enquiries": "My Accounts ",
    "funds_transfer": "Money Transfer",
    "load_malipo": "Load Malipo",
    "mvisa": "Mvisa",
    "acctto": "Account to",
    "airtime_topup": "Airtime Topup",
    "bill_payments": "Bill Payments",
    "withdraw_cash": "Withdraw From Agent",
    "loans": "Loans",
    "other_services": "Other Services",
    "quick_links": "Quick Links",
    "social": "Social",
    "main_services": "Main Services",
    "pbz_news": "PBZ News",
    "about_pbz": "About PBZ",
    "logout": "Logout",
    "balance": "Balance",
    "my_phone": "My Mobile",
    "other_phone": "Other Mobile",
    "mini": "Mini Statement ",
    "full": "Full Statement ",
    "bal": "Balance Inquiry ",
    "hello": "Welcome to PBZ",
    "afternoon": "Good afternoon ",
    "evening": "Good evening ",
    "morning": "Good morning ",
    "debit": "Money Out",
    "credit": "Money In",
    "last_five": "Last 5 transactions as of",
    "exiting": "Are you Sure you want to Log Out from the Application?",
    "statements": "Get Account Statements ",
    "checkbalance": "Check Balance",
    "select_acc": "Select account",
    "avail_bal": "Available Balance",
    "actual_bal": "Actual Balance",
    "submit_txt": "Send",
    "get_text": "Get",
    "cheque_type": "Type of Checkbook",
    "cheque": "Chequebook Request",
    "cheque_title": "Cheque",
    "customer_name": "Customer Name",
    "control_no": "Control Number",
    "expiry": "Expiry",
    "ministry_code": "Ministry Code",
    "ministry_name": "Ministry Name",
    "paid": "paid",
    "not_paid": "not paid",
    "month_1": "1 Month",
    "month_2": "2 Months",
    "month_3": "3 Months",
    "select_duration": "Select duration",
    "transfer_to": "Transfer to",
    "transfer_from": "Transfer from",
    "select_recepient": "Select recipient",
    "my_number": "My number",
    "other_number": "Other number",
    "amount": "Amount",
    "coming_soon": "Coming soon...",
    "to_wallet": " Mwallet",
    "to_core": " PBZ account",
    "to_mpesa": "To Mpesa",
    "to_tigo_pesa": "To Tigo Pesa",
    "to_airtel_money": "To Airtel Money",
    "to_halopesa": "To Halopesa",
    "topup_text": "Topup",
    "forex": "Forex Rates",
    "settings": "Settings",
    "buy_from": "Buy from",
    "mobile_number": "For Mobile Number",
    "paybills_text": "Paybills",
    "tv": "Tv Subscriptions",
    "electricity": "Electricity",
    "water": "Water",
    "government": "Government Services",
    "subscription_txt": "Subscription",
    "subscribe_from": "Subscribe from",
    "utility_acc": "Account number",
    "electricity_txt": "Electricity",
    "meter_no": "Meter number",
    "withdraw_txt": "Withdraw Cash",
    "pbz_agent_txt": "From PBZ Agent",
    "from_atm": "From ATM",
    "agent_withdraw_txt": "Withdraw Cash from",
    "withdraw_from": "Withdraw from",
    "agent_id": "Agent ID",
    "agent_name": "Agent Name",
    "scan_qr": "Scan QR Code",
    "authorities": "Zanzibar Authorities",
    "union": "Union payment",
    "zrb": "Zanzibar Revenue Bureau",
    "change_pin_txt": "Change PIN",
    "change": "CHANGE",
    "pin_hint": "Your PIN is your secret",
    "old_pin": "Enter Old PIN",
    "new_pin": "Enter New PIN",
    "confirm_new_pin": "Confirm New PIN",
    "change_lang_txt": "Change Language",
    "preferred_lang_txt": "Choose preferred language",
    "checking_bal_txt": "Check balance for account",
    "connect_internet_txt": "Please connect to the Internet",
    "timeout": "The system timed out Kindly Login to Continue",
    "submitting_txt": "Submitting request...",
    "transaction_fail_txt": "Transaction failed",
    "transaction_succ_txt": "Transaction was processed successfully",
    "updating_lang_txt": "Updating language...",
    "valid_pin_txt": "Kindly enter a valid PIN",
    "valid_new_pin_txt": "Kindly enter a valid new PIN",
    "old_pin_match": "Old PIN and New PIN should not match",
    "weak_pin": "your PIN is very weak. Kindly use a strong PIN",
    "new_pin_match": "New PIN and Confirm PIN do not match",
    "updating_pin_txt": "Updating your pin...",
    "valid_phone_number": "Kindly enter a valid Mobile number starting with 0********* ",
    "wrong_credentials": "Username or pin is incorrect. Please try again.",
    "acc_blocked": "Your account is blocked. Please contact the nearest branch or call 0788266303 ",
    "mini_statement_txt": "Get Ministatement for account : ",
    "full_statement_txt": "Get E-Statement for account : ",
    "valid_acc_number": "Kindly enter a valid account number",
    "valid_amount": "Kindly enter a valid amount",
    "pay_text": "Pay",
    "from_acc_text": "Select account from",
    "gvtype": "Select Type of payment",
    "to_acc_text": "Select account to",
    "for_acc_text": "For account number",
    "valid_topup_number": "Kindly enter a valid Mobile number",
    "valid_name": "Kindly enter a valid Name",
    "valid_id": "Kindly enter a valid Id Number /Passport",
    "valid_acc": "Kindly select account number",
    "valid_dob": "Enter a valid Date of Birth",
    "valid_startdate": "Kindly select start date",
    "valid_enddate": "Kindly select end date",
    "valid_startdate_great": "Start date cannot be greater than end date",
    "exceeded_yr": "Date range cannot exceed one year",
    "same_acc": "You cannot tranfer funds to the same Account",
    "coming": "This service is Unavailable. Coming soon",
    "sell": "Selling",
    "buy": "Buying",
    "back": "Back",
    "ok": "Ok",
    "from": "From",
    "to": "To",
    "close": "Close",
    "cancel": "Cancel",
    "fee_name": "Fee Name",
    "fee_type": "Fee Type",
    "secure_pin": "Please enter your secure PIN",
    "internet": "No internet connection. Kindly connect to the internet and try again",
    "service_title": "Service not Available",
    "service_body": "This service is Currently not available. We will notify you when the service is available. Sorry for the incoviniency",
    "topup_meso": "Do you want to buy {0} airtime of TZS {1.amount} for: {1.account_to}?",
    "pin_change_meso": "Do you want to change PIN of account {0}?",
    "cheque_stop_meso": "Do you want to stop  Cheque of account: {0} from processing ?",
    "cheque_req_meso": "Do you want to request a Chequebook for account: {0} ?",
    "collection_meso": "Do you want to pay TZS {0.amount} For {1.feename} ?",
    "ft_meso": "Do you want to send TZS {0.amount}  from Account :{0.account_from} to: {0.account_to}?",
    "withdraw_agent_meso": "Do you want to withdraw TZS {0.amount} from  {1.name}?",
    "pbz_ft_meso": "Do you want to send TZS {0.amount}  from Account :{0.account_from} to  {0.type} Account of {1.firstName} {1.middleName} {1.lastName}  Account No {0.account_to}?",
    "buy_text": "Buy",
    "next": "Next",
    "airtime_txt": "Airtime",
    "transfer_txt": "PBZ Transfers",
    "other_bank": "Other Bank Transfers",
    "mobile_transfer": "Mobile Money Transfers",
    "bal_for": "Balance for Account",
    "more_acc": "MORE ACC...",
    "tap_bal": "Tap to Check Balance",
    "try_again": "TRY AGAIN",
    "number_txt": "Number",
    "via_agent": "via agent",
    "to_text": "to",
    "my_b2c_number": "To my @b2c",
    "valid_email": "Enter a valid email",
    "email": "Email Address",
    "enter_cotrol": "Kindly enter the control number to transact",
    "server_error": "Dear Customer, There was an error in Server Connection, Kindly Try Again Later",
    "accept_tncs": "By clicking Ok, it is assumed that you agree to PBZ terms and Conditions as per the link below",
    "view_tncs": "view terms and conditions",
    "reason": "Reason for payment",
    "reason1": "Reason for sending",
    "tech_error": "we are currently experiencing technical challenges",
    "tech": "we are currently experiencing technical challenges",
    "terms": " By using this app, you agree to the Terms and Conditions",
    "notification": " Notifications",
    "search": " Search Name",
    "products": " PBZ Products",
    "receiverbank": "Bank name",
    "valid_reason": "Please enter a valid reason",
    "valid_receivername": "Please enter a valid receiver name",
    "valid_bank": "Please enter a valid bank",
    "receivername": "Receiver name",
    "paymerchant": "Buy Goods",
    "merchante_meso": "Kindly confirm you want to proceed payments for Merchant  {1.merchantname} ?",
    "wakfu": "Wakfu Donation"
};
var kis = {
    "username_prompt": "Nambari ya Simu",
    "password_prompt": "Namba ya Siri",
    "login": "Ingia",
    "quick_opt": "Huduma za Haraka",
    "acctto": "Akaunti unakotuma",
    "register": "Jisajili",
    "swipe_right": " Pangusa Kulia ujifunze Zaidi kuhusu PBZ Mobile App",
    "home": "Nyumbani",
    "get_started": "Anza kutumia",
    "easy": " Karibu Katika Huduma ya PBZ Mobile Banking",
    "in_charge": "Kuwa msimamizi",
    "easy_payment": "Malipo Rahisi",
    "paybill_home": " Lipia Ankara na Malimbikizo kwa raha mustarehe ukiwa popote ulipo  ",
    "incharge_loan": " Kuwa msimamizi wa hesabu yako",
    "created_mind": "Hii ipo katika akili yako na kukupa nafasi ya kuisimamia Hesabu yako",
    "profile": "Taarifa Zangu",
    "fname": "Jina la Mwanzo",
    "sname": "Jina la Pili",
    "lname": "Jina la Mwisho",
    "id": " Namba ya Kitambulisho /Pasi ya Kusafiria",
    "trial_exceeded": " Majaribio yako ya Kuingia yamekwisha. Tafadhali tembelea tawi lililokaribu nawe kwa msaada ",
    "dob": "Tarehe ya Kuzaliwa",
    "tell_a_friend": "Mwambie Rafiki yako",
    "contact_us": "Wasiliana nasi",
    "location": "Utatupata wapi",
    "help": "Usaidizi",
    "language": "Badilisha Lugha",
    "faq": "Mambo Muhimu yanayohusu Huduma ya PBZ Mobile Banking",
    "gorvenment": "Malipo ya Serikali ",
    "welcome": "Karibu",
    "enquiries": "Taarifa za Akaunti",
    "funds_transfer": "Hamisha Pesa",
    "load_malipo": "Kuweka Malipo",
    "mvisa": "Mvisa",
    "airtime_topup": "Nunua Muda wa Maongezi",
    "bill_payments": "Malipo ya Ankara",
    "withdraw_cash": "Utoaji wa Fedha Taslim",
    "loans": "Mikopo",
    "other_services": "Huduma Nyingine",
    "quick_links": "Kiunganisho cha Huduma",
    "social": "Jamii",
    "main_services": "Huduma kuu",
    "pbz_news": "PBZ Habari",
    "about_pbz": "Kuhusu PBZ",
    "logout": "Kutoka",
    "balance": "Salio",
    "my_phone": "Simu Yangu",
    "other_phone": "Simu Nyingine",
    "mini": "Taatifa Ndogo ",
    "full": "taarifa Kamili ",
    "bal": "Salio La akaunti ",
    "hello": "Karibu PBZ ",
    "afternoon": "Habari za Mchana ",
    "evening": "Habari za Jioni ",
    "morning": "Habari za Asubuhi ",
    "debit": "Pesa Zilizotoka",
    "credit": "Pesa Zinazoingia",
    "last_five": " Miamala Mitano ya Mwisho kufikia ",
    "exiting": "Unataka kutoka katika Application?",
    "statements": "Toa Taarifa Kamili wa Akaunti ",
    "checkbalance": "Angalia Salio",
    "select_acc": "Chagua Akaunti",
    "avail_bal": "Salio Lililopo",
    "actual_bal": "Salio Sahihi",
    "submit_txt": "Tuma",
    "get_text": "Pata",
    "cheque_type": "Aina ya Hundi",
    "cheque": "Maombi ya Hundi",
    "cheque_title": "Hundi",
    "customer_name": "Jina la Mteja",
    "control_no": "Namba ya Malipo",
    "expiry": "Muda wa Kumalizika",
    "ministry_code": "Namba ya Wizara",
    "ministry_name": "Jina la Wizara",
    "paid": "Imelipwa",
    "not_paid": "Haikulipwa",
    "month_1": "1 Mwezi",
    "month_2": "2 Mwezi",
    "month_3": "3 Mwezi",
    "select_duration": "Chagua Muda",
    "transfer_to": "Hamisha Kwenda",
    "transfer_from": "Hamisha Kutoka",
    "select_recepient": "Chagua Anaepelekewa",
    "my_number": "Namba Yangu",
    "other_number": "Namba Nyingine",
    "amount": "Kiwango",
    "coming_soon": "Karibuni Itapatikana...",
    "to_wallet": " Mwaleti",
    "to_core": " PBZ Akaunti",
    "to_mpesa": "Kwenda Mpesa",
    "to_tigo_pesa": "Kwenda Tigo Pesa",
    "to_airtel_money": "Kwenda Airtel Money",
    "to_halopesa": "Kwenda Halopesa",
    "topup_text": "Muda wa Maongezi",
    "forex": "Fedha za Kigeni",
    "settings": "Mipango",
    "buy_from": "Nunua Kutoka",
    "mobile_number": "Kwa Namba ya Simu",
    "paybills_text": "Lipa Ankara",
    "tv": "Malipo ya Televisheni",
    "electricity": "Umeme",
    "water": "Maji",
    "government": "Huduma za Serikali",
    "subscription_txt": "Usajili",
    "subscribe_from": "Jisajili kutoka",
    "utility_acc": "Namba ya Akaunti",
    "electricity_txt": "Umeme",
    "meter_no": "MetNambari ya Mita",
    "withdraw_txt": "Toa Pesa Taslim",
    "pbz_agent_txt": "Kutoka kwa PBZ Wakala",
    "from_atm": "Kutoka Katika ATM",
    "agent_withdraw_txt": "Toa Pesa Taslim Kutoka",
    "withdraw_from": "Toa Pesa Kutoka",
    "agent_id": "Utambulisho wa Wakala",
    "agent_name": "Jina la Wakala",
    "scan_qr": " Nakili QR Kodi",
    "authorities": "Idara za Zanzibar",
    "change_pin_txt": "Badilisha Namba ya Siri",
    "change": "BADILISHA",
    "pin_hint": "Namba ya Siri ni Mali yako usimpe mtu",
    "old_pin": "Ingiza Namba ya Siri ya Zamani",
    "new_pin": "Ingiza Namba ya Siri Mpya",
    "confirm_new_pin": "Thibitisha Namba ya Siri Mpya",
    "change_lang_txt": "Badilisha Lugha",
    "preferred_lang_txt": "Chagua Lugha Unayoitaka",
    "checking_bal_txt": "Angalia Salio kwa Akaunti ya",
    "connect_internet_txt": "Tafadhali jiunge na Mtandao wa Intaneti",
    "submitting_txt": "Tuma Ombi...",
    "transaction_fail_txt": "Muamala Haukufanikiwa",
    "transaction_succ_txt": "Muamala Umekamilika Vyema",
    "updating_lang_txt": "Lugha Inabadilishwa...",
    "valid_pin_txt": "Tafadhali Ingiza Namba ya Siri",
    "valid_new_pin_txt": "Tafadhali Ingiza Namba Mpya ya Siri",
    "old_pin_match": " Namba ya Siri ya Zamani na Namba ya Siri Mpya Hazifanani",
    "new_pin_match": " Namba ya Siri Mpya na Namba ya Siri iliyohakikishwa Hazifanani ",
    "weak_pin": " Namba ya Siri  ni dhaifu sana. Fanya kwa kutumia Namba yenye nguvu",
    "updating_pin_txt": "Namba yako ya Siri Inabadilishwa...",
    "valid_phone_number": " Ingiza Namba ya Simu kama inavoonyeshwa 0********* ",
    "wrong_credentials": " Jina la Mtumiaji Au Namba ya Siri Sio Sahihi . Tafadhali Jaribu Tena",
    "acc_blocked": "Akaunti yako imezuiwa. Tafadhali Tembelea Tawi la PBZ Lililo Karibu nawe au Piga Simu Namba   ",
    "mini_statement_txt": " Toa Taarifa Kamili kwa Akaunti: ",
    "full_statement_txt": "Toa Taarifa refu kwa Akaunti : ",
    "valid_acc_number": "Tafadhali Ingiza Akaunti Namba kwa Usahihi",
    "valid_amount": "Tafadhali Ingiza Kiwango Sahihi",
    "pay_text": "Lipa",
    "receiverbank": " Jina la Benki",
    "from_acc_text": "Chagua Akaunti Kutoka",
    "gvtype": "Chagua aina ya malipo",
    "to_acc_text": "Chagua Akaunti ya Kupeleka",
    "for_acc_text": "Kwa Akaunti Namba",
    "valid_topup_number": "Tafadhali Ingiza Namba ya Simu kwa Usahihi",
    "valid_name": "Tafadhali Ingiza Jina kwa Usahihi",
    "valid_id": " Tafadhali Ingiza Kitambulisho kwa Usahihi/Pasi ya Kusafiria",
    "valid_acc": "Tafadhali Chagua Namba ya Akaunti",
    "valid_dob": "Ingiza Tarehe Sahihi ya Kuzaliwa",
    "valid_startdate": "Tafadhali Ingiza Tarehe ya Kuanzia",
    "valid_enddate": "Tafadhali Ingiza Tarehe ya Kumalizia",
    "valid_startdate_great": " Tarehe ya Kuanzia isiwe Kubwa Kuliko Tarehe ya Kumalizia ",
    "exceeded_yr": "Tarehe isivuke Mwaka Mmoja",
    "same_acc": " Huwezi Kuhamisha Pesa kwa Akaunti Hiyo Hiyo",
    "coming": "Samahani Huduma Hii Haipatikani kwa sasa ",
    "sell": "Kuuza",
    "buy": "Kununua",
    "back": "Rudi Nyuma",
    "ok": "Sawa",
    "from": "Kutoka",
    "to": "Kwenda",
    "close": "Funga",
    "cancel": "Sitisha",
    "fee_name": "Jina la Tozo",
    "fee_type": "Aina ya Tozo",
    "secure_pin": "Tafadhali Ingiza Namba ya Siri",
    "timeout": "Masaa ya matumizi yame kwisha ingia tena kufanya muamala",
    "internet": " Jiunge na Intaneti ili kuweza kutumia Application ",
    "service_title": "Huduma Haipatikani kwa Sasa",
    "service_body": " Huduma hii kwa sasa Haipatikani. Huduma itakapokuwa tayari tutawajulishaa . Tunaomba radhi kwa usumbufu uliojitokeza",
    "topup_meso": "Unataka Kununua{0} Muda wa Maongezi wa TZS {1.amount} kwa: {1.account_to }?",
    "pin_change_meso": "Unataka Kubadilisha Namba ya Sairi ya Akaunti? {0}?",
    "cheque_stop_meso": "Unataka kuzuiya Hundi ya Akaunti: {0} Kufanyiwa Taratibu ?",
    "cheque_req_meso": "Unataka Kuomba Hundi ya Akaunti: {0} ?",
    "collection_meso": "Unataka Kulipa TZS {0.amount} kwa {1.feename} ?",
    "ft_meso": "Do you want to send TZS {0.amount }  Kutoka Akaunti :{0.account_from} Kwenda: {0.account_to}?",
    "withdraw_agent_meso": "Unataka Kutoa TZS {0.amount} Kutoka kwa Wakala  {1.name}?",
    "pbz_ft_meso": "Unataka Kutuma TZS {0.amount}  Kutoka Akaunti :{0.account_from} Kwenda {0.type} Accounti ya  {1.firstName} {1.middleName} {1.lastName}  Akaunti Namba {0.account_to}?",
    "buy_text": "Nunua",
    "next": "Endelea",
    "airtime_txt": "Muda wa Maongezi",
    "transfer_txt": "Hamisha Pesa",
    "other_bank": "Hamisha Pesa Kwenda Benki Nyingine",
    "mobile_transfer": "Hamisha Pesa Kwenda Mitandao ya Simu",
    "bal_for": "Salio la Akaunti",
    "more_acc": "Akaunti Nyingine...",
    "tap_bal": "Bonyeza Kuona Salio",
    "try_again": "Jaribu Tena",
    "number_txt": "Nambari",
    "via_agent": "Kupitia Wakala",
    "to_text": "Kwenda",
    "my_b2c_number": "To my @b2c",
    "valid_email": "Ingiza Barua Pepe Sahihi",
    "email": "Barua Pepe",
    "enter_cotrol": "Tafadhali Ingiza Namba ya Malipo",
    "server_error": "Mpendwa Mteja, tumekabiliwa na Tatizo la Liufundi , Tafadhali Jaribu Tena Baadae",
    "accept_tncs": "kwa Kubonyesha , Itachukuliwa kuwa Umekubali Vigezo na Masharti ya PBZ kama itakavyoelezwa katika Mtandao uliotumiwa ",
    "view_tncs": "Angalia Vigezo na Masharti",
    "tech_error": "Samahani kuna Tatizo la Kiufundi kwa Sasa",
    "tech": "Samahani kuna Tatizo la Kiufundi kwa Sasa",
    "reason": "Sababu ya Malipo",
    "reason1": "Sababu ya kutuma",
    "terms": " Kwa kutumia Mfumo huu, Unakubali Vigezo na Masharti ya PBZ",
    "notification": " Matangazo",
    "search": " Tafuta jina",
    "products": "Huduma Zetu",
    "union": "Malipo ya Union",
    "zrb": "Zanzibar Revenue Bureau",
    "valid_reason": "Please enter a valid reason",
    "valid_receivername": "Please enter a valid receiver name",
    "valid_bank": "Please enter a valid bank",
    "receivername": "Jina la mpokezi",
    "paymerchant": "Lipa Bidhaa",
    "merchant_meso": "Unataka Kulipa TZS {0.amount} kwa {1.merchantname} ?",
    "wakfu": "Kuchangia Wakfu"
};
//# sourceMappingURL=language.js.map

/***/ }),

/***/ 747:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(377);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(376);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_global_vars_global_vars__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_device__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_sim__ = __webpack_require__(133);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MyApp = /** @class */ (function () {
    //sim: any;
    function MyApp(storage, platform, app, statusBar, globalVars, splashScreen, device, sim) {
        var _this = this;
        this.storage = storage;
        this.globalVars = globalVars;
        this.sim = sim;
        this.rootPage = 'LoginPage';
        platform.ready().then(function () {
            statusBar.styleDefault();
            splashScreen.hide();
            globalVars.uiid = device.uuid;
            //   globalVars.simnumber =  sim.getSimInfo();
            _this.globalVars.seekPermissions().then(function (data) {
                if (data === true) {
                    _this.globalVars.getSimInfo();
                }
                else {
                    console.log("PHONE_PERMISSION_DENIED");
                    _this.globalVars.getSimInfo();
                }
            });
        });
        this.langs = this.globalVars.doTranslate(this.globalVars.getLang());
        this.globalVars.showTimeout();
        //  this.storage.clear();
    }
    MyApp.prototype.getSimCards = function () {
        return this.simCards;
    };
    MyApp.prototype.openPage = function (page) {
        this.nav.push(page);
    };
    MyApp.prototype.go = function (page) {
        this.nav.setRoot(page);
    };
    MyApp.prototype.ionDidOpen = function () {
        this.langs = this.globalVars.doTranslate(this.globalVars.getLang());
        console.log("DOne");
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"E:\Eclectics projects\PBZ\pbz_mobile_appApril\src\app\app.html"*/'<!--<ion-menu [content]="content" id="myMenu">\n    <ion-content style="background:#FFFFFF" padding>\n        <div style="text-align:center;background:#FFFFFF;margin-top:50px">\n            <img src="assets/logo.png" style="height:100px" />\n        </div>\n        <ion-list no-lines>\n            <ion-item-divider color="divider"> {{langs.quick_links}}</ion-item-divider>\n            <button ion-item style="font-size:12px" color="divider" menuClose (click)="go(\'HomePage\')">\n              <ion-icon name="home" item-left color="nmbblue"></ion-icon>\n                 {{langs.home}}\n        </button>\n            <button ion-item style="font-size:12px" color="divider" menuClose (click)="openPage(\'ProfilePage\')">\n              <ion-icon name="person" item-left color="nmbblue"></ion-icon>\n                 {{langs.profile}}\n        </button>\n            <button ion-item style="font-size:12px" color="divider" menuClose (click)="openPage(\'SettingsPage\')">\n            <ion-icon name="locate" item-left color="nmbblue"></ion-icon>\n              {{langs.language}}\n      </button>\n            <button ion-item style="font-size:12px" color="divider" menuClose (click)="openPage(\'ChangePinPage\')">\n          <ion-icon name="call" item-left color="nmbblue"></ion-icon>\n           {{langs.change_pin_txt}}\n    </button>\n            <button ion-item style="font-size:12px" color="divider" menuClose (click)="openPage(\'FaqsPage\')">\n              <ion-icon name="people" item-left color="nmbblue"></ion-icon>\n                {{langs.faq}}\n        </button>\n            <button ion-item style="font-size:12px" color="divider" menuClose (click)="openPage(\'ContactPage\')">\n              <ion-icon name="contacts" item-left color="nmbblue"></ion-icon>\n               {{langs.contact_us}}\n        </button>\n            <ion-item-divider color="divider">{{langs.other_services}}</ion-item-divider>\n\n\n            <button ion-item style="font-size:12px" color="divider" menuClose (click)="go(\'LoginPage\')">\n              <ion-icon name="md-log-out" item-left color="nmbblue"></ion-icon>\n             {{langs.logout}}\n        </button>\n\n        </ion-list>\n    </ion-content>\n</ion-menu>-->\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<!-- <ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav> -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false" [class]="selectedTheme">\n</ion-nav>'/*ion-inline-end:"E:\Eclectics projects\PBZ\pbz_mobile_appApril\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_4__providers_global_vars_global_vars__["a" /* GlobalVarsProvider */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_device__["a" /* Device */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_sim__["a" /* Sim */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalVarsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_crypto_js__ = __webpack_require__(412);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_crypto_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_crypto_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_buffer___ = __webpack_require__(436);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_buffer____default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_buffer___);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_idle_core__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_alert_service_alert_service__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__language__ = __webpack_require__(448);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_sim__ = __webpack_require__(133);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var GlobalVarsProvider = /** @class */ (function () {
    function GlobalVarsProvider(sim, alertService, idle, modalCtrl) {
        this.sim = sim;
        this.alertService = alertService;
        this.idle = idle;
        this.modalCtrl = modalCtrl;
        this.uiid = "";
        this.simnumber = "";
        this.wallet_balance = "";
        this.customer_details = {};
        this.linked_acc = [];
        this.actualBalance = "";
        this.availableBalance = "";
        this.trials = "0";
        this.token = "";
        this.schools = [];
        this.loans = [];
        this.billers = [];
        this.all_sms = [];
        this.all_chamas = [];
        this.Username = "";
        this.subscribed_sms = "";
        this.idleState = 'Not started.';
        this.timedOut = false;
        this.langs = [];
        this.lang = 'en';
        this.isLoggedIn = false;
        this.customer = "";
        this.firstname = "";
    }
    GlobalVarsProvider.prototype.cleanDigit = function (numb) {
        var ni = numb.match(/^[0-9]+$/);
        ni = parseInt(ni);
        return ni.toString();
    };
    GlobalVarsProvider.prototype.checkValidEmail = function (email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (re.test(email)) {
            return true;
        }
        else {
            return false;
        }
    };
    GlobalVarsProvider.prototype.getIMSIdata = function () {
        return this.simCards;
    };
    GlobalVarsProvider.prototype.getSimInfo = function () {
        var _this = this;
        this.sim
            .requestReadPermission()
            .then(function () { return console.log("Permission granted"); }, function () { return console.log("Permission denied"); });
        this.sim
            .getSimInfo()
            .then(function (info) { return (_this.simCards = info, console.log("SIM_INFO_DEBUG", info)); }, function (err) { return console.log("SIM_INFO_DEBUG_ERROR: ", err); });
    };
    GlobalVarsProvider.prototype.seekPermissions = function () {
        return new Promise(function (resolve) {
            var permissions = cordova.plugins.permissions;
            permissions.requestPermission(permissions.READ_PHONE_STATE, successCallback, errorCallback);
            function errorCallback() {
                resolve(false);
            }
            function successCallback(status) {
                if (!status.hasPermission)
                    errorCallback();
                if (status.hasPermission)
                    resolve(true);
            }
        });
    };
    GlobalVarsProvider.prototype.trimPhome = function (phon) {
        phon = phon.replace(/\s/g, "");
        var lastnine = phon.substr(phon.length - 9);
        return '255' + lastnine;
    };
    GlobalVarsProvider.prototype.setUsername = function (user) {
        this.Username = user;
    };
    GlobalVarsProvider.prototype.getUsername = function () {
        return this.Username;
    };
    GlobalVarsProvider.prototype.setfirstname = function (user) {
        this.firstname = user;
    };
    GlobalVarsProvider.prototype.getfirstname = function () {
        return this.firstname;
    };
    GlobalVarsProvider.prototype.setLang = function (langu) {
        this.lang = langu;
    };
    GlobalVarsProvider.prototype.getLang = function () {
        return this.lang;
    };
    GlobalVarsProvider.prototype.doAESencrypt = function (data, uuid) {
        var encrypted = '' + __WEBPACK_IMPORTED_MODULE_1_crypto_js___default.a.AES.encrypt(data, uuid);
        return encrypted;
    };
    GlobalVarsProvider.prototype.hashpin = function (mydata) {
        return __WEBPACK_IMPORTED_MODULE_1_crypto_js___default.a.HmacSHA512(new __WEBPACK_IMPORTED_MODULE_2_buffer___["Buffer"](mydata).toString('base64'), "secret").toString(__WEBPACK_IMPORTED_MODULE_1_crypto_js___default.a.enc.Hex);
    };
    GlobalVarsProvider.prototype.doAESdecrypt = function (encrypted, uuid) {
        var decrypted = __WEBPACK_IMPORTED_MODULE_1_crypto_js___default.a.AES.decrypt(encrypted, uuid).toString(__WEBPACK_IMPORTED_MODULE_1_crypto_js___default.a.enc.Utf8);
        return decrypted;
    };
    GlobalVarsProvider.prototype.encrypt = function () {
        function padString(source) {
            var paddingChar = ' ';
            var size = 16;
            var x = source.length % size;
            var padLength = size - x;
            for (var i = 0; i < padLength; i++)
                source += paddingChar;
            return source;
        }
        // 1234567890
        var key = __WEBPACK_IMPORTED_MODULE_1_crypto_js___default.a.enc.Latin1.parse('1234567891234567');
        var iv = __WEBPACK_IMPORTED_MODULE_1_crypto_js___default.a.enc.Latin1.parse('1234567891234567');
        var message = "example";
        var padMsg = padString(message);
        var encrypted = __WEBPACK_IMPORTED_MODULE_1_crypto_js___default.a.AES.encrypt(padMsg, key, { iv: iv, padding: __WEBPACK_IMPORTED_MODULE_1_crypto_js___default.a.pad.Pkcs7, mode: __WEBPACK_IMPORTED_MODULE_1_crypto_js___default.a.mode.ECB });
        //console.log("Plain: " + message);
        //console.log("Encrypted: " + encrypted);
        //console.log("Encrypted text: " + encrypted.ciphertext)
        return encrypted;
    };
    GlobalVarsProvider.prototype.testenc = function (stri) {
        var key = '506W1F07X315B0B1'; //PICK FROM CONFIGURATION
        var iv = __WEBPACK_IMPORTED_MODULE_1_crypto_js___default.a.lib.WordArray.random(128 / 16);
        var encrypted = __WEBPACK_IMPORTED_MODULE_1_crypto_js___default.a.AES.encrypt(stri, __WEBPACK_IMPORTED_MODULE_1_crypto_js___default.a.enc.Utf8.parse(key), { iv: __WEBPACK_IMPORTED_MODULE_1_crypto_js___default.a.enc.Utf8.parse(iv) });
        var r1 = encrypted.ciphertext.toString(); // def44f8822cfb3f317a3c5b67182b437
        var crypttext = __WEBPACK_IMPORTED_MODULE_1_crypto_js___default.a.enc.Base64.stringify(encrypted.ciphertext);
        var crypttextIV = iv + crypttext;
        var data = btoa(crypttextIV);
        //console.log(data);
        return data;
    };
    GlobalVarsProvider.prototype.testdec = function (data) {
        // var rawData = atob( d
        // var iv = rawData.substring( 0, 16 );
        // var crypttext = rawData.substring( 16 );
        // var key = '506W1F07X315B0B1';
        // var decrypted = CryptoJS.AES.decrypt(
        //     crypttext,
        //     CryptoJS.enc.Utf8.parse( key ),
        //     { iv: CryptoJS.enc.Utf8.parse( iv ) } )
        // console.log(CryptoJS.enc.Latin1.stringify(decrypted));
        // return JSON.parse(CryptoJS.enc.Latin1.stringify( decrypted));
        return data;
    };
    GlobalVarsProvider.prototype.showTimeout = function () {
        var _this = this;
        this.idle.setIdle(5); //after 5 sec idle
        this.idle.setTimeout(1 * 30); //1min countdown
        this.idle.setInterrupts(__WEBPACK_IMPORTED_MODULE_3__ng_idle_core__["a" /* DEFAULT_INTERRUPTSOURCES */]);
        this.idle.onIdleEnd.subscribe(function () { return _this.idleState = 'No longer idle.'; });
        this.idle.onTimeout.subscribe(function () {
            _this.idleState = 'Timed out!';
            if (_this.timedOut) {
                _this.timeout();
            }
            else {
                _this.idle.watch();
            }
        });
        this.idle.onIdleStart.subscribe(function () { return _this.idleState = 'You\'ve gone idle!'; });
        this.idle.onTimeoutWarning.subscribe(function (countdown) {
            var data = countdown / 60;
            _this.min = data.toString().split('.')[0];
            _this.sec = parseFloat(0 + '.' + data.toString().split('.')[1]) * 60;
            _this.sec = (Math.round(_this.sec * 100) / 100);
            _this.idleState = "You'll logout in " + _this.sec + "  seconds!";
            console.log(_this.idleState);
        });
        this.idle.watch();
    };
    GlobalVarsProvider.prototype.reload = function () {
        this.idle.watch();
        this.idleState = 'Started.';
        this.timedOut = true;
        console.log('timeout: ', this.timedOut);
    };
    GlobalVarsProvider.prototype.pause = function () {
        this.idle.watch();
        this.idleState = 'Started.';
        this.timedOut = false;
        console.log('timeout: ', this.timedOut);
    };
    GlobalVarsProvider.prototype.timeout = function () {
        var template = "<div>" + this.langs.timeout + "</div>";
        var obj = { body: "", template: template, endUrl: "", completed: true, pageTo: 'LoginPage' };
        var myModal = this.modalCtrl.create('ConfirmModalPage', obj);
        myModal.present();
    };
    GlobalVarsProvider.prototype.doHmac = function (message) {
        var myhmac = __WEBPACK_IMPORTED_MODULE_1_crypto_js___default.a.HmacSHA256(message, "secret").toString(__WEBPACK_IMPORTED_MODULE_1_crypto_js___default.a.enc.Hex);
        return myhmac;
    };
    GlobalVarsProvider.prototype.doTranslate = function (lang) {
        console.log("Loading " + lang + " template");
        this.lang = lang;
        if (lang == 'en') {
            this.langs = __WEBPACK_IMPORTED_MODULE_6__language__["a" /* eng */];
            return this.langs;
        }
        else {
            this.langs = __WEBPACK_IMPORTED_MODULE_6__language__["b" /* kis */];
            return this.langs;
        }
    };
    GlobalVarsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__ionic_native_sim__["a" /* Sim */], __WEBPACK_IMPORTED_MODULE_5__providers_alert_service_alert_service__["a" /* AlertServiceProvider */], __WEBPACK_IMPORTED_MODULE_3__ng_idle_core__["b" /* Idle */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["i" /* ModalController */]])
    ], GlobalVarsProvider);
    return GlobalVarsProvider;
}());

//# sourceMappingURL=global-vars.js.map

/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the AlertServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var AlertServiceProvider = /** @class */ (function () {
    function AlertServiceProvider(toastCtrl, platform, loadingCtrl, modalCtrl, alertCtrl) {
        this.toastCtrl = toastCtrl;
        this.platform = platform;
        this.loadingCtrl = loadingCtrl;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        console.log('Hello AlertServiceProvider Provider');
    }
    AlertServiceProvider.prototype.showPin = function () {
        this.myModal = this.modalCtrl.create('PinModalPage');
        this.myModal.present();
    };
    AlertServiceProvider.prototype.mytoastdown = function (msg) {
        if (msg == '') {
            msg = "No internet connection";
        }
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 5000,
            position: 'bottom'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    AlertServiceProvider.prototype.errorPop = function (message) {
        var template = "<div>" + message + "</div>";
        var obj = { body: "", template: template, ttype: "", completed: true, pageTo: '' };
        var myModal = this.modalCtrl.create('ConfirmModalPage', obj);
        myModal.present();
    };
    AlertServiceProvider.prototype.errorPopN = function (message) {
        var template = "<div>" + message + "</div>";
        var obj = { body: "", template: template, ttype: "", completed: true, pageTo: 'HomePage' };
        var myModal = this.modalCtrl.create('ConfirmModalPage', obj);
        myModal.present();
    };
    AlertServiceProvider.prototype.validateResponse = function (res) {
        var validateResponse = "";
        if (res.indexOf("7") == 0) {
            res = "0" + res;
            if (!(/^\d{10}$/.test(res))) {
                validateResponse = "";
                return validateResponse;
            }
            else {
                validateResponse = res;
                return validateResponse;
            }
        }
        else if (res.substring(0, 4) == "+256") {
            if (!(/^\d{10}$/.test(res))) {
                validateResponse = "";
                return validateResponse;
            }
            else {
                validateResponse = res;
                return validateResponse;
            }
        }
        else if (res.substring(0, 3) == "256") {
            res = res.replace("256", "0");
            if (!(/^\d{10}$/.test(res))) {
                validateResponse = "";
                return validateResponse;
            }
            else {
                validateResponse = res;
                return validateResponse;
            }
        }
        else if (res.substring(0, 2) != "07") {
            validateResponse = "";
            return validateResponse;
        }
        else if (!(/^\d{10}$/.test(res))) {
            validateResponse = "";
            return validateResponse;
        }
        else {
            validateResponse = res;
            return validateResponse;
        }
    };
    // picContact() {
    //   var cont
    //   this.pickContact().then( contact => {
    //     //console.log( contact );
    //     if ( contact.phoneNo.length > 1 ) {
    //       cont = contact;
    //     }
    //     else {
    //     }
    //   } );
    //   return cont;
    // }
    AlertServiceProvider.prototype.showRadioAlert = function (phoneNo) {
        var _this = this;
        return new Promise(function (resolve) {
            var alert = _this.alertCtrl.create({ cssClass: 'alertTitle' });
            alert.setTitle('Select mobile number');
            for (var i = 0; i < phoneNo.length; i++) {
                alert.addInput({ type: 'radio', label: phoneNo[i], value: phoneNo[i] });
            }
            alert.addButton('Cancel');
            alert.addButton({
                text: 'OK',
                handler: function (data) {
                    var chosenPhone = data;
                    resolve(chosenPhone);
                }
            });
            alert.present();
        });
    };
    AlertServiceProvider.prototype.exit = function () {
        var _this = this;
        var message = "Are you sure you want to quit from the application?";
        var template = "<div>" + message + "</div>";
        var obj = { body: "", template: template, ttype: "", completed: false, pageTo: '' };
        var myModal = this.modalCtrl.create('ConfirmModalPage', obj);
        myModal.present();
        myModal.onDidDismiss(function (data) {
            //console.log( "Data =>" + data );
            if (data) {
                _this.platform.exitApp();
            }
            else {
                // this.loginPage();
            }
        });
    };
    AlertServiceProvider.prototype.directExit = function () {
        this.platform.exitApp();
    };
    // responsePopup( req) { 
    //         let myModal = this.modalCtrl.create('ConfirmTransPage',req);
    //         myModal.present();
    // }
    AlertServiceProvider.prototype.myLoading = function () {
        this.myModal = this.modalCtrl.create('LoadingPage');
        this.myModal.present();
    };
    AlertServiceProvider.prototype.showChamaPin = function () {
        this.myModal = this.modalCtrl.create('ChamaPinPage');
        this.myModal.present();
    };
    AlertServiceProvider.prototype.showOTP = function (code) {
        this.myModal = this.modalCtrl.create('OtpPage', { data: code });
        this.myModal.present();
    };
    AlertServiceProvider.prototype.showPhonebook = function () {
        this.myModal = this.modalCtrl.create('ContactlistPage');
        this.myModal.present();
        this.myModal.onDidDismiss(function (data) {
            if (data) {
                return data;
            }
            else {
                return 'Phonebook error kindly enter the phonenumber';
            }
        });
    };
    AlertServiceProvider.prototype.myLoadingDismiss = function () {
        this.myModal.dismiss();
    };
    AlertServiceProvider.prototype.stkPop = function (message) {
        var template = "<div>" + message + "</div>";
        var obj = { body: "", template: template, ttype: "", completed: true, pageTo: '' };
        var myModal = this.modalCtrl.create('ConfirmModalPage', obj);
        myModal.present();
        setTimeout(function () {
            // Close modal
            myModal.dismiss();
        }, 8000);
    };
    AlertServiceProvider.prototype.show2Alert = function (subtitle, message, yes, no) {
        var confirm = this.alertCtrl.create({
            title: subtitle,
            cssClass: 'alertTitle',
            message: message,
            buttons: [
                {
                    text: yes,
                    handler: function () {
                        //console.log( 'Agree clicked' );
                    }
                },
                {
                    text: no,
                    handler: function () {
                        //console.log( 'Cancel clicked' );
                    }
                }
            ]
        });
        confirm.present();
    };
    AlertServiceProvider.prototype.showLoading = function (text) {
        this.loading = this.loadingCtrl.create({
            content: text
        });
        this.loading.present();
    };
    AlertServiceProvider.prototype.dismiss = function () {
        this.loading.dismiss();
    };
    AlertServiceProvider.prototype.failedAlert = function (yes) {
        var alert = this.alertCtrl.create({
            title: 'No Connection',
            cssClass: 'alertTitle',
            subTitle: 'No Server Response!',
            buttons: [yes]
        });
        alert.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('content'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */])
    ], AlertServiceProvider.prototype, "navCtrl", void 0);
    AlertServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], AlertServiceProvider);
    return AlertServiceProvider;
}());

//# sourceMappingURL=alert-service.js.map

/***/ })

},[387]);
//# sourceMappingURL=main.js.map