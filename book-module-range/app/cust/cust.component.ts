import {Component} from '@angular/core'
import { CustService }    from './cust.service'
@Component({
    selector: 'cust',
    templateUrl: './app/cust/cust.component.html',
    styleUrls:["./assets/stylesheets/cust.css"]
})
export class CustComponent {
    name:string
    age:number
    constructor(private custService: CustService) {
        var obj = custService.getCust()
        this.name = obj.name
        this.age = obj.age
    }
}
