Ext.define("NewEmailApp.view.RightPanel", {
    extend: 'Ext.panel.Panel',
	xtype: 'rightpanel',
	layout: {
	    type: 'accordion'
	},
	config: {
		email: null
	},
	flex: 1,
	collapsible: true,
	title: 'Information',
});