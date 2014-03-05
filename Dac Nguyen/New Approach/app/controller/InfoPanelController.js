Ext.define('EmailPrototype.controller.InfoPanelController', {
    extend: 'EmailPrototype.controller.AbstractFdController',


    	getViewConfig:function(){
	        var me = this, cfg;

	        var viewId = me.getViewId('informationpanel');

	        cfg = {
	            xtype: 'informationpanel',
	            itemId: viewId, 
	        }
	        
	        return cfg;
    	},

});