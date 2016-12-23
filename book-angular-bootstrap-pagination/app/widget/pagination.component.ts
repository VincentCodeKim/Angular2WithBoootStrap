import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'expagination',
    templateUrl: './app/widget/pagination.component.html',
})
export class PaginationComponent { 
    @Input() pageClass ="pagination"
    @Input() currentPage:number = 1  // 현재 페이지번호
    @Input() limit:number = 10   // 미사용 데이터 건 수
    @Input() buttonCount:number = 5  // 버튼의 개수
    buttonStartIndex:number = 1; // 첫 번째 표현될 버튼의 숫자
    maxPage:number = 1; // 최대 페이지 수
    totalCount:number = 0; // 총 데이터 건 수
    numberItems:number[] = []; // 버튼 그룹의 숫자를 가지고 있는 배열 객체
    @Output() changePage= new EventEmitter<number>();
    setPrevPage(){
        if(this.currentPage<= this.buttonCount)
            return;
        this.setCurrentPage(this.buttonStartIndex -1);
    }
    setFirstPage(){
        if(this.currentPage<= this.buttonCount)
            return;
        this.setCurrentPage(1);
    }
    setNextPage(){
        if(this.buttonStartIndex > this.maxPage - this.buttonCount)
            return;
        this.setCurrentPage(Number(this.buttonStartIndex) + 
            Number(this.buttonCount));
    }
    setLastPage(){
        if(this.buttonStartIndex > this.maxPage - this.buttonCount)
            return;
         this.setCurrentPage(this.maxPage);
    }
    clickNumber(page){
        this.setCurrentPage(page);
    }
    public numberInfo(){
        this.numberItems = [];
        for (var i=this.buttonStartIndex; i < Number(this.buttonStartIndex) + 
            Number(this.buttonCount) && i <= this.maxPage; i++){
            this.numberItems.push(i);
        }    
    }
    public setCurrentPage(page){
        this.currentPage = page;
        var temp = Math.floor((page-1)/this.buttonCount)
        this.buttonStartIndex = temp * (this.buttonCount) + 1;
        this.numberInfo();
        this.changePage.emit(this.currentPage);
    }
    public setTotalCount(value){
        this.totalCount = value;
        this.maxPage = Math.floor((value -1) / this.limit) + 1;
    }
    public setButtonCount(count){
        this.buttonCount = count;
    }    
}
