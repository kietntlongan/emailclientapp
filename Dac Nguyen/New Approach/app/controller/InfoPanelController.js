Ext.define('EmailPrototype.controller.InfoPanelController', {
    extend: 'EmailPrototype.controller.AbstractFdController',

	models: [],
    views: ['InformationPanel'],
    requires: [],
    
	getViewConfig:function(){
        var me = this, cfg;

        var viewId = me.getViewId('informationpanel');

        cfg = {
            xtype: 'informationpanel',
            itemId: viewId
        }
        
        return cfg;
	}

});