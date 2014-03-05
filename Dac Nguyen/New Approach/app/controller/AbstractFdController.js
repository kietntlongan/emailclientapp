Ext.define('EmailPrototype.controller.AbstractFdController', {
  extend: 'Ext.app.Controller', 

//Define config to use 2 variables.
  config: {
  	dynamicControllers: null,
 	 viewIds: null,
  },

//Create controller base on app.createController. Then add to dynamicControllers
createController: function(name, config){
    var me = this,
        controller,
        app = me.application;

    controller = app && app.createController(name, config);
    if (controller && controller.id){
      if (!me.dynamicControllers){
        me.dynamicControllers = new Array();
      }
      me.dynamicControllers.push(controller.id);
    }
    return controller;
  },

//????
getViewConfig: function(){
    return undefined;
  },

// Create and return viewId use Ext.id(), then add to me.viewIds. 
getViewId: function(viewXtype){
    var me = this,
        viewId;
    if (!me.viewIds){
      me.viewIds = new Ext.util.HashMap();
    }
    viewId = me.viewIds.get(viewXtype);
    if (!viewId){
      viewId = Ext.id(null, viewXtype + '-');
      me.viewIds.add(viewXtype, viewId);
    }
    return viewId;
  },


 // getView base on Xtype (1 xtype >> 1 view)
  getView: function(viewXtype){
    var me = this,
        view, 
        query = viewXtype + '#' + me.getViewId(viewXtype);
    view = Ext.ComponentQuery.query(query);
    if (view.length > 0){
      view = view[0];
    } else {
      view = undefined;
    }
    return view;
  },

  destroy: function(){
    var me = this, viewKeys, viewKey, view, viewParent, i = 0;
    
    if (me.viewIds){
      viewKeys = viewIds.getKeys();
      for (viewKey in viewKeys){
        view = me.getView(viewKey);
        if (view){
          if (view.up){
            viewParent = view.up();
            if (viewParent && viewParent.remove){
              viewParent.remove(view);
            }
          }
          view.destroy();
        }
      }
    }

    if (me.stores){
      for (;i < me.stores.length; i++){
        Ext.data.StoreManager.removeAtKey(me.stores[i]);
      }
    }
    
    this.callParent(arguments);
  }

});