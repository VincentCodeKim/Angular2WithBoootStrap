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
var AppComponent = (function () {
    function AppComponent() {
        this.image1Show = false;
        this.image2Show = false;
    }
    AppComponent.prototype.onClick1 = function () {
        this.image1Show = !this.image1Show;
    };
    AppComponent.prototype.onClick2 = function () {
        this.image2Show = !this.image2Show;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n        <h3>\uC560\uB2C8\uBA54\uC774\uC158</h3>\n        <button (click)=\"onClick1()\">\uD0C0\uC774\uC820</button>\n        <button (click)=\"onClick2()\">\uCF54\uB974\uB3C4\uBC14</button>\n        <br><br>\n        <my-image *ngIf=\"image1Show\" src=\"./assets/image/img001.jpg\"></my-image>  \n        <my-image *ngIf=\"image2Show\" src=\"./assets/image/img002.jpg\"></my-image>  \n    "
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map