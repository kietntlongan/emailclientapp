Ext.define('NewEmailApp.store.Owners', { 
    extend: 'Ext.data.Store', 
    requires: ['NewEmailApp.model.Owner'],
    model: 'NewEmailApp.model.Owner',
    autoLoad: true
});