Ext.define("EmailClient.view.OwnerGrid", {
	extend: 'Ext.grid.Panel',
	xtype: 'widget.ownergrid',
	alias: 'widget.ownergrid',
	
	requires: ['Ext.grid.Panel'],
	
    title: 'To Dos',
    //itemId: 'ownerList',
    store: 'Owners',
    hideHeaders: true,
    rowLines: false,
    
    columns: [{
        text: 'Owner', 
        dataIndex: 'owner',
        flex: 1
    }]
});