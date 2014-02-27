Ext.define("FDUIEmailPractice.view.RightPanel", {
    extend: 'Ext.panel.Panel',
	xtype: 'rightpanel',
	layout: {
	    type: 'accordion'
	},
	
	collapsible: true,
	title: 'Information',
	
	initComponent: function() {
	    var me = this;
	
	    Ext.applyIf(me, {
	        items: [
	            {
	                xtype: 'panel',
	                title: '<strong>Properties</strong>',
	                html: 'Properties content here',
	                //store: 'FolderEmails',
	
	                viewConfig: {
	
	                }
	            },
	            {
	                xtype: 'panel',
	                title: '<strong>Related</strong>',
	                html: 'Related content here',
	                viewConfig: {
	
	                }
	            }
	        ]
	    });
	    me.callParent(arguments);
	}
	




});