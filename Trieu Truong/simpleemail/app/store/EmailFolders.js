Ext.define('SimpleEmail.store.EmailFolders',{
	extend: 'Ext.data.TreeStore',
	requires: ['SimpleEmail.model.EmailFolder'],

	model: 'SimpleEmail.model.EmailFolder',
    autoLoad: true   
});
