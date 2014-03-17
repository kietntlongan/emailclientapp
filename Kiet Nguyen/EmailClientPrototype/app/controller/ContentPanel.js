Ext.define('EmailClient.controller.ContentPanel', {
    extend: 'EmailClient.controller.AbstractFdController',
    
    requires: ['EmailClient.controller.ContentPanelToolbar', 
               'EmailClient.controller.MailContentGrid', 
               'EmailClient.controller.ToDoGrid'],
    
	init: function(application){
	    var me = this,
	        contentPanelToolbarController,
	        mailContentGridController,
	        toDoGridController;
	        
	    // Create 3 instances of the controller. 
	    // Ids of controllers are saved in me.dynamicControllers
	    contentPanelToolbarController = me.createController('ContentPanelToolbar');
	    mailContentGridController = me.createController('MailContentGrid');
	    toDoGridController = me.createController('ToDoGrid');
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
 
		 viewId = me.getViewId('contentpanel');
		 containedItems = me.getViewItems();
		
		 cfg = {
		   xtype: 'panel',
		   itemId: viewId,
		   title: 'List of items',
		   //split: true,
		   //collapsible: true,
		   width: 200,
		   layout: {
		        type: 'vbox',
		        align: 'stretch'
		   },
		   items: containedItems
		 }
		 
		 return cfg;	
	}   
});
