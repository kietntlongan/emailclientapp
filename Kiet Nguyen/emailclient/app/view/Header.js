Ext.define("EmailClient.view.Header", {
    extend: 'Ext.toolbar.Toolbar',
    xtype: 'appHeader',
    //id: 'app-header',
    //anchor: '100%',
    height: 46,
    requires: ['Ext.form.field.Text', 'Ext.button.Split'],
    items: [{
            xtype: 'textfield',
            itemId: 'searchTextField',
            hideLabel: true,
            emptyText: 'Search'
        },
        {
            xtype: 'button',
            itemId: 'btnSearch',
            text: 'Go'
        },
        {
            xtype: 'button',
            icon: 'images/searchPlus.png'
        },
        {
            xtype: 'tbspacer',
            flex: 1
        },
        {
            xtype: 'label',
            text: 'Someone'
        },
        {
            xtype: 'button',
            itemId: 'UserProfileButton',
            icon: 'images/user.png'
        },
        {
            xtype: 'button',
            itemId: 'ExitButton',
            icon: 'images/exit.png'
        },
        {
            xtype: 'splitbutton',
            icon: 'images/home.png',
            menu: {
                xtype: 'menu',
                width: 120,
                items: [{
                        xtype: 'menuitem',
                        text: 'Search'
                    },
                    {
                        xtype: 'menuitem',
                        text: 'Mail'
                    },
                    {
                        xtype: 'menuitem',
                        text: 'To Dos'
                    }
                ]}
        }]
	/*initComponent: function() {
        this.items = [{
            xtype: 'component',
            id: 'app-header-title',
            html: 'Ext JS Kitchen Sink',
            flex: 1
        }];

        if (!Ext.getCmp('options-toolbar')) {
            this.items.push({
                xtype: 'themeSwitcher'
            });
        }
    	
       this.callParent();
    }*/
});