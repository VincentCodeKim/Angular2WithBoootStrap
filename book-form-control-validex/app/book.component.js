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
var forms_1 = require('@angular/forms');
var BookComponent = (function () {
    function BookComponent(_formBuilder) {
        this._formBuilder = _formBuilder;
        this.bookForm = _formBuilder.group({
            price: new forms_1.FormControl('', forms_1.Validators.compose([validNumber]))
        });
    }
    BookComponent.prototype.onSubmit = function (f) {
        console.log(f);
    };
    BookComponent = __decorate([
        core_1.Component({
            selector: 'my-book',
            templateUrl: './app/book.component.html',
            styleUrls: ["./assets/stylesheets/book.css"]
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder])
    ], BookComponent);
    return BookComponent;
}());
exports.BookComponent = BookComponent;
function validNumber(c) {
    if (c.value == '') {
        return {
            valid: false,
            errorMsg: '필수로 입력하세요'
        };
    }
    if (c.value == '') {
        return {
            valid: false,
            errorMsg: '필수로 입력하세요'
        };
    }
    var NUMBER_REGEXP = /^[0-9]/;
    return NUMBER_REGEXP.test(c.value) ? {
        valid: true,
        errorMsg: ''
    } : {
        valid: false,
        errorMsg: '숫자로 입력하세요'
    };
}
//# sourceMappingURL=book.component.js.map