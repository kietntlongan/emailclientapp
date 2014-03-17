Ext.define("EmailClient.view.NewToDoWindow", {
	extend: 'Ext.window.Window',
	xtype: 'newtodowindow',

	requires: ['Ext.form.Panel'],

	title: 'New To Do',
	autoShow: true,
	modal: true,
	resizable: false,
	width: 400,	
	layout: 'anchor',
	//defaults: {
	//	anchor: '100%'
	//},
	// The fields
	//defaultType: 'textfield',	
	items: [{
		xtype: 'form',
		bodyPadding: 4,
		items: [{
			xtype: 'textfield',
			fieldLabel: 'Title',
			name: 'title',
			anchor: '100%'
		}, {
			xtype: 'checkboxfield',
			boxLabel: 'Complete',
			name: 'complete',
			anchor: '100%'
		}, {
	        xtype: 'datefield',
	        fieldLabel: 'Due Date',
	        name: 'duedate',
	        anchor: '100%'
		}, {
			xtype: 'textareafield',
			fieldLabel: 'Notes',
			name: 'notes',
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