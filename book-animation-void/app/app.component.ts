import {Component} from '@angular/core';
@Component({
    selector: 'my-app',
    template:`
        <h3>애니메이션</h3>
        <button (click)="onClick1()">타이젠</button>
        <button (click)="onClick2()">코르도바</button>
        <br><br>
        <my-image *ngIf="image1Show" src="./assets/image/img001.jpg"></my-image>  
        <my-image *ngIf="image2Show" src="./assets/image/img002.jpg"></my-image>  
    `
})
export class AppComponent { 
    image1Show=false;
    image2Show=false;
    onClick1(){
        this.image1Show = !this.image1Show;
    }
    onClick2(){
        this.image2Show = !this.image2Show;  
    }
}
