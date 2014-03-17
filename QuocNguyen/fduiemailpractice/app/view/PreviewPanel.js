Ext.define("FDUIEmailPractice.view.PreviewPanel", {
	extend: 'Ext.panel.Panel',
	xtype: 'previewpanel',
	title: 'Preview',
	collapsible: true,
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