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
var router_1 = require('@angular/router');
var BookComponent = (function () {
    function BookComponent(route, router) {
        this.route = route;
        this.router = router;
        this.book = {
            id: '',
            name: '',
            price: 0,
            date: '',
            img: ''
        };
        this.reputation = "";
        this.books = [
            { id: '001', name: '타이젠 모바일 프로그래밍', price: 31500, date: '20150115', img: 'img001.jpg' },
            { id: '002', name: '아파치 코르도바', price: 31500, date: '20150131', img: 'img002.jpg' },
            { id: '003', name: '웹앱 하이브리드 앱', price: 31500, date: '20150320', img: 'img003.jpg' },
            { id: '004', name: 'OpenGL ES 2.0 안드로이드 게임프로그래밍', price: 31500, date: '20150601', img: 'img004.jpg' },
            { id: '005', name: 'Ext JS6 프로그래밍', price: 31500, date: '20151005', img: 'img005.jpg' },
        ];
    }
    BookComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.routeParams = this.route.params.subscribe(function (params) {
            if (params['id'] != null) {
                _this.book.id = params['id'];
                _this.setBook(_this.book.id);
            }
        });
    };
    BookComponent.prototype.ngOnDestroy = function () {
        this.routeParams.unsubscribe();
    };
    BookComponent.prototype.canDeactivate = function (component) {
        console.log('...');
        if (this.reputation != '') {
            if (confirm('작성한 내용을 무시하고 페이지를 이동하시겠습니까?')) {
                return true;
            }
            else {
                return false;
            }
        }
    };
    BookComponent.prototype.setBook = function (id) {
        for (var i = 0; i < this.books.length; i++) {
            if (id == this.books[i].id) {
                this.book = this.books[i];
                break;
            }
        }
    };
    BookComponent = __decorate([
        core_1.Component({
            selector: 'book',
            templateUrl: './app/book.component.html',
            styleUrls: ["../assets/stylesheets/book.css"]
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router])
    ], BookComponent);
    return BookComponent;
}());
exports.BookComponent = BookComponent;
//# sourceMappingURL=book.component.js.map