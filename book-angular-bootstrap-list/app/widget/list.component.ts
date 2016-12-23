import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'exlist',
    templateUrl: './app/widget/list.component.html',
})
export class ListComponent { 
    @Input() listClass ="list-group"
    @Input() listContent = ""
    @Output() itemClick= new EventEmitter<string>();
    ul="";
    onItemClick(value){
        console.log(value);
        this.itemClick.emit(value);
    }
    setData(data, displayField, valueField){
        this.data = data;
        this.displayField = displayField;
        this.valueField = valueField;
    }
    data = [];
    displayField =''
    valueField = ''
}
