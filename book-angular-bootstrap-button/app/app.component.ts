import {Component} from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl:'./app/app.component.html'
})
export class AppComponent {
    onClick($event){
        console.log($event);
        alert($event.target.innerText);
    }
}
