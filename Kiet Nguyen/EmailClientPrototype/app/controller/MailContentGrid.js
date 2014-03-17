Ext.define('EmailClient.controller.MailContentGrid', {
    extend: 'EmailClient.controller.AbstractFdController',

    requires: ['EmailClient.view.MailContentGrid', 
               'EmailClient.controller.AbstractFdController'],

    views: ['MailContentGrid'],

	getViewConfig: function(){
		  var me = this, viewId, cfg;
		  
		  viewId = me.getViewId('mailcontentgrid');
		  cfg = {
		    xtype: 'mailcontentgrid',
		    itemId: viewId		    
		  }
		  return cfg;
	}
});
