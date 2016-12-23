import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'exlist',
    templateUrl: './app/widget/list.component.html',
})
export class ListComponent { 
    @Input() properties = {
        listClass:"list-group",
        data:[],
        displayField:'displayField',
        valueField:'valiueField'
    }
    @Output() itemClick= new EventEmitter<string>();
    ul="";
    onItemClick(value){
        console.log(value);
        this.itemClick.emit(value);
    }
    setData(data){
        this.properties.data = data;
    }
}
