Ext.define("EmailClient.view.AppHeader", {
	extend : 'Ext.toolbar.Toolbar',
	xtype : 'appHeader',
	
	layout : 'hbox',
	height: 42,
	
	requires : [ 'Ext.form.field.Text', 'Ext.button.Split' ],
	
	items : [ {
		xtype : 'textfield',
		itemId : 'searchTextField',
		hideLabel : true,
		emptyText : 'Search'
	}, {
		xtype : 'button',
		itemId : 'btnSearch',
		text : 'Go'
	}, {
		xtype : 'button',
		icon : 'images/searchPlus.png'
	}, {
		xtype : 'tbspacer',
		flex : 1
	}, {
		xtype : 'label',
		text : 'Someone'
	}, {
		xtype : 'button',
		itemId : 'UserProfileButton',
		icon : 'images/user.png'
	}, {
		xtype : 'button',
		itemId : 'ExitButton',
		icon : 'images/exit.png'
	}, {
		xtype : 'splitbutton',
		icon : 'images/home.png',
		menu : {
			xtype : 'menu',
			width : 120,
			items : [ {
				xtype : 'menuitem',
				text : 'Search'
			}, {
				xtype : 'menuitem',
				text : 'Mail'
			}, {
				xtype : 'menuitem',
				text : 'To Dos'
			} ]
		}
	} ]
});