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
            price:new FormControl('', Validators.compose([validNumber]))
        
        });
    }
    onSubmit(f){
        console.log(f);
    }
}
function validNumber(c: FormControl) {
    if(c.value == ''){
        return {
            valid: false,
            errorMsg:'필수로 입력하세요'
        };  
    }
    if(c.value== ''){
        return {
            valid: false,
            errorMsg:'필수로 입력하세요'
        };  
    }    
    let NUMBER_REGEXP = /^[0-9]/;
    return NUMBER_REGEXP.test(c.value) ?{
        valid: true,
        errorMsg:''
    } : {
        valid: false,
        errorMsg:'숫자로 입력하세요'
    };
}
