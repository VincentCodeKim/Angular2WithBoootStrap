import { Injectable } from '@angular/core';
import {Book} from './book';
import {Headers, Http} from "@angular/http";
import "rxjs/add/operator/map";

@Injectable()
export class BookService { 
    constructor(private http:Http){
    } 
    getBooks(){
        let headers = new Headers({'Content-Type': '/application'});        
        return this.http.post('/server/book.json',JSON.stringify({}), {headers: headers})
                .map(res=>res.json()); 
    }
}
