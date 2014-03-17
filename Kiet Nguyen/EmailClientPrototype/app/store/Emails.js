Ext.define('EmailClient.store.Emails', {
    extend : 'Ext.data.Store',
    requires: ['EmailClient.model.Email'],

    model : 'EmailClient.model.Email',
    autoLoad : true

});