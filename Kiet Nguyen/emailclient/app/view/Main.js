Ext.define('EmailClient.view.Main', {
    extend: 'Ext.panel.Panel',
    requires:[
              'Ext.layout.container.Border',
              'EmailClient.view.Header',
              'EmailClient.store.Folders',
              'EmailClient.view.LeftPanel',
              'EmailClient.view.ContentPanel',
              'EmailClient.view.PreviewPanel',
              'EmailClient.view.RightPanel'
          ],
          xtype: 'app-main',
          layout: 'border',
          items: [{
              region: 'north',
              height: 40,
              xtype: 'appHeader'
          }, {
              region: 'south',
              xtype: 'previewpanel',
              itemId: 'previewpanel'
          },{
              region: 'west',
              xtype: 'leftpanel',
              itemId: 'leftPanel'        	  
          }, {
              region: 'center',
              //flex: 1,          
              xtype: 'contentpanel'
          }, {
              region: 'east',
              xtype: 'rightpanel',
              itemId: 'rightpanel',
              width: 220
              //flex: 0.25
          }]
});