Ext.define('EmailPrototype.view.west.TodoPanel', {
		extend: 'Ext.grid.Panel',
		alias: 'widget.todopanel',
       
       requires: [
        'Ext.grid.View',
        'Ext.grid.column.Column',
        'Ext.selection.RowModel'
         ],

     

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