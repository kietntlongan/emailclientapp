Ext.define('EmailClient.store.Folders', {
    extend : 'Ext.data.TreeStore',

    requires: ['EmailClient.model.Folder'],
    
    model : 'EmailClient.model.Folder',
    nodeParam: 'children',
    
    autoLoad : true


});