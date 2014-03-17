Ext.define('NewEmailApp.controller.MainPanel', {
  extend: 'NewEmailApp.controller.AbstractFdController',
  
  requires:[
	'Ext.panel.Panel',
	'Ext.layout.container.Border',
  'NewEmailApp.controller.ContentPanel',
  'NewEmailApp.controller.email.PreviewPanel'
	],
  views: [
    'MainPanel'
  ],
  config:{ContentPanelController: null,
          PreviewPanelController: null
        },
  init: function(application){
    var me = this,
        controller;
        
  },
  
  getViewItems: function(){
    var me = this,
        ContentPanelViewConfig, PreviewPanelViewConfig
    //     i = 0,
        items = new Array();

    ContentPanelController = me.createController('ContentPanel', {});
    ContentPanelViewConfig = ContentPanelController.getViewConfig();
    ContentPanelViewConfig = Ext.apply(ContentPanelViewConfig, {region: 'center'});
    items.push(ContentPanelViewConfig);

    PreviewPanelController = me.createController('email.PreviewPanel', {});
    PreviewPanelViewConfig = PreviewPanelController.getViewConfig();
    PreviewPanelViewConfig = Ext.apply(PreviewPanelViewConfig, {region: 'south',height: 100});
    items.push(PreviewPanelViewConfig);
    
    return items;
  },
  
  getViewConfig: function(){
    var me = this, 
       viewId, cfg, containedItems;
    
    viewId = me.getViewId('MainPanel');
    containedItems = me.getViewItems();

    cfg = {
    	xtype: 'mainpanel',
    	items: containedItems
    }
    return cfg;
  }
});