Ext.define('SimpleEmail.model.EmailFolder', {
    extend: 'Ext.data.Model',

    fields: [
        { name: 'folder', type: 'auto'},
        //{ name: 'messages', type: 'auto'},

    ], 

    //hasMany: {model: 'SimpleEmail.model.Email', name: 'emails', associationKey: 'messages'},

    belongsTo: 'ParentEmailFolder',
 

    associations : [ {
        type : 'hasMany',
        model : 'SimpleEmail.model.EmailFolder',
        name : 'messages'       
    } ],
	
    proxy : {
        type : 'ajax',
        url : './resources/data/emails.json',
        reader: {
            //type: 'json',
            root: 'children'
        }
    }

/*	autoLoad: true, 
	root : {
        text : 'All',
        expanded : true
    },
*/
  

});
