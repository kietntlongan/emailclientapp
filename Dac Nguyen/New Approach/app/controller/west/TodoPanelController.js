Ext.define('EmailPrototype.controller.west.TodoPanelController', {
    extend: 'EmailPrototype.controller.AbstractFdController',

    models: [
         'User',
        'Todo'
          ],
    views: ['west.TodoPanel'],
    
    stores: [ 'UserStore'],      

    
    init: function(application) {
        var me = this;

    },

     getViewConfig:function(){
        var me = this;
        var viewId = me.getViewId('todopanel');
        cfg = {
            xtype: 'todopanel',
            itemId: viewId
        }
        return cfg;
    }



});