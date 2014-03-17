Ext.define('NewEmailApp.store.ToDos', { 
    extend: 'Ext.data.Store', 
    requires: ['NewEmailApp.model.ToDo'],
    model: 'NewEmailApp.model.ToDo',
    autoLoad: true
});