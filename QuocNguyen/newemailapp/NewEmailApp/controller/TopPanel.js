Ext.define('NewEmailApp.controller.TopPanel', {
  extend: 'NewEmailApp.controller.AbstractFdController',
  
  requires: [
    'Ext.panel.Panel'
  ],
  views: [
    'TopPanel'
  ],

  init: function(application){
    var me = this;

    this.control({
        'toppanel #btnSearch': {
            click: this.onBtnSearchClick
          }
    });
  },
  
  getViewConfig: function(){
    var me = this, 
       viewId, cfg;
    
    viewId = me.getViewId('TopPanel');

    cfg = {
			xtype: 'toppanel',
			itemId: viewId
    }
    return cfg;
  },
  onBtnSearchClick: function(button) {
    var me = this;
    var treePanel = Ext.ComponentQuery.query('folderTree')[0];
    var isSearchToDo = treePanel.collapsed;
    var strSearch = Ext.ComponentQuery.query('toppanel')[0].down('#txtSearch').getValue();
    this.fireEvent('searchItem', me, strSearch, isSearchToDo);
  }
});