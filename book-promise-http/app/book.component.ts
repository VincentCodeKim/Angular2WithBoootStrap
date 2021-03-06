import {Component} from '@angular/core';
import {BookService} from './book.service'
import {Book} from './book';

@Component({
    selector: 'my-book',
    templateUrl: './app/book.component.html',
    styleUrls:["./assets/stylesheets/book.css"],
    providers:[BookService]
})
export class BookComponent { 
    books:Book[];   //Promise<any>;
    constructor(private bookService:BookService){
    }    
    ngOnInit(){
        this.bookService.getBooks()
            .then(books=>this.books = books);
    }
}
