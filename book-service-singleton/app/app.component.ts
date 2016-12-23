import { Component } from '@angular/core';
import {CommonService} from './common.service';
@Component({
  selector: 'my-app',
    template:`
        <input type="text" value="{{myValue}}">
        <my-book></my-book>
    `,
})
export class AppComponent { 
    myValue:string = "App"
    constructor(private commonService:CommonService){
        this.commonService.myEvent.subscribe(data => {
          this.onMyEvent(data)
        });
    }
    onMyEvent(data){
        this.myValue = data;
    }
}
