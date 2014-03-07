Ext.define('EmailPrototype.controller.center.TodoGridController', {
    extend: 'EmailPrototype.controller.AbstractFdController',

    models: [],
    views: ['center.TodoGrid',],
    requires: [],

     getViewConfig:function(){
        var me = this, containedItems, cfg;

        var viewId = me.getViewId('todogrid');

        cfg = {
            xtype: 'todogrid',
            itemId: viewId
        };
        return cfg;
    }

});