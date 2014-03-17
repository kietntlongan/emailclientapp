Ext.define('SimpleEmail.model.Owner', {
    extend: 'Ext.data.Model',
    
    fields: [
         { name: 'owner', type: 'auto' },
         { name: 'id', type: 'auto' }
    ], 

    associations : [{
        type : 'hasMany',
        model : 'SimpleEmail.model.ToDo',
        name : 'todos',
        autoLoad: false // This will load the store as soon as orders() is referenced
    }/*,{
        type : 'hasMany',
        model : 'SimpleEmail.model.ToDoFolder',
        name : 'children',
        autoLoad: false // This will load the store as soon as orders() is referenced
    }*/],
       
    proxy : {
        type : 'ajax',        
        url: './resources/data/todos.json'
    }

});
