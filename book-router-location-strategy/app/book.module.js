"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var book_routing_1 = require('./book.routing');
var book_component_1 = require('./book.component');
var book_detail1_component_1 = require('./book-detail1.component');
var book_detail2_component_1 = require('./book-detail2.component');
var write_check_service_1 = require('./write-check.service');
var login_check_service_1 = require('./login-check.service');
var BookModule = (function () {
    function BookModule() {
    }
    BookModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, book_routing_1.bookRouting, forms_1.FormsModule],
            declarations: [book_component_1.BookComponent,
                book_detail1_component_1.BookDetail1Component,
                book_detail2_component_1.BookDetail2Component],
            providers: [write_check_service_1.WriteCheck, login_check_service_1.LoginCheck]
        }), 
        __metadata('design:paramtypes', [])
    ], BookModule);
    return BookModule;
}());
exports.BookModule = BookModule;
//# sourceMappingURL=book.module.js.map