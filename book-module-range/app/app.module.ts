import { NgModule }      from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppComponent }   from './app.component'
import { BookComponent } from './book.component'
import { CustModule } from './cust/cust.module'
@NgModule({
  imports:      [ BrowserModule, CustModule ],
  declarations: [ AppComponent, BookComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }