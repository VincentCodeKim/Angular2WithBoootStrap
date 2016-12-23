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
        /*
        this.bookForm= _formBuilder.group({
            id: new FormControl('111', Validators.required)
           // name: new FormControl('', Validators.required),
            //price:new FormControl('', Validators.required),
            //date:new FormControl('', Validators.required)
        });
        */
        this._formBuilder = _formBuilder;
        this.bookForm = new forms_1.FormGroup({
            id: new forms_1.FormControl('004', forms_1.Validators.required),
            name: new forms_1.FormControl('안드로이드 게임 프로그래밍', forms_1.Validators.required),
            price: new forms_1.FormControl('', forms_1.Validators.required),
            date: new forms_1.FormControl('', forms_1.Validators.required)
        });
    }
    BookComponent.prototype.ngOnInit = function () {
    };
    BookComponent.prototype.onSubmit = function (f) {
        console.log(f);
        //console.log(f);
        //var loginControl = new FormControl("", Validators.required)
        console.log(this.bookForm);
        debugger;
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
//# sourceMappingURL=book.component.js.map