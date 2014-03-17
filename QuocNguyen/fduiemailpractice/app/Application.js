Ext.define('FDUIEmailPractice.Application', {
    name: 'FDUIEmailPractice',

    extend: 'Ext.app.Application',

    views: [
        // TODO: add views here
    ],

    controllers: ['FDUIEmailPractice.controller.Email',
                  'FDUIEmailPractice.controller.ToDo',
                  'FDUIEmailPractice.controller.FullTextSearch'
    ],

    stores: [
        // TODO: add stores here
    ]
});
