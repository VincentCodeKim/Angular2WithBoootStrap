import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { routing } from './app.routing';
import { BooksComponent } from './books.component';
import { BookComponent } from './book.component';
@NgModule({
  imports:      [ BrowserModule, routing ],
  declarations: [ AppComponent, 
                  BooksComponent,
                  BookComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }