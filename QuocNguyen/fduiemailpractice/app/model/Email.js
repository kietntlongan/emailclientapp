Ext.define('FDUIEmailPractice.model.Email', {
    extend: 'Ext.data.Model',
    
    fields: [
        { name: 'from', type: 'auto' },
        { name: 'to', type: 'auto' },
        { name: 'urgent', type: 'auto' },
//        { name: 'received', type: 'auto' },
        { name: 'received', type: 'date', dateFormat: 'Y-m-d H:i:s' },
        { name: 'subject', type: 'auto' },
        { name: 'message', type: 'auto' }

    ],
    proxy: {
	    type: 'ajax', 
	    url: 'resources/data/email.json', 
	    reader: { 
	        type: 'json'//,
//	        root: 'messages'
	    } 
	}
});
