Ext.define('EmailClient.model.Email', {
    extend: 'Ext.data.Model',
    
    fields: [
        { name: 'from', type: 'string' },
        { name: 'to', type: 'string' },
        { name: 'urgent', type: 'bool' },
        { name: 'received', type: 'date', dateFormat: 'Y-m-d H:i:s' },
        { name: 'subject', type: 'string' },
        { name: 'message', type: 'string' }
    ],
    proxy: {
        type: 'ajax', 
        url: 'data/email.json', 
        reader: { 
            type: 'json' 
        } 
    }
});
