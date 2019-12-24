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

/***/ "./node_modules/raw-loader/index.js!./src/app/add-country/add-country.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/add-country/add-country.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='card'>\n  <div class='card-header text-white bg-primary'>\n    Add Country\n  </div>\n  <div class='card-body'>\n    <form novalidate (ngSubmit)=\"save()\" [formGroup]=\"countryForm\">\n      <div class=\"form-group col-md-12 pt-1\">\n        <label for=\"country_code\">Country Code</label>\n        <!-- <input type=\"text\" id=\"country_code\" name=\"country_code\" class=\"form-control\" placeholder=\"Country Code\"\n          formControlName=\"countryCode\" [ngClass]=\"{'is-invalid': (countryForm.get('countryCode').touched ||\n          countryForm.get('countryCode').dirty) &&\n          !countryForm.get('countryCode').valid }\" /> -->\n          <input type=\"text\" id=\"country_code\" name=\"country_code\" class=\"form-control\" placeholder=\"Country Code\"\n          formControlName=\"countryCode\" [ngClass]=\"{'is-invalid': (countryForm.get('countryCode').touched ||\n          countryForm.get('countryCode').dirty) &&\n          !countryForm.get('countryCode').valid }\" />\n        <!-- <input type=\"text\" id=\"country_code\" name=\"country_code\" class=\"form-control\" placeholder=\"Country Code\"\n          formControlName=\"countryCode\" [ngClass]=\"{'is-invalid': codeMessage}\" /> -->\n        <!-- <span class=\"invalid-feedback\">\n          {{ codeMessage}}\n        </span> -->\n        <span class=\"invalid-feedback\">\n          <span *ngIf=\"countryForm.get('countryCode').errors?.required\">\n            Please enter country code.\n          </span>\n        </span>\n        <span class=\"invalid-feedback\">\n          <span *ngIf=\"countryForm.get('countryCode').errors?.record_exist\">\n            Record provided already exist.\n          </span>\n        </span>\n\n      </div>\n      <div class=\"form-group col-md-12\">\n        <label for=\"country_name\">Country Name</label>\n        <input type=\"text\" required class=\"form-control\" id=\"country_name\" name=\"country_name\"\n          placeholder=\"Country Name\" formControlName=\"countryName\" [ngClass]=\"{'is-invalid': (countryForm.get('countryName').touched ||\n          countryForm.get('countryName').dirty) &&\n          !countryForm.get('countryName').valid }\" />\n        <span class=\"invalid-feedback\">\n          <span *ngIf=\"countryForm.get('countryName').errors?.required\">\n            Please enter country name.\n          </span>\n        </span>\n      </div>\n      <div class=\"form-group col-md-12\">\n        <label for=\"country_region\">Region</label>\n        <select name=\"region\" class=\"form-control\" formControlName=\"countryRegion\">\n          <option value=\"Africa\">Africa</option>\n          <option value=\"Americas\">Americas</option>\n          <option value=\"Asia\">Asia</option>\n          <option value=\"Europe\">Europe</option>\n          <option value=\"Oceania\">Oceania</option>\n        </select>\n      </div>\n      <div class=\"row justify-content-md-center py-2\">\n        <div class=\"col-md-auto\">\n          <button type=\"submit\" class=\"btn btn-primary mr-1\"\n            [title]=\"countryForm.valid ? 'Save your entered data' : 'Disabled until the form data is valid'\"\n            [disabled]=\"!countryForm.valid\">\n            Save\n          </button>\n          <button type=\"button\" class=\"btn btn-secondary mr-1\" (click)=\"goBack();\">Cancel</button>\n          <button type=\"button\" class=\"btn btn-primary mr-1\" (click)=\"populateTestData()\">\n            Test Data\n          </button>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>\n<br>Dirty: {{ countryForm.dirty }}\n<br>Touched: {{ countryForm.touched }}\n<br>Valid: {{ countryForm.get('countryCode').valid }}\n<br>Value: {{ countryForm.value | json }}"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngx-spinner bdOpacity=0.9 bdColor=\"#91b0dd\" size=\"large\" color=\"#ffffff\" type=\"ball-clip-rotate-multiple\"\n  [fullScreen]=\"true\">\n  <p style=\"color: white\"> Loading... </p>\n</ngx-spinner>\n<nav class='navbar navbar-expand navbar-light bg-light'>\n    <a class='navbar-brand'>{{title}}</a>\n    <ul class='nav nav-pills'>\n      <li><a class='nav-link' routerLinkActive='active' [routerLink]=\"['/country']\">Home</a></li>\n      <li><a class='nav-link' routerLinkActive='active' [routerLink]=\"['/add-country']\">Add Country</a></li>\n    </ul>\n</nav>\n<div class='container'>\n  <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/country-detail/country-detail.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/country-detail/country-detail.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='card'>\n    <div class='card-header text-white bg-primary'>\n        Edit Country\n    </div>\n    <div class='card-body'>\n        <div class=\"row\">\n            <div class=\"col-12 col-md-8\">\n                <h2 *ngIf=\"country\">\n                    Country Details\n                </h2>\n            </div>\n            <div class=\"col-12 col-md-4\">\n                <button type=\"submit\" class=\"btn btn-secondary float-lg-right\" (click)=\"goBack();\">Back</button>\n            </div>\n        </div>\n\n        <div class=\"col-md-12\" *ngFor=\"let country of country\">\n            <div class=\"row pt-1\" *ngIf=\"country\">\n                <div class=\"col-sm-3 col-md-3 pt-2\" *ngIf=\"country.flag\">\n                    <img src='{{country.flag}}' style=\"height:150px;width:100%;\">\n                </div>\n                <div class=\"col-md pt-2\">\n                    <table class=\"table table-responsive\">\n                        <tbody class=\"table-bordered\">\n                            <tr *ngIf=\"country.name\">\n                                <th>Country Name</th>\n                                <td><b>{{country.name}}</b></td>\n                            </tr>\n                            <tr *ngIf=\"country.altSpellings\">\n                                <th>Alt Name</th>\n                                <td><b>{{country.altSpellings}}</b></td>\n                            </tr>\n                            <tr *ngIf=\"country.capital\">\n                                <th>Country Capital</th>\n                                <td><b>{{country.capital}}</b></td>\n                            </tr>\n                            <tr *ngIf=\"country.alpha3Code\">\n                                <th>Country Code</th>\n                                <td><b>{{country.alpha3Code}}</b></td>\n                            </tr>\n                            <tr *ngIf=\"country.region\">\n                                <th>Region</th>\n                                <td><b>{{country.region}}</b></td>\n                            </tr>\n                            <tr *ngIf=\"country.population\">\n                                <th>Population</th>\n                                <td><b>{{country.population}}</b></td>\n                            </tr>\n                            <tr *ngIf=\"country.population\">\n                                <th>National Language</th>\n                                <td><b>{{country.demonym}}</b></td>\n                            </tr>\n                            <tr *ngFor=\"let currency of country.currencies\">\n                                <th>Currency</th>\n                                <td><b>{{currency.symbol}} , {{currency.code}} , {{currency.name}} </b></td>\n                            </tr>\n                            <tr *ngIf=\"country.topLevelDomain\">\n                                <th>Country Domain</th>\n                                <td><b>{{country.topLevelDomain}}</b></td>\n                            </tr>\n                        </tbody>\n                    </table>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/country/country.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/country/country.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='card'>\n  <div class='card-header text-white bg-primary'>\n    List of Countries\n  </div>\n  <div class='card-body'>\n    <div class='row'>\n      <div class='col-md-1'>Search:</div>\n      <!-- <div class='col-md'>\n        <input type='text' [(ngModel)]='listFilter' />\n      </div> -->\n      <div class=\"input-group col-md\">\n        <input type='text' [(ngModel)]='listFilter' />\n        <div class=\"input-group-append\">\n          <button class=\"btn btn-primary\" type=\"button\" #reset (click)=\"resetFields()\">Reset</button>\n        </div>\n      </div>\n\n      <div class='col-md-2 offset-md-3'>\n        <select name=\"region\" class=\"form-control\" [(ngModel)]=\"regionFilter\" (change)=\"onChange($event.target.value)\">\n          <option value=\"\" selected>All</option>\n          <option value=\"Africa\">Africa</option>\n          <option value=\"Americas\">Americas</option>\n          <option value=\"Asia\">Asia</option>\n          <option value=\"Europe\">Europe</option>\n          <option value=\"Oceania\">Oceania</option>\n        </select>\n      </div>\n    </div>\n    <div class='table-responsive pt-2'>\n      <table class=\"table\">\n        <thead class=\"table-bordered\">\n          <tr>\n            <th scope=\"col\">#</th>\n            <th scope=\"col\">Code</th>\n            <th scope=\"col\">Name</th>\n            <th scope=\"col\">Region</th>\n            <th scope=\"col\">Options</th>\n          </tr>\n        </thead>\n        <tbody class=\"table-bordered\">\n          <tr *ngFor='let country of filteredCountry' style=\"cursor: pointer;\">\n            <td routerLink=\"/country-detail/{{country.country_name}}\">{{country.id}}</td>\n            <td routerLink=\"/country-detail/{{country.country_name}}\">{{country.country_code}}</td>\n            <td routerLink=\"/country-detail/{{country.country_name}}\">{{country.country_name}}</td>\n            <td routerLink=\"/country-detail/{{country.country_name}}\">{{country.country_region}}</td>\n            <td class=\"text-center\">\n              <button class=\"btn btn-outline-primary btn-sm mr-1\" routerLink=\"/edit-country/{{country._id}}\">\n                Edit\n              </button>\n              <button class=\"btn btn-outline-danger btn-sm\" (click)=\"deleteCountry(country._id,country)\">\n                Delete\n              </button>\n              <!-- <span class=\"pr-3\" routerLink=\"/edit-country/{{country._id}}\"><i class=\"fa fa-pencil\"></i></span>\n              <span (click)=\"deleteCountry(country._id,country)\"><i class=\"fa fa-times\"></i></span> -->\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n\n    <div class=\"col-md-12 d-flex justify-content-between p-1\">\n      <ngb-pagination [collectionSize]=\"collectionSize\" [(page)]=\"page\" [pageSize]=\"pageSize\"></ngb-pagination>\n\n      <select class=\"custom-select\" style=\"width: auto\" [(ngModel)]=\"pageSize\">\n        <option [ngValue]=\"5\">5</option>\n        <option [ngValue]=\"10\">10</option>\n        <option [ngValue]=\"15\">15</option>\n        <option [ngValue]=\"20\">20</option>\n      </select>\n    </div>\n\n  </div>\n</div>\n<div *ngIf='errorMessage' class='alert alert-danger'>\n  Error: {{ errorMessage }}\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/edit-country/edit-country.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/edit-country/edit-country.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='card'>\n  <div class='card-header text-white bg-primary'>\n    Edit Country\n  </div>\n  <div class='card-body'>\n    <form novalidate (ngSubmit)=\"saveCountry()\" [formGroup]=\"countryForm\">\n      <div class=\"form-group col-md-12 pt-1\">\n        <label for=\"country_code\">Country Code</label>\n        <input type=\"text\" id=\"country_code\" name=\"country_code\" class=\"form-control\" placeholder=\"Country Code\"\n          formControlName=\"countryCode\" [ngClass]=\"{'is-invalid': (countryForm.get('countryCode').touched ||\n              countryForm.get('countryCode').dirty) &&\n              !countryForm.get('countryCode').valid }\" />\n        <!-- <input type=\"text\" id=\"country_code\" name=\"country_code\" class=\"form-control\" placeholder=\"Country Code\"\n              formControlName=\"countryCode\" [ngClass]=\"{'is-invalid': codeMessage}\" /> -->\n        <!-- <span class=\"invalid-feedback\">\n              {{ codeMessage}}\n            </span> -->\n        <span class=\"invalid-feedback\">\n          <span *ngIf=\"countryForm.get('countryCode').errors?.required\">\n            Please enter country code.\n          </span>\n        </span>\n        <!-- <span class=\"invalid-feedback\">\n              <span *ngIf=\"countryForm.get('countryCode').errors?.record_exist\">\n                Record provided already exist.\n              </span>\n            </span> -->\n\n      </div>\n      <div class=\"form-group col-md-12\">\n        <label for=\"country_name\">Country Name</label>\n        <input type=\"text\" required class=\"form-control\" id=\"country_name\" name=\"country_name\"\n          placeholder=\"Country Name\" formControlName=\"countryName\" [ngClass]=\"{'is-invalid': (countryForm.get('countryName').touched ||\n              countryForm.get('countryName').dirty) &&\n              !countryForm.get('countryName').valid }\" />\n        <span class=\"invalid-feedback\">\n          <span *ngIf=\"countryForm.get('countryName').errors?.required\">\n            Please enter country name.\n          </span>\n        </span>\n      </div>\n      <div class=\"form-group col-md-12\">\n        <label for=\"country_region\">Region</label>\n        <select name=\"region\" class=\"form-control\" formControlName=\"countryRegion\">\n          <option value=\"Africa\">Africa</option>\n          <option value=\"Americas\">Americas</option>\n          <option value=\"Asia\">Asia</option>\n          <option value=\"Europe\">Europe</option>\n          <option value=\"Oceania\">Oceania</option>\n        </select>\n      </div>\n      <div class=\"row justify-content-md-center py-2\">\n        <div class=\"col-md-auto\">\n          <button type=\"submit\" class=\"btn btn-primary mr-1\"\n            [title]=\"countryForm.valid ? 'Save your entered data' : 'Disabled until the form data is valid'\"\n            [disabled]=\"!countryForm.valid\">\n            Save\n          </button>\n          <button type=\"button\" class=\"btn btn-secondary mr-1\" (click)=\"goBack();\">Cancel</button>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/add-country/add-country.component.css":
/*!*******************************************************!*\
  !*** ./src/app/add-country/add-country.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bg-primary {\r\n    background-color: #1269c7!important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkLWNvdW50cnkvYWRkLWNvdW50cnkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1DQUFtQztBQUN2QyIsImZpbGUiOiJzcmMvYXBwL2FkZC1jb3VudHJ5L2FkZC1jb3VudHJ5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmctcHJpbWFyeSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTI2OWM3IWltcG9ydGFudDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/add-country/add-country.component.ts":
/*!******************************************************!*\
  !*** ./src/app/add-country/add-country.component.ts ***!
  \******************************************************/
