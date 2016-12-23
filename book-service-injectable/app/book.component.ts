import {Component, OnInit} from '@angular/core';
import {BookService} from './book.service'

@Component({
    selector: 'my-book',
    templateUrl: './app/book.component.html',
    styleUrls:["../assets/stylesheets/book.css"],
    providers:[BookService]
})
export class BookComponent implements OnInit{ 
    books=[];
    constructor(private bookService:BookService){
    }       
    ngOnInit(){
        this.books = this.bookService.getBooks();
    }
}
