import { Injectable } from '@angular/core';
import {Book} from './book';
import {Http} from "@angular/http";
import "rxjs/add/operator/map";

@Injectable()
export class BookService { 
    constructor(private http:Http){
        
    } 
    getBooks(){
        return this.http.get('./server/book.json')
                .map(res=>res.json());
    }
}
