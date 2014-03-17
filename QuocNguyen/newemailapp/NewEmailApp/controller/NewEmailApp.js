Ext.define('NewEmailApp.controller.NewEmailApp',{
  extend: 'Ext.app.Application',
  name: 'NewEmailApp',
  appFolder: 'NewEmailApp',
  
  requires: [
    'NewEmailApp.view.Viewport'
  ],
  
//  uses: ['FdSample.controller.CrossWindowEventController'],
  /**
   * @cfg {String/String[]} dynamicControllers
   * Names of controllers that the app uses.
   */

  launch:  function() {
    //debugger;
    
    var me = this,
        topPanelController, 
        topPanelViewConfig,
        leftPanelController, 
        leftPanelViewConfig, 
        rightPanelController, 
        rightPanelViewConfig, 
        mainPanelController, 
        mainPanelViewConfig, 
        viewportConfig;
    
      topPanelController = me.createController('TopPanel', {});
      topPanelViewConfig = topPanelController.getViewConfig();
      topPanelViewConfig = Ext.apply(topPanelViewConfig, {region: 'north'});
    
      leftPanelController = me.createController('LeftPanel', {});
      leftPanelViewConfig = leftPanelController.getViewConfig();
      leftPanelViewConfig = Ext.apply(leftPanelViewConfig, {region: 'west'});
    
      rightPanelController = me.createController('RightPanel', {});
      rightPanelViewConfig = rightPanelController.getViewConfig();
      rightPanelViewConfig = Ext.apply(rightPanelViewConfig, {region: 'east'});
    
      mainPanelController = me.createController('MainPanel', {});
      mainPanelViewConfig = mainPanelController.getViewConfig();
      mainPanelViewConfig = Ext.apply(mainPanelViewConfig, {collapsible: true,  region: 'center'});
    
    viewportConfig = {
      items: [
        topPanelViewConfig,
        leftPanelViewConfig,
        rightPanelViewConfig,
        mainPanelViewConfig
      ]
    };
    //debugger;
    Ext.create('NewEmailApp.view.Viewport', viewportConfig);
    
  },
  
  createController: function(name, config){
    var me = this,
        className, controller,
        id = Ext.id(null, name + '-'),
        defaultConfig = {
          application: me,
          id: id
        };

    className  = me.getModuleClassName(name, 'controller');
    Ext.Loader.syncRequire(className);

    config = config || {};
    config = Ext.apply(config, defaultConfig);
    controller = Ext.create(className, config);
    controller.doInit(me);

    me.controllers.add(controller);

    return controller;
  },
  
  destroyController: function(controller){
    var me = this;
    controller = me.dynamicControllers.removeAtKey(controller.id);
    me.eventbus.unlisten(controller.id);
    controller.destroy();
  }
});