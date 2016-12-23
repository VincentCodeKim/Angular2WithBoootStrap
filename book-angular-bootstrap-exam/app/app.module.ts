import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { ButtonComponent } from './widget/button.component'
import { ListComponent } from './widget/list.component'
import { PaginationComponent} from './widget/pagination.component'
import { FormsModule }   from '@angular/forms';
@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, 
                  ButtonComponent,
                  ListComponent,
                  PaginationComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }