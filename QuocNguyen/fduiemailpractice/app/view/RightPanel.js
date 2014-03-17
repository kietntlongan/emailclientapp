Ext.define("FDUIEmailPractice.view.RightPanel", {
    extend: 'Ext.panel.Panel',
	xtype: 'rightpanel',
	layout: {
	    type: 'accordion'
	},
	config: {
		email: null
	},
	collapsible: true,
	title: 'Information',
	initComponent: function() {
	    var me = this;
	
	    Ext.applyIf(me, {
	        items: [
	            {
	            	xtype: 'panel',
	            	itemId : 'propertiesPanel',		            
	                bodypadding: 12,
	                title: '<strong>Properties</strong>',
		            tpl: [
		    		'<div>',
		    		'<p><b>Subject:</b></p>',
		    		'{subject}<br/>',
		    		'<p><b>Received:</b></p>',
		    		'{received}<br/>',
		    		'<p><b>From:</b></p>',
		    		'{from}<br/>',
		    		'<p><b>To:</b></p>',
		    		'{to}<br/>',
		    		'</div>'
		    		],
	                //html: 'Properties content here',
	                //store: 'FolderEmails',
	
	                viewConfig: {
	
	                }
	            },
	            {
	                xtype: 'panel',
	                title: '<strong>Related</strong>',
	                html: 'No related messages',
	                viewConfig: {
	
	                }
	            }
	        ]
	    });
	    me.callParent(arguments);
	},
	refreshTemplate: function(){
		//var button = this.down('#edit');
		if (this.getEmail()) {
			this.down('#propertiesPanel').update(this.getEmail().getData());
			//this.update(this.getEmail().getData());
//			button.enable();
		} else {
			this.update(' ');
//			button.disable();
		}
	},
	updateEmail: function(email) {
	    this.refreshTemplate();
	}
});