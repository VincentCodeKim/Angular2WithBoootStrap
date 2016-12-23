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
var ImageComponent = (function () {
    function ImageComponent() {
        this.src = "";
        this.state = 'inactive';
    }
    ImageComponent.prototype.onClick = function () {
        this.state = 'selected';
    };
    ImageComponent.prototype.onMouseOver = function () {
        this.state = 'active';
    };
    ImageComponent.prototype.onMouseOut = function () {
        this.state = 'inactive';
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], ImageComponent.prototype, "src", void 0);
    ImageComponent = __decorate([
        core_1.Component({
            selector: 'my-image',
            templateUrl: './app/image.component.html',
            animations: [
                core_1.trigger('state', [
                    core_1.state('inactive', core_1.style({
                        backgroundColor: '#eee',
                        transform: 'scale(1)'
                    })),
                    core_1.state('active', core_1.style({
                        backgroundColor: '#cfd8dc',
                        transform: 'scale(1.3)'
                    })),
                    core_1.state('selected', core_1.style({
                        transform: 'translateY(100%)'
                    })),
                    core_1.transition('*=>selected', core_1.animate('100ms ease-in')),
                    core_1.transition('*=>active', core_1.animate('100ms ease-in')),
                    core_1.transition('*=>inactive', core_1.animate('100ms ease-out'))
                ])
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], ImageComponent);
    return ImageComponent;
}());
exports.ImageComponent = ImageComponent;
//# sourceMappingURL=image.component.js.map