/*! exports provided: AddCountryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCountryComponent", function() { return AddCountryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _countries_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../countries.service */ "./src/app/countries.service.ts");
/* harmony import */ var _async_code_not_taken_validator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../async-code-not-taken.validator */ "./src/app/async-code-not-taken.validator.ts");







/*Service*/


var AddCountryComponent = /** @class */ (function () {
    function AddCountryComponent(countriesService, spinner, route, router, location, fb, toastr) {
        this.countriesService = countriesService;
        this.spinner = spinner;
        this.route = route;
        this.router = router;
        this.location = location;
        this.fb = fb;
        this.toastr = toastr;
        this.countries = [];
        this.errorMessage = '';
    }
    AddCountryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.spinner.show();
        this.countriesService.getCountry().subscribe(function (countries) {
            _this.countries = countries;
        }, function (error) { return _this.errorMessage = error; });
        this.countryForm = this.fb.group({
            countryCode: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            countryName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            countryRegion: 'Africa'
        });
        this.countryForm.controls.countryCode.setAsyncValidators(_async_code_not_taken_validator__WEBPACK_IMPORTED_MODULE_8__["ValidateIdNotTaken"].createValidator(this.countriesService));
        setTimeout(function () {
            _this.spinner.hide();
        }, 2000);
    };
    Object.defineProperty(AddCountryComponent.prototype, "countryCode", {
        get: function () {
            return this.countryForm.get('countryCode');
        },
        enumerable: true,
        configurable: true
    });
    AddCountryComponent.prototype.save = function () {
        var countries = {
            country_code: this.countryForm.get('countryCode').value,
            country_name: this.countryForm.get('countryName').value,
            country_region: this.countryForm.get('countryRegion').value,
        };
        console.log(JSON.stringify('Save Record:' + countries));
        this.countriesService.addCountry(countries);
        this.router.navigate(['/country']);
        this.toastr.success('Record successfully added.', '', {
            positionClass: 'toast-top-center',
            closeButton: true,
            timeOut: 5000
        });
    };
    AddCountryComponent.prototype.goBack = function () {
        this.location.back();
    };
    AddCountryComponent.prototype.populateTestData = function () {
        this.countryForm.patchValue({
            countryCode: 'CHN',
            countryName: 'China'
        });
    };
    AddCountryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-country',
            template: __webpack_require__(/*! raw-loader!./add-country.component.html */ "./node_modules/raw-loader/index.js!./src/app/add-country/add-country.component.html"),
            styles: [__webpack_require__(/*! ./add-country.component.css */ "./src/app/add-country/add-country.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_countries_service__WEBPACK_IMPORTED_MODULE_7__["CountriesService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]])
    ], AddCountryComponent);
    return AddCountryComponent;
}());



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _country_country_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./country/country.component */ "./src/app/country/country.component.ts");
/* harmony import */ var _country_detail_country_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./country-detail/country-detail.component */ "./src/app/country-detail/country-detail.component.ts");
/* harmony import */ var _add_country_add_country_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-country/add-country.component */ "./src/app/add-country/add-country.component.ts");
/* harmony import */ var _edit_country_edit_country_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit-country/edit-country.component */ "./src/app/edit-country/edit-country.component.ts");
/* harmony import */ var _country_edit_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./country-edit.guard */ "./src/app/country-edit.guard.ts");








