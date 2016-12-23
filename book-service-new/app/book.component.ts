import {Component, OnInit} from '@angular/core';
import {BookService} from './book.service'

@Component({
    selector: 'my-book',
    templateUrl: './app/book.component.html',
    styleUrls:["../assets/stylesheets/book.css"],
})
export class BookComponent implements OnInit{ 
    books=[];
    bookService:BookService;
    constructor(){
        this.bookService = new BookService();  // 이렇게 만들지 말것!
    }    
    ngOnInit(){
        this.books = this.bookService.getBooks();
    }
}
