Ext.define('EmailClient.view.Viewport', {
    extend: 'Ext.container.Viewport',
    requires:[
        'Ext.layout.container.Border',
        'EmailClient.view.RightPanel'
    ],

    layout: {
        type: 'border'
    }/*,
    items: [{
        region: 'west',
        xtype: 'rightpanel',
        width: 300
    }]*/
});
