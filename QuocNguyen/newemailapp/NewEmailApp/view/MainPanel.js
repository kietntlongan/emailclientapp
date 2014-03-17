Ext.define('NewEmailApp.view.MainPanel', {
	extend: 'Ext.panel.Panel',
	requires:[
	'Ext.layout.container.Border'
	// ,
	// 'NewEmailApp.view.MainPanel', 
	// 'NewEmailApp.view.PreviewPanel'
	],
	xtype: 'mainpanel',
	layout: {
	    type: 'border'
	},
	title: 'Main Panel',
	flex: 5,
	// collapsible: true,
	hideCollapseTool: true,
});