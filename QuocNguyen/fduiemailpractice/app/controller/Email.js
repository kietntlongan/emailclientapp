Ext.define('FDUIEmailPractice.controller.Email', {
    extend: 'Ext.app.Controller',
    stores: ['Emails','FolderGrid','FolderEmails'],
	refs: [{ 
		ref: 'mainPanel', 
		selector: 'mainpanel' 
	},{ 
		ref: 'previewPanel', 
		selector: 'previewpanel' 
	},{ 
		ref: 'leftPanel', 
		selector: 'leftpanel' 
	},{ 
		ref: 'rightPanel', 
		selector: 'rightpanel' 
	},{ 
		ref: 'mainToolbar', 
		selector: 'maintoolbar' 
	},{ 
		ref: 'editEmailWindow', 
		selector: 'editemailwindow' 
	}],
	config: {
		email: null,
		todo: null
	},
    init: function() {
        this.control({
            'leftpanel #folderTree': {
            	itemclick: this.loadEmailList,
            	expand: this.loadEmailPanel
            },
            'mainpanel #emailGrid': {
            	itemclick: this.loadEmail
            },
            'mainpanel #todoGrid': {
            	itemclick: this.loadTodo
            },
            'maintoolbar #btnUpdate': {
            	click: this.updateEmailWindow
            },
            'editEmailWindow': {
            	close: this.updateEmailWindow
            }
        });
    },

    loadEmailList: function(grid, folder) {
    	console.log(folder);
    	console.log(folder.children());
    	console.log(folder.messages());
    	this.getMainPanel().down('#emailGrid').reconfigure(folder.messages());

    },
    loadEmail: function(component, email) {
    	this.setEmail(email);
//    	console.log(email);

    },
    loadTodo: function(component, todo) {
    	this.setTodo(todo);
//    	console.log(email);

    },
    // should move to mainpanel view ?
	updateEmail: function(email) {
		this.getRightPanel().setEmail(email);
		this.getPreviewPanel().setEmail(email);
		if (email) {
			this.getMainPanel().down('#emailGrid').getSelectionModel().select(email);
		}
	},
	updateEmailWindow: function(component) {
		var treePanel = this.getLeftPanel().down('#folderTree');
		
		if (!treePanel.collapsed) {	
			Ext.create('FDUIEmailPractice.view.EditEmailWindow', {
	    		email : this.getEmail(),
				listeners: {
					close: function(window){
						var rightP = Ext.ComponentQuery.query('rightpanel')[0];
						var previewP = Ext.ComponentQuery.query('previewpanel')[0];
						rightP.refreshTemplate();
						previewP.refreshTemplate();
				}}
	    	});
		} else {
			Ext.create('FDUIEmailPractice.view.EditToDoWindow', {
	    		todo : this.getTodo()
	    	});
		}
	},
	loadEmailPanel: function() {
		this.getRightPanel().show();
		this.getPreviewPanel().show();
		this.getMainPanel().down('#emailGrid').show();
		this.getMainPanel().down('#todoGrid').hide();
	}
});
