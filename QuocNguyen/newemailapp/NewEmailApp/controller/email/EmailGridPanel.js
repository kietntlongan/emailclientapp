Ext.define('NewEmailApp.controller.email.EmailGridPanel', {
  extend: 'NewEmailApp.controller.AbstractFdController',
  views: [
    'email.EmailGridPanel'
  ],
  getViewConfig: function(){
    
    var me = this, 
       viewId, cfg;
    
    viewId = me.getViewId('email.EmailGridPanel');

    cfg = {
    		xtype: 'emailGrid',
    		itemId: viewId
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
});