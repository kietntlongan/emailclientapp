Ext.define("SimpleEmail.view.InformationPanel", {
    extend: 'Ext.panel.Panel',

    xtype: 'informationpanel',
 	html: 'Information HTML',
 	collapsible: true,
    
 	items: [{
            xtype: 'panel',
            itemId: 'infopanel',
            title: 'Properties',
            layout: 'fit',
            collapsible: true,
            store: 'Emails',
            items:[{
            	xtype: 'panel',
            	text: 'From'
            }]
        },{
            xtype: 'panel',
            itemId: 'relatedpanel',
            title: 'Related',
            layout: 'fit',
            collapsible: true,             
    }]

});




