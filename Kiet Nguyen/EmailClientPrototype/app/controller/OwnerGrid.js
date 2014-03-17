Ext.define('EmailClient.controller.OwnerGrid', {
    extend: 'EmailClient.controller.AbstractFdController',
    
    requires: ['EmailClient.store.Owners',
               'EmailClient.view.OwnerGrid',
               'EmailClient.controller.AbstractFdController'],
               
   views: ['OwnerGrid'],
   
   getViewConfig: function(){
	  var me = this, viewId, cfg, ownerStore;
	  
	  ownerStore = Ext.create('EmailClient.store.Owners');
	  
	  viewId = me.getViewId('ownergrid');
	  cfg = {
	    xtype: 'ownergrid',
	    itemId: viewId,
	    store: ownerStore,
	    hideHeaders: true,
	    rowLines: false
	  }
	  return cfg;
	}
});
