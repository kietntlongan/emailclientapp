Ext.define('EmailPrototype.controller.west.MailTreePanelController', {
    extend: 'EmailPrototype.controller.AbstractFdController',
    
    models: [ 
    'MailFolder',
     'MailMessage'
            ],
    stores: [ 'MailTreeStore'],

    views: ['west.MailTreePanel'],

     getViewConfig:function(){
        var me = this;
        var viewId = me.getViewId('mailtreepanel');
        cfg = {
            xtype: 'mailtreepanel',
            itemId: viewId,
            collapseFirst: false
        }
        return cfg;
    }

    



});