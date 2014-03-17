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
            '<div><span width="200"><strong>From:</strong> {from}</span>',
            '<span width="50">&nbsp;</span><span><strong>Received:</strong> {received:date("F j, Y g:iA")}</span></div>',
            '<div width="100%"><strong>Subject:</strong> {subject}</div>'
        ],
        flex: 2	}
    ]
})

