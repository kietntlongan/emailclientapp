Ext.define("NewEmailApp.view.MainToolbar", {
	extend: 'Ext.toolbar.Toolbar',
	// requires: ['NewEmailApp.view.EditEmailWindow'],
	xtype: 'maintoolbar',
	items: [
		{
		    xtype: 'button',
		    itemId : 'btnNew',
		    icon: 'resources/images/new_firstdoc_16x16.gif',
			// handler : function(button) { 
			// 	Ext.create('NewEmailApp.view.EditEmailWindow', {

		 //    	}); 
			// }
		},
		{
		    xtype: 'button',
		    icon: 'resources/images/import_firstdoc_16x16.gif'
		},
		{
		    xtype: 'button',
		    itemId : 'btnUpdate',
		    icon: 'resources/images/information_node.gif' 
		}
	]
});