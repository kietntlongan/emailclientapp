Ext.define('EmailClient.controller.AppHeader', {
    extend: 'EmailClient.controller.AbstractFdController',
    
    requires: ['EmailClient.view.AppHeader'],

    views: ['AppHeader'],
    
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
	
	getViewConfig: function(){
		  var me = this, viewId, cfg;
		  
		  viewId = me.getViewId('appHeader');
		  cfg = {
		    itemId: viewId,
		    xtype : 'appHeader'
		  }
		  return cfg;
	},

	
	init: function() {
	    this.control({
	        '#btnSearch': {
	        	click: this.onGoBtnClick
	        }
	    });
	},

	onGoBtnClick: function(button, e, eOpts) {
		var seatchText = button.up('toolbar').down('#searchTextField').getValue();
		console.log('Search Text: ' + seatchText);
		
		var arrResult = new Array(), me = this;
		var folderTree = Ext.ComponentQuery.query('mailtree');
		
		if(folderTree.collapsed == false) {
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
	    var arrMessage = new Array();
	
	    mailStore.messages().each(function(mess) {
	        if(mess.get('message').search(keyword) != -1 || mess.get('subject').search(keyword) != -1) {
	        	arrMessage.push(mess);
	        }	
	    });
	    return arrMessage;
	},
	
	searchInTodoStore: function(todoStore, keyword) {
	    var arrTodos = new Array();
	
	    todoStore.todos().each(function(todo) {
	        var searchIndex = todo.get('notes').search(keyword);
	        if(searchIndex != -1) {
	        	arrTodos.push(todo);
	        }	
	    });
	    return arrTodos;
	}

});
