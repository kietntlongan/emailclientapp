Ext.define('NewEmailApp.view.todo.ToDoGridPanel', {
    extend: 'Ext.grid.Panel',
    xtype: 'todoGrid',
    // header: false,
    // hidden: true,
    columns : [ {
        text : 'Title',
        dataIndex : 'title',
        flex:1
    },{
        text : 'Due Date',
        dataIndex : 'duedate',
        width: 200
    },{
        text : 'Completed',
        dataIndex : 'complete',
        width: 120,
        trueText: 'Yes',
        falseText: 'No' 
    }]
})