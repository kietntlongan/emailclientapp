Ext.define("NewEmailApp.view.email.RelatedPanel", {
	extend: 'Ext.panel.Panel',
	xtype: 'relatedpanel',
	title: '<strong>Related</strong>',
	collapsible: true,
	tools: [
	    {
	        xtype: 'tool',
	        type: 'maximize'
	    },
	    {
	        xtype: 'tool',
	        type: 'gear'
	    }],
	html: 'No related messages'
});