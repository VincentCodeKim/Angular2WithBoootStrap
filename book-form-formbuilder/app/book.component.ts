import {Component} from '@angular/core';
import {FormControl,  FormGroup, Validators, FormBuilder} from '@angular/forms';
@Component({
    selector: 'my-book',
    templateUrl: './app/book.component.html',
    styleUrls:["./assets/stylesheets/book.css"] 
})
export class BookComponent { 
    bookForm:FormGroup;
    constructor(private _formBuilder:FormBuilder){
        this.bookForm= _formBuilder.group({
            id: new FormControl('004', Validators.required),
            name: new FormControl('안드로이드 게임 프로그래밍', Validators.required),
            price:new FormControl('', Validators.required),
            date:new FormControl('', Validators.required)        
        });
    }
    onSubmit(f){
        console.log(f);
    }
}
