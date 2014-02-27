Ext.define('FDUIEmailPractice.store.FolderEmails', { 
    extend: 'Ext.data.TreeStore', 
    requires: ['FDUIEmailPractice.model.FolderEmail'],

    model: 'FDUIEmailPractice.model.FolderEmail',
    autoLoad: true
});