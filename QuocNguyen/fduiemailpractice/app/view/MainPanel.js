Ext.define("FDUIEmailPractice.view.MainPanel", {
//	extend: 'Ext.view.View',
//	xtype: 'mainpanel',
//	autoScroll: true,
//	emptyText: 'There are no matching businesses.',
//	padding: 8,
//	//itemTpl: '<figure><img src="{photo_url}" /><figcaption>{name}</figcaption></figure>',
//	itemTpl: 'From: {from}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;To:{to}',
//	itemCls: 'businessesview',
//	overItemCls: 'over',
//	selectedItemCls: 'selected'
//extend: 'Ext.Component',
//xtype: 'mainpanel',
//html: 'Main Panel here'
extend: 'Ext.panel.Panel',
xtype: 'mainpanel',
collapsible: true,

initComponent: function() {
	    var me = this;
	
	    Ext.applyIf(me, {
	        items: [
//		        {
//	                xtype: 'dataview',
//	                itemId : 'emailView',
//	                store: 'Schools',
////	                title: '<strong>Mail</strong>',	                	
//					autoScroll: true,
//					emptyText: 'There are no matching businesses.',
//					padding: 8,
//					//itemTpl: '<figure><img src="{photo_url}" /><figcaption>{name}</figcaption></figure>',
//					itemTpl: 'From: {id}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;To:{name}<br>Subject: {fullname}',
//					itemCls: 'businessesview',
//					overItemCls: 'over',
//					selectedItemCls: 'selected'
//	            },
//	            {
//	                xtype: 'grid',
//	                collapsible: true,
//	                itemId : 'folderGrid',
//	                title: '<strong>Mail</strong>',
//	                store: 'FolderEmails',
//	                displayField: 'folder',
//	                emptyText: 'There are no matching businesses.',
//	            	store : 'FolderGrid',
//					columns : [ {
//						text : 'Folder',
//						dataIndex : 'folder',
//						flex: 1
//					}]
//
//	            },
//	            {
//	            	xtype: 'grid',
//	            	collapsible: true,
//	            	itemId : 'subfolderGrid',
//	                title: '<strong>Sub Folder</strong>',
////	                store: 'FolderGrid',
////	                displayField: 'folder',
//		            columns : [ {
//						text : 'Folder',
//						dataIndex : 'folder',
//						flex: 1
//					}]
//	            },
	            {
	            	xtype: 'grid',
	            	itemId : 'emailGrid',
	            	selType : 'checkboxmodel',
	                title: '<strong>Email</strong>',
//	                store: 'FolderGrid',
//	                displayField: 'folder',
	                hideHeaders: 'true',
		            columns : [ {
                        xtype: 'templatecolumn',
                    tpl: [
                        '<div style="white-space:normal;word-wrap:break-word;"> ',
                        '<div><span width="200"><strong>From:</strong> {from}</span>',
                        '<span width="50">&nbsp;</span><span><strong style="color:#666;">Received:</strong> {received}</span></div>',
                        '<div width="100%"><strong style="color:#666;">Subject:</strong> {subject}</div>',
                        '</div>'
                    ],
                    text: 'MyTemplateColumn1',
                    flex: 2
                }
		            
					
//		            ,{
//						text : 'To',
//						dataIndex : 'to',
//					    width: 120
//					},{
//						text : 'Subject',
//						dataIndex : 'subject',
//						flex: 1
//					},{
//						text : 'Date',
//						dataIndex : 'received',
//					    width: 120
//					}
					
					]
	            }
	        ]
	    });
	    me.callParent(arguments);
	}


});