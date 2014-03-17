Ext.define('NewEmailApp.controller.email.EditToDoWindow', {
  extend: 'NewEmailApp.controller.AbstractFdController',
  
  requires:[
	'Ext.panel.Panel',
	'Ext.layout.container.Border'
	],
  views: [
    'email.EditToDoWindow'
  ],

  init: function(application){
    var me = this,
        controller;
  },
  
  getViewConfig: function(){
    var me = this, 
       viewId, cfg, containedItems;
    
    viewId = me.getViewId('email.EditToDoWindow');

    cfg = {
    	xtype: 'edittodowindow',
    	itemId: viewId
    }
    return cfg;
  }
});