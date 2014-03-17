Ext.define("NewEmailApp.view.MainToolbar", {
	extend: 'Ext.toolbar.Toolbar',
	xtype: 'maintoolbar',
	items: [
		{
		    xtype: 'button',
		    itemId : 'btnNew',
		    icon: 'resources/images/new_firstdoc_16x16.gif',
		},
		{
		    xtype: 'button',
		    icon: 'resources/images/import_firstdoc_16x16.gif'
		},
		{
		    xtype: 'button',
		    itemId : 'btnUpdate',
		    icon: 'resources/images/information_node.gif' 
		},
		{
            xtype: 'tbspacer',
            flex: 1
        },
        {
            xtype: 'button',
            icon: 'resources/images/sort.png',
            text: 'Sorting'
        }
	]
});