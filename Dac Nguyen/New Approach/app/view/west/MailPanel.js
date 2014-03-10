Ext.define('EmailPrototype.view.west.MailPanel', {
		extend: 'Ext.tree.Panel',
		alias: 'widget.mailpanel',

	

		title: 'Mail',
        store: 'MailTreeStore',
        displayField: 'folder',
        rootVisible: false

})