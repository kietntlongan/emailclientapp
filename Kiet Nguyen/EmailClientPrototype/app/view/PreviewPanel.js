Ext.define("EmailClient.view.PreviewPanel", {
	extend: 'Ext.panel.Panel',
	xtype: 'previewpanel',
	title: 'Preview',
	
	config: {
		email: null
	},
	
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