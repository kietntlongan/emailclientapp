/*
 * File: app/controller/ViewportController.js
 *
 * This file was generated by Sencha Architect version 3.0.2.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.2.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.2.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('EmailPrototype.controller.ViewportController', {
    extend: 'Ext.app.Controller',

    onBtnSearchClick: function(button, e, eOpts) {
        var seatchText = button.up('toolbar').down('#searchTextField').getValue();
        console.log('Search Text: ' + seatchText);
        var contentPanel = Ext.ComponentQuery.query('#contentpanelCenter')[0];
        var containPanelGrid = contentPanel.getComponent(0);
        var me = this;
        //debugger;
        var arrayMessageResult = new Array();
        if(containPanelGrid.getXType() === 'mailgrid') {
         //   console.log('mailgrid');
            var treeStore = Ext.getStore('MailTreeStore');

            treeStore.getRootNode().eachChild(function(currentNode){
          //      debugger;
               arrayMessageResult =  arrayMessageResult.concat(me.searchInMailStore(currentNode,seatchText));
                currentNode.children().each(function(fol) {
                     arrayMessageResult =  arrayMessageResult.concat(me.searchInMailStore(fol,seatchText));
                });
            });
            var searchStore = Ext.getStore('MailStore');
            searchStore.loadData(arrayMessageResult, false);
            containPanelGrid.reconfigure(searchStore);
           // debugger;

        } else {
            //console.log('todogrid'); record.todos()
            var userStore = Ext.getStore('UserStore');
            userStore.each(function(record) {
                 arrayMessageResult =  arrayMessageResult.concat(me.searchInTodoStore(record,seatchText));
            });
            var searchStore = Ext.getStore('TodoStore');
            searchStore.loadData(arrayMessageResult, false);
            containPanelGrid.reconfigure(searchStore);
        }
    },

    searchInMailStore: function(mailStore, keyword) {
        var arrayMessage = new Array();
        //debugger;

        mailStore.messages().each(function(mess) {
        //    debugger;
            var searchIndex = mess.get('message').search(keyword);
            if(searchIndex != -1) {
                arrayMessage.push(mess);
            }

        });
        return arrayMessage;
    },

    searchInTodoStore: function(todoStore, keyword) {
        var arrayTodos = new Array();
        //debugger;

        todoStore.todos().each(function(todo) {
        //    debugger;
            var searchIndex = todo.get('notes').search(keyword);
            if(searchIndex != -1) {
                arrayTodos.push(todo);
            }

        });
        return arrayTodos;
    },

    init: function(application) {
        this.control({
            "#btnSearch": {
                click: this.onBtnSearchClick
            }
        });
    }

});
