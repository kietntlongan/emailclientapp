Ext.define('EmailClient.controller.ToDoGrid', {
    extend: 'EmailClient.controller.AbstractFdController',
    
    requires: ['EmailClient.view.ToDoGrid',
               'EmailClient.controller.AbstractFdController'],
    
    views: ['ToDoGrid'],
    
	getViewConfig: function(){
		  var me = this, viewId, cfg;
		  
		  viewId = me.getViewId('todogrid');
		  cfg = {
		    xtype: 'todogrid',
		    itemId: viewId
		  }
		  return cfg;
	}
});