var routes = [
    { path: '', redirectTo: '/country', pathMatch: 'full' },
    { path: 'country', component: _country_country_component__WEBPACK_IMPORTED_MODULE_3__["CountryComponent"] },
    { path: 'country-detail/:name', component: _country_detail_country_detail_component__WEBPACK_IMPORTED_MODULE_4__["CountryDetailComponent"] },
    { path: 'add-country', component: _add_country_add_country_component__WEBPACK_IMPORTED_MODULE_5__["AddCountryComponent"] },
    { path: 'edit-country/:id',
        canDeactivate: [_country_edit_guard__WEBPACK_IMPORTED_MODULE_7__["CountryEditGuard"]],
        component: _edit_country_edit_country_component__WEBPACK_IMPORTED_MODULE_6__["EditCountryComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nav-link {\r\n    font-size: large;\r\n  }\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7RUFDbEIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXYtbGluayB7XHJcbiAgICBmb250LXNpemU6IGxhcmdlO1xyXG4gIH1cclxuICAiXX0= */"

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


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Country Information App';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _country_country_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./country/country.component */ "./src/app/country/country.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _country_detail_country_detail_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./country-detail/country-detail.component */ "./src/app/country-detail/country-detail.component.ts");
/* harmony import */ var _add_country_add_country_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./add-country/add-country.component */ "./src/app/add-country/add-country.component.ts");
/* harmony import */ var _edit_country_edit_country_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./edit-country/edit-country.component */ "./src/app/edit-country/edit-country.component.ts");















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
                _country_country_component__WEBPACK_IMPORTED_MODULE_10__["CountryComponent"],
                _country_detail_country_detail_component__WEBPACK_IMPORTED_MODULE_12__["CountryDetailComponent"],
                _add_country_add_country_component__WEBPACK_IMPORTED_MODULE_13__["AddCountryComponent"],
                _edit_country_edit_country_component__WEBPACK_IMPORTED_MODULE_14__["EditCountryComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_11__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
                ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrModule"].forRoot()
            ],
            providers: [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/async-code-not-taken.validator.ts":
/*!***************************************************!*\
  !*** ./src/app/async-code-not-taken.validator.ts ***!
  \***************************************************/
/*! exports provided: ValidateIdNotTaken */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidateIdNotTaken", function() { return ValidateIdNotTaken; });
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");


var ValidateIdNotTaken = /** @class */ (function () {
    function ValidateIdNotTaken() {
    }
    ValidateIdNotTaken.createValidator = function (countryService) {
        var _this = this;
        return function (control) {
            return countryService.CheckCode(control.value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["debounceTime"])(1000)).map(function (res) {
                _this.countries = res;
                _this.countries = _this.countries.filter(function (country) {
                    return (country.country_code === control.value || country.country_code.toLocaleLowerCase === control.value.toLowerCase());
                });
                console.log('Response: ' + JSON.stringify(_this.countries));
                console.log('Length: ' + JSON.stringify(_this.countries.length));
                if (_this.countries.length == 0) {
                    console.log('inside');
                    return null;
                }
                else {
                    return { record_exist: true };
                }
            });
        };
    };
    return ValidateIdNotTaken;
}());



/***/ }),

