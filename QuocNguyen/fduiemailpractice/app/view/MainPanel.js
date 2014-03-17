Ext.define("FDUIEmailPractice.view.MainPanel", {
extend: 'Ext.panel.Panel',
requires: [
'FDUIEmailPractice.view.MainToolbar'],
xtype: 'mainpanel',
collapsible: true,
hideCollapseTool: true,
header: false,
layout: 'fit',
initComponent: function() {
	    var me = this;
	
	    Ext.applyIf(me, {
	    	dockedItems: [
			{
			    xtype: 'maintoolbar',
			    dock: 'top'
			}],
			tools: [
			{
			    xtype: 'tool',
			    type: 'gear'
			}],
	        items: [
	            {
	            	xtype: 'grid',
	            	itemId : 'emailGrid',
	            	header: false,
	            	scroll: true,
//	            	selType : 'checkboxmodel',
					selModel: {
					    selType: 'checkboxmodel',
					    mode: 'SINGLE',
					    checkOnly: true
					},
	            	//selModel: Ext.create('Ext.selection.CheckboxModel', {checkOnly: true,injectCheckbox: 1,singleSelect : true}), 
//	                title: '<strong>Email</strong>',
//	                store: 'FolderGrid',
//	                displayField: 'folder',
	                hideHeaders: 'true',
		            columns : [ {
                        xtype: 'templatecolumn',
                        tpl: [
	                        '<div style="white-space:normal;word-wrap:break-word;"> ',
	                        '<div><span width="200"><strong>From:</strong> {from}</span>',
	                        '<span width="50">&nbsp;</span><span><strong style="color:#666;">Received:</strong> {received:date("d/m/Y h:i")}</span></div>',
	                        '<div width="100%"><strong style="color:#666;">Subject:</strong> {subject}</div>',
	                        '</div>'
                        ],
                        text: 'MyTemplateColumn1',
                        flex: 2	}
		            ]
	            },{
	            	xtype: 'grid',
	            	itemId : 'todoGrid',
	            	header: false,
	            	hidden: true,
//	                title: '<strong>To Do</strong>',
//	                hideHeaders: 'true',
		            columns : [ {
		        	    text : 'Title',
		        	    dataIndex : 'title',
		        	    flex:1
		            },{
		        	    text : 'Due Date',
		        	    dataIndex : 'duedate',
		        	    width: 200
		            },{
		        	    text : 'Completed',
		        	    dataIndex : 'complete',
		        	    width: 120
		            }]
	            }
	        ]
	    });
	    me.callParent(arguments);
	}


});