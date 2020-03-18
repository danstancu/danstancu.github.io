(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/aboutme/aboutme.component.html":
/*!************************************************!*\
  !*** ./src/app/aboutme/aboutme.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- ====== Hero ======  -->\r\n<section class=\"hero section-padding pb-70\" data-scroll-index=\"1\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n\r\n            <!-- hero image -->\r\n            <div class=\"col-md-5\">\r\n                <div class=\"hero-img mb-30\">\r\n                    <img src=\"assets/img/bwp_ds_50_freelancer.png\" alt=\"Daniel Stancu\">\r\n                </div>\r\n            </div>\r\n\r\n            <!-- content -->\r\n            <div class=\"col-md-7\">\r\n                <div class=\"content mb-30\">\r\n                    <h3 i18n>About Me.</h3>\r\n                    <span i18n class=\"sub-title\">Software Engineer</span>\r\n                    <p i18n>\r\n                        I am a software engineer eager to apply the latest proved technologies\r\n                        in order to build applications which scale, are easy to maintain and extend.\r\n                        I am presently working for a german business communication services provider.\r\n                    </p>\r\n                    <!-- skills progress -->\r\n                    <div class=\"skills\">\r\n                        <div class=\"item\">\r\n                            <div class=\"skills-progress\">\r\n                                <h6>Clean Architecture</h6>\r\n                                <span data-value=\"95%\"></span>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"item\">\r\n                            <div class=\"skills-progress\">\r\n                                <h6>Design Patterns</h6>\r\n                                <span data-value=\"80%\"></span>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"item\">\r\n                            <div class=\"skills-progress\">\r\n                                <h6>SOLID Principles</h6>\r\n                                <span data-value=\"90%\"></span>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"clearfix\"></div>\r\n                </div>\r\n            </div>\r\n        </div><!-- /row -->\r\n    </div><!-- /container -->\r\n</section>\r\n<!-- ====== End Hero ======  -->"

/***/ }),

/***/ "./src/app/aboutme/aboutme.component.scss":
/*!************************************************!*\
  !*** ./src/app/aboutme/aboutme.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0bWUvYWJvdXRtZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/aboutme/aboutme.component.ts":
/*!**********************************************!*\
  !*** ./src/app/aboutme/aboutme.component.ts ***!
  \**********************************************/
