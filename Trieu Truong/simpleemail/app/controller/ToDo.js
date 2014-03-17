Ext.define('SimpleEmail.controller.ToDo', {
	extend : 'Ext.app.Controller',

	stores : [ 'Owners', 'ToDos'], //declare the stores
 	models:  [ 'ToDo','Owner'],

	refs : [ {
		ref : 'leftPanel',
		selector : 'leftpanel' //xtype
	},{
		ref : 'todoTreePanel',
		selector : 'leftpanel #todotreepanel'
	}],

  init: function() {
        this.control({
            'leftpanel #todotreepanel': {
                //itemdblclick: this.loadMessages
                select: this.loadToDos
            }
        });
    },
	
    loadToDos: function(component, owner) {
        //alert(owner.get('owner') + ', todos count: ' + owner.get('todos')); 

    	var main_panel = Ext.ComponentQuery.query('app-main')[0];

    	var mail_panel = main_panel.down('#todoGridPanel');

    	mail_panel.reconfigure(owner.todos());

    },












	folderSelectHandler: function(component, folder){		
		//console.log("Selected value: " + folder.get('folder'));
		alert('folder selected: ' + folder.get('folder') + ', message count: ' + folder.get('folder').length);

		//alert('first message from: ' + folder.get('messages').get('from'));

		/*var messages = folder.get('messages');

		console.log("Count emails: " + messages.length);*/

		/*var from = messages.getFrom();
		console.log("From: " + from);*/
		// console.log(arguments.callee.caller.$name + ': ' + folder);
	}
});
