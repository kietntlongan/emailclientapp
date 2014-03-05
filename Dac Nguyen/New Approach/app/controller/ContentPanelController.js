Ext.define('EmailPrototype.controller.ContentPanelController', {
    extend: 'EmailPrototype.controller.AbstractFdController',

    config:{
          mailGridController: null,
          previewController: null
        },

    init: function(application) {
          var me = this,
        controller;

        previewController = me.createController('PreviewPanelController');
        mailGridController = me.createController('MailGridController');
    },

    getViewItems: function(){
    var me = this,
        previewView, mailGridView,
        items = new Array();
  	
    previewView = previewController.getViewConfig();
    previewView =  Ext.apply(previewView, {collapsible: true, region: 'south', itemId: 'previewpanel'});
    items.push(previewView);

    mailGridView = mailGridController.getViewConfig();

    var containGridCfg = {
	    xtype: 'container',
        margins: '0 0 10 0',
        region: 'center',
        itemId: 'contentpanelCenter',
        layout: 'fit',
        items: mailGridView
    };

    items.push(containGridCfg);
     

    return items;
  },

    getViewConfig:function(){
        var me = this, containedItems, cfg;

        var viewId = me.getViewId('contentpanel');
        containedItems = me.getViewItems();
        cfg = {
            xtype: 'contentpanel',
            itemId: viewId,
            items: containedItems
        }
     //   debugger;
        return cfg;
    },

});