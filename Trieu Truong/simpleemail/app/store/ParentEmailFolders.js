Ext.define('SimpleEmail.store.ParentEmailFolders',{
    extend: 'Ext.data.TreeStore',
    requires: ['SimpleEmail.model.ParentEmailFolder'],

    model: 'SimpleEmail.model.ParentEmailFolder',
    autoLoad: true,    
    sorters: ['folder']
});
