Ext.define('EmailPrototype.view.west.TodoListPanel', {
		extend: 'Ext.grid.Panel',
		alias: 'widget.todolistpanel',

		autoScroll: true,
        title: 'To Dos',
        forceFit: true,
        hideHeaders: true,
        rowLines: false,
        store: 'UserStore',
        columns: [
            {
                xtype: 'gridcolumn',
                dataIndex: 'owner',
                text: 'Owner'
            }
        ],
        selModel: Ext.create('Ext.selection.RowModel', {

        })

})