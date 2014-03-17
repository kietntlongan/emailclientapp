Ext.define('EmailClient.model.Owner', {
    extend: 'Ext.data.Model',
    
    fields: [
        { name: 'owner', type: 'string' }
    ],
    
    proxy: {
	    type: 'ajax', 
	    url: 'resources/data/todo.json',
	    reader: { 
        	type: 'json'
    	}
	},
    associations : [ {
        type : 'hasMany',
        model : 'EmailClient.model.ToDo',
        name : 'todos',
        autoLoad: false
    }]
});
