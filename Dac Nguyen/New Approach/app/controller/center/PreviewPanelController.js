Ext.define('EmailPrototype.controller.center.PreviewPanelController', {
    extend: 'EmailPrototype.controller.AbstractFdController',

	models: [],
    views: [ 'center.PreviewPanel',],
    requires: [],

    getViewConfig:function(){
	        var me = this, cfg;

	        var viewId = me.getViewId('previewpanel');

	        cfg = {
	            xtype: 'previewpanel',
	            itemId: viewId
	        };
	        
	        return cfg;
    	}
    
});