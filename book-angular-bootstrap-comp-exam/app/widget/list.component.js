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
var ListComponent = (function () {
    function ListComponent() {
        this.properties = {
            listClass: "list-group",
            data: [],
            displayField: 'displayField',
            valueField: 'valiueField'
        };
        this.itemClick = new core_1.EventEmitter();
        this.ul = "";
    }
    ListComponent.prototype.onItemClick = function (value) {
        console.log(value);
        this.itemClick.emit(value);
    };
    ListComponent.prototype.setData = function (data) {
        this.properties.data = data;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], ListComponent.prototype, "properties", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], ListComponent.prototype, "itemClick", void 0);
    ListComponent = __decorate([
        core_1.Component({
            selector: 'exlist',
            templateUrl: './app/widget/list.component.html',
        }), 
        __metadata('design:paramtypes', [])
    ], ListComponent);
    return ListComponent;
}());
exports.ListComponent = ListComponent;
//# sourceMappingURL=list.component.js.map