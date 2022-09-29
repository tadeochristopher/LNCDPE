(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_navmenu_navmenu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/navmenu/navmenu.component */ "./src/app/components/navmenu/navmenu.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");






class AppComponent {
    constructor(_httpService) {
        this._httpService = _httpService;
        this.title = 'Ladder Now Demo';
        this.apiValues = [];
    }
    ngOnInit() {
        this._httpService.get('www.agdis.tech/api/InvServiceApi/InvServices').subscribe(values => {
        });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 7, vars: 0, consts: [[1, "container-fluid"], [1, "row"], [1, "col-sm-3"], [1, "col-sm-9", "body-content"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "nav-menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _components_navmenu_navmenu_component__WEBPACK_IMPORTED_MODULE_3__["NavMenuComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"]], styles: [".body-content[_ngcontent-%COMP%] {\r\n  top: 70px;\r\n}\r\n\r\nbody[_ngcontent-%COMP%] {\r\n  font-family: Open sans-serif, sans-serif;\r\n}\r\n\r\n@media (max-width: 767px) {\r\n  \r\n  .body-content[_ngcontent-%COMP%] {\r\n    padding-top: 50px;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvY3NzL2FwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsU0FBUztBQUNYOztBQUVBO0VBQ0Usd0NBQXdDO0FBQzFDOztBQUVBO0VBQ0UsNkZBQTZGO0VBQzdGO0lBQ0UsaUJBQWlCO0VBQ25CO0FBQ0YiLCJmaWxlIjoic3JjL2Fzc2V0cy9jc3MvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm9keS1jb250ZW50IHtcclxuICB0b3A6IDcwcHg7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gIGZvbnQtZmFtaWx5OiBPcGVuIHNhbnMtc2VyaWYsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gIC8qIE9uIHNtYWxsIHNjcmVlbnMsIHRoZSBuYXYgbWVudSBzcGFucyB0aGUgZnVsbCB3aWR0aCBvZiB0aGUgc2NyZWVuLiBMZWF2ZSBhIHNwYWNlIGZvciBpdC4gKi9cclxuICAuYm9keS1jb250ZW50IHtcclxuICAgIHBhZGRpbmctdG9wOiA1MHB4O1xyXG4gIH1cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['../assets/css/app.component.css']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_navmenu_navmenu_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/navmenu/navmenu.component */ "./src/app/components/navmenu/navmenu.component.ts");
/* harmony import */ var _components_Ladderhome_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/Ladderhome/home.component */ "./src/app/components/Ladderhome/home.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_AssignedClaims_Assigned_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/AssignedClaims/Assigned.component */ "./src/app/components/AssignedClaims/Assigned.component.ts");
/* harmony import */ var _components_UnAssignedClaim_UnAssigned_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/UnAssignedClaim/UnAssigned.component */ "./src/app/components/UnAssignedClaim/UnAssigned.component.ts");
/* harmony import */ var _components_KB_KB_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/KB/KB.component */ "./src/app/components/KB/KB.component.ts");
/* harmony import */ var _components_Unscheduled_Unscheduled_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/Unscheduled/Unscheduled.component */ "./src/app/components/Unscheduled/Unscheduled.component.ts");
/* harmony import */ var _components_KB_HotTopics_hottopics_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/KB/HotTopics/hottopics.component */ "./src/app/components/KB/HotTopics/hottopics.component.ts");
/* harmony import */ var _components_KB_Fire_fire_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/KB/Fire/fire.component */ "./src/app/components/KB/Fire/fire.component.ts");
/* harmony import */ var _components_KB_Rain_rain_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/KB/Rain/rain.component */ "./src/app/components/KB/Rain/rain.component.ts");
/* harmony import */ var _components_KB_Wind_wind_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/KB/Wind/wind.component */ "./src/app/components/KB/Wind/wind.component.ts");
/* harmony import */ var _components_time_time_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/time/time.component */ "./src/app/components/time/time.component.ts");






















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot([
                { path: '', redirectTo: 'Ladderhome', pathMatch: 'full' },
                { path: 'Ladderhome', component: _components_Ladderhome_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"] },
                { path: 'Unscheduled', component: _components_Unscheduled_Unscheduled_component__WEBPACK_IMPORTED_MODULE_14__["UnscheduledComponent"] },
                { path: 'UnAssignedClaims', component: _components_UnAssignedClaim_UnAssigned_component__WEBPACK_IMPORTED_MODULE_12__["UnAssignedComponent"] },
                { path: 'AssignedClaims', component: _components_AssignedClaims_Assigned_component__WEBPACK_IMPORTED_MODULE_11__["AssignedComponent"] },
                { path: 'KB', component: _components_KB_KB_component__WEBPACK_IMPORTED_MODULE_13__["KBComponent"] },
                { path: 'Fire', component: _components_KB_Fire_fire_component__WEBPACK_IMPORTED_MODULE_16__["FireComponent"] },
                { path: 'HotTopics', component: _components_KB_HotTopics_hottopics_component__WEBPACK_IMPORTED_MODULE_15__["HotTopicsComponent"] },
                { path: 'Rain', component: _components_KB_Rain_rain_component__WEBPACK_IMPORTED_MODULE_17__["RainComponent"] },
                { path: 'Wind', component: _components_KB_Wind_wind_component__WEBPACK_IMPORTED_MODULE_18__["WindComponent"] },
                { path: 'Time', component: _components_time_time_component__WEBPACK_IMPORTED_MODULE_19__["TimeComponent"] },
                { path: '**', redirectTo: 'Ladderhome' }
            ])
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
        _components_header_header_component__WEBPACK_IMPORTED_MODULE_10__["HeaderComponent"],
        _components_navmenu_navmenu_component__WEBPACK_IMPORTED_MODULE_8__["NavMenuComponent"],
        _components_Ladderhome_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
        _components_Unscheduled_Unscheduled_component__WEBPACK_IMPORTED_MODULE_14__["UnscheduledComponent"],
        _components_UnAssignedClaim_UnAssigned_component__WEBPACK_IMPORTED_MODULE_12__["UnAssignedComponent"],
        _components_AssignedClaims_Assigned_component__WEBPACK_IMPORTED_MODULE_11__["AssignedComponent"],
        _components_KB_KB_component__WEBPACK_IMPORTED_MODULE_13__["KBComponent"],
        _components_KB_HotTopics_hottopics_component__WEBPACK_IMPORTED_MODULE_15__["HotTopicsComponent"],
        _components_KB_Fire_fire_component__WEBPACK_IMPORTED_MODULE_16__["FireComponent"],
        _components_KB_Wind_wind_component__WEBPACK_IMPORTED_MODULE_18__["WindComponent"],
        _components_KB_Rain_rain_component__WEBPACK_IMPORTED_MODULE_17__["RainComponent"],
        _components_time_time_component__WEBPACK_IMPORTED_MODULE_19__["TimeComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                    _components_header_header_component__WEBPACK_IMPORTED_MODULE_10__["HeaderComponent"],
                    _components_navmenu_navmenu_component__WEBPACK_IMPORTED_MODULE_8__["NavMenuComponent"],
                    _components_Ladderhome_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
                    _components_Unscheduled_Unscheduled_component__WEBPACK_IMPORTED_MODULE_14__["UnscheduledComponent"],
                    _components_UnAssignedClaim_UnAssigned_component__WEBPACK_IMPORTED_MODULE_12__["UnAssignedComponent"],
                    _components_AssignedClaims_Assigned_component__WEBPACK_IMPORTED_MODULE_11__["AssignedComponent"],
                    _components_KB_KB_component__WEBPACK_IMPORTED_MODULE_13__["KBComponent"],
                    _components_KB_HotTopics_hottopics_component__WEBPACK_IMPORTED_MODULE_15__["HotTopicsComponent"],
                    _components_KB_Fire_fire_component__WEBPACK_IMPORTED_MODULE_16__["FireComponent"],
                    _components_KB_Wind_wind_component__WEBPACK_IMPORTED_MODULE_18__["WindComponent"],
                    _components_KB_Rain_rain_component__WEBPACK_IMPORTED_MODULE_17__["RainComponent"],
                    _components_time_time_component__WEBPACK_IMPORTED_MODULE_19__["TimeComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot([
                        { path: '', redirectTo: 'Ladderhome', pathMatch: 'full' },
                        { path: 'Ladderhome', component: _components_Ladderhome_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"] },
                        { path: 'Unscheduled', component: _components_Unscheduled_Unscheduled_component__WEBPACK_IMPORTED_MODULE_14__["UnscheduledComponent"] },
                        { path: 'UnAssignedClaims', component: _components_UnAssignedClaim_UnAssigned_component__WEBPACK_IMPORTED_MODULE_12__["UnAssignedComponent"] },
                        { path: 'AssignedClaims', component: _components_AssignedClaims_Assigned_component__WEBPACK_IMPORTED_MODULE_11__["AssignedComponent"] },
                        { path: 'KB', component: _components_KB_KB_component__WEBPACK_IMPORTED_MODULE_13__["KBComponent"] },
                        { path: 'Fire', component: _components_KB_Fire_fire_component__WEBPACK_IMPORTED_MODULE_16__["FireComponent"] },
                        { path: 'HotTopics', component: _components_KB_HotTopics_hottopics_component__WEBPACK_IMPORTED_MODULE_15__["HotTopicsComponent"] },
                        { path: 'Rain', component: _components_KB_Rain_rain_component__WEBPACK_IMPORTED_MODULE_17__["RainComponent"] },
                        { path: 'Wind', component: _components_KB_Wind_wind_component__WEBPACK_IMPORTED_MODULE_18__["WindComponent"] },
                        { path: 'Time', component: _components_time_time_component__WEBPACK_IMPORTED_MODULE_19__["TimeComponent"] },
                        { path: '**', redirectTo: 'Ladderhome' }
                    ])
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/AssignedClaims/Assigned.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/AssignedClaims/Assigned.component.ts ***!
  \*****************************************************************/
/*! exports provided: AssignedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssignedComponent", function() { return AssignedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class AssignedComponent {
}
AssignedComponent.ɵfac = function AssignedComponent_Factory(t) { return new (t || AssignedComponent)(); };
AssignedComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AssignedComponent, selectors: [["Assigned-Claims"]], decls: 4, vars: 0, consts: [[1, "baseLineBodyHeader"], [1, "baseLineBodyHeaderNav"], [1, "baseLineHeaderName"]], template: function AssignedComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "figure", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Assigned Claims Queue");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".baseLineBodyHeader[_ngcontent-%COMP%] {\r\n    overflow-y: auto;\r\n    outline: none;\r\n    \r\n    width: 90vw;\r\n    left: 18.3%;\r\n    top: -14px;\r\n    position: relative;\r\n    margin-left: -27.5vw;\r\n    margin-right: -38.5vw;\r\n    min-height: 10vw;\r\n    max-width: 89vw;\r\n}\r\n.baseLineBodyHeader[_ngcontent-%COMP%]   .baseLineBodyHeaderNav[_ngcontent-%COMP%]   .baseLineHeaderName[_ngcontent-%COMP%] {\r\n    font-size: 1.5rem;\r\n    font-family: Open sans-serif, sans-serif;\r\n    color: #fff;\r\n    padding: 10px 10px 10px 20px;\r\n    background-color: #539e45;\r\n    width: 100%;\r\n    margin: 0;\r\n    position: relative;\r\n}\r\n.baseLineBodyHeader[_ngcontent-%COMP%]   .baseLineBodyHeaderNav[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: 150px;\r\n    \r\n    margin-bottom: 10px;\r\n    display: inline-block;\r\n    outline: none;\r\n    top: 0;\r\n    position: sticky;\r\n    position: -webkit-sticky;\r\n    z-index: -50;\r\n}\r\n@media (max-width: 800px)\r\n{\r\n    .baseLineBodyHeader[_ngcontent-%COMP%] {\r\n        width: 100vw;\r\n        left: 37.9%;\r\n        top: -84px;\r\n        height: 100vw;\r\n        min-height: 10vw;\r\n        overflow-y: auto;\r\n    }\r\n}\r\n@media (max-width: 1268px) {\r\n    .baseLineBodyHeader[_ngcontent-%COMP%]   .baseLineBodyHeaderNav[_ngcontent-%COMP%]   .baseLineHeaderName[_ngcontent-%COMP%] {\r\n        padding: 10px 10px 10px 190px;\r\n    }\r\n}\r\n@media (max-width: 1298px) {\r\n    .baseLineBodyHeader[_ngcontent-%COMP%]   .baseLineBodyHeaderNav[_ngcontent-%COMP%]   .baseLineHeaderName[_ngcontent-%COMP%] {\r\n        padding: 10px 10px 10px 190px;\r\n    }\r\n}\r\n@media (max-width: 1300px) {\r\n    .baseLineBodyHeader[_ngcontent-%COMP%]   .baseLineBodyHeaderNav[_ngcontent-%COMP%]   .baseLineHeaderName[_ngcontent-%COMP%] {\r\n        padding: 10px 10px 10px 190px;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2xvYmFsTmVlZHMvZ2xvYmFsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7RUFJRTtBQUNGO0lBQ0ksZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYiwwQkFBMEI7SUFDMUIsV0FBVztJQUNYLFdBQVc7SUFDWCxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixxQkFBcUI7SUFDckIsZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQix3Q0FBd0M7SUFDeEMsV0FBVztJQUNYLDRCQUE0QjtJQUM1Qix5QkFBeUI7SUFDekIsV0FBVztJQUNYLFNBQVM7SUFDVCxrQkFBa0I7QUFDdEI7QUFFQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2IsMEJBQTBCO0lBQzFCLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsYUFBYTtJQUNiLE1BQU07SUFDTixnQkFBZ0I7SUFDaEIsd0JBQXdCO0lBQ3hCLFlBQVk7QUFDaEI7QUFFQTs7SUFFSTtRQUNJLFlBQVk7UUFDWixXQUFXO1FBQ1gsVUFBVTtRQUNWLGFBQWE7UUFDYixnQkFBZ0I7UUFDaEIsZ0JBQWdCO0lBQ3BCO0FBQ0o7QUFFQTtJQUNJO1FBQ0ksNkJBQTZCO0lBQ2pDO0FBQ0o7QUFFQTtJQUNJO1FBQ0ksNkJBQTZCO0lBQ2pDO0FBQ0o7QUFFQTtJQUNJO1FBQ0ksNkJBQTZCO0lBQ2pDO0FBQ0o7QUFFQTs7OztFQUlFIiwiZmlsZSI6InNyYy9hcHAvZ2xvYmFsTmVlZHMvZ2xvYmFsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKi5ib2R5LWNvbnRlbnQge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JlZW47XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZkODAwO1xyXG59Ki9cclxuLmJhc2VMaW5lQm9keUhlYWRlciB7XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIC8qYm9yZGVyOiAxcHggc29saWQgIzAwMDsqL1xyXG4gICAgd2lkdGg6IDkwdnc7XHJcbiAgICBsZWZ0OiAxOC4zJTtcclxuICAgIHRvcDogLTE0cHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW4tbGVmdDogLTI3LjV2dztcclxuICAgIG1hcmdpbi1yaWdodDogLTM4LjV2dztcclxuICAgIG1pbi1oZWlnaHQ6IDEwdnc7XHJcbiAgICBtYXgtd2lkdGg6IDg5dnc7XHJcbn1cclxuXHJcbi5iYXNlTGluZUJvZHlIZWFkZXIgLmJhc2VMaW5lQm9keUhlYWRlck5hdiAuYmFzZUxpbmVIZWFkZXJOYW1lIHtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgZm9udC1mYW1pbHk6IE9wZW4gc2Fucy1zZXJpZiwgc2Fucy1zZXJpZjtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgcGFkZGluZzogMTBweCAxMHB4IDEwcHggMjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1MzllNDU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmJhc2VMaW5lQm9keUhlYWRlciAuYmFzZUxpbmVCb2R5SGVhZGVyTmF2IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxNTBweDtcclxuICAgIC8qYm9yZGVyOiAxcHggc29saWQgIzAwMDsqL1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gICAgcG9zaXRpb246IC13ZWJraXQtc3RpY2t5O1xyXG4gICAgei1pbmRleDogLTUwO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogODAwcHgpXHJcbntcclxuICAgIC5iYXNlTGluZUJvZHlIZWFkZXIge1xyXG4gICAgICAgIHdpZHRoOiAxMDB2dztcclxuICAgICAgICBsZWZ0OiAzNy45JTtcclxuICAgICAgICB0b3A6IC04NHB4O1xyXG4gICAgICAgIGhlaWdodDogMTAwdnc7XHJcbiAgICAgICAgbWluLWhlaWdodDogMTB2dztcclxuICAgICAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogMTI2OHB4KSB7XHJcbiAgICAuYmFzZUxpbmVCb2R5SGVhZGVyIC5iYXNlTGluZUJvZHlIZWFkZXJOYXYgLmJhc2VMaW5lSGVhZGVyTmFtZSB7XHJcbiAgICAgICAgcGFkZGluZzogMTBweCAxMHB4IDEwcHggMTkwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxMjk4cHgpIHtcclxuICAgIC5iYXNlTGluZUJvZHlIZWFkZXIgLmJhc2VMaW5lQm9keUhlYWRlck5hdiAuYmFzZUxpbmVIZWFkZXJOYW1lIHtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4IDEwcHggMTBweCAxOTBweDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDEzMDBweCkge1xyXG4gICAgLmJhc2VMaW5lQm9keUhlYWRlciAuYmFzZUxpbmVCb2R5SGVhZGVyTmF2IC5iYXNlTGluZUhlYWRlck5hbWUge1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMTBweCAxMHB4IDE5MHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4vKkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgLmJhc2VMaW5lQm9keUhlYWRlciB7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbn0qLyJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AssignedComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'Assigned-Claims',
                templateUrl: './Assigned.component.html',
                styleUrls: ['../../globalNeeds/global.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/KB/Fire/fire.component.ts":
/*!******************************************************!*\
  !*** ./src/app/components/KB/Fire/fire.component.ts ***!
  \******************************************************/
/*! exports provided: FireComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FireComponent", function() { return FireComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class FireComponent {
}
FireComponent.ɵfac = function FireComponent_Factory(t) { return new (t || FireComponent)(); };
FireComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FireComponent, selectors: [["KB-Fire"]], decls: 4, vars: 0, consts: [[1, "baseLineBodyHeader"], [1, "baseLineBodyHeaderNav"], [1, "baseLineHeaderName"]], template: function FireComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "figure", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Knowledge Base Fire");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".baseLineBodyHeader[_ngcontent-%COMP%] {\r\n    overflow-y: auto;\r\n    outline: none;\r\n    \r\n    width: 90vw;\r\n    left: 18.3%;\r\n    top: -14px;\r\n    position: relative;\r\n    margin-left: -27.5vw;\r\n    margin-right: -38.5vw;\r\n    min-height: 10vw;\r\n    max-width: 89vw;\r\n}\r\n.baseLineBodyHeader[_ngcontent-%COMP%]   .baseLineBodyHeaderNav[_ngcontent-%COMP%]   .baseLineHeaderName[_ngcontent-%COMP%] {\r\n    font-size: 1.5rem;\r\n    font-family: Open sans-serif, sans-serif;\r\n    color: #fff;\r\n    padding: 10px 10px 10px 20px;\r\n    background-color: #539e45;\r\n    width: 100%;\r\n    margin: 0;\r\n    position: relative;\r\n}\r\n.baseLineBodyHeader[_ngcontent-%COMP%]   .baseLineBodyHeaderNav[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: 150px;\r\n    \r\n    margin-bottom: 10px;\r\n    display: inline-block;\r\n    outline: none;\r\n    top: 0;\r\n    position: sticky;\r\n    position: -webkit-sticky;\r\n    z-index: -50;\r\n}\r\n@media (max-width: 800px)\r\n{\r\n    .baseLineBodyHeader[_ngcontent-%COMP%] {\r\n        width: 100vw;\r\n        left: 37.9%;\r\n        top: -84px;\r\n        height: 100vw;\r\n        min-height: 10vw;\r\n        overflow-y: auto;\r\n    }\r\n}\r\n@media (max-width: 1268px) {\r\n    .baseLineBodyHeader[_ngcontent-%COMP%]   .baseLineBodyHeaderNav[_ngcontent-%COMP%]   .baseLineHeaderName[_ngcontent-%COMP%] {\r\n        padding: 10px 10px 10px 190px;\r\n    }\r\n}\r\n@media (max-width: 1298px) {\r\n    .baseLineBodyHeader[_ngcontent-%COMP%]   .baseLineBodyHeaderNav[_ngcontent-%COMP%]   .baseLineHeaderName[_ngcontent-%COMP%] {\r\n        padding: 10px 10px 10px 190px;\r\n    }\r\n}\r\n@media (max-width: 1300px) {\r\n    .baseLineBodyHeader[_ngcontent-%COMP%]   .baseLineBodyHeaderNav[_ngcontent-%COMP%]   .baseLineHeaderName[_ngcontent-%COMP%] {\r\n        padding: 10px 10px 10px 190px;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2xvYmFsTmVlZHMvZ2xvYmFsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7RUFJRTtBQUNGO0lBQ0ksZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYiwwQkFBMEI7SUFDMUIsV0FBVztJQUNYLFdBQVc7SUFDWCxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixxQkFBcUI7SUFDckIsZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQix3Q0FBd0M7SUFDeEMsV0FBVztJQUNYLDRCQUE0QjtJQUM1Qix5QkFBeUI7SUFDekIsV0FBVztJQUNYLFNBQVM7SUFDVCxrQkFBa0I7QUFDdEI7QUFFQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2IsMEJBQTBCO0lBQzFCLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsYUFBYTtJQUNiLE1BQU07SUFDTixnQkFBZ0I7SUFDaEIsd0JBQXdCO0lBQ3hCLFlBQVk7QUFDaEI7QUFFQTs7SUFFSTtRQUNJLFlBQVk7UUFDWixXQUFXO1FBQ1gsVUFBVTtRQUNWLGFBQWE7UUFDYixnQkFBZ0I7UUFDaEIsZ0JBQWdCO0lBQ3BCO0FBQ0o7QUFFQTtJQUNJO1FBQ0ksNkJBQTZCO0lBQ2pDO0FBQ0o7QUFFQTtJQUNJO1FBQ0ksNkJBQTZCO0lBQ2pDO0FBQ0o7QUFFQTtJQUNJO1FBQ0ksNkJBQTZCO0lBQ2pDO0FBQ0o7QUFFQTs7OztFQUlFIiwiZmlsZSI6InNyYy9hcHAvZ2xvYmFsTmVlZHMvZ2xvYmFsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKi5ib2R5LWNvbnRlbnQge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JlZW47XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZkODAwO1xyXG59Ki9cclxuLmJhc2VMaW5lQm9keUhlYWRlciB7XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIC8qYm9yZGVyOiAxcHggc29saWQgIzAwMDsqL1xyXG4gICAgd2lkdGg6IDkwdnc7XHJcbiAgICBsZWZ0OiAxOC4zJTtcclxuICAgIHRvcDogLTE0cHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW4tbGVmdDogLTI3LjV2dztcclxuICAgIG1hcmdpbi1yaWdodDogLTM4LjV2dztcclxuICAgIG1pbi1oZWlnaHQ6IDEwdnc7XHJcbiAgICBtYXgtd2lkdGg6IDg5dnc7XHJcbn1cclxuXHJcbi5iYXNlTGluZUJvZHlIZWFkZXIgLmJhc2VMaW5lQm9keUhlYWRlck5hdiAuYmFzZUxpbmVIZWFkZXJOYW1lIHtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgZm9udC1mYW1pbHk6IE9wZW4gc2Fucy1zZXJpZiwgc2Fucy1zZXJpZjtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgcGFkZGluZzogMTBweCAxMHB4IDEwcHggMjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1MzllNDU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmJhc2VMaW5lQm9keUhlYWRlciAuYmFzZUxpbmVCb2R5SGVhZGVyTmF2IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxNTBweDtcclxuICAgIC8qYm9yZGVyOiAxcHggc29saWQgIzAwMDsqL1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gICAgcG9zaXRpb246IC13ZWJraXQtc3RpY2t5O1xyXG4gICAgei1pbmRleDogLTUwO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogODAwcHgpXHJcbntcclxuICAgIC5iYXNlTGluZUJvZHlIZWFkZXIge1xyXG4gICAgICAgIHdpZHRoOiAxMDB2dztcclxuICAgICAgICBsZWZ0OiAzNy45JTtcclxuICAgICAgICB0b3A6IC04NHB4O1xyXG4gICAgICAgIGhlaWdodDogMTAwdnc7XHJcbiAgICAgICAgbWluLWhlaWdodDogMTB2dztcclxuICAgICAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogMTI2OHB4KSB7XHJcbiAgICAuYmFzZUxpbmVCb2R5SGVhZGVyIC5iYXNlTGluZUJvZHlIZWFkZXJOYXYgLmJhc2VMaW5lSGVhZGVyTmFtZSB7XHJcbiAgICAgICAgcGFkZGluZzogMTBweCAxMHB4IDEwcHggMTkwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxMjk4cHgpIHtcclxuICAgIC5iYXNlTGluZUJvZHlIZWFkZXIgLmJhc2VMaW5lQm9keUhlYWRlck5hdiAuYmFzZUxpbmVIZWFkZXJOYW1lIHtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4IDEwcHggMTBweCAxOTBweDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDEzMDBweCkge1xyXG4gICAgLmJhc2VMaW5lQm9keUhlYWRlciAuYmFzZUxpbmVCb2R5SGVhZGVyTmF2IC5iYXNlTGluZUhlYWRlck5hbWUge1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMTBweCAxMHB4IDE5MHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4vKkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgLmJhc2VMaW5lQm9keUhlYWRlciB7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbn0qLyJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FireComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'KB-Fire',
                templateUrl: './fire.component.html',
                styleUrls: ['../../../globalNeeds/global.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/KB/HotTopics/hottopics.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/KB/HotTopics/hottopics.component.ts ***!
  \****************************************************************/
/*! exports provided: HotTopicsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HotTopicsComponent", function() { return HotTopicsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class HotTopicsComponent {
}
HotTopicsComponent.ɵfac = function HotTopicsComponent_Factory(t) { return new (t || HotTopicsComponent)(); };
HotTopicsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HotTopicsComponent, selectors: [["KB-HotTopics"]], decls: 4, vars: 0, consts: [[1, "baseLineBodyHeader"], [1, "baseLineBodyHeaderNav"], [1, "baseLineHeaderName"]], template: function HotTopicsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "figure", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Knowledge Base Hot Topics");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".baseLineBodyHeader[_ngcontent-%COMP%] {\r\n    overflow-y: auto;\r\n    outline: none;\r\n    \r\n    width: 90vw;\r\n    left: 18.3%;\r\n    top: -14px;\r\n    position: relative;\r\n    margin-left: -27.5vw;\r\n    margin-right: -38.5vw;\r\n    min-height: 10vw;\r\n    max-width: 89vw;\r\n}\r\n.baseLineBodyHeader[_ngcontent-%COMP%]   .baseLineBodyHeaderNav[_ngcontent-%COMP%]   .baseLineHeaderName[_ngcontent-%COMP%] {\r\n    font-size: 1.5rem;\r\n    font-family: Open sans-serif, sans-serif;\r\n    color: #fff;\r\n    padding: 10px 10px 10px 20px;\r\n    background-color: #539e45;\r\n    width: 100%;\r\n    margin: 0;\r\n    position: relative;\r\n}\r\n.baseLineBodyHeader[_ngcontent-%COMP%]   .baseLineBodyHeaderNav[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: 150px;\r\n    \r\n    margin-bottom: 10px;\r\n    display: inline-block;\r\n    outline: none;\r\n    top: 0;\r\n    position: sticky;\r\n    position: -webkit-sticky;\r\n    z-index: -50;\r\n}\r\n@media (max-width: 800px)\r\n{\r\n    .baseLineBodyHeader[_ngcontent-%COMP%] {\r\n        width: 100vw;\r\n        left: 37.9%;\r\n        top: -84px;\r\n        height: 100vw;\r\n        min-height: 10vw;\r\n        overflow-y: auto;\r\n    }\r\n}\r\n@media (max-width: 1268px) {\r\n    .baseLineBodyHeader[_ngcontent-%COMP%]   .baseLineBodyHeaderNav[_ngcontent-%COMP%]   .baseLineHeaderName[_ngcontent-%COMP%] {\r\n        padding: 10px 10px 10px 190px;\r\n    }\r\n}\r\n@media (max-width: 1298px) {\r\n    .baseLineBodyHeader[_ngcontent-%COMP%]   .baseLineBodyHeaderNav[_ngcontent-%COMP%]   .baseLineHeaderName[_ngcontent-%COMP%] {\r\n        padding: 10px 10px 10px 190px;\r\n    }\r\n}\r\n@media (max-width: 1300px) {\r\n    .baseLineBodyHeader[_ngcontent-%COMP%]   .baseLineBodyHeaderNav[_ngcontent-%COMP%]   .baseLineHeaderName[_ngcontent-%COMP%] {\r\n        padding: 10px 10px 10px 190px;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2xvYmFsTmVlZHMvZ2xvYmFsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7RUFJRTtBQUNGO0lBQ0ksZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYiwwQkFBMEI7SUFDMUIsV0FBVztJQUNYLFdBQVc7SUFDWCxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixxQkFBcUI7SUFDckIsZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQix3Q0FBd0M7SUFDeEMsV0FBVztJQUNYLDRCQUE0QjtJQUM1Qix5QkFBeUI7SUFDekIsV0FBVztJQUNYLFNBQVM7SUFDVCxrQkFBa0I7QUFDdEI7QUFFQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2IsMEJBQTBCO0lBQzFCLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsYUFBYTtJQUNiLE1BQU07SUFDTixnQkFBZ0I7SUFDaEIsd0JBQXdCO0lBQ3hCLFlBQVk7QUFDaEI7QUFFQTs7SUFFSTtRQUNJLFlBQVk7UUFDWixXQUFXO1FBQ1gsVUFBVTtRQUNWLGFBQWE7UUFDYixnQkFBZ0I7UUFDaEIsZ0JBQWdCO0lBQ3BCO0FBQ0o7QUFFQTtJQUNJO1FBQ0ksNkJBQTZCO0lBQ2pDO0FBQ0o7QUFFQTtJQUNJO1FBQ0ksNkJBQTZCO0lBQ2pDO0FBQ0o7QUFFQTtJQUNJO1FBQ0ksNkJBQTZCO0lBQ2pDO0FBQ0o7QUFFQTs7OztFQUlFIiwiZmlsZSI6InNyYy9hcHAvZ2xvYmFsTmVlZHMvZ2xvYmFsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKi5ib2R5LWNvbnRlbnQge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JlZW47XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZkODAwO1xyXG59Ki9cclxuLmJhc2VMaW5lQm9keUhlYWRlciB7XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIC8qYm9yZGVyOiAxcHggc29saWQgIzAwMDsqL1xyXG4gICAgd2lkdGg6IDkwdnc7XHJcbiAgICBsZWZ0OiAxOC4zJTtcclxuICAgIHRvcDogLTE0cHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW4tbGVmdDogLTI3LjV2dztcclxuICAgIG1hcmdpbi1yaWdodDogLTM4LjV2dztcclxuICAgIG1pbi1oZWlnaHQ6IDEwdnc7XHJcbiAgICBtYXgtd2lkdGg6IDg5dnc7XHJcbn1cclxuXHJcbi5iYXNlTGluZUJvZHlIZWFkZXIgLmJhc2VMaW5lQm9keUhlYWRlck5hdiAuYmFzZUxpbmVIZWFkZXJOYW1lIHtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgZm9udC1mYW1pbHk6IE9wZW4gc2Fucy1zZXJpZiwgc2Fucy1zZXJpZjtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgcGFkZGluZzogMTBweCAxMHB4IDEwcHggMjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1MzllNDU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmJhc2VMaW5lQm9keUhlYWRlciAuYmFzZUxpbmVCb2R5SGVhZGVyTmF2IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxNTBweDtcclxuICAgIC8qYm9yZGVyOiAxcHggc29saWQgIzAwMDsqL1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gICAgcG9zaXRpb246IC13ZWJraXQtc3RpY2t5O1xyXG4gICAgei1pbmRleDogLTUwO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogODAwcHgpXHJcbntcclxuICAgIC5iYXNlTGluZUJvZHlIZWFkZXIge1xyXG4gICAgICAgIHdpZHRoOiAxMDB2dztcclxuICAgICAgICBsZWZ0OiAzNy45JTtcclxuICAgICAgICB0b3A6IC04NHB4O1xyXG4gICAgICAgIGhlaWdodDogMTAwdnc7XHJcbiAgICAgICAgbWluLWhlaWdodDogMTB2dztcclxuICAgICAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogMTI2OHB4KSB7XHJcbiAgICAuYmFzZUxpbmVCb2R5SGVhZGVyIC5iYXNlTGluZUJvZHlIZWFkZXJOYXYgLmJhc2VMaW5lSGVhZGVyTmFtZSB7XHJcbiAgICAgICAgcGFkZGluZzogMTBweCAxMHB4IDEwcHggMTkwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxMjk4cHgpIHtcclxuICAgIC5iYXNlTGluZUJvZHlIZWFkZXIgLmJhc2VMaW5lQm9keUhlYWRlck5hdiAuYmFzZUxpbmVIZWFkZXJOYW1lIHtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4IDEwcHggMTBweCAxOTBweDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDEzMDBweCkge1xyXG4gICAgLmJhc2VMaW5lQm9keUhlYWRlciAuYmFzZUxpbmVCb2R5SGVhZGVyTmF2IC5iYXNlTGluZUhlYWRlck5hbWUge1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMTBweCAxMHB4IDE5MHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4vKkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgLmJhc2VMaW5lQm9keUhlYWRlciB7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbn0qLyJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HotTopicsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'KB-HotTopics',
                templateUrl: './hottopics.component.html',
                styleUrls: ['../../../globalNeeds/global.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/KB/KB.component.ts":
/*!***********************************************!*\
  !*** ./src/app/components/KB/KB.component.ts ***!
  \***********************************************/
/*! exports provided: KBComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KBComponent", function() { return KBComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class KBComponent {
}
KBComponent.ɵfac = function KBComponent_Factory(t) { return new (t || KBComponent)(); };
KBComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: KBComponent, selectors: [["KnowledgeBase"]], decls: 4, vars: 0, consts: [[1, "baseLineBodyHeader"], [1, "baseLineBodyHeaderNav"], [1, "baseLineHeaderName"]], template: function KBComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "figure", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Knowledge Base and Hot Topics");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".baseLineBodyHeader[_ngcontent-%COMP%] {\r\n    overflow-y: auto;\r\n    outline: none;\r\n    \r\n    width: 90vw;\r\n    left: 18.3%;\r\n    top: -14px;\r\n    position: relative;\r\n    margin-left: -27.5vw;\r\n    margin-right: -38.5vw;\r\n    min-height: 10vw;\r\n    max-width: 89vw;\r\n}\r\n.baseLineBodyHeader[_ngcontent-%COMP%]   .baseLineBodyHeaderNav[_ngcontent-%COMP%]   .baseLineHeaderName[_ngcontent-%COMP%] {\r\n    font-size: 1.5rem;\r\n    font-family: Open sans-serif, sans-serif;\r\n    color: #fff;\r\n    padding: 10px 10px 10px 20px;\r\n    background-color: #539e45;\r\n    width: 100%;\r\n    margin: 0;\r\n    position: relative;\r\n}\r\n.baseLineBodyHeader[_ngcontent-%COMP%]   .baseLineBodyHeaderNav[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: 150px;\r\n    \r\n    margin-bottom: 10px;\r\n    display: inline-block;\r\n    outline: none;\r\n    top: 0;\r\n    position: sticky;\r\n    position: -webkit-sticky;\r\n    z-index: -50;\r\n}\r\n@media (max-width: 800px)\r\n{\r\n    .baseLineBodyHeader[_ngcontent-%COMP%] {\r\n        width: 100vw;\r\n        left: 37.9%;\r\n        top: -84px;\r\n        height: 100vw;\r\n        min-height: 10vw;\r\n        overflow-y: auto;\r\n    }\r\n}\r\n@media (max-width: 1268px) {\r\n    .baseLineBodyHeader[_ngcontent-%COMP%]   .baseLineBodyHeaderNav[_ngcontent-%COMP%]   .baseLineHeaderName[_ngcontent-%COMP%] {\r\n        padding: 10px 10px 10px 190px;\r\n    }\r\n}\r\n@media (max-width: 1298px) {\r\n    .baseLineBodyHeader[_ngcontent-%COMP%]   .baseLineBodyHeaderNav[_ngcontent-%COMP%]   .baseLineHeaderName[_ngcontent-%COMP%] {\r\n        padding: 10px 10px 10px 190px;\r\n    }\r\n}\r\n@media (max-width: 1300px) {\r\n    .baseLineBodyHeader[_ngcontent-%COMP%]   .baseLineBodyHeaderNav[_ngcontent-%COMP%]   .baseLineHeaderName[_ngcontent-%COMP%] {\r\n        padding: 10px 10px 10px 190px;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2xvYmFsTmVlZHMvZ2xvYmFsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7RUFJRTtBQUNGO0lBQ0ksZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYiwwQkFBMEI7SUFDMUIsV0FBVztJQUNYLFdBQVc7SUFDWCxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixxQkFBcUI7SUFDckIsZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQix3Q0FBd0M7SUFDeEMsV0FBVztJQUNYLDRCQUE0QjtJQUM1Qix5QkFBeUI7SUFDekIsV0FBVztJQUNYLFNBQVM7SUFDVCxrQkFBa0I7QUFDdEI7QUFFQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2IsMEJBQTBCO0lBQzFCLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsYUFBYTtJQUNiLE1BQU07SUFDTixnQkFBZ0I7SUFDaEIsd0JBQXdCO0lBQ3hCLFlBQVk7QUFDaEI7QUFFQTs7SUFFSTtRQUNJLFlBQVk7UUFDWixXQUFXO1FBQ1gsVUFBVTtRQUNWLGFBQWE7UUFDYixnQkFBZ0I7UUFDaEIsZ0JBQWdCO0lBQ3BCO0FBQ0o7QUFFQTtJQUNJO1FBQ0ksNkJBQTZCO0lBQ2pDO0FBQ0o7QUFFQTtJQUNJO1FBQ0ksNkJBQTZCO0lBQ2pDO0FBQ0o7QUFFQTtJQUNJO1FBQ0ksNkJBQTZCO0lBQ2pDO0FBQ0o7QUFFQTs7OztFQUlFIiwiZmlsZSI6InNyYy9hcHAvZ2xvYmFsTmVlZHMvZ2xvYmFsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKi5ib2R5LWNvbnRlbnQge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JlZW47XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZkODAwO1xyXG59Ki9cclxuLmJhc2VMaW5lQm9keUhlYWRlciB7XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIC8qYm9yZGVyOiAxcHggc29saWQgIzAwMDsqL1xyXG4gICAgd2lkdGg6IDkwdnc7XHJcbiAgICBsZWZ0OiAxOC4zJTtcclxuICAgIHRvcDogLTE0cHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW4tbGVmdDogLTI3LjV2dztcclxuICAgIG1hcmdpbi1yaWdodDogLTM4LjV2dztcclxuICAgIG1pbi1oZWlnaHQ6IDEwdnc7XHJcbiAgICBtYXgtd2lkdGg6IDg5dnc7XHJcbn1cclxuXHJcbi5iYXNlTGluZUJvZHlIZWFkZXIgLmJhc2VMaW5lQm9keUhlYWRlck5hdiAuYmFzZUxpbmVIZWFkZXJOYW1lIHtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgZm9udC1mYW1pbHk6IE9wZW4gc2Fucy1zZXJpZiwgc2Fucy1zZXJpZjtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgcGFkZGluZzogMTBweCAxMHB4IDEwcHggMjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1MzllNDU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmJhc2VMaW5lQm9keUhlYWRlciAuYmFzZUxpbmVCb2R5SGVhZGVyTmF2IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxNTBweDtcclxuICAgIC8qYm9yZGVyOiAxcHggc29saWQgIzAwMDsqL1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gICAgcG9zaXRpb246IC13ZWJraXQtc3RpY2t5O1xyXG4gICAgei1pbmRleDogLTUwO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogODAwcHgpXHJcbntcclxuICAgIC5iYXNlTGluZUJvZHlIZWFkZXIge1xyXG4gICAgICAgIHdpZHRoOiAxMDB2dztcclxuICAgICAgICBsZWZ0OiAzNy45JTtcclxuICAgICAgICB0b3A6IC04NHB4O1xyXG4gICAgICAgIGhlaWdodDogMTAwdnc7XHJcbiAgICAgICAgbWluLWhlaWdodDogMTB2dztcclxuICAgICAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogMTI2OHB4KSB7XHJcbiAgICAuYmFzZUxpbmVCb2R5SGVhZGVyIC5iYXNlTGluZUJvZHlIZWFkZXJOYXYgLmJhc2VMaW5lSGVhZGVyTmFtZSB7XHJcbiAgICAgICAgcGFkZGluZzogMTBweCAxMHB4IDEwcHggMTkwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxMjk4cHgpIHtcclxuICAgIC5iYXNlTGluZUJvZHlIZWFkZXIgLmJhc2VMaW5lQm9keUhlYWRlck5hdiAuYmFzZUxpbmVIZWFkZXJOYW1lIHtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4IDEwcHggMTBweCAxOTBweDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDEzMDBweCkge1xyXG4gICAgLmJhc2VMaW5lQm9keUhlYWRlciAuYmFzZUxpbmVCb2R5SGVhZGVyTmF2IC5iYXNlTGluZUhlYWRlck5hbWUge1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMTBweCAxMHB4IDE5MHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4vKkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgLmJhc2VMaW5lQm9keUhlYWRlciB7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbn0qLyJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](KBComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'KnowledgeBase',
                templateUrl: './KB.component.html',
                styleUrls: ['../../globalNeeds/global.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/KB/Rain/rain.component.ts":
/*!******************************************************!*\
  !*** ./src/app/components/KB/Rain/rain.component.ts ***!
  \******************************************************/
/*! exports provided: RainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RainComponent", function() { return RainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class RainComponent {
}
RainComponent.ɵfac = function RainComponent_Factory(t) { return new (t || RainComponent)(); };
RainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RainComponent, selectors: [["KB-Rain"]], decls: 4, vars: 0, consts: [[1, "baseLineBodyHeader"], [1, "baseLineBodyHeaderNav"], [1, "baseLineHeaderName"]], template: function RainComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "figure", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Knowledge Base Rain");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".baseLineBodyHeader[_ngcontent-%COMP%] {\r\n    overflow-y: auto;\r\n    outline: none;\r\n    \r\n    width: 90vw;\r\n    left: 18.3%;\r\n    top: -14px;\r\n    position: relative;\r\n    margin-left: -27.5vw;\r\n    margin-right: -38.5vw;\r\n    min-height: 10vw;\r\n    max-width: 89vw;\r\n}\r\n.baseLineBodyHeader[_ngcontent-%COMP%]   .baseLineBodyHeaderNav[_ngcontent-%COMP%]   .baseLineHeaderName[_ngcontent-%COMP%] {\r\n    font-size: 1.5rem;\r\n    font-family: Open sans-serif, sans-serif;\r\n    color: #fff;\r\n    padding: 10px 10px 10px 20px;\r\n    background-color: #539e45;\r\n    width: 100%;\r\n    margin: 0;\r\n    position: relative;\r\n}\r\n.baseLineBodyHeader[_ngcontent-%COMP%]   .baseLineBodyHeaderNav[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: 150px;\r\n    \r\n    margin-bottom: 10px;\r\n    display: inline-block;\r\n    outline: none;\r\n    top: 0;\r\n    position: sticky;\r\n    position: -webkit-sticky;\r\n    z-index: -50;\r\n}\r\n@media (max-width: 800px)\r\n{\r\n    .baseLineBodyHeader[_ngcontent-%COMP%] {\r\n        width: 100vw;\r\n        left: 37.9%;\r\n        top: -84px;\r\n        height: 100vw;\r\n        min-height: 10vw;\r\n        overflow-y: auto;\r\n    }\r\n}\r\n@media (max-width: 1268px) {\r\n    .baseLineBodyHeader[_ngcontent-%COMP%]   .baseLineBodyHeaderNav[_ngcontent-%COMP%]   .baseLineHeaderName[_ngcontent-%COMP%] {\r\n        padding: 10px 10px 10px 190px;\r\n    }\r\n}\r\n@media (max-width: 1298px) {\r\n    .baseLineBodyHeader[_ngcontent-%COMP%]   .baseLineBodyHeaderNav[_ngcontent-%COMP%]   .baseLineHeaderName[_ngcontent-%COMP%] {\r\n        padding: 10px 10px 10px 190px;\r\n    }\r\n}\r\n@media (max-width: 1300px) {\r\n    .baseLineBodyHeader[_ngcontent-%COMP%]   .baseLineBodyHeaderNav[_ngcontent-%COMP%]   .baseLineHeaderName[_ngcontent-%COMP%] {\r\n        padding: 10px 10px 10px 190px;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2xvYmFsTmVlZHMvZ2xvYmFsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7RUFJRTtBQUNGO0lBQ0ksZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYiwwQkFBMEI7SUFDMUIsV0FBVztJQUNYLFdBQVc7SUFDWCxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixxQkFBcUI7SUFDckIsZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQix3Q0FBd0M7SUFDeEMsV0FBVztJQUNYLDRCQUE0QjtJQUM1Qix5QkFBeUI7SUFDekIsV0FBVztJQUNYLFNBQVM7SUFDVCxrQkFBa0I7QUFDdEI7QUFFQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2IsMEJBQTBCO0lBQzFCLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsYUFBYTtJQUNiLE1BQU07SUFDTixnQkFBZ0I7SUFDaEIsd0JBQXdCO0lBQ3hCLFlBQVk7QUFDaEI7QUFFQTs7SUFFSTtRQUNJLFlBQVk7UUFDWixXQUFXO1FBQ1gsVUFBVTtRQUNWLGFBQWE7UUFDYixnQkFBZ0I7UUFDaEIsZ0JBQWdCO0lBQ3BCO0FBQ0o7QUFFQTtJQUNJO1FBQ0ksNkJBQTZCO0lBQ2pDO0FBQ0o7QUFFQTtJQUNJO1FBQ0ksNkJBQTZCO0lBQ2pDO0FBQ0o7QUFFQTtJQUNJO1FBQ0ksNkJBQTZCO0lBQ2pDO0FBQ0o7QUFFQTs7OztFQUlFIiwiZmlsZSI6InNyYy9hcHAvZ2xvYmFsTmVlZHMvZ2xvYmFsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKi5ib2R5LWNvbnRlbnQge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JlZW47XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZkODAwO1xyXG59Ki9cclxuLmJhc2VMaW5lQm9keUhlYWRlciB7XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIC8qYm9yZGVyOiAxcHggc29saWQgIzAwMDsqL1xyXG4gICAgd2lkdGg6IDkwdnc7XHJcbiAgICBsZWZ0OiAxOC4zJTtcclxuICAgIHRvcDogLTE0cHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW4tbGVmdDogLTI3LjV2dztcclxuICAgIG1hcmdpbi1yaWdodDogLTM4LjV2dztcclxuICAgIG1pbi1oZWlnaHQ6IDEwdnc7XHJcbiAgICBtYXgtd2lkdGg6IDg5dnc7XHJcbn1cclxuXHJcbi5iYXNlTGluZUJvZHlIZWFkZXIgLmJhc2VMaW5lQm9keUhlYWRlck5hdiAuYmFzZUxpbmVIZWFkZXJOYW1lIHtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgZm9udC1mYW1pbHk6IE9wZW4gc2Fucy1zZXJpZiwgc2Fucy1zZXJpZjtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgcGFkZGluZzogMTBweCAxMHB4IDEwcHggMjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1MzllNDU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmJhc2VMaW5lQm9keUhlYWRlciAuYmFzZUxpbmVCb2R5SGVhZGVyTmF2IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxNTBweDtcclxuICAgIC8qYm9yZGVyOiAxcHggc29saWQgIzAwMDsqL1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gICAgcG9zaXRpb246IC13ZWJraXQtc3RpY2t5O1xyXG4gICAgei1pbmRleDogLTUwO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogODAwcHgpXHJcbntcclxuICAgIC5iYXNlTGluZUJvZHlIZWFkZXIge1xyXG4gICAgICAgIHdpZHRoOiAxMDB2dztcclxuICAgICAgICBsZWZ0OiAzNy45JTtcclxuICAgICAgICB0b3A6IC04NHB4O1xyXG4gICAgICAgIGhlaWdodDogMTAwdnc7XHJcbiAgICAgICAgbWluLWhlaWdodDogMTB2dztcclxuICAgICAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogMTI2OHB4KSB7XHJcbiAgICAuYmFzZUxpbmVCb2R5SGVhZGVyIC5iYXNlTGluZUJvZHlIZWFkZXJOYXYgLmJhc2VMaW5lSGVhZGVyTmFtZSB7XHJcbiAgICAgICAgcGFkZGluZzogMTBweCAxMHB4IDEwcHggMTkwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxMjk4cHgpIHtcclxuICAgIC5iYXNlTGluZUJvZHlIZWFkZXIgLmJhc2VMaW5lQm9keUhlYWRlck5hdiAuYmFzZUxpbmVIZWFkZXJOYW1lIHtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4IDEwcHggMTBweCAxOTBweDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDEzMDBweCkge1xyXG4gICAgLmJhc2VMaW5lQm9keUhlYWRlciAuYmFzZUxpbmVCb2R5SGVhZGVyTmF2IC5iYXNlTGluZUhlYWRlck5hbWUge1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMTBweCAxMHB4IDE5MHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4vKkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgLmJhc2VMaW5lQm9keUhlYWRlciB7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbn0qLyJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RainComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'KB-Rain',
                templateUrl: './rain.component.html',
                styleUrls: ['../../../globalNeeds/global.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/KB/Wind/wind.component.ts":
/*!******************************************************!*\
  !*** ./src/app/components/KB/Wind/wind.component.ts ***!
  \******************************************************/
/*! exports provided: WindComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WindComponent", function() { return WindComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class WindComponent {
}
WindComponent.ɵfac = function WindComponent_Factory(t) { return new (t || WindComponent)(); };
WindComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WindComponent, selectors: [["KB-Wind"]], decls: 4, vars: 0, consts: [[1, "baseLineBodyHeader"], [1, "baseLineBodyHeaderNav"], [1, "baseLineHeaderName"]], template: function WindComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "figure", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Knowledge Base Wind");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".baseLineBodyHeader[_ngcontent-%COMP%] {\r\n    overflow-y: auto;\r\n    outline: none;\r\n    \r\n    width: 90vw;\r\n    left: 18.3%;\r\n    top: -14px;\r\n    position: relative;\r\n    margin-left: -27.5vw;\r\n    margin-right: -38.5vw;\r\n    min-height: 10vw;\r\n    max-width: 89vw;\r\n}\r\n.baseLineBodyHeader[_ngcontent-%COMP%]   .baseLineBodyHeaderNav[_ngcontent-%COMP%]   .baseLineHeaderName[_ngcontent-%COMP%] {\r\n    font-size: 1.5rem;\r\n    font-family: Open sans-serif, sans-serif;\r\n    color: #fff;\r\n    padding: 10px 10px 10px 20px;\r\n    background-color: #539e45;\r\n    width: 100%;\r\n    margin: 0;\r\n    position: relative;\r\n}\r\n.baseLineBodyHeader[_ngcontent-%COMP%]   .baseLineBodyHeaderNav[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: 150px;\r\n    \r\n    margin-bottom: 10px;\r\n    display: inline-block;\r\n    outline: none;\r\n    top: 0;\r\n    position: sticky;\r\n    position: -webkit-sticky;\r\n    z-index: -50;\r\n}\r\n@media (max-width: 800px)\r\n{\r\n    .baseLineBodyHeader[_ngcontent-%COMP%] {\r\n        width: 100vw;\r\n        left: 37.9%;\r\n        top: -84px;\r\n        height: 100vw;\r\n        min-height: 10vw;\r\n        overflow-y: auto;\r\n    }\r\n}\r\n@media (max-width: 1268px) {\r\n    .baseLineBodyHeader[_ngcontent-%COMP%]   .baseLineBodyHeaderNav[_ngcontent-%COMP%]   .baseLineHeaderName[_ngcontent-%COMP%] {\r\n        padding: 10px 10px 10px 190px;\r\n    }\r\n}\r\n@media (max-width: 1298px) {\r\n    .baseLineBodyHeader[_ngcontent-%COMP%]   .baseLineBodyHeaderNav[_ngcontent-%COMP%]   .baseLineHeaderName[_ngcontent-%COMP%] {\r\n        padding: 10px 10px 10px 190px;\r\n    }\r\n}\r\n@media (max-width: 1300px) {\r\n    .baseLineBodyHeader[_ngcontent-%COMP%]   .baseLineBodyHeaderNav[_ngcontent-%COMP%]   .baseLineHeaderName[_ngcontent-%COMP%] {\r\n        padding: 10px 10px 10px 190px;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2xvYmFsTmVlZHMvZ2xvYmFsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7RUFJRTtBQUNGO0lBQ0ksZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYiwwQkFBMEI7SUFDMUIsV0FBVztJQUNYLFdBQVc7SUFDWCxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixxQkFBcUI7SUFDckIsZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQix3Q0FBd0M7SUFDeEMsV0FBVztJQUNYLDRCQUE0QjtJQUM1Qix5QkFBeUI7SUFDekIsV0FBVztJQUNYLFNBQVM7SUFDVCxrQkFBa0I7QUFDdEI7QUFFQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2IsMEJBQTBCO0lBQzFCLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsYUFBYTtJQUNiLE1BQU07SUFDTixnQkFBZ0I7SUFDaEIsd0JBQXdCO0lBQ3hCLFlBQVk7QUFDaEI7QUFFQTs7SUFFSTtRQUNJLFlBQVk7UUFDWixXQUFXO1FBQ1gsVUFBVTtRQUNWLGFBQWE7UUFDYixnQkFBZ0I7UUFDaEIsZ0JBQWdCO0lBQ3BCO0FBQ0o7QUFFQTtJQUNJO1FBQ0ksNkJBQTZCO0lBQ2pDO0FBQ0o7QUFFQTtJQUNJO1FBQ0ksNkJBQTZCO0lBQ2pDO0FBQ0o7QUFFQTtJQUNJO1FBQ0ksNkJBQTZCO0lBQ2pDO0FBQ0o7QUFFQTs7OztFQUlFIiwiZmlsZSI6InNyYy9hcHAvZ2xvYmFsTmVlZHMvZ2xvYmFsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKi5ib2R5LWNvbnRlbnQge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JlZW47XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZkODAwO1xyXG59Ki9cclxuLmJhc2VMaW5lQm9keUhlYWRlciB7XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIC8qYm9yZGVyOiAxcHggc29saWQgIzAwMDsqL1xyXG4gICAgd2lkdGg6IDkwdnc7XHJcbiAgICBsZWZ0OiAxOC4zJTtcclxuICAgIHRvcDogLTE0cHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW4tbGVmdDogLTI3LjV2dztcclxuICAgIG1hcmdpbi1yaWdodDogLTM4LjV2dztcclxuICAgIG1pbi1oZWlnaHQ6IDEwdnc7XHJcbiAgICBtYXgtd2lkdGg6IDg5dnc7XHJcbn1cclxuXHJcbi5iYXNlTGluZUJvZHlIZWFkZXIgLmJhc2VMaW5lQm9keUhlYWRlck5hdiAuYmFzZUxpbmVIZWFkZXJOYW1lIHtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgZm9udC1mYW1pbHk6IE9wZW4gc2Fucy1zZXJpZiwgc2Fucy1zZXJpZjtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgcGFkZGluZzogMTBweCAxMHB4IDEwcHggMjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1MzllNDU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmJhc2VMaW5lQm9keUhlYWRlciAuYmFzZUxpbmVCb2R5SGVhZGVyTmF2IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxNTBweDtcclxuICAgIC8qYm9yZGVyOiAxcHggc29saWQgIzAwMDsqL1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gICAgcG9zaXRpb246IC13ZWJraXQtc3RpY2t5O1xyXG4gICAgei1pbmRleDogLTUwO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogODAwcHgpXHJcbntcclxuICAgIC5iYXNlTGluZUJvZHlIZWFkZXIge1xyXG4gICAgICAgIHdpZHRoOiAxMDB2dztcclxuICAgICAgICBsZWZ0OiAzNy45JTtcclxuICAgICAgICB0b3A6IC04NHB4O1xyXG4gICAgICAgIGhlaWdodDogMTAwdnc7XHJcbiAgICAgICAgbWluLWhlaWdodDogMTB2dztcclxuICAgICAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogMTI2OHB4KSB7XHJcbiAgICAuYmFzZUxpbmVCb2R5SGVhZGVyIC5iYXNlTGluZUJvZHlIZWFkZXJOYXYgLmJhc2VMaW5lSGVhZGVyTmFtZSB7XHJcbiAgICAgICAgcGFkZGluZzogMTBweCAxMHB4IDEwcHggMTkwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxMjk4cHgpIHtcclxuICAgIC5iYXNlTGluZUJvZHlIZWFkZXIgLmJhc2VMaW5lQm9keUhlYWRlck5hdiAuYmFzZUxpbmVIZWFkZXJOYW1lIHtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4IDEwcHggMTBweCAxOTBweDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDEzMDBweCkge1xyXG4gICAgLmJhc2VMaW5lQm9keUhlYWRlciAuYmFzZUxpbmVCb2R5SGVhZGVyTmF2IC5iYXNlTGluZUhlYWRlck5hbWUge1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMTBweCAxMHB4IDE5MHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4vKkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgLmJhc2VMaW5lQm9keUhlYWRlciB7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbn0qLyJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WindComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'KB-Wind',
                templateUrl: './wind.component.html',
                styleUrls: ['../../../globalNeeds/global.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/Ladderhome/home.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/Ladderhome/home.component.ts ***!
  \*********************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class HomeComponent {
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["ladderhome"]], decls: 62, vars: 0, consts: [["href", "https://get.asp.net/"], ["href", "https://msdn.microsoft.com/en-us/library/67ef8sbd.aspx"], ["href", "https://angular.io/"], ["href", "http://www.typescriptlang.org/"], ["href", "https://webpack.github.io/"], ["href", "http://getbootstrap.com/"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Hello Christopher's, world! The time to build.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Welcome to your new single-page application, built with:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "ASP.NET Core");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "C#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " for cross-platform server-side code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Angular");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "TypeScript");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " for client-side code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Webpack");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " for building and bundling client-side resources");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Bootstrap");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " for layout and styling");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "To help you get started, we've also set up:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Client-side navigation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, ". For example, click ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Counter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " then ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " to return here.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Server-side prerendering");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, ". For faster initial loading and improved SEO, your Angular app is prerendered on the server. The resulting HTML is then transferred to the browser where a client-side copy of the app takes over.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Webpack dev middleware");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, ". In development mode, there's no need to run the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "webpack");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " build tool. Your client-side resources are dynamically built on demand. Updates are available as soon as you modify any file.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Hot module replacement");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, ". In development mode, you don't even need to reload the page after making most changes. Within seconds of saving changes to files, your Angular app will be rebuilt and a new instance injected into the page.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Efficient production builds");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, ". In production mode, development-time features are disabled, and the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "webpack");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, " build tool produces minified static CSS and JavaScript files.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ladderhome',
                templateUrl: './home.component.html'
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/UnAssignedClaim/UnAssigned.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/components/UnAssignedClaim/UnAssigned.component.ts ***!
  \********************************************************************/
/*! exports provided: UnAssignedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnAssignedComponent", function() { return UnAssignedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class UnAssignedComponent {
}
UnAssignedComponent.ɵfac = function UnAssignedComponent_Factory(t) { return new (t || UnAssignedComponent)(); };
UnAssignedComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UnAssignedComponent, selectors: [["UnAssigned-Claim"]], decls: 4, vars: 0, consts: [[1, "baseLineBodyHeader"], [1, "baseLineBodyHeaderNav"], [1, "baseLineHeaderName"]], template: function UnAssignedComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "figure", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "UnAssigned Claims Queue");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".baseLineBodyHeader[_ngcontent-%COMP%] {\r\n    overflow-y: auto;\r\n    outline: none;\r\n    \r\n    width: 90vw;\r\n    left: 18.3%;\r\n    top: -14px;\r\n    position: relative;\r\n    margin-left: -27.5vw;\r\n    margin-right: -38.5vw;\r\n    min-height: 10vw;\r\n    max-width: 89vw;\r\n}\r\n.baseLineBodyHeader[_ngcontent-%COMP%]   .baseLineBodyHeaderNav[_ngcontent-%COMP%]   .baseLineHeaderName[_ngcontent-%COMP%] {\r\n    font-size: 1.5rem;\r\n    font-family: Open sans-serif, sans-serif;\r\n    color: #fff;\r\n    padding: 10px 10px 10px 20px;\r\n    background-color: #539e45;\r\n    width: 100%;\r\n    margin: 0;\r\n    position: relative;\r\n}\r\n.baseLineBodyHeader[_ngcontent-%COMP%]   .baseLineBodyHeaderNav[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: 150px;\r\n    \r\n    margin-bottom: 10px;\r\n    display: inline-block;\r\n    outline: none;\r\n    top: 0;\r\n    position: sticky;\r\n    position: -webkit-sticky;\r\n    z-index: -50;\r\n}\r\n@media (max-width: 800px)\r\n{\r\n    .baseLineBodyHeader[_ngcontent-%COMP%] {\r\n        width: 100vw;\r\n        left: 37.9%;\r\n        top: -84px;\r\n        height: 100vw;\r\n        min-height: 10vw;\r\n        overflow-y: auto;\r\n    }\r\n}\r\n@media (max-width: 1268px) {\r\n    .baseLineBodyHeader[_ngcontent-%COMP%]   .baseLineBodyHeaderNav[_ngcontent-%COMP%]   .baseLineHeaderName[_ngcontent-%COMP%] {\r\n        padding: 10px 10px 10px 190px;\r\n    }\r\n}\r\n@media (max-width: 1298px) {\r\n    .baseLineBodyHeader[_ngcontent-%COMP%]   .baseLineBodyHeaderNav[_ngcontent-%COMP%]   .baseLineHeaderName[_ngcontent-%COMP%] {\r\n        padding: 10px 10px 10px 190px;\r\n    }\r\n}\r\n@media (max-width: 1300px) {\r\n    .baseLineBodyHeader[_ngcontent-%COMP%]   .baseLineBodyHeaderNav[_ngcontent-%COMP%]   .baseLineHeaderName[_ngcontent-%COMP%] {\r\n        padding: 10px 10px 10px 190px;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvY3NzL2dsb2JhbE5lZWRzL2dsb2JhbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0VBSUU7QUFDRjtJQUNJLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsMEJBQTBCO0lBQzFCLFdBQVc7SUFDWCxXQUFXO0lBQ1gsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIscUJBQXFCO0lBQ3JCLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25CO0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsd0NBQXdDO0lBQ3hDLFdBQVc7SUFDWCw0QkFBNEI7SUFDNUIseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCxTQUFTO0lBQ1Qsa0JBQWtCO0FBQ3RCO0FBRUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLDBCQUEwQjtJQUMxQixtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLGFBQWE7SUFDYixNQUFNO0lBQ04sZ0JBQWdCO0lBQ2hCLHdCQUF3QjtJQUN4QixZQUFZO0FBQ2hCO0FBRUE7O0lBRUk7UUFDSSxZQUFZO1FBQ1osV0FBVztRQUNYLFVBQVU7UUFDVixhQUFhO1FBQ2IsZ0JBQWdCO1FBQ2hCLGdCQUFnQjtJQUNwQjtBQUNKO0FBRUE7SUFDSTtRQUNJLDZCQUE2QjtJQUNqQztBQUNKO0FBRUE7SUFDSTtRQUNJLDZCQUE2QjtJQUNqQztBQUNKO0FBRUE7SUFDSTtRQUNJLDZCQUE2QjtJQUNqQztBQUNKO0FBRUE7Ozs7RUFJRSIsImZpbGUiOiJzcmMvYXNzZXRzL2Nzcy9nbG9iYWxOZWVkcy9nbG9iYWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qLmJvZHktY29udGVudCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmVlbjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmQ4MDA7XHJcbn0qL1xyXG4uYmFzZUxpbmVCb2R5SGVhZGVyIHtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgLypib3JkZXI6IDFweCBzb2xpZCAjMDAwOyovXHJcbiAgICB3aWR0aDogOTB2dztcclxuICAgIGxlZnQ6IDE4LjMlO1xyXG4gICAgdG9wOiAtMTRweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMjcuNXZ3O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAtMzguNXZ3O1xyXG4gICAgbWluLWhlaWdodDogMTB2dztcclxuICAgIG1heC13aWR0aDogODl2dztcclxufVxyXG5cclxuLmJhc2VMaW5lQm9keUhlYWRlciAuYmFzZUxpbmVCb2R5SGVhZGVyTmF2IC5iYXNlTGluZUhlYWRlck5hbWUge1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICBmb250LWZhbWlseTogT3BlbiBzYW5zLXNlcmlmLCBzYW5zLXNlcmlmO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDEwcHggMTBweCAyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzUzOWU0NTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uYmFzZUxpbmVCb2R5SGVhZGVyIC5iYXNlTGluZUJvZHlIZWFkZXJOYXYge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgLypib3JkZXI6IDFweCBzb2xpZCAjMDAwOyovXHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIHRvcDogMDtcclxuICAgIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgICBwb3NpdGlvbjogLXdlYmtpdC1zdGlja3k7XHJcbiAgICB6LWluZGV4OiAtNTA7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA4MDBweClcclxue1xyXG4gICAgLmJhc2VMaW5lQm9keUhlYWRlciB7XHJcbiAgICAgICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgICAgIGxlZnQ6IDM3LjklO1xyXG4gICAgICAgIHRvcDogLTg0cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDB2dztcclxuICAgICAgICBtaW4taGVpZ2h0OiAxMHZ3O1xyXG4gICAgICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxMjY4cHgpIHtcclxuICAgIC5iYXNlTGluZUJvZHlIZWFkZXIgLmJhc2VMaW5lQm9keUhlYWRlck5hdiAuYmFzZUxpbmVIZWFkZXJOYW1lIHtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4IDEwcHggMTBweCAxOTBweDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDEyOThweCkge1xyXG4gICAgLmJhc2VMaW5lQm9keUhlYWRlciAuYmFzZUxpbmVCb2R5SGVhZGVyTmF2IC5iYXNlTGluZUhlYWRlck5hbWUge1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMTBweCAxMHB4IDE5MHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogMTMwMHB4KSB7XHJcbiAgICAuYmFzZUxpbmVCb2R5SGVhZGVyIC5iYXNlTGluZUJvZHlIZWFkZXJOYXYgLmJhc2VMaW5lSGVhZGVyTmFtZSB7XHJcbiAgICAgICAgcGFkZGluZzogMTBweCAxMHB4IDEwcHggMTkwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICAuYmFzZUxpbmVCb2R5SGVhZGVyIHtcclxuICAgICAgICBcclxuICAgIH1cclxufSovIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UnAssignedComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'UnAssigned-Claim',
                templateUrl: './UnAssigned.component.html',
                styleUrls: ['../../../assets/css/globalNeeds/global.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/Unscheduled/Unscheduled.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/Unscheduled/Unscheduled.component.ts ***!
  \*****************************************************************/
/*! exports provided: UnscheduledComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnscheduledComponent", function() { return UnscheduledComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class UnscheduledComponent {
}
UnscheduledComponent.ɵfac = function UnscheduledComponent_Factory(t) { return new (t || UnscheduledComponent)(); };
UnscheduledComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UnscheduledComponent, selectors: [["Unscheduled"]], decls: 4, vars: 0, consts: [[1, "baseLineBodyHeader"], [1, "baseLineBodyHeaderNav"], [1, "baseLineHeaderName"]], template: function UnscheduledComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "figure", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Unscheduled Jobs Overview");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".baseLineBodyHeader[_ngcontent-%COMP%] {\r\n    overflow-y: auto;\r\n    outline: none;\r\n    \r\n    width: 90vw;\r\n    left: 18.3%;\r\n    top: -14px;\r\n    position: relative;\r\n    margin-left: -27.5vw;\r\n    margin-right: -38.5vw;\r\n    min-height: 10vw;\r\n    max-width: 89vw;\r\n}\r\n.baseLineBodyHeader[_ngcontent-%COMP%]   .baseLineBodyHeaderNav[_ngcontent-%COMP%]   .baseLineHeaderName[_ngcontent-%COMP%] {\r\n    font-size: 1.5rem;\r\n    font-family: Open sans-serif, sans-serif;\r\n    color: #fff;\r\n    padding: 10px 10px 10px 20px;\r\n    background-color: #539e45;\r\n    width: 100%;\r\n    margin: 0;\r\n    position: relative;\r\n}\r\n.baseLineBodyHeader[_ngcontent-%COMP%]   .baseLineBodyHeaderNav[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: 150px;\r\n    \r\n    margin-bottom: 10px;\r\n    display: inline-block;\r\n    outline: none;\r\n    top: 0;\r\n    position: sticky;\r\n    position: -webkit-sticky;\r\n    z-index: -50;\r\n}\r\n@media (max-width: 800px)\r\n{\r\n    .baseLineBodyHeader[_ngcontent-%COMP%] {\r\n        width: 100vw;\r\n        left: 37.9%;\r\n        top: -84px;\r\n        height: 100vw;\r\n        min-height: 10vw;\r\n        overflow-y: auto;\r\n    }\r\n}\r\n@media (max-width: 1268px) {\r\n    .baseLineBodyHeader[_ngcontent-%COMP%]   .baseLineBodyHeaderNav[_ngcontent-%COMP%]   .baseLineHeaderName[_ngcontent-%COMP%] {\r\n        padding: 10px 10px 10px 190px;\r\n    }\r\n}\r\n@media (max-width: 1298px) {\r\n    .baseLineBodyHeader[_ngcontent-%COMP%]   .baseLineBodyHeaderNav[_ngcontent-%COMP%]   .baseLineHeaderName[_ngcontent-%COMP%] {\r\n        padding: 10px 10px 10px 190px;\r\n    }\r\n}\r\n@media (max-width: 1300px) {\r\n    .baseLineBodyHeader[_ngcontent-%COMP%]   .baseLineBodyHeaderNav[_ngcontent-%COMP%]   .baseLineHeaderName[_ngcontent-%COMP%] {\r\n        padding: 10px 10px 10px 190px;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvY3NzL2dsb2JhbE5lZWRzL2dsb2JhbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0VBSUU7QUFDRjtJQUNJLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsMEJBQTBCO0lBQzFCLFdBQVc7SUFDWCxXQUFXO0lBQ1gsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIscUJBQXFCO0lBQ3JCLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25CO0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsd0NBQXdDO0lBQ3hDLFdBQVc7SUFDWCw0QkFBNEI7SUFDNUIseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCxTQUFTO0lBQ1Qsa0JBQWtCO0FBQ3RCO0FBRUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLDBCQUEwQjtJQUMxQixtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLGFBQWE7SUFDYixNQUFNO0lBQ04sZ0JBQWdCO0lBQ2hCLHdCQUF3QjtJQUN4QixZQUFZO0FBQ2hCO0FBRUE7O0lBRUk7UUFDSSxZQUFZO1FBQ1osV0FBVztRQUNYLFVBQVU7UUFDVixhQUFhO1FBQ2IsZ0JBQWdCO1FBQ2hCLGdCQUFnQjtJQUNwQjtBQUNKO0FBRUE7SUFDSTtRQUNJLDZCQUE2QjtJQUNqQztBQUNKO0FBRUE7SUFDSTtRQUNJLDZCQUE2QjtJQUNqQztBQUNKO0FBRUE7SUFDSTtRQUNJLDZCQUE2QjtJQUNqQztBQUNKO0FBRUE7Ozs7RUFJRSIsImZpbGUiOiJzcmMvYXNzZXRzL2Nzcy9nbG9iYWxOZWVkcy9nbG9iYWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qLmJvZHktY29udGVudCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmVlbjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmQ4MDA7XHJcbn0qL1xyXG4uYmFzZUxpbmVCb2R5SGVhZGVyIHtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgLypib3JkZXI6IDFweCBzb2xpZCAjMDAwOyovXHJcbiAgICB3aWR0aDogOTB2dztcclxuICAgIGxlZnQ6IDE4LjMlO1xyXG4gICAgdG9wOiAtMTRweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMjcuNXZ3O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAtMzguNXZ3O1xyXG4gICAgbWluLWhlaWdodDogMTB2dztcclxuICAgIG1heC13aWR0aDogODl2dztcclxufVxyXG5cclxuLmJhc2VMaW5lQm9keUhlYWRlciAuYmFzZUxpbmVCb2R5SGVhZGVyTmF2IC5iYXNlTGluZUhlYWRlck5hbWUge1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICBmb250LWZhbWlseTogT3BlbiBzYW5zLXNlcmlmLCBzYW5zLXNlcmlmO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDEwcHggMTBweCAyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzUzOWU0NTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uYmFzZUxpbmVCb2R5SGVhZGVyIC5iYXNlTGluZUJvZHlIZWFkZXJOYXYge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgLypib3JkZXI6IDFweCBzb2xpZCAjMDAwOyovXHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIHRvcDogMDtcclxuICAgIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgICBwb3NpdGlvbjogLXdlYmtpdC1zdGlja3k7XHJcbiAgICB6LWluZGV4OiAtNTA7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA4MDBweClcclxue1xyXG4gICAgLmJhc2VMaW5lQm9keUhlYWRlciB7XHJcbiAgICAgICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgICAgIGxlZnQ6IDM3LjklO1xyXG4gICAgICAgIHRvcDogLTg0cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDB2dztcclxuICAgICAgICBtaW4taGVpZ2h0OiAxMHZ3O1xyXG4gICAgICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxMjY4cHgpIHtcclxuICAgIC5iYXNlTGluZUJvZHlIZWFkZXIgLmJhc2VMaW5lQm9keUhlYWRlck5hdiAuYmFzZUxpbmVIZWFkZXJOYW1lIHtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4IDEwcHggMTBweCAxOTBweDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDEyOThweCkge1xyXG4gICAgLmJhc2VMaW5lQm9keUhlYWRlciAuYmFzZUxpbmVCb2R5SGVhZGVyTmF2IC5iYXNlTGluZUhlYWRlck5hbWUge1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMTBweCAxMHB4IDE5MHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogMTMwMHB4KSB7XHJcbiAgICAuYmFzZUxpbmVCb2R5SGVhZGVyIC5iYXNlTGluZUJvZHlIZWFkZXJOYXYgLmJhc2VMaW5lSGVhZGVyTmFtZSB7XHJcbiAgICAgICAgcGFkZGluZzogMTBweCAxMHB4IDEwcHggMTkwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICAuYmFzZUxpbmVCb2R5SGVhZGVyIHtcclxuICAgICAgICBcclxuICAgIH1cclxufSovIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UnscheduledComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'Unscheduled',
                templateUrl: './Unscheduled.component.html',
                styleUrls: ['../../../assets/css/globalNeeds/global.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_header_header_parameter_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/header/header-parameter.service */ "./src/app/services/header/header-parameter.service.ts");




class HeaderComponent {
    constructor(headerParameterService) {
        this.headerParameterService = headerParameterService;
        this.attrib = 'dropdown-menu';
        this.username = 'Christopher';
    }
    get showlogout() {
        return this.headerParameterService.showlogout;
    }
    set showlogout(value) {
        this.headerParameterService.showlogout = value;
    }
    ngOnInit() {
    }
    ShowHide() {
        this.showlogout = !this.showlogout;
        this.attrib = this.showlogout ? 'dropdown-menu show' : 'dropdown-menu';
        //alert(this.attrib);
    }
    SigningOut() {
        var result = confirm('Are you sure you want to sign out?');
        if (result) {
            location.href = "http://www.apprehensivegent.tech";
        }
        else {
            alert('Proceed');
        } //TODO: Return to header component for wiring up the security logic for logging out, remember to connect into the service component module...CDW
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_header_header_parameter_service__WEBPACK_IMPORTED_MODULE_1__["HeaderParameterService"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_services_header_header_parameter_service__WEBPACK_IMPORTED_MODULE_1__["HeaderParameterService"]])], decls: 12, vars: 4, consts: [[1, "navbar", "navbar-expand", "navbar-dark", "flex-column", "flex-md-row", "ln-navbar"], [1, "headerlogosealed"], ["src", "../../../assets/imgs/laddernow-logo-full-white.png", 1, "ladderLogoTop"], ["_ngcontent-kbo-c181", "", "ngbdropdown", "", "placement", "bottom-right", 1, "securityHeaderRt", "dropdown", 3, "click"], ["_ngcontent-kbo-c181", "", "aria-haspopup", "true", "aria-expanded", "false", 1, "dropdown-toggle", "btn", "btn-link", "nav-item", "nav-link", "mr-md-2", "user-dropdown", "d-flex", "align-items-center"], ["_ngcontent-kbo-c181", "", "src", "../../../assets/imgs/anonymous-user-avatar.svg", 1, "user-avatar"], ["loginpopup", ""], ["_ngcontent-kbo-c181", "", "ngbdropdownmenu", ""], ["_ngcontent-kbo-c181", "", 1, "dropdown-item", 3, "click"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_div_click_3_listener() { return ctx.ShowHide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h4", null, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_10_listener() { return ctx.SigningOut(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Sign Out");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.attrib);
    } }, styles: [".headerlogosealed[_ngcontent-%COMP%] {\r\n  background-image: url('lnl.png');\r\n  background-repeat: repeat-x;\r\n  width: 100%;\r\n  height: 56px;\r\n  border: 0;\r\n  position: fixed;\r\n  left: 0;\r\n  top: 0;\r\n}\r\n\r\n.ladderLogoTop[_ngcontent-%COMP%] {\r\n    height: 45px;\r\n    width: 55.25px;\r\n    top: 6px;\r\n    left: 20px;\r\n    position: fixed;\r\n}\r\n\r\n.user-avatar[_ngcontent-%COMP%] {\r\n    width: 30px;\r\n    height: 30px;\r\n    outline: none;\r\n}\r\n\r\n.dropdown-menu[_ngcontent-%COMP%] {\r\n    outline: none;\r\n    cursor: pointer;\r\n    border: 1px solid #539e45;\r\n}\r\n\r\n.dropdown-item[_ngcontent-%COMP%] {\r\n    border: 0;\r\n    background-color: transparent;\r\n    font-weight: 400;\r\n    color: #212529;\r\n    clear: both;\r\n    display: block;\r\n    white-space: nowrap;\r\n    padding: .25rem 1.5rem;\r\n    width: 100%;\r\n    \r\n    outline: none;\r\n    cursor: pointer;\r\n}\r\n\r\n.securityHeaderRt[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    right: 15px;\r\n    top: 8px;\r\n    outline: none;\r\n    width: 200px;\r\n    display: inline-block;\r\n    \r\n}\r\n\r\n.securityHeaderRt[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n    outline: none;\r\n}\r\n\r\n.securityHeaderRt[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%] {\r\n        width: 148.88px;\r\n        height: 46px;\r\n        outline: none;\r\n    }\r\n\r\n.securityHeaderRt[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\r\n        margin: 0 5px 0 5px;\r\n    }\r\n\r\n.d-flex[_ngcontent-%COMP%] {\r\n    display: flex !important;\r\n}\r\n\r\n.dropdown-toggle[_ngcontent-%COMP%] {\r\n    white-space: nowrap;\r\n}\r\n\r\n.btn-link[_ngcontent-%COMP%] {\r\n    font-weight: 400;\r\n    text-decoration: none;\r\n    outline: none;\r\n}\r\n\r\n.btn[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    vertical-align: middle;\r\n    -webkit-user-select: none;\r\n       -moz-user-select: none;\r\n            user-select: none;\r\n    background-color: transparent;\r\n    border: 1px solid transparent;\r\n    line-height: 1.5;\r\n    border-radius: .25rem;\r\n    transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;\r\n    color: #fff;\r\n}\r\n\r\n[type=button][_ngcontent-%COMP%], [type=reset][_ngcontent-%COMP%], [type=submit][_ngcontent-%COMP%], button[_ngcontent-%COMP%] {\r\n    -webkit-appearance: button;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%], select[_ngcontent-%COMP%] {\r\n    text-transform: none;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%], input[_ngcontent-%COMP%] {\r\n    overflow: visible;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%], input[_ngcontent-%COMP%], optgroup[_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n    font-family: inherit;\r\n    outline: none;\r\n}\r\n\r\n*[_ngcontent-%COMP%], [_ngcontent-%COMP%]:after, [_ngcontent-%COMP%]:before {\r\n    box-sizing: border-box;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n    -webkit-writing-mode: horizontal-th !important;\r\n    text-rendering: auto;\r\n    letter-spacing: normal;\r\n    word-spacing: normal;\r\n    text-indent: 0px;\r\n    text-shadow: none;\r\n    cursor: pointer;\r\n}\r\n\r\n.dropdown-toggle[_ngcontent-kbo-c181][_ngcontent-%COMP%]:after {\r\n    margin-left: .5rem;\r\n    cursor: pointer;\r\n}\r\n\r\n.dropdown-toggle[_ngcontent-%COMP%]:after {\r\n    display: inline-block;\r\n    vertical-align: .255em;\r\n    content: \"\";\r\n    border-top: .3em solid;\r\n    border-right: .3em solid transparent;\r\n    border-bottom: 0;\r\n    border-left: .3em solid transparent;\r\n    cursor: pointer;\r\n    outline: none;    \r\n}\r\n\r\n.user-dropdown[_ngcontent-kbo-c181][_ngcontent-%COMP%] {\r\n    font-size: 1rem;\r\n    color: #fff !important;\r\n}\r\n\r\n.align-items-center[_ngcontent-%COMP%] {\r\n    align-items: center !important;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvY3NzL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0NBQXdDO0VBQ3hDLDJCQUEyQjtFQUMzQixXQUFXO0VBQ1gsWUFBWTtFQUNaLFNBQVM7RUFDVCxlQUFlO0VBQ2YsT0FBTztFQUNQLE1BQU07QUFDUjs7QUFFQTtJQUNJLFlBQVk7SUFDWixjQUFjO0lBQ2QsUUFBUTtJQUNSLFVBQVU7SUFDVixlQUFlO0FBQ25COztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGVBQWU7SUFDZix5QkFBeUI7QUFDN0I7O0FBQ0E7SUFDSSxTQUFTO0lBQ1QsNkJBQTZCO0lBQzdCLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsV0FBVztJQUNYLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCx1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsV0FBVztJQUNYLFFBQVE7SUFDUixhQUFhO0lBQ2IsWUFBWTtJQUNaLHFCQUFxQjtJQUNyQiwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUNJO1FBQ0ksZUFBZTtRQUNmLFlBQVk7UUFDWixhQUFhO0lBQ2pCOztBQUVBO1FBQ0ksbUJBQW1CO0lBQ3ZCOztBQUVKO0lBQ0ksd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHFCQUFxQjtJQUNyQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0Qix5QkFBaUI7T0FBakIsc0JBQWlCO1lBQWpCLGlCQUFpQjtJQUNqQiw2QkFBNkI7SUFDN0IsNkJBQTZCO0lBQzdCLGdCQUFnQjtJQUNoQixxQkFBcUI7SUFDckIsaUlBQWlJO0lBQ2pJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxvQkFBb0I7SUFDcEIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLDhDQUE4QztJQUM5QyxvQkFBb0I7SUFDcEIsc0JBQXNCO0lBQ3RCLG9CQUFvQjtJQUNwQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixzQkFBc0I7SUFDdEIsV0FBVztJQUNYLHNCQUFzQjtJQUN0QixvQ0FBb0M7SUFDcEMsZ0JBQWdCO0lBQ2hCLG1DQUFtQztJQUNuQyxlQUFlO0lBQ2YsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSw4QkFBOEI7QUFDbEM7O0FBRUE7O0VBRUUiLCJmaWxlIjoic3JjL2Fzc2V0cy9jc3MvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVybG9nb3NlYWxlZCB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9pbWdzL2xubC5wbmcnKTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA1NnB4O1xyXG4gIGJvcmRlcjogMDtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgbGVmdDogMDtcclxuICB0b3A6IDA7XHJcbn1cclxuXHJcbi5sYWRkZXJMb2dvVG9wIHtcclxuICAgIGhlaWdodDogNDVweDtcclxuICAgIHdpZHRoOiA1NS4yNXB4O1xyXG4gICAgdG9wOiA2cHg7XHJcbiAgICBsZWZ0OiAyMHB4O1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG59XHJcblxyXG4udXNlci1hdmF0YXIge1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG4uZHJvcGRvd24tbWVudSB7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzUzOWU0NTtcclxufVxyXG4uZHJvcGRvd24taXRlbSB7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBjb2xvcjogIzIxMjUyOTtcclxuICAgIGNsZWFyOiBib3RoO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgcGFkZGluZzogLjI1cmVtIDEuNXJlbTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgLyp0ZXh0LWFsaWduOiBpbmhlcml0OyovXHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uc2VjdXJpdHlIZWFkZXJSdCB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICByaWdodDogMTVweDtcclxuICAgIHRvcDogOHB4O1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIC8qYm9yZGVyOiAxcHggc29saWQgIzAwMDsqL1xyXG59XHJcblxyXG4uc2VjdXJpdHlIZWFkZXJSdCBidXR0b24ge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxufVxyXG4gICAgLnNlY3VyaXR5SGVhZGVyUnQgLmRyb3Bkb3duLXRvZ2dsZSB7XHJcbiAgICAgICAgd2lkdGg6IDE0OC44OHB4O1xyXG4gICAgICAgIGhlaWdodDogNDZweDtcclxuICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgfVxyXG5cclxuICAgIC5zZWN1cml0eUhlYWRlclJ0IGg0IHtcclxuICAgICAgICBtYXJnaW46IDAgNXB4IDAgNXB4O1xyXG4gICAgfVxyXG5cclxuLmQtZmxleCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5kcm9wZG93bi10b2dnbGUge1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxufVxyXG5cclxuLmJ0bi1saW5rIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG4uYnRuIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgYm9yZGVyLXJhZGl1czogLjI1cmVtO1xyXG4gICAgdHJhbnNpdGlvbjogY29sb3IgLjE1cyBlYXNlLWluLW91dCwgYmFja2dyb3VuZC1jb2xvciAuMTVzIGVhc2UtaW4tb3V0LCBib3JkZXItY29sb3IgLjE1cyBlYXNlLWluLW91dCwgYm94LXNoYWRvdyAuMTVzIGVhc2UtaW4tb3V0O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcblt0eXBlPWJ1dHRvbl0sIFt0eXBlPXJlc2V0XSwgW3R5cGU9c3VibWl0XSwgYnV0dG9uIHtcclxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uO1xyXG59XHJcblxyXG5idXR0b24sIHNlbGVjdCB7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxufVxyXG5cclxuYnV0dG9uLCBpbnB1dCB7XHJcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcclxufVxyXG5cclxuYnV0dG9uLCBpbnB1dCwgb3B0Z3JvdXAsIHNlbGVjdCwgdGV4dGFyZWEge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG4qLCA6YWZ0ZXIsIDpiZWZvcmUge1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuYnV0dG9uIHtcclxuICAgIC13ZWJraXQtd3JpdGluZy1tb2RlOiBob3Jpem9udGFsLXRoICFpbXBvcnRhbnQ7XHJcbiAgICB0ZXh0LXJlbmRlcmluZzogYXV0bztcclxuICAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XHJcbiAgICB3b3JkLXNwYWNpbmc6IG5vcm1hbDtcclxuICAgIHRleHQtaW5kZW50OiAwcHg7XHJcbiAgICB0ZXh0LXNoYWRvdzogbm9uZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmRyb3Bkb3duLXRvZ2dsZVtfbmdjb250ZW50LWtiby1jMTgxXTphZnRlciB7XHJcbiAgICBtYXJnaW4tbGVmdDogLjVyZW07XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5kcm9wZG93bi10b2dnbGU6YWZ0ZXIge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgdmVydGljYWwtYWxpZ246IC4yNTVlbTtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBib3JkZXItdG9wOiAuM2VtIHNvbGlkO1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAuM2VtIHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMDtcclxuICAgIGJvcmRlci1sZWZ0OiAuM2VtIHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgb3V0bGluZTogbm9uZTsgICAgXHJcbn1cclxuXHJcbi51c2VyLWRyb3Bkb3duW19uZ2NvbnRlbnQta2JvLWMxODFdIHtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5hbGlnbi1pdGVtcy1jZW50ZXIge1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4vKi5kcm9wZG93bi1tZW51IC5zaG93IHtcclxuICAgIHotaW5kZXg6IDE2MDA7XHJcbn0qL1xyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['../../../assets/css/header.component.css'],
                providers: [_services_header_header_parameter_service__WEBPACK_IMPORTED_MODULE_1__["HeaderParameterService"]]
            }]
    }], function () { return [{ type: _services_header_header_parameter_service__WEBPACK_IMPORTED_MODULE_1__["HeaderParameterService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/navmenu/navmenu.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/navmenu/navmenu.component.ts ***!
  \*********************************************************/
/*! exports provided: NavMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavMenuComponent", function() { return NavMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_navigation_Nav_Parameter_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/navigation/Nav-Parameter.service */ "./src/app/services/navigation/Nav-Parameter.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





const _c0 = function () { return ["link-active"]; };
const _c1 = function () { return ["/Ladderhome"]; };
const _c2 = function () { return ["/Unscheduled"]; };
const _c3 = function () { return ["/UnAssignedClaims"]; };
const _c4 = function () { return ["/AssignedClaims"]; };
const _c5 = function () { return ["/KB"]; };
const _c6 = function () { return ["/HotTopics"]; };
const _c7 = function () { return ["/Rain"]; };
const _c8 = function () { return ["/Wind"]; };
const _c9 = function () { return ["/Fire"]; };
const _c10 = function () { return ["/Time"]; };
class NavMenuComponent {
    constructor(navParameterService) {
        this.navParameterService = navParameterService;
        this.linkRightArrowShow = 'glyphicon-menu-right';
        this.linksSubMenuKB = 'sublistKB';
    }
    get showKBItems() {
        return this.navParameterService.showKBItems;
    }
    set showKBItems(value) {
        this.navParameterService.showKBItems = value;
    }
    get SubmenuKB() {
        return this.navParameterService.submenuKB;
    }
    set SubmenuKB(value) {
        this.navParameterService.submenuKB = value;
    }
    ngOnInit() {
    }
    expandMenuItem() {
        this.showKBItems = !this.showKBItems;
        this.linkRightArrowShow = this.showKBItems ? 'glyphicon glyphicon-menu-down' : 'glyphicon-menu-right';
        this.SubmenuKB = !this.SubmenuKB;
        this.linksSubMenuKB = this.SubmenuKB ? 'sublistKB show' : 'sublistKB';
    }
}
NavMenuComponent.ɵfac = function NavMenuComponent_Factory(t) { return new (t || NavMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_navigation_Nav_Parameter_service__WEBPACK_IMPORTED_MODULE_1__["NavParameterService"])); };
NavMenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavMenuComponent, selectors: [["nav-menu"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_services_navigation_Nav_Parameter_service__WEBPACK_IMPORTED_MODULE_1__["NavParameterService"]])], decls: 58, vars: 46, consts: [[1, "main-nav"], [1, "navbar", "navbar-inverse"], [1, "navbar-header"], ["type", "button", "data-toggle", "collapse", "data-target", ".navbar-collapse", 1, "navbar-toggle"], [1, "sr-only"], [1, "icon-bar"], [1, "clearfix"], [1, "navbar-collapse", "collapse"], [1, "nav", "navbar-nav"], [3, "routerLinkActive"], [3, "routerLink"], ["role", "img", "aria-hidden", "true", "focusable", "false", "data-prefix", "fas", "data-icon", "home", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 576 512", 1, "svg-inline--fa", "fa-home", "fa-w-18"], ["fill", "currentColor", "d", "M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"], ["role", "img", "aria-hidden", "true", "focusable", "false", "data-prefix", "fas", "data-icon", "phone-volume", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 384 512", 1, "svg-inline--fa", "fa-phone-volume", "fa-w-12"], ["fill", "currentColor", "d", "M97.333 506.966c-129.874-129.874-129.681-340.252 0-469.933 5.698-5.698 14.527-6.632 21.263-2.422l64.817 40.513a17.187 17.187 0 0 1 6.849 20.958l-32.408 81.021a17.188 17.188 0 0 1-17.669 10.719l-55.81-5.58c-21.051 58.261-20.612 122.471 0 179.515l55.811-5.581a17.188 17.188 0 0 1 17.669 10.719l32.408 81.022a17.188 17.188 0 0 1-6.849 20.958l-64.817 40.513a17.19 17.19 0 0 1-21.264-2.422zM247.126 95.473c11.832 20.047 11.832 45.008 0 65.055-3.95 6.693-13.108 7.959-18.718 2.581l-5.975-5.726c-3.911-3.748-4.793-9.622-2.261-14.41a32.063 32.063 0 0 0 0-29.945c-2.533-4.788-1.65-10.662 2.261-14.41l5.975-5.726c5.61-5.378 14.768-4.112 18.718 2.581zm91.787-91.187c60.14 71.604 60.092 175.882 0 247.428-4.474 5.327-12.53 5.746-17.552.933l-5.798-5.557c-4.56-4.371-4.977-11.529-.93-16.379 49.687-59.538 49.646-145.933 0-205.422-4.047-4.85-3.631-12.008.93-16.379l5.798-5.557c5.022-4.813 13.078-4.394 17.552.933zm-45.972 44.941c36.05 46.322 36.108 111.149 0 157.546-4.39 5.641-12.697 6.251-17.856 1.304l-5.818-5.579c-4.4-4.219-4.998-11.095-1.285-15.931 26.536-34.564 26.534-82.572 0-117.134-3.713-4.836-3.115-11.711 1.285-15.931l5.818-5.579c5.159-4.947 13.466-4.337 17.856 1.304z"], [1, "glyphicon", "glyphicon-list-alt"], [1, "glyphicon", "glyphicon-duplicate"], [3, "routerLink", "click"], [1, "glyphicon", "glyphicon-education"], [1, "glyphicon", "glyphicon-eye-open"], ["version", "1.1", "id", "Layer_1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "x", "0px", "y", "0px", "viewBox", "0 0 30 30", 0, "xml", "space", "preserve", 1, "svg-inline--fa", "fa-Rain"], ["fill", "currentColor", "d", "M4.64,16.91c0-1.15,0.36-2.17,1.08-3.07c0.72-0.9,1.63-1.47,2.73-1.73c0.31-1.36,1.02-2.48,2.11-3.36s2.34-1.31,3.75-1.31\n\tc1.38,0,2.6,0.43,3.68,1.28c1.08,0.85,1.78,1.95,2.1,3.29h0.32c0.89,0,1.72,0.22,2.48,0.65s1.37,1.03,1.81,1.78\n\tc0.44,0.75,0.67,1.58,0.67,2.47c0,0.88-0.21,1.69-0.63,2.44c-0.42,0.75-1,1.35-1.73,1.8c-0.73,0.45-1.53,0.69-2.4,0.71\n\tc-0.13,0-0.2-0.06-0.2-0.17v-1.33c0-0.12,0.07-0.18,0.2-0.18c0.85-0.04,1.58-0.38,2.18-1.02s0.9-1.39,0.9-2.26s-0.33-1.62-0.98-2.26\n\ts-1.42-0.96-2.31-0.96h-1.61c-0.12,0-0.18-0.06-0.18-0.17l-0.08-0.58c-0.11-1.08-0.58-1.99-1.39-2.71\n\tc-0.82-0.73-1.76-1.09-2.85-1.09c-1.09,0-2.05,0.36-2.85,1.09c-0.81,0.73-1.26,1.63-1.36,2.71l-0.07,0.53c0,0.12-0.07,0.19-0.2,0.19\n\tl-0.53,0.03c-0.83,0.1-1.53,0.46-2.1,1.07s-0.85,1.33-0.85,2.16c0,0.87,0.3,1.62,0.9,2.26s1.33,0.98,2.18,1.02\n\tc0.11,0,0.17,0.06,0.17,0.18v1.33c0,0.11-0.06,0.17-0.17,0.17c-1.34-0.06-2.47-0.57-3.4-1.53S4.64,18.24,4.64,16.91z M9.99,23.6\n\tc0-0.04,0.01-0.11,0.04-0.2l1.63-5.77c0.06-0.19,0.17-0.34,0.32-0.44c0.15-0.1,0.31-0.15,0.46-0.15c0.07,0,0.15,0.01,0.24,0.03\n\tc0.24,0.04,0.42,0.17,0.54,0.37c0.12,0.2,0.15,0.42,0.08,0.67l-1.63,5.73c-0.12,0.43-0.4,0.64-0.82,0.64\n\tc-0.04,0-0.07-0.01-0.11-0.02c-0.06-0.02-0.09-0.03-0.1-0.03c-0.22-0.06-0.38-0.17-0.49-0.33C10.04,23.93,9.99,23.77,9.99,23.6z\n\t M12.61,26.41l2.44-8.77c0.04-0.19,0.14-0.34,0.3-0.44c0.16-0.1,0.32-0.15,0.49-0.15c0.09,0,0.18,0.01,0.27,0.03\n\tc0.22,0.06,0.38,0.19,0.49,0.39c0.11,0.2,0.13,0.41,0.07,0.64l-2.43,8.78c-0.04,0.17-0.13,0.31-0.29,0.43\n\tc-0.16,0.12-0.32,0.18-0.51,0.18c-0.09,0-0.18-0.02-0.25-0.05c-0.2-0.05-0.37-0.18-0.52-0.39C12.56,26.88,12.54,26.67,12.61,26.41z\n\t M16.74,23.62c0-0.04,0.01-0.11,0.04-0.23l1.63-5.77c0.06-0.19,0.16-0.34,0.3-0.44c0.15-0.1,0.3-0.15,0.46-0.15\n\tc0.08,0,0.17,0.01,0.26,0.03c0.21,0.06,0.36,0.16,0.46,0.31c0.1,0.15,0.15,0.31,0.15,0.47c0,0.03-0.01,0.08-0.02,0.14\n\ts-0.02,0.1-0.02,0.12l-1.63,5.73c-0.04,0.19-0.13,0.35-0.28,0.46s-0.32,0.17-0.51,0.17l-0.24-0.05c-0.2-0.06-0.35-0.16-0.46-0.32\n\tC16.79,23.94,16.74,23.78,16.74,23.62z"], ["version", "1.1", "id", "Layer_1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "x", "0px", "y", "0px", "viewBox", "0 0 30 30", 0, "xml", "space", "preserve", 1, "svg-inline--fa", "fa-Wind"], ["fill", "currentColor", "d", "M3.1,16.97c0,0.24,0.09,0.45,0.28,0.62c0.16,0.19,0.37,0.28,0.63,0.28H18.7c0.29,0,0.53,0.1,0.73,0.3\n\tc0.2,0.2,0.3,0.45,0.3,0.74c0,0.29-0.1,0.53-0.3,0.72c-0.2,0.19-0.44,0.29-0.74,0.29c-0.29,0-0.54-0.1-0.73-0.29\n\tc-0.16-0.18-0.36-0.26-0.6-0.26c-0.25,0-0.46,0.09-0.64,0.26s-0.27,0.38-0.27,0.61c0,0.25,0.09,0.46,0.28,0.63\n\tc0.56,0.55,1.22,0.83,1.96,0.83c0.78,0,1.45-0.27,2.01-0.81c0.56-0.54,0.83-1.19,0.83-1.97s-0.28-1.44-0.84-2\n\tc-0.56-0.56-1.23-0.84-2-0.84H4.01c-0.25,0-0.46,0.09-0.64,0.26C3.19,16.51,3.1,16.72,3.1,16.97z M3.1,13.69\n\tc0,0.23,0.09,0.43,0.28,0.61c0.17,0.18,0.38,0.26,0.63,0.26h20.04c0.78,0,1.45-0.27,2.01-0.82c0.56-0.54,0.84-1.2,0.84-1.97\n\tc0-0.77-0.28-1.44-0.84-1.99s-1.23-0.83-2.01-0.83c-0.77,0-1.42,0.27-1.95,0.8c-0.18,0.16-0.27,0.38-0.27,0.67\n\tc0,0.26,0.09,0.47,0.26,0.63c0.17,0.16,0.38,0.24,0.63,0.24c0.24,0,0.45-0.08,0.63-0.24c0.19-0.21,0.42-0.31,0.7-0.31\n\tc0.29,0,0.53,0.1,0.73,0.3c0.2,0.2,0.3,0.44,0.3,0.73c0,0.29-0.1,0.53-0.3,0.72c-0.2,0.19-0.44,0.29-0.73,0.29H4.01\n\tc-0.25,0-0.46,0.09-0.64,0.26C3.19,13.23,3.1,13.44,3.1,13.69z"], [1, "glyphicon", "glyphicon-fire"], [1, "glyphicon", "glyphicon-time"]], template: function NavMenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Toggle navigation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ul", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "svg", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "path", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Dashboard ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "svg", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "path", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Unscheduled Claims ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Unassigned Claims ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Assigned Claims ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavMenuComponent_Template_a_click_31_listener() { return ctx.expandMenuItem(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Knowledge Base ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Hot Topics ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "svg", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "path", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Rain ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "svg", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "path", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Wind ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Fire ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Time Clock ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](26, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](27, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](28, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](29, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](30, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](31, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](32, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](33, _c4));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](34, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](35, _c5));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("glyphicon ", ctx.linkRightArrowShow, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.linksSubMenuKB);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](36, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](37, _c6));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](38, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](39, _c7));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](40, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](41, _c8));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](42, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](43, _c9));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](44, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](45, _c10));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: ["li[_ngcontent-%COMP%]   .glyphicon[_ngcontent-%COMP%] {\r\n    margin-right: 10px;\r\n}\r\n\r\n\r\n\r\nli.link-active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], li.link-active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, li.link-active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus {\r\n  \r\n  background: linear-gradient(to right, #539e45 0%, #33383e 2%, #33383e 84%, #33383e 100%);\r\n  opacity: 75;\r\n  color: white;\r\n  border-left: 1px #539e45 solid;\r\n  border-radius: 0 !important;\r\n  margin: 0 0 0 -5px !important;\r\n  font-family: Open sans-serif, sans-serif;\r\n}\r\n\r\nli[_ngcontent-%COMP%] {\r\n    width: 99% !important\r\n}\r\n\r\nli[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\r\n    width: 15.75px;\r\n    height: 12.25px;\r\n}\r\n\r\n\r\n\r\n.main-nav[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    top: 55px;\r\n    left: 0;\r\n    right: 0;\r\n    z-index: 1;\r\n}\r\n\r\n.navbar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    top: 10px;\r\n}\r\n\r\n.nav-link[_ngcontent-%COMP%] {\r\n    padding: 0 .5rem 0 .5rem;\r\n}\r\n\r\n.navbar[_ngcontent-%COMP%] {\r\n    max-width: 300px;\r\n    z-index: 5;\r\n}\r\n\r\n@media (max-width: 800px)\r\n{\r\n    .navbar[_ngcontent-%COMP%] {\r\n        max-width: 767.5px;\r\n    }\r\n}\r\n\r\n@media (min-width: 768px) {\r\n    \r\n    .main-nav[_ngcontent-%COMP%] {\r\n        height: 100%;\r\n        width: calc(25% - 20px);\r\n    }\r\n    .navbar[_ngcontent-%COMP%] {\r\n        border-radius: 0px;\r\n        border-width: 0px;\r\n        height: 100%;\r\n    }\r\n    .navbar-header[_ngcontent-%COMP%] {\r\n        float: none;\r\n    }\r\n    .navbar-collapse[_ngcontent-%COMP%] {\r\n        border-top: 1px solid #444;\r\n        padding: 0px;\r\n    }\r\n    .navbar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n        float: none;\r\n    }\r\n    .navbar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n        float: none;\r\n        font-size: 15px;\r\n        margin: 6px;\r\n    }\r\n    .navbar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n        padding: 10px 16px;\r\n        border-radius: 4px;\r\n    }\r\n    .navbar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n        \r\n        width: 100%;\r\n        white-space: nowrap;\r\n        overflow: hidden;\r\n        text-overflow: ellipsis;\r\n    }\r\n}\r\n\r\n.show[_ngcontent-%COMP%] {\r\n  display: inline-block !important;\r\n}\r\n\r\n.sublistKB[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n  width: 99% !important;\r\n  background-color: transparent;\r\n}\r\n\r\n.sublistKB[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], .sublistKB[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  width: 26.75px;\r\n  height: 25.67px;\r\n  margin: 0 6px 0 0;\r\n}\r\n\r\n\r\n\r\n.sublistKB[_ngcontent-%COMP%]   li.link-active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:active {\r\n    color: #ffffff !important;\r\n    outline: none !important;\r\n    text-decoration: none !important;\r\n    background-color: transparent;\r\n  }\r\n\r\n.sublistKB[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:visited, .sublistKB[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    color: #9d9d9d !important;\r\n    outline: none !important;\r\n    text-decoration: none !important;\r\n    background-color: transparent;\r\n  }\r\n\r\n.sublistKB[_ngcontent-%COMP%] {\r\n  display: none;\r\n}\r\n\r\n.sublistKB[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .sublistKB[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus {\r\n    \r\n    background: linear-gradient(to right, #539e45 0%, #33383e 2%, #33383e 84%, #33383e 100%) !important;\r\n    opacity: 75 !important;\r\n    color: white !important;\r\n    border-left: 1px #539e45 solid !important;\r\n    border-radius: 0 !important;\r\n    margin: 0 0 0 -5px !important;\r\n    font-family: Open sans-serif, sans-serif !important;\r\n    outline: none;\r\n    text-decoration: none;\r\n  }\r\n\r\n.fa-Wind[_ngcontent-%COMP%], .fa-Rain[_ngcontent-%COMP%] {\r\n  fill: #9d9d9d;\r\n  margin: 0 6px 0 0;\r\n}\r\n\r\n.fa-Wind[_ngcontent-%COMP%]:hover, .fa-Rain[_ngcontent-%COMP%]:hover {\r\n  fill: #ffffff;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvY3NzL25hdm1lbnUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQSwwQ0FBMEM7O0FBQzFDOzs7RUFHRSw2QkFBNkI7RUFDN0Isd0ZBQXdGO0VBQ3hGLFdBQVc7RUFDWCxZQUFZO0VBQ1osOEJBQThCO0VBQzlCLDJCQUEyQjtFQUMzQiw2QkFBNkI7RUFDN0Isd0NBQXdDO0FBQzFDOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0FBQ25COztBQUVBLHlFQUF5RTs7QUFDekU7SUFDSSxlQUFlO0lBQ2YsU0FBUztJQUNULE9BQU87SUFDUCxRQUFRO0lBQ1IsVUFBVTtBQUNkOztBQUVBO0lBQ0ksU0FBUztBQUNiOztBQUVBO0lBQ0ksd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFVBQVU7QUFDZDs7QUFFQTs7SUFFSTtRQUNJLGtCQUFrQjtJQUN0QjtBQUNKOztBQUVBO0lBQ0ksaUVBQWlFO0lBQ2pFO1FBQ0ksWUFBWTtRQUNaLHVCQUF1QjtJQUMzQjtJQUNBO1FBQ0ksa0JBQWtCO1FBQ2xCLGlCQUFpQjtRQUNqQixZQUFZO0lBQ2hCO0lBQ0E7UUFDSSxXQUFXO0lBQ2Y7SUFDQTtRQUNJLDBCQUEwQjtRQUMxQixZQUFZO0lBQ2hCO0lBQ0E7UUFDSSxXQUFXO0lBQ2Y7SUFDQTtRQUNJLFdBQVc7UUFDWCxlQUFlO1FBQ2YsV0FBVztJQUNmO0lBQ0E7UUFDSSxrQkFBa0I7UUFDbEIsa0JBQWtCO0lBQ3RCO0lBQ0E7UUFDSSxtREFBbUQ7UUFDbkQsV0FBVztRQUNYLG1CQUFtQjtRQUNuQixnQkFBZ0I7UUFDaEIsdUJBQXVCO0lBQzNCO0FBQ0o7O0FBRUE7RUFDRSxnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsY0FBYztFQUNkLGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7O0FBRUU7O0lBRUU7O0FBRUY7SUFDRSx5QkFBeUI7SUFDekIsd0JBQXdCO0lBQ3hCLGdDQUFnQztJQUNoQyw2QkFBNkI7RUFDL0I7O0FBRUE7SUFDRSx5QkFBeUI7SUFDekIsd0JBQXdCO0lBQ3hCLGdDQUFnQztJQUNoQyw2QkFBNkI7RUFDL0I7O0FBRUY7RUFDRSxhQUFhO0FBQ2Y7O0FBRUU7SUFDRSw2QkFBNkI7SUFDN0IsbUdBQW1HO0lBQ25HLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIseUNBQXlDO0lBQ3pDLDJCQUEyQjtJQUMzQiw2QkFBNkI7SUFDN0IsbURBQW1EO0lBQ25ELGFBQWE7SUFDYixxQkFBcUI7RUFDdkI7O0FBRUY7RUFDRSxhQUFhO0VBQ2IsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtBQUNmIiwiZmlsZSI6InNyYy9hc3NldHMvY3NzL25hdm1lbnUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImxpIC5nbHlwaGljb24ge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG4vKiBIaWdobGlnaHRpbmcgcnVsZXMgZm9yIG5hdiBtZW51IGl0ZW1zICovXHJcbmxpLmxpbmstYWN0aXZlIGEsXHJcbmxpLmxpbmstYWN0aXZlIGE6aG92ZXIsXHJcbmxpLmxpbmstYWN0aXZlIGE6Zm9jdXMge1xyXG4gIC8qYmFja2dyb3VuZC1jb2xvcjogIzQxODlDNzsqL1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzUzOWU0NSAwJSwgIzMzMzgzZSAyJSwgIzMzMzgzZSA4NCUsICMzMzM4M2UgMTAwJSk7XHJcbiAgb3BhY2l0eTogNzU7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlci1sZWZ0OiAxcHggIzUzOWU0NSBzb2xpZDtcclxuICBib3JkZXItcmFkaXVzOiAwICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luOiAwIDAgMCAtNXB4ICFpbXBvcnRhbnQ7XHJcbiAgZm9udC1mYW1pbHk6IE9wZW4gc2Fucy1zZXJpZiwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxubGkge1xyXG4gICAgd2lkdGg6IDk5JSAhaW1wb3J0YW50XHJcbn1cclxuXHJcbmxpIHN2ZyB7XHJcbiAgICB3aWR0aDogMTUuNzVweDtcclxuICAgIGhlaWdodDogMTIuMjVweDtcclxufVxyXG5cclxuLyogS2VlcCB0aGUgbmF2IG1lbnUgaW5kZXBlbmRlbnQgb2Ygc2Nyb2xsaW5nIGFuZCBvbiB0b3Agb2Ygb3RoZXIgaXRlbXMgKi9cclxuLm1haW4tbmF2IHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogNTVweDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIHotaW5kZXg6IDE7XHJcbn1cclxuXHJcbi5uYXZiYXIgdWwgbGkge1xyXG4gICAgdG9wOiAxMHB4O1xyXG59XHJcblxyXG4ubmF2LWxpbmsge1xyXG4gICAgcGFkZGluZzogMCAuNXJlbSAwIC41cmVtO1xyXG59XHJcblxyXG4ubmF2YmFyIHtcclxuICAgIG1heC13aWR0aDogMzAwcHg7XHJcbiAgICB6LWluZGV4OiA1O1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogODAwcHgpXHJcbntcclxuICAgIC5uYXZiYXIge1xyXG4gICAgICAgIG1heC13aWR0aDogNzY3LjVweDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICAvKiBPbiBzbWFsbCBzY3JlZW5zLCBjb252ZXJ0IHRoZSBuYXYgbWVudSB0byBhIHZlcnRpY2FsIHNpZGViYXIgKi9cclxuICAgIC5tYWluLW5hdiB7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIHdpZHRoOiBjYWxjKDI1JSAtIDIwcHgpO1xyXG4gICAgfVxyXG4gICAgLm5hdmJhciB7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG4gICAgICAgIGJvcmRlci13aWR0aDogMHB4O1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgIH1cclxuICAgIC5uYXZiYXItaGVhZGVyIHtcclxuICAgICAgICBmbG9hdDogbm9uZTtcclxuICAgIH1cclxuICAgIC5uYXZiYXItY29sbGFwc2Uge1xyXG4gICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjNDQ0O1xyXG4gICAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgIH1cclxuICAgIC5uYXZiYXIgdWwge1xyXG4gICAgICAgIGZsb2F0OiBub25lO1xyXG4gICAgfVxyXG4gICAgLm5hdmJhciBsaSB7XHJcbiAgICAgICAgZmxvYXQ6IG5vbmU7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgIG1hcmdpbjogNnB4O1xyXG4gICAgfVxyXG4gICAgLm5hdmJhciBsaSBhIHtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4IDE2cHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgfVxyXG4gICAgLm5hdmJhciBhIHtcclxuICAgICAgICAvKiBJZiBhIG1lbnUgaXRlbSdzIHRleHQgaXMgdG9vIGxvbmcsIHRydW5jYXRlIGl0ICovXHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgfVxyXG59XHJcblxyXG4uc2hvdyB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5zdWJsaXN0S0IgbGkge1xyXG4gIHdpZHRoOiA5OSUgIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLnN1Ymxpc3RLQiBsaSBzdmcsIC5zdWJsaXN0S0IgbGkgYSBpbWcge1xyXG4gIHdpZHRoOiAyNi43NXB4O1xyXG4gIGhlaWdodDogMjUuNjdweDtcclxuICBtYXJnaW46IDAgNnB4IDAgMDtcclxufVxyXG5cclxuICAvKi5zdWJsaXN0S0IgbGkgc3ZnOmhvdmVye1xyXG4gICAgZmlsbDogI2ZmZmZmZjtcclxuICB9Ki9cclxuXHJcbiAgLnN1Ymxpc3RLQiBsaS5saW5rLWFjdGl2ZSBhOmFjdGl2ZSB7XHJcbiAgICBjb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xyXG4gICAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICB9XHJcblxyXG4gIC5zdWJsaXN0S0IgbGkgYTp2aXNpdGVkLCAuc3VibGlzdEtCIGxpIGEge1xyXG4gICAgY29sb3I6ICM5ZDlkOWQgIWltcG9ydGFudDtcclxuICAgIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgfVxyXG5cclxuLnN1Ymxpc3RLQiB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuICAuc3VibGlzdEtCIGxpIGE6aG92ZXIsIC5zdWJsaXN0S0IgbGkgYTpmb2N1cyB7XHJcbiAgICAvKmJhY2tncm91bmQtY29sb3I6ICM0MTg5Qzc7Ki9cclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzUzOWU0NSAwJSwgIzMzMzgzZSAyJSwgIzMzMzgzZSA4NCUsICMzMzM4M2UgMTAwJSkgIWltcG9ydGFudDtcclxuICAgIG9wYWNpdHk6IDc1ICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1sZWZ0OiAxcHggIzUzOWU0NSBzb2xpZCAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luOiAwIDAgMCAtNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LWZhbWlseTogT3BlbiBzYW5zLXNlcmlmLCBzYW5zLXNlcmlmICFpbXBvcnRhbnQ7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIH1cclxuXHJcbi5mYS1XaW5kLCAuZmEtUmFpbiB7XHJcbiAgZmlsbDogIzlkOWQ5ZDtcclxuICBtYXJnaW46IDAgNnB4IDAgMDtcclxufVxyXG5cclxuLmZhLVdpbmQ6aG92ZXIsIC5mYS1SYWluOmhvdmVyIHtcclxuICBmaWxsOiAjZmZmZmZmO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavMenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nav-menu',
                templateUrl: './navmenu.component.html',
                styleUrls: ['../../../assets/css/navmenu.component.css'],
                providers: [_services_navigation_Nav_Parameter_service__WEBPACK_IMPORTED_MODULE_1__["NavParameterService"]]
            }]
    }], function () { return [{ type: _services_navigation_Nav_Parameter_service__WEBPACK_IMPORTED_MODULE_1__["NavParameterService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/time/time.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/time/time.component.ts ***!
  \***************************************************/
/*! exports provided: TimeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeComponent", function() { return TimeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class TimeComponent {
}
TimeComponent.ɵfac = function TimeComponent_Factory(t) { return new (t || TimeComponent)(); };
TimeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TimeComponent, selectors: [["Time-Clock"]], decls: 4, vars: 0, consts: [[1, "baseLineBodyHeader"], [1, "baseLineBodyHeaderNav"], [1, "baseLineHeaderName"]], template: function TimeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "figure", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Time Clock");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".baseLineBodyHeader[_ngcontent-%COMP%] {\r\n    overflow-y: auto;\r\n    outline: none;\r\n    \r\n    width: 90vw;\r\n    left: 18.3%;\r\n    top: -14px;\r\n    position: relative;\r\n    margin-left: -27.5vw;\r\n    margin-right: -38.5vw;\r\n    min-height: 10vw;\r\n    max-width: 89vw;\r\n}\r\n.baseLineBodyHeader[_ngcontent-%COMP%]   .baseLineBodyHeaderNav[_ngcontent-%COMP%]   .baseLineHeaderName[_ngcontent-%COMP%] {\r\n    font-size: 1.5rem;\r\n    font-family: Open sans-serif, sans-serif;\r\n    color: #fff;\r\n    padding: 10px 10px 10px 20px;\r\n    background-color: #539e45;\r\n    width: 100%;\r\n    margin: 0;\r\n    position: relative;\r\n}\r\n.baseLineBodyHeader[_ngcontent-%COMP%]   .baseLineBodyHeaderNav[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: 150px;\r\n    \r\n    margin-bottom: 10px;\r\n    display: inline-block;\r\n    outline: none;\r\n    top: 0;\r\n    position: sticky;\r\n    position: -webkit-sticky;\r\n    z-index: -50;\r\n}\r\n@media (max-width: 800px)\r\n{\r\n    .baseLineBodyHeader[_ngcontent-%COMP%] {\r\n        width: 100vw;\r\n        left: 37.9%;\r\n        top: -84px;\r\n        height: 100vw;\r\n        min-height: 10vw;\r\n        overflow-y: auto;\r\n    }\r\n}\r\n@media (max-width: 1268px) {\r\n    .baseLineBodyHeader[_ngcontent-%COMP%]   .baseLineBodyHeaderNav[_ngcontent-%COMP%]   .baseLineHeaderName[_ngcontent-%COMP%] {\r\n        padding: 10px 10px 10px 190px;\r\n    }\r\n}\r\n@media (max-width: 1298px) {\r\n    .baseLineBodyHeader[_ngcontent-%COMP%]   .baseLineBodyHeaderNav[_ngcontent-%COMP%]   .baseLineHeaderName[_ngcontent-%COMP%] {\r\n        padding: 10px 10px 10px 190px;\r\n    }\r\n}\r\n@media (max-width: 1300px) {\r\n    .baseLineBodyHeader[_ngcontent-%COMP%]   .baseLineBodyHeaderNav[_ngcontent-%COMP%]   .baseLineHeaderName[_ngcontent-%COMP%] {\r\n        padding: 10px 10px 10px 190px;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvY3NzL2dsb2JhbE5lZWRzL2dsb2JhbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0VBSUU7QUFDRjtJQUNJLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsMEJBQTBCO0lBQzFCLFdBQVc7SUFDWCxXQUFXO0lBQ1gsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIscUJBQXFCO0lBQ3JCLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25CO0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsd0NBQXdDO0lBQ3hDLFdBQVc7SUFDWCw0QkFBNEI7SUFDNUIseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCxTQUFTO0lBQ1Qsa0JBQWtCO0FBQ3RCO0FBRUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLDBCQUEwQjtJQUMxQixtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLGFBQWE7SUFDYixNQUFNO0lBQ04sZ0JBQWdCO0lBQ2hCLHdCQUF3QjtJQUN4QixZQUFZO0FBQ2hCO0FBRUE7O0lBRUk7UUFDSSxZQUFZO1FBQ1osV0FBVztRQUNYLFVBQVU7UUFDVixhQUFhO1FBQ2IsZ0JBQWdCO1FBQ2hCLGdCQUFnQjtJQUNwQjtBQUNKO0FBRUE7SUFDSTtRQUNJLDZCQUE2QjtJQUNqQztBQUNKO0FBRUE7SUFDSTtRQUNJLDZCQUE2QjtJQUNqQztBQUNKO0FBRUE7SUFDSTtRQUNJLDZCQUE2QjtJQUNqQztBQUNKO0FBRUE7Ozs7RUFJRSIsImZpbGUiOiJzcmMvYXNzZXRzL2Nzcy9nbG9iYWxOZWVkcy9nbG9iYWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qLmJvZHktY29udGVudCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmVlbjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmQ4MDA7XHJcbn0qL1xyXG4uYmFzZUxpbmVCb2R5SGVhZGVyIHtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgLypib3JkZXI6IDFweCBzb2xpZCAjMDAwOyovXHJcbiAgICB3aWR0aDogOTB2dztcclxuICAgIGxlZnQ6IDE4LjMlO1xyXG4gICAgdG9wOiAtMTRweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMjcuNXZ3O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAtMzguNXZ3O1xyXG4gICAgbWluLWhlaWdodDogMTB2dztcclxuICAgIG1heC13aWR0aDogODl2dztcclxufVxyXG5cclxuLmJhc2VMaW5lQm9keUhlYWRlciAuYmFzZUxpbmVCb2R5SGVhZGVyTmF2IC5iYXNlTGluZUhlYWRlck5hbWUge1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICBmb250LWZhbWlseTogT3BlbiBzYW5zLXNlcmlmLCBzYW5zLXNlcmlmO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDEwcHggMTBweCAyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzUzOWU0NTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uYmFzZUxpbmVCb2R5SGVhZGVyIC5iYXNlTGluZUJvZHlIZWFkZXJOYXYge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgLypib3JkZXI6IDFweCBzb2xpZCAjMDAwOyovXHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIHRvcDogMDtcclxuICAgIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgICBwb3NpdGlvbjogLXdlYmtpdC1zdGlja3k7XHJcbiAgICB6LWluZGV4OiAtNTA7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA4MDBweClcclxue1xyXG4gICAgLmJhc2VMaW5lQm9keUhlYWRlciB7XHJcbiAgICAgICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgICAgIGxlZnQ6IDM3LjklO1xyXG4gICAgICAgIHRvcDogLTg0cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDB2dztcclxuICAgICAgICBtaW4taGVpZ2h0OiAxMHZ3O1xyXG4gICAgICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxMjY4cHgpIHtcclxuICAgIC5iYXNlTGluZUJvZHlIZWFkZXIgLmJhc2VMaW5lQm9keUhlYWRlck5hdiAuYmFzZUxpbmVIZWFkZXJOYW1lIHtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4IDEwcHggMTBweCAxOTBweDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDEyOThweCkge1xyXG4gICAgLmJhc2VMaW5lQm9keUhlYWRlciAuYmFzZUxpbmVCb2R5SGVhZGVyTmF2IC5iYXNlTGluZUhlYWRlck5hbWUge1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMTBweCAxMHB4IDE5MHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogMTMwMHB4KSB7XHJcbiAgICAuYmFzZUxpbmVCb2R5SGVhZGVyIC5iYXNlTGluZUJvZHlIZWFkZXJOYXYgLmJhc2VMaW5lSGVhZGVyTmFtZSB7XHJcbiAgICAgICAgcGFkZGluZzogMTBweCAxMHB4IDEwcHggMTkwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICAuYmFzZUxpbmVCb2R5SGVhZGVyIHtcclxuICAgICAgICBcclxuICAgIH1cclxufSovIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TimeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'Time-Clock',
                templateUrl: './time.component.html',
                styleUrls: ['../../../assets/css/globalNeeds/global.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/services/header/header-parameter.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/services/header/header-parameter.service.ts ***!
  \*************************************************************/
/*! exports provided: HeaderParameterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderParameterService", function() { return HeaderParameterService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class HeaderParameterService {
    constructor() {
        this.showlogout = false;
    }
}
HeaderParameterService.ɵfac = function HeaderParameterService_Factory(t) { return new (t || HeaderParameterService)(); };
HeaderParameterService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: HeaderParameterService, factory: HeaderParameterService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderParameterService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/services/navigation/Nav-Parameter.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/services/navigation/Nav-Parameter.service.ts ***!
  \**************************************************************/
/*! exports provided: NavParameterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavParameterService", function() { return NavParameterService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class NavParameterService {
    constructor() {
        this.showKBItems = false;
        this.submenuKB = false;
    }
}
NavParameterService.ɵfac = function NavParameterService_Factory(t) { return new (t || NavParameterService)(); };
NavParameterService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NavParameterService, factory: NavParameterService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavParameterService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return []; }, null); })();


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
const environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Walker C\source\repos\ApplicationsInDevelopment\Personal Works\LNCDPE\LNCDPE\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map