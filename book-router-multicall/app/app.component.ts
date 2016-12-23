import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<a routerLink="/books" routerLinkActive="active">목록</a>
        <a [routerLink]="['/book','book-detail2']" routerLinkActive="active">상세</a>
        <router-outlet></router-outlet>
`
})
export class AppComponent { }
