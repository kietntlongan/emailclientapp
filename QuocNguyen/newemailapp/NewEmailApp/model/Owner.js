Ext.define('NewEmailApp.model.Owner', {
    extend: 'Ext.data.Model',
    
    fields: [
        { name: 'owner', type: 'auto' }
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
        model : 'NewEmailApp.model.ToDo',
        name : 'todos', // default: hasMany model name lower case pluralized
        autoLoad: false // This will load the store as soon as todos() is referenced

    }]
});
