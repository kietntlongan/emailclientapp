Ext.define('EmailClient.controller.RightPanel', {
    extend: 'EmailClient.controller.AbstractFdController',
    
    requires: ['EmailClient.view.RightPanel'],
    
    views: ['RightPanel'],
    
	getViewConfig: function() {
	  	var me = this, viewId, cfg;
	  
		viewId = me.getViewId('rightpanel');
		cfg = {
			xtype: 'rightpanel',
			itemId: viewId
		}
		return cfg;		
	}
});
