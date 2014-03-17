Ext.define("SimpleEmail.view.CenterPanel", {
    extend: 'Ext.grid.Panel',
   
    xtype: 'centerpanel',

    store: 'Emails',
    
    columns: [ { 
        //xtype : 'gridcolumn', // This is the default
        text: 'Name', 
        dataIndex: 'name' 
    }, { 
        text: 'Born', 
        dataIndex: 'born',
        flex: 1 
    } ]


});