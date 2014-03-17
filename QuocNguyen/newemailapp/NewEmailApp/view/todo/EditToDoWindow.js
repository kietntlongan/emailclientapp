Ext.define("NewEmailApp.view.todo.EditToDoWindow", {
	extend: 'Ext.window.Window',
	xtype: 'edittodowindow',
	requires: ['Ext.form.Panel'],
	title: 'Edit ToDo',
	autoShow: true,
	modal: true,
	resizable: false,
	layout: 'fit',
	config: {
		todo: null
	},
	items: [{
		xtype: 'form',
		bodyPadding: 4,
		items: [{
			xtype: 'textfield',
			fieldLabel: 'Title',
			name: 'title'
		},{
			xtype: 'checkboxfield',
			fieldLabel: 'Complete',
			name: 'complete'
		},{
			xtype: 'datefield',
			fieldLabel: 'Due Date',
			name: 'duedate'
		},{
			xtype: 'textareafield',
			fieldLabel: 'Notes',
			name: 'notes'
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