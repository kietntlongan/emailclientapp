Ext.define('SimpleEmail.Application', {
    name: 'SimpleEmail',

    extend: 'Ext.app.Application',

    views: [
        //'SimpleEmail.view.Viewport',
    ],

    controllers: [
       'SimpleEmail.controller.Mail'
       //'SimpleEmail.controller.ToDo'
    ],

    stores: [
        
    ]
});
