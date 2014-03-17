Ext.define('NewEmailApp.controller.todo.OwnerGridPanel', {
  extend: 'NewEmailApp.controller.AbstractFdController',
  views: [
    'todo.OwnerGridPanel'
  ],
  stores: ['Owners'],

  getViewConfig: function(){
    
    var me = this, 
       viewId, cfg;
    
    viewId = me.getViewId('todo.OwnerGridPanel');

    cfg = {
        xtype: 'ownerGrid',
        itemId: viewId
    }
    return cfg;
  }
});