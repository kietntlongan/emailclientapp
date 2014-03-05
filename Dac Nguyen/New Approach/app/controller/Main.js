Ext.define('EmailPrototype.controller.Main', {
    extend: 'EmailPrototype.controller.AbstractFdController',

     init: function(application){
    var me = this,
        controller;
        
    // Create 1 instances of the MainPanelController controller. 
    // Ids of controllers are saved in me.dynamicControllers
    controller = me.createController('MainPanelController');
  },

  getViewItems: function(){
    var me = this,
        controllerId, controller, nestedView,
        i = 0,
        items = new Array();
    
    for (; i < me.dynamicControllers.length; i++){
      controllerId = me.dynamicControllers[i];
      controller = me.getController(controllerId);
      nestedView = controller.getViewConfig();
      if (nestedView){
        nestedView = Ext.apply(nestedView, {});
        items.push(nestedView);
      }
    }
    
    return items;
  },

    getViewConfig:function(){
        var me = this, containedItems;

        var viewId = me.getViewId('maincard');
        containedItems = me.getViewItems();
      //  debugger; /// MAIN
        cfg = {
            xtype: 'panel',
            anchor: '100% -46',
            itemId: viewId,
            header: false,
            layout: {
                type: 'card',
                deferredRender: false
            },
            items: containedItems
        }
        return cfg;
    },

});
