import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { AppComponent }   from './app.component';
import { BookComponent } from './book.component';
import './rxjs-extentions';

@NgModule({
  imports:      [ BrowserModule, HttpModule ],
  declarations: [ AppComponent, BookComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }