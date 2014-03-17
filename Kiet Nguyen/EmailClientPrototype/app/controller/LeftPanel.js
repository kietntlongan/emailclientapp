Ext.define('EmailClient.controller.LeftPanel', {
    extend: 'EmailClient.controller.AbstractFdController',
    
    requires: ['Ext.panel.Panel',
               'EmailClient.controller.MailTree',
               'EmailClient.controller.OwnerGrid'],
    
	init: function(application){
	    var me = this,
	        mailTreeController,
	        ownerGridController;
	        
	    // Create 2 instances of the controller. 
	    // Ids of controllers are saved in me.dynamicControllers
	    mailTreeController = me.createController('MailTree');
	    ownerGridController = me.createController('OwnerGrid');
	},
	
	getViewItems: function() {
		var me = this,
	    controllerId, controller, nestedView,
	    i = 0,
	    items = new Array();

		for (; i < me.dynamicControllers.length; i++){
		  controllerId = me.dynamicControllers[i];
		  controller = me.getController(controllerId);
		  nestedView = controller.getViewConfig();
		  if (nestedView){
		    nestedView = Ext.apply(nestedView, {});
		    items.push(nestedView);
		  }
		}
		
		return items;
	},
	
	getViewConfig: function() {
		var me = this, 
			viewId, cfg, containedItems;
 
		 viewId = me.getViewId('leftpanel');
		 containedItems = me.getViewItems();
		
		 cfg = {
		   xtype: 'panel',
		   itemId: viewId,
		   split: true,
		   collapsible: true,
		   width: 200,
		   layout: {
			 type: 'accordion'
		   },
		   items: containedItems
		 }
		 
		 return cfg;	
	}
});
