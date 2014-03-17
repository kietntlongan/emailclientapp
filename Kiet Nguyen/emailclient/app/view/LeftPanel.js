Ext.define("EmailClient.view.LeftPanel", {
	extend: 'Ext.panel.Panel',
	xtype: 'widget.leftpanel',
	alias: 'widget.leftpanel',
	layout: {
	    type: 'accordion'
	},
	requires: ['Ext.tree.Panel', 
	           'Ext.layout.container.Accordion', 
	           'EmailClient.view.MailTree', 
	           'EmailClient.view.OwnerGrid'],
	           
	split: true,
	collapsible: true,
	width: 200,
	items: [{
	    xtype: 'mailtree',
	    itemId : 'folderTree'
	},{
	    itemId: 'ownerList',
	    xtype: 'ownergrid'
	}]
});