Ext.define('NewEmailApp.controller.email.FolderTreePanel', {
  extend: 'NewEmailApp.controller.AbstractFdController',
  views: [
    'email.FolderTreePanel'
  ],
  stores: ['FolderEmails'],

  getViewConfig: function(){
    
    var me = this, 
       viewId, cfg;
    
    viewId = me.getViewId('email.FolderTreePanel');

    cfg = {
    		xtype: 'folderTree',
    		itemId: viewId
    }
    return cfg;
  }
});