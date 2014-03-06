Ext.define('EmailPrototype.controller.center.TodoGridController', {
    extend: 'EmailPrototype.controller.AbstractFdController',

     getViewConfig:function(){
        var me = this, containedItems, cfg;

        var viewId = me.getViewId('todogrid');

        cfg = {
            xtype: 'todogrid',
            itemId: viewId,
        }
        return cfg;
    },

});