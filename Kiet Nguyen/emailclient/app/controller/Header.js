Ext.define('EmailClient.controller.Header', {
    extend: 'Ext.app.Controller',
    
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
	
	init: function() {
	    this.control({
	        '#btnSearch': {
	        	click: this.onGoBtnClick
	        }
	    });
	},
/*	
	onGoBtnClick: function(contentGrid, folder) {
		//console.log(folder);
		this.getContentPanel().down('#todogrid').hide();
		this.getContentPanel().down('#mailcontentgrid').show();
		this.getRightPanel().down('#propertiesPanel').update(' ');
		this.getPreviewPanel().update(' ');
		this.getRightPanel().show();
		this.getPreviewPanel().show();
		this.getContentPanel().down('#mailcontentgrid').reconfigure(folder.messages());
	},
*/	

	onGoBtnClick: function(button, e, eOpts) {
		var seatchText = button.up('toolbar').down('#searchTextField').getValue();
		console.log('Search Text: ' + seatchText);
		
		var arrResult = new Array(), me = this;
		
		if(this.getLeftPanel().down('panel:not([collapsed])').itemId == 'folderTree') {
			console.log('Searching mail message ...');
			
            var folderStore = Ext.getStore('Folders');
            var nodes = folderStore.getRootNode().childNodes;
            var i = 0, arrLen = nodes.length;
            for (; i < arrLen; i ++) {
            	arrResult =  arrResult.concat(me.searchInMailStore(nodes[i], seatchText));
			    var childNodes = nodes[i].childNodes, j = 0;
			    var len = childNodes.length;
			    for (; j < len; j ++) {
			    	arrResult =  arrResult.concat(me.searchInMailStore(childNodes[j], seatchText));
			    }
			};
            
			var mailStore = Ext.getStore('Emails');
			mailStore.loadData(arrResult, false);
			
			me.getContentPanel().down('#mailcontentgrid').reconfigure(mailStore);
			//me.getRightPanel().down('#propertiesPanel').update(' ');
			//me.getPreviewPanel().update(' ');
		} else {
			console.log('Search To Dos list ...');
			var ownerStore = Ext.getStore('Owners');
			var items = ownerStore.data.items;
			var i = 0, len = items.length;
			
			for (; i < len; i ++) {
				arrResult =  arrResult.concat(me.searchInTodoStore(items[i], seatchText));
			}
            var todoStore = Ext.getStore('ToDos');
            todoStore.loadData(arrResult, false);
            me.getContentPanel().down('#todogrid').reconfigure(todoStore);
		}		
	},
	
	searchInMailStore: function(mailStore, keyword) {
	    var arrayMessage = new Array();
	
	    mailStore.messages().each(function(mess) {
	        if(mess.get('message').search(keyword) != -1 || mess.get('subject').search(keyword) != -1) {
	            arrayMessage.push(mess);
	        }	
	    });
	    return arrayMessage;
	},
	
	searchInTodoStore: function(todoStore, keyword) {
	    var arrayTodos = new Array();
	    //debugger;
	
	    todoStore.todos().each(function(todo) {
	    //    debugger;
	        var searchIndex = todo.get('notes').search(keyword);
	        if(searchIndex != -1) {
	            arrayTodos.push(todo);
	        }
	
	    });
	    return arrayTodos;
	}

});
