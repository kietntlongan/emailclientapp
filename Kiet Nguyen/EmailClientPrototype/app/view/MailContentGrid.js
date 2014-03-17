Ext.define("EmailClient.view.MailContentGrid", {
	extend: 'Ext.grid.Panel',
	xtype: 'widget.mailcontentgrid',
	alias: 'widget.mailcontentgrid',
	layout: {
	    type: 'fit'
	},
    columnLines: false,
    hideHeaders: true,
    selType : 'checkboxmodel',
    autoScroll: true,

	requires: ['Ext.grid.Panel', 'Ext.grid.column.Template'],
	
	columns: [
    {
        xtype: 'templatecolumn',
        tpl: [
            '<tpl>',
            '    <div style="white-space:normal;word-wrap:break-word;"><strong style="color:#000;">From:</strong>{from} &nbsp; &nbsp; <strong style="color:#000;">Received: </strong>{received:date("F j, Y g:iA")}</div>',
            '<div style="white-space:normal;word-wrap:break-word;"><strong style="color:#000;">Subject:</strong> {subject}</div>',
            '    <div style="white-space:normal;word-wrap:break-word;"><i>{message}</i></div>',
            '</tpl>'
        ],
        text: 'Mail Content Template',
        flex: 1
    }]
});