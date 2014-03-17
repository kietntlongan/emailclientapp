Ext.define('NewEmailApp.controller.email.EmailGridPanel', {
  extend: 'NewEmailApp.controller.AbstractFdController',
  views: [
    'email.EmailGridPanel'
  ],
  getViewConfig: function(){
    
    var me = this, 
       viewId, cfg;
    
    viewId = me.getViewId('email.EmailGridPanel');

    cfg = {
    		xtype: 'emailGrid',
    		itemId: viewId
    }
    return cfg;
  }
});