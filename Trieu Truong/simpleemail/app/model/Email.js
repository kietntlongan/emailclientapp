Ext.define('SimpleEmail.model.Email', {
    extend: 'Ext.data.Model',
    
    fields: [
        { name: 'from', type: 'auto' },
        { name: 'to', type: 'auto' },
        { name: 'urgent', type: 'auto' },
        { name: 'received', type: 'auto' },
        { name: 'subject', type: 'auto' },
        { name: 'message', type: 'auto' }
    ],   

    //belongsTo: 'EmailFolder',

    proxy : {
        type : 'ajax',
        url : './resources/data/emails.json',
        reader: {
            //type: 'json',
            root: 'messages'
        }
    }
});
