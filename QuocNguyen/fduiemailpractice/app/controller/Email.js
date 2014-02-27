Ext.define('FDUIEmailPractice.controller.Email', {
    extend: 'Ext.app.Controller',
    stores: ['Emails','Schools','FolderSub','FolderGrid'],
    //models: ['Customer', 'Order'],
	refs: [{ 
		ref: 'mainPanel', 
		selector: 'mainpanel' 
	},{ 
		ref: 'leftPanel', 
		selector: 'leftpanel' 
	}],
    init: function() {
        this.control({
//            'mainpanel #folderGrid': {
//                itemdblclick: this.loadFolders
//            },
//            'mainpanel #subfolderGrid': {
//                itemdblclick: this.loadEmails
//            },
            'leftpanel #folderTree': {
            	itemclick: this.loadEmails
            }
        });
    },

    loadFolders: function(grid, folder) {
//    	console.log(folder);
//    	console.log(folder.children());

//    	this.getMainPanel().down('#subfolderGrid').reconfigure(folder.children());
//    	this.getMainPanel().down('#emailGrid').reconfigure(folder.messages());

    },
    loadEmails: function(grid, folder) {
//    	console.log(folder);
//    	console.log(folder.children());

//    	this.getMainPanel().down('#subfolderGrid').reconfigure(folder.children());
    	this.getMainPanel().down('#emailGrid').reconfigure(folder.messages());

    }
});
