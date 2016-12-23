"use strict";
var router_1 = require('@angular/router');
var book_component_1 = require('./book.component');
var book_detail1_component_1 = require('./book-detail1.component');
var book_detail2_component_1 = require('./book-detail2.component');
var login_check_service_1 = require('./login-check.service');
var write_check_service_1 = require('./write-check.service');
var bookRoutes = [
    {
        path: 'book',
        component: book_component_1.BookComponent,
        canActivate: [login_check_service_1.LoginCheck],
        canDeactivate: [write_check_service_1.WriteCheck],
        children: [
            { path: '', component: book_detail1_component_1.BookDetail1Component },
            { path: 'book-detail1', component: book_detail1_component_1.BookDetail1Component },
            { path: 'book-detail2', component: book_detail2_component_1.BookDetail2Component }
        ]
    }];
exports.bookRouting = router_1.RouterModule.forChild(bookRoutes);
//# sourceMappingURL=book.routing.js.map