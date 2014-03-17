Ext.define('FDUIEmailPractice.view.Viewport', {
    extend: 'Ext.container.Viewport',
    requires:[
        'Ext.layout.container.Border',
        'FDUIEmailPractice.view.TopPanel', 
        'FDUIEmailPractice.view.LeftPanel',
        'FDUIEmailPractice.view.RightPanel',
        'FDUIEmailPractice.view.Main',
    ],

    layout: {
        type: 'border'
    },

    items: [{
        region: 'north',
        xtype: 'toppanel'
    },{
        region: 'west',
        xtype: 'leftpanel',
//        title: 'Left Panel',
        width: 150
    },{
        region: 'center',
        xtype: 'contentpanel'
        //xtype: 'mainpanel'
    }
    ,{
        region: 'east',
        xtype: 'rightpanel',
        width: 120
    }]

});
