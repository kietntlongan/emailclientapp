Ext.define('NewEmailApp.controller.LeftPanel', {
  extend: 'NewEmailApp.controller.AbstractFdController',
  
  requires: [
    'Ext.panel.Panel',
    'NewEmailApp.controller.email.FolderTreePanel',
    'NewEmailApp.controller.todo.OwnerGridPanel'
  ],
  views: [
    'LeftPanel'
  ],
  stores: ['Emails','ToDos'],
  init: function(application){
    var me = this,
        controller;
        
    controller = me.createController('email.FolderTreePanel');
    controller = me.createController('todo.OwnerGridPanel');

    this.control({
        'folderTree': {
          itemclick: me.onFolderChange,
          expand: me.loadEmailPanel
        },
        'ownerGrid': {
            itemclick: this.onOwnerChange,
            expand: this.loadToDoPanel
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
    
    viewId = me.getViewId('LeftPanel');
    containedItems = me.getViewItems();

    cfg = {
    		xtype: 'leftpanel',
    		items: containedItems
    }
    return cfg;
  },

  onFolderChange: function(grid, folder) {
    this.fireEvent('folderChange', this, folder);
  },

  onOwnerChange: function(grid, owner) {
    this.fireEvent('ownerChange', this, owner);
  },

  loadEmailPanel: function() {
    this.fireEvent('onEmailFolderExpand', this, true);
  },  

  loadToDoPanel: function() {
    this.fireEvent('onEmailFolderExpand', this, false);
  }
});