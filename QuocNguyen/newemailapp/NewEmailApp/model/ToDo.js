Ext.define('NewEmailApp.model.ToDo', {
    extend: 'Ext.data.Model',
    
    fields: [
        { name: 'title', type: 'auto' },
        { name: 'complete', type: 'auto' },
        { name: 'duedate', type: 'auto' },
        { name: 'notes', type: 'auto' }

    ],
    proxy: {
	    type: 'ajax',  
	    url: 'resources/data/todo.json',
	    reader: { 
	        type: 'json',
	        root: 'todos'
	    } 
	}
});
