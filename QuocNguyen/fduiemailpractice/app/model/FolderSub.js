Ext.define('FDUIEmailPractice.model.FolderSub', {
    extend: 'Ext.data.Model',
    
    fields: [
        { name: 'folder', type: 'auto' }

    ],
    proxy: {
	    type: 'ajax', 
	    //url: 'resources/data/folderemail.json', 
	    url: 'resources/data/email.json',
	    reader: { 
	        type: 'json',
	        root: 'children'
	    } 
	},
    associations : [{
        type : 'hasMany',
        model : 'FDUIEmailPractice.model.Email',
        name : 'messages', // default: hasMany model name lower case pluralized
        //foreignKey : 'customer_id', // default: model name lower case _id
        autoLoad: false // This will load the store as soon as orders() is referenced

    }]
});