/***/ "./src/app/countries.service.ts":
/*!**************************************!*\
  !*** ./src/app/countries.service.ts ***!
  \**************************************/
/*! exports provided: CountriesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountriesService", function() { return CountriesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var CountriesService = /** @class */ (function () {
    function CountriesService(httpService) {
        this.httpService = httpService;
        this.baseUrl = 'https://country-41d6.restdb.io/rest/country-header';
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'x-apikey': '5d10446782ef885d6e621bc2',
                'Content-Type': 'application/json',
                Authorization: 'my-auth-token'
            })
        };
    }
    CountriesService.prototype.getCountry = function () {
        return this.httpService.get(this.baseUrl, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (data) { return console.log('All: ' + JSON.stringify(data)); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
        /*this.httpService.get(this.baseUrl,this.httpOptions)
        .subscribe((countries :Array<any>[]) => {
          this.countries = countries;
          this.setLength(countries.length);
        })
        ;
        */
    };
    CountriesService.prototype.getCountryById = function (id) {
        console.log(id);
        return this.httpService.get(this.baseUrl + '/' + id, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (data) { return console.log('getCountry: ' + JSON.stringify(data)); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    CountriesService.prototype.addCountry = function (countries) {
        console.log('Country: ' + JSON.stringify(countries));
        this.httpService.post(this.baseUrl, countries, this.httpOptions).subscribe(countries);
        console.log('Record successfully added.');
    };
    CountriesService.prototype.updateCountry = function (id, countries) {
        this.httpService.put(this.baseUrl + '/' + id, countries, this.httpOptions).subscribe(countries);
        this.getCountry();
        console.log('Record successfully updated.');
    };
    CountriesService.prototype.deleteCountry = function (id, countries) {
        this.httpService.delete(this.baseUrl + '/' + id, this.httpOptions).subscribe(countries);
        console.log('Record successfully deleted.');
    };
    CountriesService.prototype.CheckCode = function (id) {
        return this.httpService.get(this.baseUrl, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (data) { return console.log('Record Check Code:' + JSON.stringify(data)); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    CountriesService.prototype.handleError = function (err) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        var errorMessage = '';
        if (err.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            errorMessage = "An error occurred: " + err.error.message;
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            errorMessage = "Server returned code: " + err.status + ", error message is: " + err.message;
        }
        console.error(errorMessage + 'Error');
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(errorMessage);
    };
    CountriesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], CountriesService);
    return CountriesService;
}());



/***/ }),

/***/ "./src/app/country-detail.service.ts":
/*!*******************************************!*\
  !*** ./src/app/country-detail.service.ts ***!
  \*******************************************/
/*! exports provided: CountryDetailService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountryDetailService", function() { return CountryDetailService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var CountryDetailService = /** @class */ (function () {
    function CountryDetailService(httpService) {
        this.httpService = httpService;
        this.baseUrl = 'https://restcountries.eu/rest/v2/name/';
    }
    CountryDetailService.prototype.getCountryDetail = function (name) {
        var _this = this;
        this.httpService.get(this.baseUrl + name)
            .subscribe(function (countries) {
            _this.countries = countries;
        }, function (err) {
            if (err.error instanceof Error) {
                console.log('Client-side error occured.');
            }
            else {
                console.log('Server-side error occured.');
                _this.countries = [];
            }
        });
    };
    CountryDetailService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], CountryDetailService);
    return CountryDetailService;
}());



