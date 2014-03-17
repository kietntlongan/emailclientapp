Ext.define('EmailClient.controller.PreviewPanel', {
    extend: 'EmailClient.controller.AbstractFdController',
    
    requires: ['EmailClient.view.PreviewPanel',
               'EmailClient.controller.AbstractFdController'],
    views: ['PreviewPanel'],
    
    getViewConfig: function() {
	  	var me = this, viewId, cfg;
	  
		viewId = me.getViewId('previewpanel');
		cfg = {
			xtype: 'previewpanel',
			itemId: viewId,
			collapsible: true,
			split: true,
			weight: -20,
			height: 130,	
			layout: 'fit',
			//requires: ['Ext.form.Label']
			
			//config: {
			//	email: null
			//},
			
			tpl: ['<div>{message}</div>']		  
		}
		return cfg;		
	}

});
