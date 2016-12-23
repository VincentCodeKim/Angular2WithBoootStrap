import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { AppComponent }   from './app.component';
import { BookComponent } from './book.component';
 import {} from '@angular/forms'; 

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule ],
  declarations: [ AppComponent, BookComponent ],
  bootstrap:    [ AppComponent]
})
export class AppModule { }