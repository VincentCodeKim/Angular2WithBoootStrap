import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { bookRouting } from './book.routing';
import { BooksComponent }      from './books.component';
import { BookComponent }      from './book.component';

const appRoutes: Routes = [
  {
    path: '',
    component: BooksComponent
  },{
    path: 'books',
    component: BooksComponent
  }
];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);