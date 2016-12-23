import {Component } from '@angular/core';
import { ListComponent } from './widget/list.component'
import { ButtonComponent } from './widget/button.component'
import { PaginationComponent } from './widget/pagination.component'
@Component({
    selector: 'my-app',
    templateUrl:'./app/app.component.html'
})
export class AppComponent{
    myList:ListComponent
    myPagination:PaginationComponent

    data = [{displayField:'첫번째 데이터', valueField:'1'},
        {displayField:'두번째 데이터', valueField:'2'},
        {displayField:'세번째 데이터', valueField:'3'},
        {displayField:'네번째 데이터', valueField:'4'},
        {displayField:'다섯번째 데이터', valueField:'5'},
        {displayField:'여섯번째 데이터', valueField:'6'},
        {displayField:'일곱번째 데이터', valueField:'7'},
        {displayField:'여덟번째 데이터', valueField:'8'},
        {displayField:'아홉번째 데이터', valueField:'9'},
        {displayField:'열번째 데이터', valueField:'10'},
        {displayField:'열한번째 데이터', valueField:'11'},
        {displayField:'열두번째 데이터', valueField:'12'},
        {displayField:'열세번째 데이터', valueField:'13'},
        {displayField:'열네번째 데이터', valueField:'14'},
        {displayField:'열다섯번째 데이터', valueField:'15'},
        {displayField:'열여섯번째 데이터', valueField:'16'},
        {displayField:'열일곱번째 데이터', valueField:'17'},
        {displayField:'열여덟번째 데이터', valueField:'18'},
        {displayField:'열아홉번째 데이터', valueField:'19'},
        {displayField:'스무번째 데이터', valueField:'20'},
        {displayField:'스물하나번째 데이터', valueField:'21'}];  
    constructor(){
        this.myList = new ListComponent()
        this.myList.properties.listClass="list-group"
        this.myList.properties.displayField = "displayField"
        this.myList.properties.valueField = "valueField"
        this.myPagination = new PaginationComponent()
    }
    onSearch(){
        this.changePage(1); 
        this.myPagination.setTotalCount(this.data.length);
        this.myPagination.setCurrentPage(1);      
    }
    onChangePage(value){
       this.changePage(value);
    }
    changePage(value){
        var data = [];
        for(var i=(value-1)*10; i < value*10 && i < this.data.length; i++){
            data.push(this.data[i]);
        }
        this.myList.setData(data)  
    }
    onItemClick(value){
        alert(value);
    }  
}