Ext.define('NewEmailApp.view.email.EmailGridPanel', {
	extend: 'Ext.grid.Panel',
	xtype: 'emailGrid',
	// header: false,
	scroll: true,
	selModel: {
	    selType: 'checkboxmodel',
	    mode: 'SINGLE',
	    checkOnly: true
	},
    hideHeaders: 'true',
    columns : [ {
        xtype: 'templatecolumn',
        tpl: [
            '<div style="white-space:normal;word-wrap:break-word;"> ',
            '<div><span width="200"><strong>From:</strong> {from}</span>',
            '<span width="50">&nbsp;</span><span><strong style="color:#666;">Received:</strong> {received:date("d/m/Y h:i")}</span></div>',
            '<div width="100%"><strong style="color:#666;">Subject:</strong> {subject}</div>',
            '</div>'
        ],
        // text: 'MyTemplateColumn1',
        flex: 2	}
    ]
})

