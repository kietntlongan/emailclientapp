Ext.define('EmailPrototype.view.MainPanel', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.mainpanel',
    requires:[
    'Ext.layout.container.Border'
    ],
    defaults: {
        margin: '5 5 5 5'
    },
    layout: 'border',
    header: false

});