Ext.define('NewEmailApp.store.Emails', { 
    extend: 'Ext.data.Store', 
    requires: ['NewEmailApp.model.Email'],
    model: 'NewEmailApp.model.Email',
    autoLoad: true
});