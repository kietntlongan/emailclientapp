Ext.define('SimpleEmail.store.Owners',{
    extend: 'Ext.data.TreeStore',
    requires: ['SimpleEmail.model.Owner'],

    model: 'SimpleEmail.model.Owner',
    autoLoad: true,
    sorters: ['owner']
});
