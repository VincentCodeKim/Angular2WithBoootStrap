import { Injectable } from '@angular/core';
import {Book} from './book';
@Injectable()
export class BookService { 
    books:Book[];    
    getBooks(){
        this.books = [];
        this.books.push(new Book('001', '타이젠 모바일 프로그래밍', 33000, '20150115', 'img001.jpg'));
        this.books.push(new Book('002', '아파치 코르도바', 22000, '20150131', 'img002.jpg'));
        this.books.push(new Book('003', '웹앱 하이브리드 앱', 29000, '20150320', 'img003.jpg'));
        this.books.push(new Book('004', 'OpenGL ES 2.0 안드로이드 게임프로그래밍', 35000, '20150601', 'img004.jpg'));
        this.books.push(new Book('005', 'Ext JS6 프로그래밍', 32000, '20150115', 'img005.jpg'));
        return  this.books; 
    }
}
