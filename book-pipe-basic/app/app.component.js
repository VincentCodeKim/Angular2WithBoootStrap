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
        this.str = "abcdEFG";
        this.num = 123456.123456;
        this.date = new Date(2017, 1, 1);
        this.money = 1000000;
        this.json = { info: { name: '사용자1', age: 20 }, list: [{ name: '사용자1', age: 20 }, { name: '사용자2', age: 20 }] };
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n        <h3>\uBB38\uC790\uC5F4</h3>\n        string: {{str}} <br>\n        string | uppercase: {{str|uppercase}} <br>\n        string | lowercase: {{str|lowercase}} <br>\n        <h3>\uC2AC\uB77C\uC774\uC2A4</h3>\n        slice: {{str}} <br>\n        slice | slice:0:3: {{str|slice:0:3}} <br>\n        slice | slice:3:5: {{str|slice:3:5}} <br>\n        <h3>\uC22B\uC790</h3>\n        number: {{num}} <br>\n        number | number:'.5-10': {{num|number:'.5-10'}} <br>\n        number | number:'2.1-6': {{num|number:'2.1-6'}} <br>\n        number | number:'10.0-3': {{num|number:'10.0-3'}} <br>\n        <h3>\uD37C\uC13C\uD2B8</h3>\n        percent | percent: {{num|percent}} <br>\n        percent | percent:'2.1-6': {{num|percent:'2.1-6'}} <br>\n        <h3>\uB0A0\uC9DC</h3>\n        date: {{date}} <br>\n        date | date: {{date|date}} <br>\n        date | date:'fullDate': {{date|date:\"fullDate\"}} <br>\n        date | date:'yyyy/MM/dd': {{date|date:\"yyyy/MM/dd\"}} <br>\n        <h3>\uD1B5\uD654</h3>\n        money:{{money|currency}}<br>\n        money:{{money|currency:'USD'}}<br>\n        money:{{money|currency:'USD':true}}<br>\n        money:{{money|currency:'KRW'}}<br>\n        money:{{money|currency:'KRW':true}}<br>\n        <h3>JSON</h3>\n        json:{{json}}<br>\n        json:{{json|json}}<br>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map