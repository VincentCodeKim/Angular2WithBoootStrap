import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'expagenation',
    templateUrl: './app/widget/pagination.component.html',
})

export class PaginationComponent { 
    @Input() properties = {
        pageClass:"pagination",
        currentPage:1,
        limit:10,
        buttonCount:5,
        buttonStartIndex:1,
        maxPage:1,
        totalCount:0,
        numberItems:[]
    }
    @Output() changePage= new EventEmitter<number>();
    setPrevPage(){
        if(this.properties.currentPage<= this.properties.buttonCount)
            return;
        this.setCurrentPage(this.properties.buttonStartIndex -1);
    }
    setFirstPage(){
        if(this.properties.currentPage<= this.properties.buttonCount)
            return;
        this.setCurrentPage(1);
    }
    setNextPage(){
        if(this.properties.buttonStartIndex > this.properties.maxPage - this.properties.buttonCount)
            return;
        this.setCurrentPage(Number(this.properties.buttonStartIndex) + 
            Number(this.properties.buttonCount));
    }
    setLastPage(){
        if(this.properties.buttonStartIndex > this.properties.maxPage - this.properties.buttonCount)
            return;
         this.setCurrentPage(this.properties.maxPage);
    }
    clickNumber(page){
        this.setCurrentPage(page);
    }
    public numberInfo(){
        this.properties.numberItems = [];
        for (var i=this.properties.buttonStartIndex; i < Number(this.properties.buttonStartIndex) + 
            Number(this.properties.buttonCount) && i <= this.properties.maxPage; i++){
            this.properties.numberItems.push(i);
        }    
    }
    public setCurrentPage(page){
        this.properties.currentPage = page;
        var temp = Math.floor((page-1)/this.properties.buttonCount)
        this.properties.buttonStartIndex = temp * (this.properties.buttonCount) + 1;
        this.numberInfo();
        this.changePage.emit(this.properties.currentPage);
    }
    public setTotalCount(value){
        this.properties.totalCount = value;
        this.properties.maxPage = Math.floor((value -1) / this.properties.limit) + 1;
    }
    public setButtonCount(count){
        this.properties.buttonCount = count;
    }  
    //get accessor
    get value(): any {
        return this;
    };
}