import { Component, OnInit, OnDestroy} from '@angular/core';
import { Router, ActivatedRoute, Params,CanDeactivate } from '@angular/router';
import { Observable }    from 'rxjs/Observable';

@Component({
    selector: 'book',
    templateUrl: './app/book.component.html',
    styleUrls:["../assets/stylesheets/book.css"] 
})

export class BookComponent implements OnInit, OnDestroy, CanDeactivate<any>{
    book = {
        id:'',
        name:'',
        price:0,
        date:'',
        img:''
    };
    routeParams:any;
    reputation:string = "";    
    constructor( private route: ActivatedRoute, private router:Router ){   
    }    
    ngOnInit(){
        this.routeParams= this.route.params.subscribe(params=>{
            if(params['id'] != null){
                this.book.id = params['id'];
                this.setBook(this.book.id);
            }
        })
    }   
    ngOnDestroy(){
        this.routeParams.unsubscribe();
    } 
    canDeactivate(component:any) {
        console.log('...')
        if (this.reputation != '') {
            if(confirm('작성한 내용을 무시하고 페이지를 이동하시겠습니까?')){
                return true;
            }
            else {
                return false;
            }
        }
    }             
    setBook(id){
        for( var i=0; i< this.books.length; i++){
            if(id == this.books[i].id){
                this.book = this.books[i];
                break;
            }
        }
    }
    books = [
        {id:'001', name:'타이젠 모바일 프로그래밍', price:31500, date:'20150115', img:'img001.jpg'},
        {id:'002', name:'아파치 코르도바', price:31500, date:'20150131', img:'img002.jpg'},
        {id:'003', name:'웹앱 하이브리드 앱', price:31500, date:'20150320', img:'img003.jpg'},
        {id:'004', name:'OpenGL ES 2.0 안드로이드 게임프로그래밍', price:31500, date:'20150601', img:'img004.jpg'},
        {id:'005', name:'Ext JS6 프로그래밍', price:31500, date:'20151005', img:'img005.jpg'},
    ]
}
