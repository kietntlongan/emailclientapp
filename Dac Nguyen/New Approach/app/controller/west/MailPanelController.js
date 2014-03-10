Ext.define('EmailPrototype.controller.west.MailPanelController', {
    extend: 'EmailPrototype.controller.AbstractFdController',
    
    models: [ 
    'MailFolder',
     'MailMessage'
            ],
    stores: [ 'MailTreeStore'],

    views: ['west.MailPanel'],

     getViewConfig:function(){
        var me = this;
        var viewId = me.getViewId('mailpanel');
        cfg = {
            xtype: 'mailpanel',
            itemId: viewId,
            collapseFirst: false
        }
        return cfg;
    }

    



});