/***/ }),

/***/ "./src/app/country-detail/country-detail.component.css":
/*!*************************************************************!*\
  !*** ./src/app/country-detail/country-detail.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bg-primary {\r\n    background-color: #1269c7!important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY291bnRyeS1kZXRhaWwvY291bnRyeS1kZXRhaWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1DQUFtQztBQUN2QyIsImZpbGUiOiJzcmMvYXBwL2NvdW50cnktZGV0YWlsL2NvdW50cnktZGV0YWlsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmctcHJpbWFyeSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTI2OWM3IWltcG9ydGFudDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/country-detail/country-detail.component.ts":
/*!************************************************************!*\
  !*** ./src/app/country-detail/country-detail.component.ts ***!
  \************************************************************/
/*! exports provided: CountryDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountryDetailComponent", function() { return CountryDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _country_detail_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../country-detail.service */ "./src/app/country-detail.service.ts");





/*Service*/

var CountryDetailComponent = /** @class */ (function () {
    function CountryDetailComponent(acttivatedRoute, countryDetailService, spinner, location) {
        this.acttivatedRoute = acttivatedRoute;
        this.countryDetailService = countryDetailService;
        this.spinner = spinner;
        this.location = location;
    }
    CountryDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.spinner.show();
        setTimeout(function () {
            _this.getCountry();
        }, 2000);
    };
    CountryDetailComponent.prototype.getCountry = function () {
        var _this = this;
        this.acttivatedRoute.params
            .subscribe(function (param) {
            if (param) {
                _this.countryDetailService.getCountryDetail(param.name);
                _this.spinner.hide();
            }
        });
    };
    Object.defineProperty(CountryDetailComponent.prototype, "country", {
        get: function () {
            return this.countryDetailService.countries;
        },
        enumerable: true,
        configurable: true
    });
    CountryDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    CountryDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-country-detail',
            template: __webpack_require__(/*! raw-loader!./country-detail.component.html */ "./node_modules/raw-loader/index.js!./src/app/country-detail/country-detail.component.html"),
            styles: [__webpack_require__(/*! ./country-detail.component.css */ "./src/app/country-detail/country-detail.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _country_detail_service__WEBPACK_IMPORTED_MODULE_5__["CountryDetailService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]])
    ], CountryDetailComponent);
    return CountryDetailComponent;
}());



