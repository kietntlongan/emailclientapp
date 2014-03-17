Ext.define('NewEmailApp.controller.RightPanel', {
  extend: 'NewEmailApp.controller.AbstractFdController',
  
  requires: [
    'Ext.panel.Panel',
    'NewEmailApp.controller.email.PropertiesPanel',
    'NewEmailApp.controller.email.RelatedPanel'
  ],
  views: [
    'RightPanel'
  ],
  
  init: function(application){
    var me = this,
        controller;

   controller = me.createController('email.PropertiesPanel');
   controller = me.createController('email.RelatedPanel');

   me.listen({
      controller: {
        '*' : {
          onEmailFolderExpand: me.showRightPanel
        }
      }
    });
  },
  
  getViewItems: function(){
    var me = this,
        controllerId, controller, nestedView,
        i = 0,
        items = new Array();
    
        
    if (me.dynamicControllers == null)
    	return items;
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
  
  getViewConfig: function(){
    var me = this, 
       viewId, cfg, containedItems;
    
    viewId = me.getViewId('RightPanel');
    containedItems = me.getViewItems();

    cfg = {
    	xtype: 'rightpanel',
    	items: containedItems
    }
    return cfg;
  },
  showRightPanel: function(target,isEmail) {
    var rightPanel = Ext.ComponentQuery.query('rightpanel')[0];
    if (isEmail) {
      rightPanel.show();
    } else {
      rightPanel.hide();
    }
  }
});