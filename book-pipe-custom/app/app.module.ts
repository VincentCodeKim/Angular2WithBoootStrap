import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { BookComponent } from './book.component';
import { MyDatePipe } from './mydate.pipe';
@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, BookComponent, MyDatePipe ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }