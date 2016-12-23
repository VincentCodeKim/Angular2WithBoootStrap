import {Component} from '@angular/core';
@Component({
    selector: 'my-app',
    template:`
        <h3>커스텀</h3>
        날짜변환 : {{str|mydate:'/'}} <br>
        날짜변환 : {{str|mydate:'-'}} <br>
    `
})
export class AppComponent {
   str = "20161020";
}
