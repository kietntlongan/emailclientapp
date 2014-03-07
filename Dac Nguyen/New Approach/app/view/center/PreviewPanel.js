Ext.define('EmailPrototype.view.center.PreviewPanel', {
		extend: 'Ext.panel.Panel',
		alias: 'widget.previewpanel',

		requires: [
	    'Ext.form.field.TextArea',
	    'Ext.grid.Panel'
	    ],
//	    region: 'south', // Add in the ContentPanelController
	    height: 150,
//	    itemId: 'previewpanel', // Add in the ContentPanelController
	    layout: 'fit',
	    title: 'Preview',
	    items: [
	        {
	            xtype: 'textareafield',
	            itemId: 'displaypreview',
	            fieldLabel: 'Label',
	            hideLabel: true
	        }
	    ]

});