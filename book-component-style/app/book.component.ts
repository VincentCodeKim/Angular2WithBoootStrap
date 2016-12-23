import {Component} from '@angular/core';

@Component({
    selector: 'my-book',
    templateUrl: './app/book.component.html',
    styles:[`
        .font-red{
            color:red
        }
        .font-orange{
            color:orange
        }
    `]
    
})
export class BookComponent { 
    name="안드로이드 게임 프로그래밍"
    setName(name){
        this.name = name;
    }
    getName(){
        return this.name;
    }    
}
