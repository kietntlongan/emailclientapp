Ext.define('EmailClient.controller.ContentPanelToolbar', {
    extend: 'EmailClient.controller.AbstractFdController',
    
    requires: ['EmailClient.view.ContentPanelToolbar'],
    
    views: ['ContentPanelToolbar'],
    
	getViewConfig: function(){
		  var me = this, viewId, cfg;
		  
		  viewId = me.getViewId('contentpaneltoolbar');
		  cfg = {
		    xtype: 'contentpaneltoolbar',
		    itemId: viewId
		  }
		  return cfg;
	},

	init: function() {
	    this.control({
	        'contentpaneltoolbar #newbutton': {
	        	click: this.onNewButtonClick
	        }
	    });	
	},
	
	onNewButtonClick: function() {
		if(this.getLeftPanel().down('panel:not([collapsed])').xtype == 'folderTree') {
			Ext.create('EmailClient.view.NewMessageWindow');
		} else {
			Ext.create('EmailClient.view.NewToDoWindow');
		}
		
	}

});