/*! exports provided: AboutmeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutmeComponent", function() { return AboutmeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutmeComponent = /** @class */ (function () {
    function AboutmeComponent() {
    }
    AboutmeComponent.prototype.ngOnInit = function () {
    };
    AboutmeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-aboutme',
            template: __webpack_require__(/*! ./aboutme.component.html */ "./src/app/aboutme/aboutme.component.html"),
            styles: [__webpack_require__(/*! ./aboutme.component.scss */ "./src/app/aboutme/aboutme.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AboutmeComponent);
    return AboutmeComponent;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- ====== Preloader ======  -->\r\n<div class=\"loading\">\r\n    <div class=\"load-circle\">\r\n    </div>\r\n</div>\r\n<!-- ======End Preloader ======  -->\r\n\r\n<!-- ====== Navgition ======  -->\r\n<nav class=\"navbar navbar-default\">\r\n    <div class=\"container\">\r\n        <!-- Brand and toggle get grouped for better mobile display -->\r\n        <div class=\"navbar-header\">\r\n            <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\"\r\n                data-target=\"#nav-icon-collapse\" aria-expanded=\"false\">\r\n                <span class=\"sr-only\">Toggle navigation</span>\r\n                <span class=\"icon-bar\"></span>\r\n                <span class=\"icon-bar\"></span>\r\n                <span class=\"icon-bar\"></span>\r\n            </button>\r\n\r\n            <!-- logo -->\r\n            <a class=\"logo\" data-scroll-nav=\"0\" href=\"#\">{{title}}</a>\r\n\r\n        </div>\r\n\r\n        <!-- Collect the nav links, and other content for toggling -->\r\n        <div class=\"collapse navbar-collapse\" id=\"nav-icon-collapse\">\r\n\r\n            <!-- links -->\r\n            <ul class=\"nav navbar-nav navbar-right\">\r\n                <li><a href=\"#\" data-scroll-nav=\"0\" class=\"active\">Home</a></li>\r\n                <li><a href=\"#\" data-scroll-nav=\"1\">About me</a></li>\r\n                <li><a href=\"#\" data-scroll-nav=\"2\">Applied Concepts</a></li>\r\n                <li><a href=\"#\" data-scroll-nav=\"3\">Technologies Used</a></li>\r\n                <li><a href=\"#\" data-scroll-nav=\"4\">Personal Projects</a></li>\r\n                <li><a href=\"#\" data-scroll-nav=\"5\">Contact</a></li>\r\n            </ul>\r\n        </div><!-- /.navbar-collapse -->\r\n    </div><!-- /.container -->\r\n</nav>\r\n<!-- ====== End Navgition ======  -->\r\n\r\n\r\n<app-home></app-home>\r\n<app-aboutme></app-aboutme>\r\n<app-applied-concepts></app-applied-concepts>\r\n<app-technologies-used></app-technologies-used>\r\n<app-projects></app-projects>\r\n<app-contact></app-contact>\r\n<footer>\r\n    <div class=\"container text-center\">\r\n        <div class=\"row\">\r\n            <p>Copyright 2019 &copy; By Daniel Stancu All Rights Reserved</p>\r\n        </div>\r\n    </div>\r\n</footer>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_cookieconsent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-cookieconsent */ "./node_modules/ngx-cookieconsent/esm5/ngx-cookieconsent.es5.js");



var AppComponent = /** @class */ (function () {
    function AppComponent(ccService) {
        this.ccService = ccService;
        this.title = 'Daniel Stancu';
    }
    AppComponent.prototype.ngOnInit = function () {
        // subscribe to cookieconsent observables to react to main events
        this.popupOpenSubscription = this.ccService.popupOpen$.subscribe(function () {
            // you can use this.ccService.getConfig() to do stuff...
        });
        this.popupCloseSubscription = this.ccService.popupClose$.subscribe(function () {
            // you can use this.ccService.getConfig() to do stuff...
        });
        this.initializeSubscription = this.ccService.initialize$.subscribe(function (event) {
            // you can use this.ccService.getConfig() to do stuff...
        });
        this.statusChangeSubscription = this.ccService.statusChange$.subscribe(function (event) {
            // you can use this.ccService.getConfig() to do stuff...
        });
        this.revokeChoiceSubscription = this.ccService.revokeChoice$.subscribe(function () {
            // you can use this.ccService.getConfig() to do stuff...
        });
        this.noCookieLawSubscription = this.ccService.noCookieLaw$.subscribe(function (event) {
            // you can use this.ccService.getConfig() to do stuff...
        });
    };
    AppComponent.prototype.ngOnDestroy = function () {
        // unsubscribe to cookieconsent observables to prevent memory leaks
        this.popupOpenSubscription.unsubscribe();
        this.popupCloseSubscription.unsubscribe();
        this.initializeSubscription.unsubscribe();
        this.statusChangeSubscription.unsubscribe();
        this.revokeChoiceSubscription.unsubscribe();
        this.noCookieLawSubscription.unsubscribe();
    };
    AppComponent.prototype.ngAfterContentInit = function () {
        //$('#animatedHeadlineBox').animatedHeadline();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('animatedHeadlineBox'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], AppComponent.prototype, "animatedHeadlineBox", void 0);
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_cookieconsent__WEBPACK_IMPORTED_MODULE_2__["NgcCookieConsentService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.cookie.config.ts":
/*!**************************************!*\
  !*** ./src/app/app.cookie.config.ts ***!
  \**************************************/
/*! exports provided: cookieConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cookieConfig", function() { return cookieConfig; });
var cookieConfig = {
    cookie: {
        domain: 'danstancu.github.io' // or 'your.domain.com' // it is mandatory to set a domain, for cookies to work properly (see https://goo.gl/S2Hy2A)
    },
    palette: {
        popup: {
            background: '#000'
        },
        button: {
            background: '#f1d600'
        }
    },
    theme: 'edgeless',
    type: 'opt-out'
};


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_cookieconsent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookieconsent */ "./node_modules/ngx-cookieconsent/esm5/ngx-cookieconsent.es5.js");
/* harmony import */ var _app_cookie_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.cookie.config */ "./src/app/app.cookie.config.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _aboutme_aboutme_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./aboutme/aboutme.component */ "./src/app/aboutme/aboutme.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./projects/projects.component */ "./src/app/projects/projects.component.ts");
/* harmony import */ var _applied_concepts_applied_concepts_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./applied-concepts/applied-concepts.component */ "./src/app/applied-concepts/applied-concepts.component.ts");
/* harmony import */ var _technologies_used_technologies_used_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./technologies-used/technologies-used.component */ "./src/app/technologies-used/technologies-used.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                _aboutme_aboutme_component__WEBPACK_IMPORTED_MODULE_8__["AboutmeComponent"],
                _contact_contact_component__WEBPACK_IMPORTED_MODULE_9__["ContactComponent"],
                _projects_projects_component__WEBPACK_IMPORTED_MODULE_10__["ProjectsComponent"],
                _applied_concepts_applied_concepts_component__WEBPACK_IMPORTED_MODULE_11__["AppliedConceptsComponent"],
                _technologies_used_technologies_used_component__WEBPACK_IMPORTED_MODULE_12__["TechnologiesUsedComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                ngx_cookieconsent__WEBPACK_IMPORTED_MODULE_3__["NgcCookieConsentModule"].forRoot(_app_cookie_config__WEBPACK_IMPORTED_MODULE_4__["cookieConfig"]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_13__["SharedModule"]
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["NO_ERRORS_SCHEMA"]],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/applied-concepts/applied-concepts.component.html":
/*!******************************************************************!*\
  !*** ./src/app/applied-concepts/applied-concepts.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- ====== Applied Concepts ======  -->\r\n<section class=\"services section-padding bg-gray text-center pb-70\" data-scroll-index=\"2\">\r\n  <div class=\"container\">\r\n\r\n    <!-- section heading -->\r\n    <div class=\"section-head\">\r\n      <h3>Applied Concepts.</h3>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n\r\n      <!-- items -->\r\n      <div class=\"col-md-4\">\r\n        <div class=\"item\">\r\n          <a target=\"_blank\" href=\"https://pusher.com/tutorials/clean-architecture-introduction\"><span class=\"icon\"><i class=\"fa fa-sitemap\" aria-hidden=\"true\"></i></span></a>\r\n          <h6>Clean Architecture</h6>\r\n          <p>Independent of frameworks. Testable. Independent of UI. Independent of database. Independent of anything external.</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-4\">\r\n        <div class=\"item\">\r\n          <a target=\"_blank\" href=\"https://en.wikipedia.org/wiki/SOLID\"><span class=\"icon\"><i class=\"fa fa-codepen\" aria-hidden=\"true\"></i></span></a>\r\n          <h6>SOLID Principles</h6>\r\n          <p>Writing code that is easy to test, maintain, extend, and understand. SRP, OCP, LSP, ISP, DIP.</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-4\">\r\n        <div class=\"item\">\r\n          <a target=\"_blank\" href=\"https://en.wikipedia.org/wiki/Software_design_pattern\"><span class=\"icon\"><i class=\"fa fa-cubes\" aria-hidden=\"true\"></i></span></a>\r\n          <h6>Design Patterns</h6>\r\n          <p>Managing the code complexity. Managing the data flow. Do not reinvent the wheel. Formalized best practices.</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-4\">\r\n        <div class=\"item\">\r\n          <a target=\"_blank\" href=\"https://en.wikipedia.org/wiki/Test-driven_development\"><span class=\"icon\"><i class=\"fa fa-check-circle\" aria-hidden=\"true\"></i></span></a>\r\n          <h6>Test Driven Development</h6>\r\n          <p>Writing unit tests. Writing testable code. Turn software requirements into test cases. Improve the code so that the tests pass.</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-4\">\r\n        <div class=\"item\">\r\n          <span class=\"icon\"><i class=\"fa fa-cogs\" aria-hidden=\"true\"></i></span>\r\n          <h6>Simple Machines</h6>\r\n          <p>Search for a simple machine that serves as an abstraction of a potential system that will perform the required task.</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-4\">\r\n        <div class=\"item\">\r\n          <span class=\"icon\"><i class=\"fa fa-gitlab\" aria-hidden=\"true\"></i></span>\r\n          <h6>CI & CD</h6>\r\n          <p>Automate the development process. Automate the deployment process. Increase software reliability.</p>\r\n        </div>\r\n      </div>\r\n    </div><!-- /row -->\r\n  </div><!-- /container -->\r\n</section>\r\n<!-- ====== End Applied Concepts ======  -->\r\n\r\n"

/***/ }),

/***/ "./src/app/applied-concepts/applied-concepts.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/applied-concepts/applied-concepts.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcGxpZWQtY29uY2VwdHMvYXBwbGllZC1jb25jZXB0cy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/applied-concepts/applied-concepts.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/applied-concepts/applied-concepts.component.ts ***!
  \****************************************************************/
/*! exports provided: AppliedConceptsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppliedConceptsComponent", function() { return AppliedConceptsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppliedConceptsComponent = /** @class */ (function () {
    function AppliedConceptsComponent() {
    }
    AppliedConceptsComponent.prototype.ngOnInit = function () {
    };
    AppliedConceptsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-applied-concepts',
            template: __webpack_require__(/*! ./applied-concepts.component.html */ "./src/app/applied-concepts/applied-concepts.component.html"),
            styles: [__webpack_require__(/*! ./applied-concepts.component.scss */ "./src/app/applied-concepts/applied-concepts.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AppliedConceptsComponent);
    return AppliedConceptsComponent;
}());



/***/ }),

/***/ "./src/app/contact/contact.component.html":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--====== Contact ======-->\r\n<section class=\"contact section-padding mb-50\" data-scroll-index=\"5\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      \r\n      <!-- section heading -->\r\n      <div class=\"section-head\">\r\n        <h3>Contact Me.</h3>\r\n      </div>\r\n\r\n      <div class=\"col-md-offset-1 col-md-10\">\r\n\r\n        <!-- contact info -->\r\n        <div class=\"info text-center mb-50\">\r\n\r\n          <div class=\"col-md-4\">\r\n            <div class=\"item\">\r\n              <span class=\"icon\"><i class=\"fa fa-location-arrow\" aria-hidden=\"true\"></i></span>\r\n              <h6>Address</h6>\r\n              <p>68219 Mannheim, Germany</p>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"col-md-4\">\r\n            <div class=\"item\">\r\n              <span class=\"icon\"><i class=\"fa fa-envelope\" aria-hidden=\"true\"></i></span>\r\n              <h6>Email</h6>\r\n              <p>dan.stancu@gmail.com</p>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"col-md-4\">\r\n            <div class=\"item\">\r\n              <span class=\"icon\"><i class=\"fa fa-phone\" aria-hidden=\"true\"></i></span>\r\n              <h6>Phone</h6>\r\n              <p>+49 152 228 30 186</p>\r\n            </div>\r\n          </div>\r\n          <div class=\"clearfix\"></div>\r\n        </div>\r\n        <div #dynamicDiv></div>\r\n        <!-- contact form -->\r\n        <form #contactForm=\"ngForm\" (ngSubmit)=\"onSubmit()\" class=\"form\" id=\"contactForm\">\r\n                    <!-- <div class=\"messages\">{{diagnostic}}</div> -->\r\n\r\n                    <div class=\"controls\">\r\n\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-6\">\r\n                                <div class=\"form-group\">\r\n                                    <input id=\"form_name\" type=\"text\" name=\"name\" placeholder=\"Name\" required\r\n                                    [(ngModel)] = \"model.name\">\r\n                                </div>\r\n                            </div>\r\n\r\n                             <div class=\"col-md-6\">\r\n                                <div class=\"form-group\">\r\n                                    <input id=\"form_email\" type=\"email\" name=\"email\" placeholder=\"Email\" required\r\n                                    [(ngModel)] = \"model.email\" email>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-12\">\r\n                                <div class=\"form-group\">\r\n                                    <textarea id=\"form_message\" name=\"message\" placeholder=\"Message\" rows=\"4\" required\r\n                                    [(ngModel)] = \"model.message\"></textarea>\r\n                                </div>\r\n\r\n                                <button [disabled]=\"!contactForm.form.valid\" type=\"submit\" value=\"Submit\" class=\"buton buton-bg\">Submit</button>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </form>\r\n                \r\n\r\n      </div>\r\n    </div><!-- /row -->\r\n  </div><!-- /container -->\r\n</section>\r\n<!--====== End Contact ======-->\r\n"

/***/ }),

/***/ "./src/app/contact/contact.component.scss":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ng-valid[required], .ng-valid.required {\n  border-left: 5px solid #42A948;\n  /* green */ }\n\n.ng-invalid:not(form) {\n  border-left: 5px solid #a94442;\n  /* red */ }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC9DOlxcY3lnd2luNjRcXGhvbWVcXGRzdGFuY3VcXGRldlxccGVyc29uYWwtcHJvZmlsZS1tZGIvc3JjXFxhcHBcXGNvbnRhY3RcXGNvbnRhY3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw4QkFBOEI7RUFBRSxVQUFBLEVBQVc7O0FBRzdDO0VBQ0UsOEJBQThCO0VBQUUsUUFBQSxFQUFTIiwiZmlsZSI6InNyYy9hcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5nLXZhbGlkW3JlcXVpcmVkXSwgLm5nLXZhbGlkLnJlcXVpcmVkICB7XHJcbiAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkICM0MkE5NDg7IC8qIGdyZWVuICovXHJcbiAgfVxyXG4gIFxyXG4gIC5uZy1pbnZhbGlkOm5vdChmb3JtKSAge1xyXG4gICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjYTk0NDQyOyAvKiByZWQgKi9cclxuICB9XHJcbiAgIl19 */"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var ContactComponent = /** @class */ (function () {
    function ContactComponent(httpClient, renderer) {
        this.httpClient = httpClient;
        this.renderer = renderer;
        this.formspreeUrl = 'https://script.google.com/macros/s/AKfycbxLMkznmzJnEU2cWAR2VQwVTcEXVfgKRCyQHHsFjoniAJel-GBM/exec';
        this.model = {
            name: "",
            email: "",
            message: ""
        };
        this.formspree = '<h1>xxx</h1>';
        this.submitted = false;
    }
    ContactComponent.prototype.onSubmit = function () {
        var _this = this;
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers.set('Content-Type', 'application/x-www-form-urlencoded');
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        params.set('name', this.model.name)
            .set('email', this.model.email)
            .set('message', this.model.message);
        var formData = new FormData();
        formData.append('name', this.model.name);
        formData.append('email', this.model.email);
        formData.append('message', this.model.message);
        this.httpClient.post(this.formspreeUrl, formData, {
            headers: {
                'Accept': '*/*',
                'Access-Control-Allow-Origin': '*'
            }
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["timeout"])(5000), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError))
            .subscribe(function (body) {
            _this.submitted = true;
            _this.formspree = '<h3>Thank you for your message.</h3>';
            _this.renderer.setProperty(_this.dynamicDiv.nativeElement, 'innerHTML', _this.formspree);
            setTimeout(function () {
                _this.model = {};
                _this.renderer.setProperty(_this.dynamicDiv.nativeElement, 'innerHTML', '');
            }, 5000);
            console.log('submitted');
        });
    };
    ContactComponent.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else if (error instanceof rxjs__WEBPACK_IMPORTED_MODULE_3__["TimeoutError"]) {
            console.error(error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error("Backend returned code " + error.status + ", " +
                ("body was: " + error.error));
        }
        // return an observable with a user-facing error message
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])('Something bad happened; please try again later.');
    };
    ;
    ContactComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(ContactComponent.prototype, "diagnostic", {
        get: function () {
            return JSON.stringify(this.model);
        },
        enumerable: true,
        configurable: true
    });
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("dynamicDiv", { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], ContactComponent.prototype, "dynamicDiv", void 0);
    ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.scss */ "./src/app/contact/contact.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- ====== Header ======  -->\r\n<section id=\"home\" class=\"header\" data-scroll-index=\"0\" style=\"background-image: url(assets/img/bg.jpg);\"\r\n    data-stellar-background-ratio=\"0.8\">\r\n\r\n    <div class=\"v-middle\">\r\n        <div class=\"container\">\r\n            <div class=\"row\">\r\n\r\n                <!-- caption -->\r\n                <div class=\"caption\">\r\n                    <h5>Hello</h5>\r\n                    <h1 class=\"cd-headline clip\">\r\n                        <span class=\"blc\">I am</span>\r\n                        <span class=\"cd-words-wrapper\">\r\n                            <b class=\"is-visible\">&nbsp;{{name}}</b>\r\n                            <b>&nbsp;Software Engineer</b>\r\n                            <b>&nbsp;IT Consultant</b>\r\n                        </span>\r\n                    </h1>\r\n\r\n                    <!-- social icons -->\r\n                    <div class=\"social-icon\">\r\n                        <a target=\"_blank\" href=\"https://www.facebook.com/daniel.stancu.3139\">\r\n                            <span><i class=\"fa fa-facebook\" aria-hidden=\"true\"></i></span>\r\n                        </a>\r\n                        <a target=\"_blank\" href=\"https://twitter.com/danstancu\">\r\n                            <span><i class=\"fa fa-twitter\" aria-hidden=\"true\"></i></span>\r\n                        </a>\r\n                        <a target=\"_blank\" href=\"https://www.linkedin.com/in/danielstancu/\">\r\n                            <span><i class=\"fa fa-linkedin\" aria-hidden=\"true\"></i></span>\r\n                        </a>\r\n                        <a target=\"_blank\" href=\"https://www.xing.com/profile/Daniel_Stancu2\">\r\n                            <span><i class=\"fa fa-xing\" aria-hidden=\"true\"></i></span>\r\n                        </a>\r\n                    </div>\r\n                </div>\r\n                <!-- end caption -->\r\n            </div>\r\n        </div><!-- /row -->\r\n    </div><!-- /container -->\r\n</section>\r\n<!-- ====== End Header ======  -->"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.name = 'Daniel Stancu';
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/projects/projects.component.html":
/*!**************************************************!*\
  !*** ./src/app/projects/projects.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- ====== Personal Projects ======  -->\r\n<section class=\"services section-padding bg-gray text-center pb-70\" data-scroll-index=\"4\">\r\n  <div class=\"container\">\r\n\r\n    <!-- section heading -->\r\n    <div class=\"section-head\">\r\n      <h3>Personal Projects</h3>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n\r\n      <!-- items -->\r\n      <div class=\"col-md-6\">\r\n        <div class=\"item\">\r\n          <span class=\"icon\"><i class=\"fa fa-android\" aria-hidden=\"true\"></i></span>\r\n          <h6>Chatbot</h6>\r\n          <p>Chat with your virtual friend.</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-6\">\r\n        <div class=\"item\">\r\n          <span class=\"icon\"><i class=\"fa fa-hourglass\" aria-hidden=\"true\"></i></span>\r\n          <h6>Time Tracking Mobile App</h6>\r\n          <p>Track your employees' working time.  </p>\r\n        </div>\r\n      </div>\r\n    </div><!-- /row -->\r\n  </div><!-- /container -->\r\n</section>\r\n<!-- ====== End Personal Projects ======  -->\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/projects/projects.component.scss":
/*!**************************************************!*\
  !*** ./src/app/projects/projects.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2plY3RzL3Byb2plY3RzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/projects/projects.component.ts":
/*!************************************************!*\
  !*** ./src/app/projects/projects.component.ts ***!
  \************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProjectsComponent = /** @class */ (function () {
    function ProjectsComponent() {
    }
    ProjectsComponent.prototype.ngOnInit = function () {
    };
    ProjectsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-projects',
            template: __webpack_require__(/*! ./projects.component.html */ "./src/app/projects/projects.component.html"),
            styles: [__webpack_require__(/*! ./projects.component.scss */ "./src/app/projects/projects.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProjectsComponent);
    return ProjectsComponent;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/technologies-used/technologies-used.component.html":
/*!********************************************************************!*\
  !*** ./src/app/technologies-used/technologies-used.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"blog section-padding bg-gray\" data-scroll-index=\"3\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n\r\n      <!-- section heading -->\r\n      <div class=\"section-head\">\r\n        <h3>Technologies used.</h3>\r\n      </div>\r\n\r\n      <!-- owl carsouel -->\r\n      <div class=\"owl-carousel owl-theme\">  \r\n        <!-- pitems -->\r\n        <div class=\"pitem\">\r\n          <div class=\"post-img\">\r\n            <img src=\"assets/img/blog/kissclipart-java-spring-clipart-spring-framework-java-hibernat-d2c69defc7506798.png\" alt=\"\">\r\n          </div>\r\n          <div class=\"content\">\r\n            <h6 class=\"tag\">\r\n              <a target=\"_blank\" href=\"https://spring.io/\">Spring Framework</a>\r\n            </h6>\r\n            <h4>\r\n              <a target=\"_blank\" href=\"https://spring.io/\">The right stack for the right job.</a>\r\n            </h4>\r\n            <span class=\"more\">\r\n              <a target=\"_blank\" href=\"https://spring.io/\">Read More</a>\r\n            </span>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"pitem\">\r\n          <div class=\"post-img\">\r\n            <img src=\"assets/img/blog/1_-QTg-_71YF0SVshMEaKZ_g.png\" alt=\"\">\r\n            <br />\r\n            <br />\r\n          </div>\r\n          <div class=\"content\">\r\n            <h6 class=\"tag\">\r\n              <a target=\"_blank\" href=\"https://www.tensorflow.org/\">Tensorflow</a>\r\n            </h6>\r\n            <h4>\r\n              <a target=\"_blank\" href=\"https://www.tensorflow.org/\">Leading platform for building Python programs to work with human language data.</a>\r\n            </h4>\r\n            <span class=\"more\">\r\n              <a target=\"_blank\" href=\"https://www.tensorflow.org/\">Read More</a>\r\n            </span>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"pitem\">\r\n          <div class=\"post-img\">\r\n            <img src=\"assets/img/blog/pngfind.com-gnc-logo-png-2515206.png\" alt=\"\">\r\n            <br />\r\n            <br />\r\n            <br />\r\n            <br />\r\n          </div>\r\n          <div class=\"content\">\r\n            <h6 class=\"tag\">\r\n              <a target=\"_blank\" href=\"https://angular.io/\">Angular</a>\r\n            </h6>\r\n            <h4>\r\n              <a target=\"_blank\" href=\"https://angular.io/\">One framework. Mobile & desktop.</a>\r\n            </h4>\r\n            <br />\r\n            <span class=\"more\">\r\n              <a target=\"_blank\" href=\"https://angular.io/\">Read More</a>\r\n            </span>\r\n          </div>\r\n        </div>\r\n        <div class=\"pitem\">\r\n          <div class=\"post-img\">\r\n            <img src=\"assets/img/blog/gitlab-logo-white-rgb.png\" alt=\"\">\r\n          </div>\r\n          <div class=\"content\">\r\n            <h6 class=\"tag\">\r\n              <a target=\"_blank\" href=\"https://about.gitlab.com/\">Gitlab</a>\r\n            </h6>\r\n            <h4>\r\n              <a target=\"_blank\" href=\"https://about.gitlab.com/\">GitLab is a single application for the entire software development lifecycle.</a>\r\n            </h4>\r\n            <span class=\"more\">\r\n              <a target=\"_blank\" href=\"https://about.gitlab.com/\">Read More</a>\r\n            </span>\r\n          </div>\r\n        </div>\r\n      </div> <!-- /carousel-->\r\n\r\n    </div><!-- /row -->\r\n  </div><!-- /container -->\r\n</section>\r\n<!--====== End Technologies Used ======-->"

/***/ }),

/***/ "./src/app/technologies-used/technologies-used.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/technologies-used/technologies-used.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RlY2hub2xvZ2llcy11c2VkL3RlY2hub2xvZ2llcy11c2VkLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/technologies-used/technologies-used.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/technologies-used/technologies-used.component.ts ***!
  \******************************************************************/
/*! exports provided: TechnologiesUsedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TechnologiesUsedComponent", function() { return TechnologiesUsedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TechnologiesUsedComponent = /** @class */ (function () {
    function TechnologiesUsedComponent() {
    }
    TechnologiesUsedComponent.prototype.ngOnInit = function () {
    };
    TechnologiesUsedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-technologies-used',
            template: __webpack_require__(/*! ./technologies-used.component.html */ "./src/app/technologies-used/technologies-used.component.html"),
            styles: [__webpack_require__(/*! ./technologies-used.component.scss */ "./src/app/technologies-used/technologies-used.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TechnologiesUsedComponent);
    return TechnologiesUsedComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\cygwin64\home\dstancu\dev\personal-profile-mdb\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map