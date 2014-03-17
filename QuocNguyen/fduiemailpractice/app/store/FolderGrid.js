Ext.define('FDUIEmailPractice.store.FolderGrid', { 
    extend: 'Ext.data.Store', 
    requires: ['FDUIEmailPractice.model.FolderEmail'],
    model: 'FDUIEmailPractice.model.FolderEmail',
    autoLoad: true
});