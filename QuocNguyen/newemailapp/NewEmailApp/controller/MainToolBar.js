Ext.define('NewEmailApp.controller.MainToolBar', {
  extend: 'NewEmailApp.controller.AbstractFdController',
  
  requires:[
	'Ext.toolbar.Toolbar'
	],
  views: [
    'MainToolBar'
  ],

  init: function(application){
    var me = this,
        controller;
  },
  
  getViewConfig: function(){
    var me = this, 
       viewId, cfg, containedItems;
    
    viewId = me.getViewId('MainToolBar');

    cfg = {
    	xtype: 'maintoolbar',
    	itemId: viewId
    }
    return cfg;
  },

  //
  isDockedItem: function(){
    return true;
  }
});