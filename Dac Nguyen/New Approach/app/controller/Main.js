Ext.define('EmailPrototype.controller.Main', {
    extend: 'EmailPrototype.controller.AbstractFdController',

    requires:[
     'Ext.layout.container.HBox'
    ],

   config:{
    //        navigationPanelController: null,
          navigationController: null,
          mainPanelController: null
    },

    init: function(application){
    var me = this;
        
    // Create 1 instances of the MainPanelController controller. 
    // Ids of controllers are saved in me.dynamicControllers
    mainPanelController = me.createController('MainPanelController');
    navigationController = me.createController('west.NavigationPanelController');
  },

  getViewItems: function(){
    var me = this, navView, mainView,
        items = new Array();
    
        navView = navigationController.getViewConfig();
        navView = Ext.apply(navView, {collapsible: true, collapseDirection: 'left'});
        items.push(navView);

        mainView = mainPanelController.getViewConfig();
        mainView = Ext.apply(mainView, {flex: 1});
        items.push(mainView);

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
                type: 'hbox',
                align: 'stretch'
            },
            items: containedItems
        }
        return cfg;
    }

});
