Ext.define('FDUIEmailPractice.store.Emails', { 
    extend: 'Ext.data.Store', 
    requires: ['FDUIEmailPractice.model.Email'],
    model: 'FDUIEmailPractice.model.Email',
    autoLoad: true
});