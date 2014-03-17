// Ext.define('NewEmailApp.view.Viewport', {
//   extend: 'Ext.container.Viewport',
//   //requires: ['Ext.layout.container.Anchor'],
//   requires: ['Ext.layout.container.HBox'],
//   //layout: 'anchor',
//    layout: {
//      type: 'hbox',
//      align: 'stretch',
//      defaultMargins: '10'
//    },
  
//   //padding: '10 20'//,
//   /*items: [
//     {
//       xtype: 'userlist',
//       anchor: '100%'
//     }
//   ]*/

// });


Ext.define('NewEmailApp.view.Viewport', {
    extend: 'Ext.container.Viewport',
    requires:['Ext.layout.container.Border'],
    layout: {
        type: 'border'        
    }
});