/***/ }),

/***/ "./src/app/country-edit.guard.ts":
/*!***************************************!*\
  !*** ./src/app/country-edit.guard.ts ***!
  \***************************************/
/*! exports provided: CountryEditGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountryEditGuard", function() { return CountryEditGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CountryEditGuard = /** @class */ (function () {
    function CountryEditGuard() {
    }
    CountryEditGuard.prototype.canDeactivate = function (component) {
        if (component.countryForm.dirty) {
            var countryName = component.countryForm.get('countryName').value;
            return confirm("Navigate away and lose all changes to " + countryName + " record?");
        }
        return true;
    };
    CountryEditGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], CountryEditGuard);
    return CountryEditGuard;
}());



/***/ }),

/***/ "./src/app/country/country.component.css":
/*!***********************************************!*\
  !*** ./src/app/country/country.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".img-resize {\r\n    height: 100px;\r\n}\r\n\r\nthead {\r\n    color: #337AB7;\r\n}\r\n\r\n.bg-primary {\r\n    background-color: #1269c7!important;\r\n}\r\n\r\n.btn-primary {\r\n    background-color: #1269c7!important;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY291bnRyeS9jb3VudHJ5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFHQTtJQUNJLG1DQUFtQztBQUN2Qzs7QUFFQTtJQUNJLG1DQUFtQztBQUN2QyIsImZpbGUiOiJzcmMvYXBwL2NvdW50cnkvY291bnRyeS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmltZy1yZXNpemUge1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxufVxyXG5cclxudGhlYWQge1xyXG4gICAgY29sb3I6ICMzMzdBQjc7XHJcbn1cclxuXHJcblxyXG4uYmctcHJpbWFyeSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTI2OWM3IWltcG9ydGFudDtcclxufVxyXG5cclxuLmJ0bi1wcmltYXJ5IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMjY5YzchaW1wb3J0YW50O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/country/country.component.ts":
/*!**********************************************!*\
  !*** ./src/app/country/country.component.ts ***!
  \**********************************************/
