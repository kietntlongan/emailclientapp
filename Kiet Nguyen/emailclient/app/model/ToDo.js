Ext.define('EmailClient.model.ToDo', {
    extend: 'Ext.data.Model',
    
    fields: [
        { name: 'title', type: 'string' },
        { name: 'complete', type: 'bool' },
        { name: 'duedate', type: 'date', dateFormat: 'Y-m-d' },
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
