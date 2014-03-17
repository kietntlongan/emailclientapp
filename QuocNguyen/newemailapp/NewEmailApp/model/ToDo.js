Ext.define('NewEmailApp.model.ToDo', {
    extend: 'Ext.data.Model',
    
    fields: [
        { name: 'title', type: 'string' },
        { name: 'complete', type: 'bool' },
        { name: 'duedate', type: 'auto'},
        { name: 'notes', type: 'string' }

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
