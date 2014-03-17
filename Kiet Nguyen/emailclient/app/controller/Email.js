Ext.define('EmailClient.controller.Email', {
    extend: 'Ext.app.Controller',
    stores: ['Emails', 'Folders'],
    
    refs:[{
    		ref: 'contentPanel',
    		selector: 'contentpanel'
    	}, {
    		ref: 'previewPanel',
    		selector: 'previewpanel'    		
    	}, {
    		ref: 'leftPanel',
    		selector: 'leftpanel'
    	}, {
    		ref: 'rightPanel',
    		selector: 'rightpanel'    		
	}], 
    config: {
		email: null
	},
	
	init: function() {
	    this.control({
	        'leftpanel #folderTree': {
	        	itemclick: this.loadEmailList
	        },
	        'contentpanel #mailcontentgrid': {
	        	itemclick: this.loadEmail
	        },
	        'contentpaneltoolbar #newbutton': {
	        	click: this.newMessageWindow
	        }
	        //'editEmailWindow': {
	        //	close: this.updateEmailWindow
	        //}
	    });
	},
	
	loadEmailList: function(contentGrid, folder) {
		//console.log(folder);
		this.getContentPanel().down('#todogrid').hide();
		this.getContentPanel().down('#mailcontentgrid').show();
		this.getRightPanel().down('#propertiesPanel').update(' ');
		this.getPreviewPanel().update(' ');
		this.getRightPanel().show();
		this.getPreviewPanel().show();
		this.getContentPanel().down('#mailcontentgrid').reconfigure(folder.messages());
	},
	
	loadEmail: function(component, email) {
		this.setEmail(email);
		//console.log(email);
	},
	updateEmail: function(email) {
		this.getRightPanel().setEmail(email);
		this.getPreviewPanel().setEmail(email);
		//if (email) {
		//	this.getMainPanel().down('#emailGrid').getSelectionModel().select(email);
		//}
	},
	
	newMessageWindow: function() {
		if(this.getLeftPanel().down('panel:not([collapsed])').itemId == 'folderTree') {
			Ext.create('EmailClient.view.NewMessageWindow');
		}		
	}
});
