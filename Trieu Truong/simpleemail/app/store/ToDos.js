Ext.define('SimpleEmail.store.ToDos',{
	extend: 'Ext.data.Store',
	requires: ['SimpleEmail.model.ToDo'],

	model: 'SimpleEmail.model.ToDo',
    autoLoad: true
});  
