import { Injectable } from '@angular/core'
@Injectable()
export class CustService {
  getCust() {
    return {    
        name:'홍길동',
        age:21
    }
  }
}