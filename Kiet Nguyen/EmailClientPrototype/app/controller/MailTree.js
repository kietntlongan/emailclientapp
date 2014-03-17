Ext.define('EmailClient.controller.MailTree', {
    extend: 'EmailClient.controller.AbstractFdController',
    
    requires: ['EmailClient.store.Emails',
               'EmailClient.view.MailTree',
               'EmailClient.controller.AbstractFdController'],

    views: ['MailTree'],
    
	getViewConfig: function(){
	  var me = this, viewId, cfg, treeStore;
	  
	  treeStore = Ext.create('EmailClient.store.Folders');
	  
	  viewId = me.getViewId('mailtree');
	  cfg = {
	    xtype: 'mailtree',
	    itemId: viewId,
	    store: treeStore,
	    displayField: 'folder',
	    rootVisible: false
	  }
	  return cfg;
	}
});
