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
        this.pageClass = "pagination";
        this.currentPage = 1; // 현재 페이지번호
        this.limit = 10; // 미사용 데이터 건 수
        this.buttonCount = 5; // 버튼의 개수
        this.buttonStartIndex = 1; // 첫 번째 표현될 버튼의 숫자
        this.maxPage = 1; // 최대 페이지 수
        this.totalCount = 0; // 총 데이터 건 수
        this.numberItems = []; // 버튼 그룹의 숫자를 가지고 있는 배열 객체
        this.changePage = new core_1.EventEmitter();
    }
    PaginationComponent.prototype.setPrevPage = function () {
        if (this.currentPage <= this.buttonCount)
            return;
        this.setCurrentPage(this.buttonStartIndex - 1);
    };
    PaginationComponent.prototype.setFirstPage = function () {
        if (this.currentPage <= this.buttonCount)
            return;
        this.setCurrentPage(1);
    };
    PaginationComponent.prototype.setNextPage = function () {
        if (this.buttonStartIndex > this.maxPage - this.buttonCount)
            return;
        this.setCurrentPage(Number(this.buttonStartIndex) +
            Number(this.buttonCount));
    };
    PaginationComponent.prototype.setLastPage = function () {
        if (this.buttonStartIndex > this.maxPage - this.buttonCount)
            return;
        this.setCurrentPage(this.maxPage);
    };
    PaginationComponent.prototype.clickNumber = function (page) {
        this.setCurrentPage(page);
    };
    PaginationComponent.prototype.numberInfo = function () {
        this.numberItems = [];
        for (var i = this.buttonStartIndex; i < Number(this.buttonStartIndex) +
            Number(this.buttonCount) && i <= this.maxPage; i++) {
            this.numberItems.push(i);
        }
    };
    PaginationComponent.prototype.setCurrentPage = function (page) {
        this.currentPage = page;
        var temp = Math.floor((page - 1) / this.buttonCount);
        this.buttonStartIndex = temp * (this.buttonCount) + 1;
        this.numberInfo();
        this.changePage.emit(this.currentPage);
    };
    PaginationComponent.prototype.setTotalCount = function (value) {
        this.totalCount = value;
        this.maxPage = Math.floor((value - 1) / this.limit) + 1;
    };
    PaginationComponent.prototype.setButtonCount = function (count) {
        this.buttonCount = count;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], PaginationComponent.prototype, "pageClass", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], PaginationComponent.prototype, "currentPage", void 0);
    __decorate([
        // 현재 페이지번호
        core_1.Input(), 
        __metadata('design:type', Number)
    ], PaginationComponent.prototype, "limit", void 0);
    __decorate([
        // 미사용 데이터 건 수
        core_1.Input(), 
        __metadata('design:type', Number)
    ], PaginationComponent.prototype, "buttonCount", void 0);
    __decorate([
        // 버튼 그룹의 숫자를 가지고 있는 배열 객체
        core_1.Output(), 
        __metadata('design:type', Object)
    ], PaginationComponent.prototype, "changePage", void 0);
    PaginationComponent = __decorate([
        core_1.Component({
            selector: 'expagination',
            templateUrl: './app/widget/pagination.component.html',
        }), 
        __metadata('design:paramtypes', [])
    ], PaginationComponent);
    return PaginationComponent;
}());
exports.PaginationComponent = PaginationComponent;
//# sourceMappingURL=pagination.component.js.map