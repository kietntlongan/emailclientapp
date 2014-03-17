Ext.define('SimpleEmail.controller.Mail', {
	extend : 'Ext.app.Controller',

	stores : [ 'ParentEmailFolders','EmailFolders','Emails','Owners','ToDos'], //declare the stores
 	models:  [ 'ParentEmailFolder','EmailFolder','Email','Owner','ToDo'],

	refs : [ {
		ref : 'leftPanel',
		selector : 'leftpanel' //xtype
	},{
		ref : 'mailTreePanel',
		selector : 'leftpanel #mailtreepanel'
	},{
		ref : 'todoTreePanel',
		selector : 'leftpanel #todotreepanel'
	}],

  init: function() {
        this.control({
            ' #mailtreepanel': {
                //itemdblclick: this.loadMessages
                select: this.loadMessages
            },
            '#todotreepanel': {
                select: this.loadToDos
            }
        });
    },
	


    loadMessages: function(grid, folder) {

    	var main_panel = Ext.ComponentQuery.query('app-main')[0];

    	var mail_panel = main_panel.down('#mailGridPanel');

    	mail_panel.reconfigure(folder.messages());
    },

    
    loadToDos: function(grid, owner) {
        //alert(owner.get('owner') + ', todos count: ' + owner.get('todos')); 

        var mail_panel = Ext.ComponentQuery.query('app-main')[0].down('#todoGridPanel');

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



	/*foldersLoadHandler : function(store) {
		//this.getFilterPanel().setSchoolId(20); // Illinois
		
		// Get the previously saved school ID. 
	    // Default to 20 -- Illinois.
	   // var savedSchoolId = Ext.state.Manager.get('schoolId', 10);
	   //alert(this.getLeftPanel().getName());
	    alert('test');
	    console.log(arguments.callee.caller.$name + ': ' + store);
	    console.log(store.get;
	},*/
	
/*	store.load({
    callback: function() {
        //the user that was loaded
        var user = store.first();

        console.log("Orders for " + user.get('name') + ":")

        //iterate over the Orders for each User
        user.orders().each(function(order) {
            console.log("Order ID: " + order.getId() + ", which contains items:");

            //iterate over the OrderItems for each Order
            order.orderItems().each(function(orderItem) {
                //we know that the Product data is already loaded, so we can use the synchronous getProduct
                //usually, we would use the asynchronous version (see Ext.data.association.BelongsTo)
                var product = orderItem.getProduct();

                console.log(orderItem.get('quantity') + ' orders of ' + product.get('name'));
            });
        });
    }
});*/
	
});
