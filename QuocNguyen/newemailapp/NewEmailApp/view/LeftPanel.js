Ext.define("NewEmailApp.view.LeftPanel", {
	extend: 'Ext.panel.Panel',
	xtype: 'leftpanel',
	layout: {
	    type: 'accordion'
	},
	collapsible: true,
	width:200,
	title: 'Left Panel',
	split: true
});