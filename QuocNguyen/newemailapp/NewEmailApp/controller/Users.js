Ext.define('NewEmailApp.controller.Users', {
  extend: 'NewEmailApp.controller.AbstractFdController',
  
  views: [
    'user.List',
    'user.Edit'
  ],
  /*stores: [
    'Users'
  ],*/
  
  requires: [
    'NewEmailApp.store.Users'
  ],
  
  models: [
    'User'
  ],
  
  getViewConfig: function(){
    var me = this, viewId, cfg, listStore;
    
    listStore = Ext.create('NewEmailApp.store.Users');
    
    viewId = me.getViewId('userlist');
    cfg = {
      xtype: 'userlist',
      border: true,
      itemId: viewId,
      store: listStore
    }
    return cfg;
  },
  
  init: function(application){
    var me = this,
        listViewSelector, editViewId, editButtonSelector;

    listViewSelector = 'userlist#' + me.getViewId('userlist');
    editViewId = me.getViewId('useredit');
    editButtonSelector = 'useredit#' + editViewId + ' button[action=save]';
    me.control(listViewSelector, {
        itemdblclick: me.editUser
      }
    );
    me.control(editButtonSelector, {
        click: this.updateUser
      }
    );
    
    me.listen({
      controller: {
        '*' : {userupdated: me.onUserUpdated}
      }
    });
  },
  
  onUserUpdated: function(target, updatedRecord){
    var me = this,
        listView, store, myRecord, recordId, index; //field, fields, fieldValue;
    Ext.log('onUserUpdated fired on controller: ' + this.id);
    if (target && target.id == this.id){
      Ext.log('I fired this event so it can be ignored.');
      return;
    }
    
    listView = me.getView('userlist');
    if (listView){
      store = listView.getStore();
      myRecord = store.getById(updatedRecord.getId());
      if (myRecord){
        
        myRecord.fields.eachKey(function(fieldName, field){
          var fieldValue = updatedRecord.get(fieldName);
          if (myRecord.get(fieldName) != fieldValue){
            myRecord.set(fieldName, fieldValue);
          }
          return true;
        });
        
      }
    }
  },
  
  editUser: function(grid, record){
    var me = this,
        editViewId,
        editView;
    Ext.log('Edit user method fired on controller: ' + this.id);
    editViewId = me.getViewId('useredit');
    editView = Ext.widget('useredit', {itemId: editViewId});
    editView.down('form').loadRecord(record);
  },
  
  updateUser: function(button){
    Ext.log('Update user method fired on controller: ' + this.id);
    var win, form, record, values;
    
    win = button.up('window');
    if (!win) return;
    form = win.down('form');
    record = form.getRecord();
    values = form.getValues();
      
    record.set(values);
    win.close();
    
    this.fireEvent('userupdated', this, record);
    //this.getUsersStore().sync();
  }
});