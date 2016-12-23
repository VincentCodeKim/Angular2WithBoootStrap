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
        //this.books = Promise.resolve(this.bookService.getBooks());
        this.bookService.getBooks().subscribe(
            data=>this.books = data.info.books,
            error=>alert(error),
            ()=>console.log("Finished)")
        );
    }
}
