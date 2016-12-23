import {Component} from '@angular/core';

@Component({
    selector: 'my-book',
    template: `
        <h1>Book</h1>
        <p>{{name}}</p>
        <p>{{getName()}}</p>
        {{setName("하이브리드 앱")}}`
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
