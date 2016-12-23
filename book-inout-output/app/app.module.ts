import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { BookComponent } from './book.component';
import { BookImageComponent } from './book-image.component';
@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, BookComponent, BookImageComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }