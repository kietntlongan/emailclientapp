Ext.define('EmailClient.view.ToDoGrid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.todogrid',

    requires: [
        'EmailClient.view.ContentPanelToolbar',
        'Ext.toolbar.Toolbar',
        'Ext.grid.column.Boolean',
        'Ext.grid.View',
        'Ext.grid.column.Date'
    ],
    //autoScroll: true,
    //title: 'Todo List',
    //forceFit: true,
    
    //hidden: true,

     //dockedItems: [{
     //       xtype: 'contentpaneltoolbar',
     //       dock: 'top'
     //   }],
    columns: [{
            xtype: 'gridcolumn',
            dataIndex: 'title',
            text: 'Title',
            flex: 1.25
        },
        {
            xtype: 'booleancolumn',
            dataIndex: 'complete',
            text: 'Complete',
            trueText: 'Yes',
            falseText: 'No',             
            flex: 0.5
        },
        {
            xtype: 'datecolumn',
            dataIndex: 'duedate',
            text: 'Due date',
            format : 'Y-m-d',
            flex: 0.5
        },
        {
            xtype: 'gridcolumn',
            dataIndex: 'notes',
            text: 'Notes',
            flex: 2
        }]
});