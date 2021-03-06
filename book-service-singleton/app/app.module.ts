import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { BookComponent } from './book.component';
import { CommonService } from './common.service';
@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, BookComponent ],
  bootstrap:    [ AppComponent ],
  providers:[CommonService]
})
export class AppModule { }