/*! exports provided: CountryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountryComponent", function() { return CountryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _countries_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../countries.service */ "./src/app/countries.service.ts");





/*Service*/

var CountryComponent = /** @class */ (function () {
    function CountryComponent(countriesService, spinner, toastr, router) {
        this.countriesService = countriesService;
        this.spinner = spinner;
        this.toastr = toastr;
        this.router = router;
        this.AllCountries = [];
        this.countries = [];
        this.errorMessage = '';
        this.page = 1;
        this.pageSize = 5;
        this._listFilter = '';
        this._regionFilter = '';
    }
    Object.defineProperty(CountryComponent.prototype, "listFilter", {
        get: function () {
            if (this._listFilter == '') {
                this.countries = this._regionFilter ? this.performFilterbyRegion(this._regionFilter) : this.countries;
            }
            return this._listFilter;
        },
        set: function (value) {
            this._listFilter = value;
            this.countries = this.AllCountries;
            this.countries = this.listFilter ? this.performFilter(this.listFilter) : this.countries;
            this.collectionSize = this.countries.length;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CountryComponent.prototype, "regionFilter", {
        get: function () {
            return this._regionFilter;
        },
        set: function (value) {
            this._regionFilter = value;
        },
        enumerable: true,
        configurable: true
    });
    CountryComponent.prototype.performFilter = function (filterBy) {
        var _this = this;
        console.log(this._regionFilter + 'Region Filter: ');
        filterBy = filterBy.toLocaleLowerCase();
        console.log(filterBy + 'Filter');
        if (this._regionFilter == '') {
            return this.countries.filter(function (country) {
                return (country.country_code.toLocaleLowerCase().indexOf(filterBy) !== -1 || country.country_name.toLocaleLowerCase().indexOf(filterBy) !== -1);
            });
        }
        else {
            return this.countries.filter(function (country) {
                return (country.country_code.toLocaleLowerCase().indexOf(filterBy) !== -1 || country.country_name.toLocaleLowerCase().indexOf(filterBy) !== -1)
                    && country.country_region == _this._regionFilter;
            });
        }
        /* Filter by Search Bar and Drop Down Filter */
    };
    CountryComponent.prototype.performFilterbyRegion = function (filterBy) {
        console.log(filterBy + 'Filter by Region');
        return this.countries.filter(function (country) { return country.country_region.indexOf(filterBy) !== -1; });
    };
    CountryComponent.prototype.onChange = function (deviceValue) {
        console.log('Inside On Change: ' + deviceValue);
        this.countries = this.AllCountries;
        this.countries = deviceValue ? this.performFilterbyRegion(deviceValue) : this.countries;
        this.collectionSize = this.countries.length;
    };
    CountryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.spinner.show();
        this.countriesService.getCountry().subscribe(function (countries) {
            _this.countries = countries;
            _this.AllCountries = countries;
            _this.collectionSize = _this.countries.length;
            _this.spinner.hide();
        }, function (error) { return _this.errorMessage = error; });
    };
    Object.defineProperty(CountryComponent.prototype, "filteredCountry", {
        get: function () {
            return this.countries
                .map(function (country, i) { return (tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ id: i + 1 }, country)); })
                .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
        },
        enumerable: true,
        configurable: true
    });
    CountryComponent.prototype.deleteCountry = function (id) {
        if (confirm('Are you sure to delete record?')) {
            this.countriesService.deleteCountry(id, this.countries);
            this.ngOnInit();
            this.toastr.success('Record successfully deleted.', '', {
                positionClass: 'toast-top-center',
                closeButton: true,
                timeOut: 5000
            });
        }
    };
    CountryComponent.prototype.resetFields = function () {
        this._regionFilter = '';
        this._listFilter = '';
        this.onChange(this._regionFilter);
        this.nameField.nativeElement.blur();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('reset', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], CountryComponent.prototype, "nameField", void 0);
    CountryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-country',
            template: __webpack_require__(/*! raw-loader!./country.component.html */ "./node_modules/raw-loader/index.js!./src/app/country/country.component.html"),
            styles: [__webpack_require__(/*! ./country.component.css */ "./src/app/country/country.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_countries_service__WEBPACK_IMPORTED_MODULE_5__["CountriesService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], CountryComponent);
    return CountryComponent;
}());



/***/ }),

