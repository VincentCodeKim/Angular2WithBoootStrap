"use strict";
var router_1 = require('@angular/router');
var book_component_1 = require('./book.component');
var book_detail1_component_1 = require('./book-detail1.component');
var book_detail2_component_1 = require('./book-detail2.component');
var bookRoutes = [
    {
        path: 'book',
        component: book_component_1.BookComponent,
        children: [
            { path: '', component: book_detail1_component_1.BookDetail1Component },
            { path: 'book-detail1', component: book_detail1_component_1.BookDetail1Component },
            { path: 'book-detail2', component: book_detail2_component_1.BookDetail2Component }
        ]
    }];
exports.bookRouting = router_1.RouterModule.forChild(bookRoutes);
//# sourceMappingURL=book.routing.js.map