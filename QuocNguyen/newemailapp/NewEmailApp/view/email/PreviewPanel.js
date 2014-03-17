Ext.define("NewEmailApp.view.email.PreviewPanel", {
	extend: 'Ext.panel.Panel',
	xtype: 'previewpanel',
	title: 'Preview',
	collapsible: true,
	config: {
		email: null
	},
	split: true,
	height: 400,
	tpl: ['<div>{message}</div>']
});