Ext.define("SimpleEmail.view.LeftPanel", {
    extend: 'Ext.panel.Panel',    
    xtype: 'leftpanel',



    //collapsible: true,
    height: 250,
    width: 250,
   // title: 'Mail & ToDo\'s',
   /* layout: {
        type: 'accordion'
    },*/
    collapsible: true,
    
    config : {
        folder: "",
        messages: null
    },
   
   
    items: [{
            xtype: 'treepanel',
            itemId: 'mailtreepanel',
            title: 'Mail',
            collapsible: true,
            displayField: 'folder',
            store: 'ParentEmailFolders',
            rootVisible: false
        },{
            xtype: 'treepanel',
            itemId: 'todotreepanel',
            title: 'To Do\'s',
            collapsible: true ,
            displayField: 'owner',           
            store: 'Owners',
            rootVisible: false
    }]

    

/*    initComponent: function() {
   	(this,{
        items: [{
            xtype: 'treepanel',
            title: 'Mail',
            collapsible: true,
            //store: 'Folders',
        },{
            xtype: 'panel',
            title: 'To Do\'s',
            collapsible: true  
        }]
    }) 
       // me.setFolder(record.get('folder'));
        this.callParent();
    },


    tbar : [ {
        xtype : 'combobox',
        itemId : 'schoolCombo',
        fieldLabel : 'Select Folder',
        labelWidth : 60,
        width : 180,
        forceSelection : true,
        emptyText : 'Select',

        //store : 'Folders',

        queryMode : 'local',
        displayField : 'folder',
        valueField : 'folder',

        listeners : {
            change : function(combo, value) {
                combo.up('filter').setFolder(value);
            },
            
            
        }
    } ],*/

/*initComponent: function() {
        var me = this;

        this.callParent();
    },*/
    

});