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
var common_service_1 = require('./common.service');
var BookComponent = (function () {
    function BookComponent(commonService) {
        this.commonService = commonService;
    }
    BookComponent.prototype.onBlur = function ($event) {
        var el = $event.target;
        this.commonService.callMyEvent(el.value);
    };
    BookComponent = __decorate([
        core_1.Component({
            selector: 'my-book',
            templateUrl: './app/book.component.html'
        }), 
        __metadata('design:paramtypes', [common_service_1.CommonService])
    ], BookComponent);
    return BookComponent;
}());
exports.BookComponent = BookComponent;
//# sourceMappingURL=book.component.js.map