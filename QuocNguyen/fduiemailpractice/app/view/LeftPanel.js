Ext.define("FDUIEmailPractice.view.LeftPanel", {
	extend: 'Ext.panel.Panel',
	xtype: 'leftpanel',
	layout: {
	    type: 'accordion'
	},

	collapsible: true,
	//title: 'Library Navigation',
	
	initComponent: function() {
	    var me = this;
	
	    Ext.applyIf(me, {
	        items: [
	            {
	                xtype: 'treepanel',
	                itemId : 'folderTree',
	                title: '<strong>Mail</strong>',
	                store: 'FolderEmails',
	                displayField: 'folder',
	                rootVisible: false,

	                viewConfig: {
	
	                }
	            },
	            {
	                xtype: 'treepanel',
	                itemId : 'todoTree',
	                title: '<strong>To Dos</strong>',
	                store: 'FolderEmails',
	                displayField: 'folder',
	                rootVisible: false,

	                viewConfig: {
	
	                }
	            }
	        ]
	    });
	    me.callParent(arguments);
	}
		




});