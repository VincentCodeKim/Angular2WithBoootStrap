import { Injectable } from '@angular/core';
import {Book} from './book';
import {Http} from "@angular/http";

@Injectable()
export class BookService { 
    constructor(private http:Http){
        
    } 
    getBooks(): Promise<Book[]>{
        return this.http.get('./server/book.json')
                .toPromise()
                .then(res=>res.json().info.books);
    }
}
