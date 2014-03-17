Ext.define('EmailClient.view.ContentPanelToolbar', {
    extend: 'Ext.toolbar.Toolbar',
    alias: 'widget.contentpaneltoolbar',

    requires: [
        'Ext.button.Button',
        'Ext.toolbar.Spacer'
    ],

    items: [
        {
            xtype: 'button',
            itemId: 'newbutton',
            icon: 'images/new_firstdoc_16x16.gif'
        },
        {
            xtype: 'button',
            icon: 'images/import_firstdoc_16x16.gif'
        },
        {
            xtype: 'button',
            icon: 'images/information_node.gif'
        },
        {
            xtype: 'tbspacer',
            flex: 1
        },
        {
            xtype: 'button',
            icon: 'images/sort.png',
            text: 'Sorting'
        }
    ]

});