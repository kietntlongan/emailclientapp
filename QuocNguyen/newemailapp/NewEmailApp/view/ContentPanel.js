Ext.define("NewEmailApp.view.ContentPanel", {
extend: 'Ext.panel.Panel',
requires: ['NewEmailApp.view.MainToolbar'],
xtype: 'contentpanel',
collapsible: true,	
hideCollapseTool: true,
header: false,
layout: 'fit',
// layout: {
// 	    type: 'accordion'
// 	}
});