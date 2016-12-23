import {Component} from '@angular/core';
@Component({
    selector: 'my-app',
    template:`
        <h3>문자열</h3>
        string: {{str}} <br>
        string | uppercase: {{str|uppercase}} <br>
        string | lowercase: {{str|lowercase}} <br>
        <h3>슬라이스</h3>
        slice: {{str}} <br>
        slice | slice:0:3: {{str|slice:0:3}} <br>
        slice | slice:3:5: {{str|slice:3:5}} <br>
        <h3>숫자</h3>
        number: {{num}} <br>
        number | number:'.5-10': {{num|number:'.5-10'}} <br>
        number | number:'2.1-6': {{num|number:'2.1-6'}} <br>
        number | number:'10.0-3': {{num|number:'10.0-3'}} <br>
        <h3>퍼센트</h3>
        percent | percent: {{num|percent}} <br>
        percent | percent:'2.1-6': {{num|percent:'2.1-6'}} <br>
        <h3>날짜</h3>
        date: {{date}} <br>
        date | date: {{date|date}} <br>
        date | date:'fullDate': {{date|date:"fullDate"}} <br>
        date | date:'yyyy/MM/dd': {{date|date:"yyyy/MM/dd"}} <br>
        <h3>통화</h3>
        money:{{money|currency}}<br>
        money:{{money|currency:'USD'}}<br>
        money:{{money|currency:'USD':true}}<br>
        money:{{money|currency:'KRW'}}<br>
        money:{{money|currency:'KRW':true}}<br>
        <h3>JSON</h3>
        json:{{json}}<br>
        json:{{json|json}}<br>
    `
})
export class AppComponent {
   str = "abcdEFG";
   num = 123456.123456;
   date = new Date(2017, 1, 1);
   money = 1000000;
   json = { info:{ name:'사용자1', age:20}, list:[{ name:'사용자1', age:20},{ name:'사용자2', age:20}]};
}
