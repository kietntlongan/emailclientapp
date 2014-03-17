Ext.define('EmailClient.controller.EmailClientApp', {
    extend: 'Ext.app.Application',
    name: 'EmailClient',
   
	requires: [
	           'EmailClient.view.Viewport',
	           'EmailClient.controller.AppHeader',
	           'EmailClient.controller.LeftPanel',
	           'EmailClient.controller.RightPanel',
	           'EmailClient.controller.ContentPanel'
	],  
	
	launch:  function() {
	    //debugger;
	    
	    var me = this,
	        headerController, 
	        headerViewConfig, 
	        leftPanelController, 
	        leftPanelViewConfig,
	        previewPanelController,
	        previewPanelViewConfig,
	        rightPanelController,
	        rightPanelViewConfig,
	        contentPanelController,
	        contentPanelViewConfig,	        
	        viewportConfig;
	    
	    headerController = me.createController('AppHeader', {});
	    headerViewConfig = headerController.getViewConfig();	    
	    headerViewConfig = Ext.apply(headerViewConfig, {region: 'north'});
	    
	    leftPanelController = me.createController('LeftPanel', {});
	    leftPanelViewConfig = leftPanelController.getViewConfig();
	    leftPanelViewConfig = Ext.apply(leftPanelViewConfig, {region: 'west'});

	    previewPanelController = me.createController('PreviewPanel', {});
	    previewPanelViewConfig = previewPanelController.getViewConfig();
	    previewPanelViewConfig = Ext.apply(previewPanelViewConfig, {region: 'south'});

	    rightPanelController = me.createController('RightPanel', {});
	    rightPanelViewConfig = rightPanelController.getViewConfig();
	    rightPanelViewConfig = Ext.apply(rightPanelViewConfig, {region: 'east'});

	    contentPanelController = me.createController('ContentPanel', {});
	    contentPanelViewConfig = contentPanelController.getViewConfig();
	    contentPanelViewConfig = Ext.apply(contentPanelViewConfig, {region: 'center'});
	    	    	    
        //debugger;
	    viewportConfig = {
	      items: [
	              headerViewConfig,
	              leftPanelViewConfig,
	              previewPanelViewConfig,
	              rightPanelViewConfig,
	              contentPanelViewConfig
	      ]};
	    
	    debugger;
	    Ext.create('EmailClient.view.Viewport', viewportConfig);
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
