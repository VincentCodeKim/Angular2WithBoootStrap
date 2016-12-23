import {Component} from '@angular/core';

@Component({
    selector: 'my-book',
    templateUrl: './app/book.component.html',
    styleUrls:["./assets/stylesheets/book.css"] 
})
export class BookComponent { 
    onSubmit(f){
        console.log(f);
        //console.log(f);
        debugger;
    }
}
