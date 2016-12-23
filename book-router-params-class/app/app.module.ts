import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { routing } from './app.routing';
import { BooksComponent } from './books.component';
import { BookModule } from './book.module';

@NgModule({
  imports:      [ BrowserModule, routing, BookModule ],
  declarations: [ AppComponent, 
                  BooksComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }