Ext.define("NewEmailApp.view.email.PreviewPanel", {
	extend: 'Ext.panel.Panel',
	xtype: 'previewpanel',
	title: 'Preview',
	collapsible: true,
	config: {
		email: null
	},
	tpl: ['<div>{message}</div>']
});