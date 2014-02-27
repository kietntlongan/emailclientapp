Ext.define('FDUIEmailPractice.store.Schools', { 
    extend: 'Ext.data.Store', 
    requires: ['FDUIEmailPractice.model.School'],

    model: 'FDUIEmailPractice.model.School',
    autoLoad: true 
});