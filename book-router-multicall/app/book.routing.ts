import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookComponent }  from './book.component';
import { BookDetail1Component }      from './book-detail1.component';
import { BookDetail2Component }      from './book-detail2.component';
const bookRoutes: Routes = [
{
    path:'book',
    component:BookComponent,
    children: [
        { path: '', component: BookDetail1Component },
        { path: 'book-detail1', component: BookDetail1Component },
        { path: 'book-detail2', component: BookDetail2Component }
    ]
}]; 

export const bookRouting: ModuleWithProviders = RouterModule.forChild(bookRoutes);