Ext.define('EmailPrototype.view.west.MailTreePanel', {
		extend: 'Ext.tree.Panel',
		alias: 'widget.mailtreepanel',

	

		title: 'Mail',
        store: 'MailTreeStore',
        displayField: 'folder',
        rootVisible: false

})