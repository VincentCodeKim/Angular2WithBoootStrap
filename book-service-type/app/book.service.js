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
var book_1 = require('./book');
var BookService = (function () {
    function BookService() {
    }
    BookService.prototype.getBooks = function () {
        this.books = [];
        this.books.push(new book_1.Book('001', '타이젠 모바일 프로그래밍', 33000, '20150115', 'img001.jpg'));
        this.books.push(new book_1.Book('002', '아파치 코르도바', 22000, '20150131', 'img002.jpg'));
        this.books.push(new book_1.Book('003', '웹앱 하이브리드 앱', 29000, '20150320', 'img003.jpg'));
        this.books.push(new book_1.Book('004', 'OpenGL ES 2.0 안드로이드 게임프로그래밍', 35000, '20150601', 'img004.jpg'));
        this.books.push(new book_1.Book('005', 'Ext JS6 프로그래밍', 32000, '20150115', 'img005.jpg'));
        return this.books;
    };
    BookService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], BookService);
    return BookService;
}());
exports.BookService = BookService;
//# sourceMappingURL=book.service.js.map