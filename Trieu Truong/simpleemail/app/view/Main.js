Ext.define('SimpleEmail.view.Main', {
    extend: 'Ext.container.Container',
    requires:[
        'Ext.tab.Panel',
        'Ext.layout.container.Border'
    ],
    
    xtype: 'app-main',


    items: [{        
        xtype: 'panel',
        title: 'Tool Bar',
        height: 50,

        items: [{
            xtype: 'button',
            text: 'New'
        },{
            xtype: 'button',
            text: 'Reply'
        },{
            xtype: 'button',
            text: 'Information'
        },{
            xtype: 'button',
            text: 'Sort'
        }]

    },{

        xtype: 'grid',
        itemId: 'mailGridPanel',
       
        store : 'Emails',
        //tpl:'<img src="resources/images/stars_{stars}.png"/>',
        //tpl:'<b>From: </b>{from}',
      
        columns : [{
        	xtype: 'templatecolumn',
        	columnWidth: 1,
        	tpl: [
    	      '<b>From: </b>{from}',
    	      '<b>Received: </b>{received}<br/>',
    	      '<b>Subject: </b>{subject}<br/>',
    	    ],
        }] 
        
        
        
       /* 
        columns : [{
            text : 'From',
            dataIndex : 'from'
        },{
            text : 'Received',
            dataIndex : 'received'
        },{
            text : 'Subject',
            dataIndex : 'subject'
        },{
            text : 'Message',
            dataIndex : 'message'
        }] */
    },{
        xtype: 'grid',
        itemId: 'todoGridPanel',
       
        store : 'ToDos',

        columns : [{
            text : 'Title',
            dataIndex : 'title'
        },{
            text : 'Complete',
            dataIndex : 'complete'
        },{
            text : 'Due Date',
            dataIndex : 'duedate'
        },{
            text : 'Notes',
            dataIndex : 'notes'
        }]
     }]
});