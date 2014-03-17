Ext.define('FDUIEmailPractice.view.Main', {
	extend: 'Ext.panel.Panel',
	requires:[
	'Ext.layout.container.Border',
	'FDUIEmailPractice.view.MainPanel', 
	'FDUIEmailPractice.view.PreviewPanel'
	],
	layout: {
	    type: 'border'
	},
//	title: 'Main Panel',
	collapsible: true,
	xtype: 'contentpanel',
	items: [{
	    region: 'center',
	    xtype: 'mainpanel'
	},{
	    region: 'south',
	    xtype: 'previewpanel',
	    height: 100
	}]

});