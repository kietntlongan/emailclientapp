Ext.define('EmailClient.controller.ToDo', {
    extend: 'Ext.app.Controller',
    stores: ['Owners', 'ToDos'],
    
    refs:[{
    		ref: 'contentPanel',
    		selector: 'contentpanel'
	}, {
		ref: 'rightPanel',
		selector: 'rightpanel'
	}, {
		ref: 'leftPanel',
		selector: 'leftpanel'
	}, {
		ref: 'previewPanel',
		selector: 'previewpanel'
	}], 

	init: function() {
	    this.control({
	        'leftpanel #ownerList': {
	        	itemclick: this.loadToDoList
	        },
	        'contentpaneltoolbar #newbutton': {
	        	click: this.newToDoWindow
	        }
	    });
	},
	loadToDoList: function(grid, owner) {
		this.getContentPanel().down('#todogrid').show();
		this.getContentPanel().down('#mailcontentgrid').hide();
		this.getRightPanel().hide();
		this.getPreviewPanel().hide();
		this.getContentPanel().down('#todogrid').reconfigure(owner.todos());
	},
	
	newToDoWindow: function() {
		if(this.getLeftPanel().down('panel:not([collapsed])').itemId == 'ownerList') {
			Ext.create('EmailClient.view.NewToDoWindow');
		}
	}
});
