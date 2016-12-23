import {Component } from '@angular/core';


@Component({
    selector: 'my-app',
    templateUrl:'./app/app.component.html'
})
export class AppComponent{

    onSearch(myPagination){
       myPagination.setTotalCount(66);
       myPagination.setCurrentPage(1);
    }
    changePage(page){
        console.log('page', page);
    }
}
 