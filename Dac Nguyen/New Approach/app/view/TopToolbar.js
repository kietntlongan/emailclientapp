Ext.define('EmailPrototype.view.TopToolbar', {
    extend: 'Ext.toolbar.Toolbar',
    alias: 'widget.toptoolbar',

    requires:[
        'Ext.form.field.Text',
        'Ext.toolbar.Spacer',
        'Ext.form.Label',
        'Ext.button.Split',
        'Ext.menu.Menu',
        'Ext.menu.Item'
    ],

   	anchor: '100%',
    height: 46,
    items: [
        {
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
                items: [
                    {
                        xtype: 'menuitem',
                        text: 'Menu Item'
                    },
                    {
                        xtype: 'menuitem',
                        text: 'Menu Item'
                    },
                    {
                        xtype: 'menuitem',
                        text: 'Menu Item'
                    }
                ]
            }
        }
    ]

});