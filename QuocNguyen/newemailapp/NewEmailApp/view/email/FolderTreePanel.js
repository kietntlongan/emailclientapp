Ext.define('NewEmailApp.view.email.FolderTreePanel', {
		extend: 'Ext.tree.Panel',
		xtype: 'folderTree',
        // itemId : 'folderTree',
        title: '<strong>Mail</strong>',
        store: 'FolderEmails',
        displayField: 'folder',
        rootVisible: false
})