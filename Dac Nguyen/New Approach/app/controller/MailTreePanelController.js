Ext.define('EmailPrototype.controller.MailTreePanelController', {
    extend: 'EmailPrototype.controller.AbstractFdController',

    init: function(application) {
        var me = this;
        // this.control({
        //     "#NewButton": {
        //         click: this.onNewButtonClick
        //     }
        // });
   
    },

     getViewConfig:function(){
        var me = this;
        var viewId = me.getViewId('mailtreepanel');
        cfg = {
            xtype: 'mailtreepanel',
            itemId: viewId,
            collapseFirst: false
        }
        return cfg;
    },

    



});