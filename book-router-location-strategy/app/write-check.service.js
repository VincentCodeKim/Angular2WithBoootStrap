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
var WriteCheck = (function () {
    function WriteCheck() {
    }
    WriteCheck.prototype.canDeactivate = function (component) {
        console.log('canDeactive', component);
        if (component['reputation'] != '') {
            if (confirm('작성중입니다. 나가시겠습니까?') == true)
                return true;
            else
                return false;
        }
        else {
            return true;
        }
    };
    WriteCheck = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], WriteCheck);
    return WriteCheck;
}());
exports.WriteCheck = WriteCheck;
//# sourceMappingURL=write-check.service.js.map