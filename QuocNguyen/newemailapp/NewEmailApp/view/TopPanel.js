Ext.define("NewEmailApp.view.TopPanel", {
    extend: 'Ext.toolbar.Toolbar',
    xtype: 'toppanel',
	anchor: '100%',
	height: 46,
	title: 'Top Panel',
    layout: {
	    type: 'hbox',
	    align: 'middle'
	},
		items: [
		{
		    xtype: 'textfield',
		    itemId: 'txtSearch',
		    width: 400,
		    hideLabel: true,
		    emptyText: 'Search'
		},
		{
			itemId: 'btnSearch',
			xtype: 'button',
//			cls:'btn',
			text: 'Go'
		},
		{
		    xtype: 'button',
		    icon: 'resources/images/searchPlus.png'
		},
		{
		    xtype: 'tbspacer',
		    flex: 1
		},
		{
		    xtype: 'label',
		cls:'loginUser',
		text: 'FDADMIN'
		},
		{
		    xtype: 'button',
		    itemId: 'UserProfileButton',
		    icon: 'resources/images/user.png'
		},
		{
		    xtype: 'button',
		    itemId: 'ExitButton',
		    icon: 'resources/images/exit.png'
		},
		{
			id:'btnHome',
			xtype: 'button',
			iconCls:'icobtnhome',
			cls:'whitebtn',
			menu: [
					{iconCls:'icobtnhome', text: 'Home'},
					{iconCls:'icobtnsearch',text: 'Search'},
					{text: 'Collections'},
					{text: 'Libraries'},
					{text: 'Views'}]
		}
		]
});