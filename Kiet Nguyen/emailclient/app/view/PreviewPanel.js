Ext.define("EmailClient.view.PreviewPanel", {
	extend: 'Ext.panel.Panel',
	xtype: 'previewpanel',
	title: 'Preview',
	collapsible: true,
	title: 'Preview',
	collapsible: true,
	split: true,
	weight: -20,
	height: 130,	
	layout: 'fit',
	requires: ['Ext.form.Label'],
	
	config: {
		email: null
	},
	
	tpl: ['<div>{message}</div>'],
	refreshTemplate: function(){
		if (this.getEmail()) {
			this.update(this.getEmail().getData());
		} else {
			this.update(' ');
		}
	},
	updateEmail: function(email) {
	    this.refreshTemplate();
	}
});