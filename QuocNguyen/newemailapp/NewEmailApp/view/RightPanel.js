Ext.define("NewEmailApp.view.RightPanel", {
    extend: 'Ext.panel.Panel',
	xtype: 'rightpanel',
	layout: {
	    type: 'accordion'
	},
	config: {
		email: null
	},
	width:200,
	collapsible: true,
	title: 'Information',
	split: true,
	tools: [{
        xtype: 'tool',
        type: 'gear'
    }],
});