import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<a [routerLink]="['/books']">목록</a>
        <a [routerLink]="['/book']">상세</a>
        <router-outlet></router-outlet>
`
})
export class AppComponent { }
