Ext.define("EmailClient.view.NewMessageWindow", {
	extend: 'Ext.window.Window',
	xtype: 'newmessagewindow',

	requires: ['Ext.form.Panel'],

	title: 'New Message',
	autoShow: true,
	modal: true,
	resizable: false,
	width: 400,	
	layout: 'anchor',
//	defaults: {
//	    anchor: '100%'
//	},	
	items: [{
		xtype: 'form',
		bodyPadding: 4,
		items: [{
			xtype: 'textfield',
			fieldLabel: 'From',
			name: 'from',
			anchor: '100%'
		}, {
			xtype: 'textfield',
			fieldLabel: 'To',
			name: 'To',
			anchor: '100%'
		}, {
			xtype: 'checkboxfield',
			boxLabel: 'Urgent',
			name: 'urgent',
			anchor: '100%'
		}, {
	        xtype: 'datefield',
	        fieldLabel: 'Received',
	        name: 'received',
	        anchor: '100%'
		}, {
			xtype: 'textfield',
			fieldLabel: 'Subject',
			name: 'subject',
			anchor: '100%'
		}, {
			xtype: 'textareafield',
			fieldLabel: 'Message',
			name: 'message',
			anchor: '100%'
		}]		
	}],
	buttons: [{
		text: 'Save',
		handler: function(button) {
			var window = button.up('window');
			//window.down('form').updateRecord();
			window.close();
		}
	}, {
		text: 'Cancel',
		handler: function(button) {
			button.up('window').close();
		}
	}]
})