"use strict";
var router_1 = require('@angular/router');
var books_component_1 = require('./books.component');
var appRoutes = [
    {
        path: '',
        component: books_component_1.BooksComponent
    }, {
        path: 'books',
        component: books_component_1.BooksComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map