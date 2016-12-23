import {Component} from '@angular/core';
import {CommonService} from './common.service';
@Component({
    selector: 'my-book',
    templateUrl: './app/book.component.html'
})
export class BookComponent { 
    constructor( private commonService:CommonService){
    }
    onBlur($event){
        var el= $event.target;
        this.commonService.callMyEvent(el.value);
    }
}
