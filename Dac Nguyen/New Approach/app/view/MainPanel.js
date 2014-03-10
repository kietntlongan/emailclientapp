Ext.define('EmailPrototype.view.MainPanel', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.mainpanel',
    requires:[
    'Ext.layout.container.Border'
    ],
    defaults: {
        margin: '0 5 0 5'
    },
    layout: 'border',
    header: false

});