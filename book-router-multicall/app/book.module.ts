import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { bookRouting } from './book.routing';
import { BookComponent } from './book.component';
import { BookDetail1Component } from './book-detail1.component';
import { BookDetail2Component } from './book-detail2.component';
@NgModule({
  imports:      [ BrowserModule,bookRouting ],
  declarations: [ BookComponent,
                  BookDetail1Component,
                  BookDetail2Component ]
})
export class BookModule { }