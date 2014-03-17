Ext.define("EmailClient.view.ContentPanel", {
	extend: 'Ext.panel.Panel',
	xtype: 'widget.contentpanel',
	alias: 'widget.contentpanel',
    layout: {
        type: 'vbox',
        align: 'stretch'
    },	
	requires: ['EmailClient.view.ContentPanelToolbar', 
	           'EmailClient.view.MailContentGrid', 
	           'EmailClient.view.ToDoGrid'],
	title: 'List of items',
	//items: [{
		//xtype: 'panel',
	    itemId: 'contentpanelCenter',
	    items: [{
	            xtype: 'contentpaneltoolbar',
	            itemId: 'contentpaneltoolbar'
	        }, {
	        	xtype: 'todogrid',
	        	itemId: 'todogrid'	        
	        }, {
	        	xtype: 'mailcontentgrid',
	        	itemId: 'mailcontentgrid'
	        }]
	        
	//}]
});