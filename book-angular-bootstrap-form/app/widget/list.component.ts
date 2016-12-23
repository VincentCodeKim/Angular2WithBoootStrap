import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'exlist',
    templateUrl: './app/widget/list.component.html',
})
export class ListComponent { 
    @Input() listClass ="list-group"
    @Output() itemClick= new EventEmitter<string>();
    ul="";
    onItemClick(value){
        console.log(value);
        this.itemClick.emit(value);
    }
    setData(data){
        this.data = data;
    }
    @Input() data = [];
    @Input() displayField ='displayField'
    @Input() valueField = 'valueField'
}
