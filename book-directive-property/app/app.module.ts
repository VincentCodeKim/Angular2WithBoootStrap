import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { AppComponent }   from './app.component';
import { BookComponent } from './book.component';
import { TextSizeDirective } from './text-size.directive'

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule ],
  declarations: [ AppComponent, BookComponent, TextSizeDirective ],
  bootstrap:    [ AppComponent]
})
export class AppModule { }