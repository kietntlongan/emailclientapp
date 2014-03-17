Ext.define("NewEmailApp.view.email.PropertiesPanel", {
  extend: 'Ext.panel.Panel',
  xtype: 'propertiespanel',
  bodypadding: 12,
  title: '<strong>Properties</strong>',
  tpl: [
    '<div>',
    '<p><b>Subject:</b></p>',
    '{subject}<br/>',
    '<p><b>Received:</b></p>',
    '{received}<br/>',
    '<p><b>From:</b></p>',
    '{from}<br/>',
    '<p><b>To:</b></p>',
    '{to}<br/>',
    '</div>'
  ]
});