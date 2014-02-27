Ext.define('FDUIEmailPractice.model.School', {
    extend: 'Ext.data.Model',
    
    fields: [
        { name: 'id', type: 'auto' },
        { name: 'name', type: 'auto' },
        { name: 'fullname', type: 'auto' },
        { name: 'latitude', type: 'auto' },
        { name: 'longitude', type: 'auto' }

    ],
    proxy: {
	    type: 'ajax', 
	    url: 'http://traininglabs.sencha.com/go?fn=schoollist', 
	    reader: { 
	        type: 'json', 
	        root: 'data' 
	    } 
	}
});