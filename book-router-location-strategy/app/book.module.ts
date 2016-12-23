import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { FormsModule }   from '@angular/forms';
import { bookRouting } from './book.routing';
import { BookComponent } from './book.component';
import { BookDetail1Component } from './book-detail1.component';
import { BookDetail2Component } from './book-detail2.component';
import { WriteCheck } from './write-check.service';
import { LoginCheck } from './login-check.service';
@NgModule({
  imports:      [ BrowserModule,bookRouting, FormsModule ],
  declarations: [ BookComponent,
                  BookDetail1Component,
                  BookDetail2Component ],
  providers:     [WriteCheck, LoginCheck]
})
export class BookModule { }