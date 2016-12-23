import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import {ImageComponent} from './image.component';
@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, ImageComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }