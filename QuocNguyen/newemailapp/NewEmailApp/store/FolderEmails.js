Ext.define('NewEmailApp.store.FolderEmails', { 
    extend: 'Ext.data.TreeStore', 
    requires: ['NewEmailApp.model.FolderEmail'],
    model: 'NewEmailApp.model.FolderEmail',
    autoLoad: true
});