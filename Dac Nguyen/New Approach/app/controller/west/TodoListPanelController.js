Ext.define('EmailPrototype.controller.west.TodoListPanelController', {
    extend: 'EmailPrototype.controller.AbstractFdController',

    models: [
         'User',
        'Todo'
          ],
    views: ['west.TodoListPanel',],
    
    stores: [ 'UserStore',],      

    
    init: function(application) {
        var me = this;

    },

     getViewConfig:function(){
        var me = this;
        var viewId = me.getViewId('todolistpanel');
        cfg = {
            xtype: 'todolistpanel',
            itemId: viewId
        }
        return cfg;
    }



});