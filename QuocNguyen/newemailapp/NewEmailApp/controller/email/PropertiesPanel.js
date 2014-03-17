Ext.define('NewEmailApp.controller.email.PropertiesPanel', {
  extend: 'NewEmailApp.controller.AbstractFdController',
  
  requires:[
	'Ext.panel.Panel',
	'Ext.layout.container.Border'
	],
  views: [
    'email.PropertiesPanel'
  ],
  
  init: function(application){
    var me = this,
        controller;
    me.listen({
      controller: {
        '*' : {changeEmail: me.onEmailChange}
      }
    });
  },
  
  getViewConfig: function(){
    var me = this, 
       viewId, cfg, containedItems;
    
    viewId = me.getViewId('email.PropertiesPanel');

    cfg = {
    	xtype: 'propertiespanel',
    	itemId: viewId
    }
    return cfg;
  },
  refreshTemplate: function(email){
    var propertiesPanel = Ext.ComponentQuery.query('propertiespanel')[0];
    if (email) {
      propertiesPanel.update(email.getData());
    } else {
      propertiesPanel.update(' ');
    }
  },
  onEmailChange: function(target,email) {
      this.refreshTemplate(email);
  }
});