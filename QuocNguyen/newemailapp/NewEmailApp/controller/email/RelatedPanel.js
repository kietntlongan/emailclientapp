Ext.define('NewEmailApp.controller.email.RelatedPanel', {
  extend: 'NewEmailApp.controller.AbstractFdController',
  
  requires:[
  'Ext.panel.Panel',
  'Ext.layout.container.Border'
  ],
  views: [
    'email.RelatedPanel'
  ],
  
  init: function(application){
    var me = this,
        controller;
  },
  
  getViewConfig: function(){
    var me = this, 
       viewId, cfg, containedItems;
    
    viewId = me.getViewId('email.RelatedPanel');

    cfg = {
      xtype: 'relatedpanel',
      itemId: viewId
    }
    return cfg;
  }
});