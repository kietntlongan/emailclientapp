/*
 * File: app.js
 *
 * This file was generated by Sencha Architect version 3.0.2.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.2.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.2.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

// @require @packageOverrides
Ext.Loader.setConfig({
    enabled: true
});


Ext.application({
   
   requires:['EmailPrototype.view.MyViewport'],

    name: 'EmailPrototype',

    launch: function() {
        var me = this, toolbarController, toolbarViewConfig, mainController, mainViewConfig;

        toolbarController = me.createController('TopToolbarPanelController',{});
        toolbarViewConfig = toolbarController.getViewConfig();
     //   debugger;
        mainController = me.createController('Main',{});
        mainViewConfig = mainController.getViewConfig();
    //    debugger;

        viewportConfig =  {
          items: [
            toolbarViewConfig,
            mainViewConfig
          ]
        };

        Ext.create('EmailPrototype.view.MyViewport', viewportConfig);
    },

    //Create a controller with specific name.
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
