Ext.define('SimpleEmail.store.Emails',{
	extend: 'Ext.data.Store',
	requires: ['SimpleEmail.model.Email'],
	model: 'SimpleEmail.model.Email',
	autoLoad: true
});
/*    updateFolder: function(folder){
this.load({
	params:{
		folder: folder
	}
});
},*/