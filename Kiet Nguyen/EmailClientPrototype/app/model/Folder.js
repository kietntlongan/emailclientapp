Ext.define('EmailClient.model.Folder', {
    extend: 'Ext.data.Model',
    
    fields: [
        { name: 'folder', type: 'string' },
    ],
    
    proxy: {
        type: 'ajax', 
        url: 'data/email.json', 
        reader: { 
            type: 'json'
        } 
    },
    associations : [ {
        type : 'hasMany',
        model : 'EmailClient.model.Folder',
        name : 'children',
        autoLoad: false 

    },
    {
        type : 'hasMany',
        model : 'EmailClient.model.Email',
        name : 'messages',
        autoLoad: false
    }]
});
