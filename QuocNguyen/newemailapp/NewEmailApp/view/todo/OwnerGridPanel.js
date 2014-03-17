Ext.define('NewEmailApp.view.todo.OwnerGridPanel', {
	extend: 'Ext.grid.Panel',
    xtype: 'ownerGrid',
    anchor: '100%',
    title: '<strong>To Dos</strong>',
    store: 'Owners',
    hideHeaders: true,
    rowLines: false, 
    columns: [
        {
            xtype: 'gridcolumn',
            dataIndex: 'owner',
            text: 'Owner',
            flex: 1
        }
    ]
})