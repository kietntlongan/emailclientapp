Ext.define('NewEmailApp.controller.email.PreviewPanel', {
  extend: 'NewEmailApp.controller.AbstractFdController',
  
  requires:[
	'Ext.panel.Panel',
	'Ext.layout.container.Border'
	],
  views: [
    'email.PreviewPanel'
  ],

  init: function(application){
    var me = this,
        controller;

    me.listen({
      controller: {
        '*' : {
          changeEmail: me.onEmailChange,
          onEmailFolderExpand: me.showPreview
        }
      }
    });
  },
  
  getViewConfig: function(){
    var me = this, 
       viewId, cfg, containedItems;
    
    viewId = me.getViewId('email.PreviewPanel');

    cfg = {
    	xtype: 'previewpanel',
    	itemId: viewId
    }
    return cfg;
  },
  refreshTemplate: function(email){
    var previewPanel = Ext.ComponentQuery.query('previewpanel')[0];
    if (email) {
      previewPanel.update(email.getData());
    } else {
      previewPanel.update(' ');
    }
  },
  onEmailChange: function(target,email) {
      this.refreshTemplate(email);
  },
  showPreview: function(target,isEmail) {
    var previewPanel = Ext.ComponentQuery.query('previewpanel')[0];
    if (isEmail) {
      previewPanel.show();
    } else {
      previewPanel.hide();
    }
  }
});