/***/ "./src/app/edit-country/edit-country.component.css":
/*!*********************************************************!*\
  !*** ./src/app/edit-country/edit-country.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bg-primary {\r\n    background-color: #1269c7!important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdC1jb3VudHJ5L2VkaXQtY291bnRyeS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUNBQW1DO0FBQ3ZDIiwiZmlsZSI6InNyYy9hcHAvZWRpdC1jb3VudHJ5L2VkaXQtY291bnRyeS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJnLXByaW1hcnkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzEyNjljNyFpbXBvcnRhbnQ7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/edit-country/edit-country.component.ts":
/*!********************************************************!*\
  !*** ./src/app/edit-country/edit-country.component.ts ***!
  \********************************************************/
/*! exports provided: EditCountryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditCountryComponent", function() { return EditCountryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _countries_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../countries.service */ "./src/app/countries.service.ts");







/*Service*/

var EditCountryComponent = /** @class */ (function () {
    function EditCountryComponent(acttivatedRoute, countriesService, spinner, route, router, location, fb, toastr) {
        this.acttivatedRoute = acttivatedRoute;
        this.countriesService = countriesService;
        this.spinner = spinner;
        this.route = route;
        this.router = router;
        this.location = location;
        this.fb = fb;
        this.toastr = toastr;
        this.errorMessage = '';
        this.countries = [];
    }
    EditCountryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.countryForm = this.fb.group({
            countryCode: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            countryName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            countryRegion: 'Africa'
        });
        var param = this.acttivatedRoute.snapshot.paramMap.get('id');
        this.acttivatedRoute.params
            .subscribe(function (param) {
            if (param) {
                _this.spinner.show();
                _this.getCountry(param.id);
            }
        });
    };
    EditCountryComponent.prototype.getCountry = function (id) {
        var _this = this;
        this.countriesService.getCountryById(id)
            .subscribe(function (country) { return _this.displayCountry(country); }, function (error) { return _this.errorMessage = error; });
    };
    EditCountryComponent.prototype.displayCountry = function (country) {
        console.log(JSON.stringify(country));
        if (this.countryForm) {
            this.countryForm.reset();
        }
        this.country = country;
        // Update the data on the form
        this.countryForm.patchValue({
            countryCode: this.country.country_code,
            countryName: this.country.country_name,
            countryRegion: this.country.country_region
        });
        this.spinner.hide();
    };
    EditCountryComponent.prototype.saveCountry = function () {
        var _this = this;
        var param = this.acttivatedRoute.snapshot.paramMap.get('id');
        this.acttivatedRoute.params
            .subscribe(function (param) {
            if (param) {
                var countries = {
                    country_code: _this.countryForm.get('countryCode').value,
                    country_name: _this.countryForm.get('countryName').value,
                    country_region: _this.countryForm.get('countryRegion').value,
                };
                _this.countriesService.updateCountry(param.id, countries);
                _this.countriesService.getCountry().subscribe(function (countries) {
                    _this.countries = countries;
                }, function (error) { return _this.errorMessage = error; });
                _this.router.navigate(['/country']);
                _this.toastr.success('Record successfully updated.', '', {
                    positionClass: 'toast-top-center',
                    closeButton: true,
                    timeOut: 5000
                });
            }
        });
        // if (this.countryForm.valid) {
        //   if (this.countryForm.dirty) {
        //     const p = { ...this.country, ...this.countryForm.value };
        //     if (p.id === 0) {
        //     } else {
        //       this.countriesService.updateCountry(p)
        //         .subscribe(
        //           () => this.onSaveComplete(),
        //           (error: any) => this.errorMessage = <any>error
        //         );
        //     }
        //   } else {
        //     this.onSaveComplete();
        //   }
        // } else {
        //   this.errorMessage = 'Please correct the validation errors.';
        // }
    };
    EditCountryComponent.prototype.onSaveComplete = function () {
        // Reset the form to clear the flags
        this.countryForm.reset();
        this.router.navigate(['/country']);
    };
    // updateCountry(id) {
    // this.countriesService.updateCountry(id, this.countries);
    // this.countriesService.getCountry().subscribe(
    //   countries => {
    //     this.countries = countries;
    //   },
    //   error => this.errorMessage = <any>error
    // );
    // }
    EditCountryComponent.prototype.goBack = function () {
        this.location.back();
    };
    EditCountryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-country',
            template: __webpack_require__(/*! raw-loader!./edit-country.component.html */ "./node_modules/raw-loader/index.js!./src/app/edit-country/edit-country.component.html"),
            styles: [__webpack_require__(/*! ./edit-country.component.css */ "./src/app/edit-country/edit-country.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _countries_service__WEBPACK_IMPORTED_MODULE_7__["CountriesService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]])
    ], EditCountryComponent);
    return EditCountryComponent;
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

module.exports = __webpack_require__(/*! C:\JETTORRES\Angular Testing Apps\country-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map