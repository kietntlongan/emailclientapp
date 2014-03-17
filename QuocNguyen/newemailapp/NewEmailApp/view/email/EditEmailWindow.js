Ext.define('NewEmailApp.view.email.EditEmailWindow', {
    extend: 'Ext.window.Window',
	xtype: 'editemailwindow',
	requires: ['Ext.form.Panel'],
	title: 'Edit Email',
	autoShow: true,
	modal: true,
	resizable: false,
	layout: 'fit',

	items: [{
		xtype: 'form',
		bodyPadding: 4,
		items: [{
			xtype: 'textfield',
			fieldLabel: 'From',
			name: 'from'
		},{
			xtype: 'textfield',
			fieldLabel: 'To',
			name: 'to'
		},{
			xtype: 'datefield',
			fieldLabel: 'Received',
			name: 'received'
		},{
			xtype: 'textfield',
			fieldLabel: 'Subject',
			name: 'subject'
		},{
			xtype: 'checkboxfield',
			fieldLabel: 'Urgent',
			name: 'urgent'
		},{
			xtype: 'textareafield',
			fieldLabel: 'Message',
			name: 'message'
		}]
	}],
	buttons: [{
		text: 'Save',
		handler: function(button) {
			var window = button.up('window');
			window.down('form').updateRecord();
			window.close();
		}
	}, {
		text: 'Cancel',
		handler: function(button) {
			button.up('window').close();
		}
	}]

});