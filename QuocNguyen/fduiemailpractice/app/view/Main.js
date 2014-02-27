Ext.define('FDUIEmailPractice.view.Main', {
	extend: 'Ext.panel.Panel',
	title: 'Main Panel',
	requires:[
	'Ext.layout.container.Border',
	'FDUIEmailPractice.view.MainPanel', 
	'FDUIEmailPractice.view.PreviewPanel'
	],
	layout: {
	    type: 'border'
	},
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