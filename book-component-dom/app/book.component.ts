import {Component, OnInit} from '@angular/core';
declare  var document:any;
@Component({
    selector: 'my-book',
    templateUrl: './app/book.component.html',
    styleUrls:["./assets/stylesheets/book.css"]
    
})
export class BookComponent implements OnInit { 
    name="안드로이드 게임 프로그래밍"
    ngOnInit(){
        var el = document.getElementsByClassName("font-orange")[0];
        console.log(el);
    }    
    setName(name){
        this.name = name;
    }
    getName(){
        return this.name;
    }    
}
