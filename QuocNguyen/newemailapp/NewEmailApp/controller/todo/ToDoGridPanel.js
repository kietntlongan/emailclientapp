Ext.define('NewEmailApp.controller.todo.ToDoGridPanel', {
  extend: 'NewEmailApp.controller.AbstractFdController',
  views: [
    'todo.ToDoGridPanel'
  ],
  getViewConfig: function(){
    
    var me = this, 
       viewId, cfg;
    
    viewId = me.getViewId('todo.ToDoGridPanel');

    cfg = {
        xtype: 'todoGrid',
        itemId: viewId
    }
    return cfg;
  }
});