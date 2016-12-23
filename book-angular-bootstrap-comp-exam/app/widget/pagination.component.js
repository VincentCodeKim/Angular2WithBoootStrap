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
var PaginationComponent = (function () {
    function PaginationComponent() {
        this.properties = {
            pageClass: "pagination",
            currentPage: 1,
            limit: 10,
            buttonCount: 5,
            buttonStartIndex: 1,
            maxPage: 1,
            totalCount: 0,
            numberItems: []
        };
        this.changePage = new core_1.EventEmitter();
    }
    PaginationComponent.prototype.setPrevPage = function () {
        if (this.properties.currentPage <= this.properties.buttonCount)
            return;
        this.setCurrentPage(this.properties.buttonStartIndex - 1);
    };
    PaginationComponent.prototype.setFirstPage = function () {
        if (this.properties.currentPage <= this.properties.buttonCount)
            return;
        this.setCurrentPage(1);
    };
    PaginationComponent.prototype.setNextPage = function () {
        if (this.properties.buttonStartIndex > this.properties.maxPage - this.properties.buttonCount)
            return;
        this.setCurrentPage(Number(this.properties.buttonStartIndex) +
            Number(this.properties.buttonCount));
    };
    PaginationComponent.prototype.setLastPage = function () {
        if (this.properties.buttonStartIndex > this.properties.maxPage - this.properties.buttonCount)
            return;
        this.setCurrentPage(this.properties.maxPage);
    };
    PaginationComponent.prototype.clickNumber = function (page) {
        this.setCurrentPage(page);
    };
    PaginationComponent.prototype.numberInfo = function () {
        this.properties.numberItems = [];
        for (var i = this.properties.buttonStartIndex; i < Number(this.properties.buttonStartIndex) +
            Number(this.properties.buttonCount) && i <= this.properties.maxPage; i++) {
            this.properties.numberItems.push(i);
        }
    };
    PaginationComponent.prototype.setCurrentPage = function (page) {
        this.properties.currentPage = page;
        var temp = Math.floor((page - 1) / this.properties.buttonCount);
        this.properties.buttonStartIndex = temp * (this.properties.buttonCount) + 1;
        this.numberInfo();
        this.changePage.emit(this.properties.currentPage);
    };
    PaginationComponent.prototype.setTotalCount = function (value) {
        this.properties.totalCount = value;
        this.properties.maxPage = Math.floor((value - 1) / this.properties.limit) + 1;
    };
    PaginationComponent.prototype.setButtonCount = function (count) {
        this.properties.buttonCount = count;
    };
    Object.defineProperty(PaginationComponent.prototype, "value", {
        //get accessor
        get: function () {
            return this;
        },
        enumerable: true,
        configurable: true
    });
    ;
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], PaginationComponent.prototype, "properties", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], PaginationComponent.prototype, "changePage", void 0);
    PaginationComponent = __decorate([
        core_1.Component({
            selector: 'expagenation',
            templateUrl: './app/widget/pagination.component.html',
        }), 
        __metadata('design:paramtypes', [])
    ], PaginationComponent);
    return PaginationComponent;
}());
exports.PaginationComponent = PaginationComponent;
//# sourceMappingURL=pagination.component.js.map