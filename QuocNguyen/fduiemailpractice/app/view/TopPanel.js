Ext.define("FDUIEmailPractice.view.TopPanel", {
    extend: 'Ext.toolbar.Toolbar',
    xtype: 'toppanel',
	anchor: '100%',
	height: 46,
    layout: {
	    type: 'hbox',
	    align: 'middle'
	},
//	items: [
//    {		id:'searchComponent',
//        	xtype: 'container',
//        	flex: 1,
//        	layout: {
//    	    	type: 'hbox',
//    	    	align: 'middle'
//    		},
//    	    items:[
//    		{
//    			id:'txtSearch',
//    			xtype: 'textfield',
//    			name:'txtSearch',
//    			width:250,
//    			cls:'btn'
//    		},
//    		//{'-'},
//    		{
//    			id:'btnSearch',
//    			xtype: 'button',
//    			cls:'btn',
//    			text: 'Go'
////    			action: 'searchDocument'
//    		},
//    		{
//    			id:'btnAdvanceSearch',
//    			xtype: 'button',
//    			cls:'imgbtnsearch',
//    			handler: function() {
//    				alert("Advanced Search button was clicked"); }
//    		}
//    		
//    		]
//        },
//    	{
//        	id:'userComponent',
//        	xtype: 'container',
//        	layout: {
//    	    	type: 'hbox',
//    	    	align: 'left'
//    		},
//    	    items:[
//    			{
//    				id:'loginUser',
//    				xtype: 'label',
//    				cls:'loginUser',
//    				text: 'FDADMIN'
//    			},
//    			{
//    				id:'btnUser',
//    				xtype: 'button',
//    				cls:'imgbtnuser',
//    				handler: function() {
//    					alert("User button was clicked"); }
//    			},
//    			{
//    				id:'btnLogout',
//    				xtype: 'button',
//    				cls:'imgbtnlogout',
//    				handler: function() {
//    					alert("Logout button was clicked"); }
//    			},
//    			{
//    				id:'btnHome',
//    				xtype: 'button',
//    				iconCls:'icobtnhome',
//    				cls:'whitebtn',
//    				menu: [
//    						{iconCls:'icobtnhome', text: 'Home'},
//    						{iconCls:'icobtnsearch',text: 'Search'},
//    						{text: 'Collections'},
//    						{text: 'Libraries'},
//    						{text: 'Views'}]
//    			}
//    		]
//    	}
//]
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