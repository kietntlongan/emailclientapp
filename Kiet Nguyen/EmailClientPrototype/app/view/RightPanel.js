Ext.define("EmailClient.view.RightPanel", {
	extend: 'Ext.panel.Panel',
	xtype: 'widget.rightpanel',
	alias: 'widget.rightpanel',
	//itemId: 'rightpanel',
		
	config: {email: null},

			split: true,
			title: 'Information',
		    tools: [{
		        xtype: 'tool',
		        type: 'gear'
		    }],
		    
	title: 'Information',		
	collapsible: true, 
	layout: {
		type: 'accordion'
	},	
	width: 200,	
	items: [{
		xtype: 'panel',
		itemId : 'propertiesPanel',	
	    tools: [{
	        xtype: 'tool',
	        type: 'gear'
	    }],		
	    bodypadding: 12,
	    title: '<strong>Properties</strong>',
	    tpl: [
	          '<div>',
			'<b>Subject:</b><br/>',
			'{subject}<br/><br />',
			'<b>Received:</b><br />',
			'{received:date("F j, Y g:iA")}<br/><br />',
			'<b>From:</b><br />',
			'{from}<br/><br />',
			'<b>To:</b><br />',
			'{to}<br/>',
			'</div>' ]
		}, {
	    	xtype: 'panel',
	    	title: '<strong>Related</strong>',
	    	html: 'No related messages',
	    	tools: [{
	        		xtype: 'tool',
	        		type: 'maximize'
	    		}, {
	        		xtype: 'tool',
	        		type: 'gear'
	    	}]	
/*	}, {
	    xtype: 'panel',
	    tools: [
	    {
	        xtype: 'tool',
	        type: 'maximize'
	    },
	    {
	        xtype: 'tool',
	        type: 'gear'
	    }]	*/
	}],
	refreshTemplate: function(){
		if (this.getEmail()) {
			this.down('#propertiesPanel').update(this.getEmail().getData());
		} else {
			this.update(' ');
		}
	},
	updateEmail: function(email) {
	    this.refreshTemplate();
	}

});