Ext.define('SimpleEmail.model.ParentEmailFolder', {
    extend: 'Ext.data.Model',
    
    fields: [
         { name: 'folder', type: 'auto' },
         //{ name: 'messages', type: 'auto'},
         //{ name: 'children', type: 'auto'},
         
    ], 

    associations : [ {
        type : 'hasMany',
        model : 'SimpleEmail.model.EmailFolder',
        name : 'children',
        autoLoad: false // This will load the store as soon as orders() is referenced
    },{
        type : 'hasMany',
        model : 'SimpleEmail.model.Email',
        name : 'messages',
        autoLoad: false // This will load the store as soon as orders() is referenced
    }],
       
    proxy : {
        type : 'ajax',        
        url: './resources/data/emails.json'
    }

});
