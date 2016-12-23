import { NgModule }           from '@angular/core'
import { CommonModule }       from '@angular/common'
import { FormsModule }        from '@angular/forms'

import { CustComponent }   from './cust.component'
import { CustService }   from './cust.service'
@NgModule({
  imports:      [ CommonModule, FormsModule ],
  declarations: [ CustComponent ],
  exports:      [ CustComponent ],
  providers:    [ CustService ]
})
export class CustModule { }