Ext.define('EmailPrototype.controller.center.ContentPanelController', {
    extend: 'EmailPrototype.controller.AbstractFdController',

    models: [],
    views: [ 
    'center.MailGridPanel',
    'center.TodoGridPanel',
    'center.ContentPanel',
    'center.PreviewPanel',
    'NewMessageWindow',
    'NewTodoWindow'
    ],
    requires: [],

    config:{
          mailGridController: null,
          previewController: null
        },

    init: function(application) {
          var me = this,
        controller;

        previewController = me.createController('center.PreviewPanelController');
        mailGridController = me.createController('center.MailGridPanelController');

         this.control({
            "#NewButton": {
                click: this.onNewButtonClick
            }
        });
    },

    
     onNewButtonClick: function(button, e, eOpts) {
        var contentPanel = button.up('#contentpanelCenter');
        //debugger;
        if(contentPanel.getComponent(0).getXType() === 'mailgridpanel') {
           // console.log('mailgrid');
            Ext.create('EmailPrototype.view.NewMessageWindow');
        } else {
          //  console.log('todogrid');
            Ext.create('EmailPrototype.view.NewTodoWindow');
        }

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
        margins: '0 0 5 5',
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
    }

});