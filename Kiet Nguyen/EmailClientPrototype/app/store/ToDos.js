Ext.define('EmailClient.store.ToDos', {
    extend : 'Ext.data.Store',
    requires: ['EmailClient.model.ToDo'],

    model : 'EmailClient.model.ToDo',
    autoLoad : true
});