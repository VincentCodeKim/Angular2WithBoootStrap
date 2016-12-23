import {Component } from '@angular/core';
@Component({
    selector: 'my-app',
    templateUrl:'./app/app.component.html'
})
export class AppComponent{
    data = [{displayField:'첫번째 데이터', valueField:'1'},
        {displayField:'두번째 데이터', valueField:'2'}];  
    onItemClick(value){
        alert(value);
    }  
}
