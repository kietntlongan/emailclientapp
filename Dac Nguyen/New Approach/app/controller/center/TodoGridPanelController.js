Ext.define('EmailPrototype.controller.center.TodoGridPanelController', {
    extend: 'EmailPrototype.controller.AbstractFdController',

    models: [],
    views: ['center.TodoGridPanel'],
    requires: [],

     getViewConfig:function(){
        var me = this, containedItems, cfg;

        var viewId = me.getViewId('todogridpanel');

        cfg = {
            xtype: 'todogridpanel',
            itemId: viewId
        };
        return cfg;
    }

});