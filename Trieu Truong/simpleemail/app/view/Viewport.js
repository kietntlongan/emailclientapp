Ext.define('SimpleEmail.view.Viewport', {
    extend: 'Ext.container.Viewport',
    requires:[
        'Ext.layout.container.Border',
        'SimpleEmail.view.Main',
        'SimpleEmail.view.LeftPanel',
        'SimpleEmail.view.CenterPanel',
        'SimpleEmail.view.InformationPanel',
        'SimpleEmail.view.Title'
    ],

    layout: {
        type: 'border'
    },

  
    items: [{
        xtype: 'leftpanel',
        region: 'west',
        title: 'Mail Panel',        
        store: 'ParentEmailFolders'
       // store: Ext.create('SimpleEmail.store.Folders'),
    },{        
        xtype: 'app-main',
        region: 'center',
        title: 'Main',
        store: 'Onwers' 
    },{
        xtype: 'informationpanel',
        region: 'east',
        title: 'Information', 
        store: 'Emails',
        width: 180
    },{
        xtype: 'title',
        region: 'north'        
    }]

});
