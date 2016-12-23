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
var list_component_1 = require('./widget/list.component');
var pagination_component_1 = require('./widget/pagination.component');
var AppComponent = (function () {
    function AppComponent() {
        this.data = [{ displayField: '첫번째 데이터', valueField: '1' },
            { displayField: '두번째 데이터', valueField: '2' },
            { displayField: '세번째 데이터', valueField: '3' },
            { displayField: '네번째 데이터', valueField: '4' },
            { displayField: '다섯번째 데이터', valueField: '5' },
            { displayField: '여섯번째 데이터', valueField: '6' },
            { displayField: '일곱번째 데이터', valueField: '7' },
            { displayField: '여덟번째 데이터', valueField: '8' },
            { displayField: '아홉번째 데이터', valueField: '9' },
            { displayField: '열번째 데이터', valueField: '10' },
            { displayField: '열한번째 데이터', valueField: '11' },
            { displayField: '열두번째 데이터', valueField: '12' },
            { displayField: '열세번째 데이터', valueField: '13' },
            { displayField: '열네번째 데이터', valueField: '14' },
            { displayField: '열다섯번째 데이터', valueField: '15' },
            { displayField: '열여섯번째 데이터', valueField: '16' },
            { displayField: '열일곱번째 데이터', valueField: '17' },
            { displayField: '열여덟번째 데이터', valueField: '18' },
            { displayField: '열아홉번째 데이터', valueField: '19' },
            { displayField: '스무번째 데이터', valueField: '20' },
            { displayField: '스물하나번째 데이터', valueField: '21' }];
        this.myList = new list_component_1.ListComponent();
        this.myList.displayField = "displayField";
        this.myList.valueField = "valueField";
        this.myPagination = new pagination_component_1.PaginationComponent();
    }
    AppComponent.prototype.onSearch = function () {
        console.log('myPagination', this.myPagination);
        console.log('myList', this.myList);
        this.changePage(1);
        this.myPagination.setTotalCount(this.data.length);
        this.myPagination.setCurrentPage(1);
    };
    AppComponent.prototype.onChangePage = function (value) {
        this.changePage(value);
    };
    AppComponent.prototype.changePage = function (value) {
        var data = [];
        for (var i = (value - 1) * 10; i < value * 10 && i < this.data.length; i++) {
            data.push(this.data[i]);
        }
        this.myList.setData(data);
    };
    AppComponent.prototype.onItemClick = function (value) {
        alert(value);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: './app/app.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map