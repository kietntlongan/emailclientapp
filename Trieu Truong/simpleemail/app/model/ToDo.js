Ext.define('SimpleEmail.model.ToDo', {
    extend: 'Ext.data.Model',

    fields: [
        { name: 'title', type: 'auto'},
        { name: 'complete', type: 'auto'},
        { name: 'duedate', type: 'auto'},
        { name: 'notes', type: 'auto'}
    ], 
	
    belongsTo: 'SimpleEmail.model.Owner',

    proxy : {
        type : 'ajax',
        url : './resources/data/todos.json',
        reader: {
            root: 'children'
        }
    }  

});
