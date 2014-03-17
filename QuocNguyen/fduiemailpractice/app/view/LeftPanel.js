Ext.define("FDUIEmailPractice.view.LeftPanel", {
	extend: 'Ext.panel.Panel',
	xtype: 'leftpanel',
	requires: ['Ext.grid.feature.Grouping'],
	layout: {
	    type: 'accordion'
	},

	collapsible: true,
	//title: 'Library Navigation',
	
	initComponent: function() {
	    var me = this;
	
	    Ext.applyIf(me, {
	        items: [
	            {
	                xtype: 'treepanel',
	                itemId : 'folderTree',
	                title: '<strong>Mail</strong>',
	                store: 'FolderEmails',
	                displayField: 'folder',
	                rootVisible: false,

	                viewConfig: {
	
	                }
	            },
//	            {
//	                xtype: 'gridpanel',
//	                itemId : 'todoGrid',
//	                title: '<strong>To Dos</strong>',
//	                store: 'ToDos',
//		            columns : [ {
//		        	    text : 'Title',
//		        	    dataIndex : 'title',
//		        	    width: 120
//		        	}],
//		            features: [
//	                {
//	                    ftype: 'grouping',
//	                    groupHeaderTpl: [
//	                        '{owner}'
//	                    ]
//	                }]
//	            }
{
    xtype: 'gridpanel',
    itemId : 'ownerGrid',
    anchor: '100%',
    title: '<strong>To Dos</strong>',
    store: 'Owners',
    columns: [
        {
            xtype: 'gridcolumn',
            dataIndex: 'owner',
            text: 'Owner',
            flex: 1
        }
    ]
//    features: [
//        {
//            ftype: 'grouping'
//            	//,
////            groupHeaderTpl: [
////                '{group}'
////            ]
//        }
//    ]

}
	        ]
	    });
	    me.callParent(arguments);
	}
		




});