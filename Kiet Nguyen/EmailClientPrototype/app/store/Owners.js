Ext.define('EmailClient.store.Owners', {
    extend : 'Ext.data.Store',
    requires: ['EmailClient.model.Owner'],

    model : 'EmailClient.model.Owner',
    autoLoad : true

});