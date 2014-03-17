Ext.define('NewEmailApp.controller.email.EditEmailWindow', {
  extend: 'NewEmailApp.controller.AbstractFdController',
  
  requires:[
	'Ext.panel.Panel',
	'Ext.layout.container.Border'
	],
  views: [
    'email.EditEmailWindow'
  ],

  init: function(application){
    var me = this,
        controller;
  },
  
  getViewConfig: function(){
    var me = this, 
       viewId, cfg, containedItems;
    
    viewId = me.getViewId('email.EditEmailWindow');

    cfg = {
    	xtype: 'editemailwindow',
    	itemId: viewId
    }
    return cfg;
  }
});