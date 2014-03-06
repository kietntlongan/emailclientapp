Ext.define('EmailPrototype.controller.west.TodoListPanelController', {
    extend: 'EmailPrototype.controller.AbstractFdController',

    init: function(application) {
        var me = this;
        // this.control({
        //     "#NewButton": {
        //         click: this.onNewButtonClick
        //     }
        // });
    },

     getViewConfig:function(){
        var me = this;
        var viewId = me.getViewId('todolistpanel');
        cfg = {
            xtype: 'todolistpanel',
            itemId: viewId,
        }
        return cfg;
    },



});