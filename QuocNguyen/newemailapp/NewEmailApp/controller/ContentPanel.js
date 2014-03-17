Ext.define('NewEmailApp.controller.ContentPanel', {
  extend: 'NewEmailApp.controller.AbstractFdController',
  requires:[
	'Ext.panel.Panel',
	'NewEmailApp.controller.email.EmailGridPanel',
  'NewEmailApp.controller.todo.ToDoGridPanel',
  'NewEmailApp.controller.MainToolBar'
	],
  views: [
    'ContentPanel',
    'email.EditEmailWindow',
    'todo.EditToDoWindow'
  ],
  config: {
    email: null,
    todo: null
  },
  init: function(application){
    var me = this,
        controller;

    controller = me.createController('MainToolBar');
    controller = me.createController('email.EmailGridPanel');
    controller = me.createController('email.EmailGridPanel');
    controller = me.createController('todo.ToDoGridPanel');

    me.control({
        'emailGrid': {
          itemclick: this.loadEmail
        },
        'todoGrid': {
          itemclick: this.loadToDo
        },
        'maintoolbar #btnNew': {
          click: this.newWindow
        },
        'maintoolbar #btnUpdate': {
          click: this.updateWindow
        }
    });

    me.listen({
      controller: {
        '*' : {
          searchItem: me.searchItem,
          folderChange: me.loadEmailList,
          ownerChange: me.loadToDoList,
          onEmailFolderExpand: me.loadEmailPanel
        }
      }
    });
  },
  
  getViewItems: function(){
    var me = this,
        controllerId, controller, nestedView,
        i = 0,
        items = new Array(),
        dockedItems = new Array(),
        results = new Array();

    if (me.dynamicControllers == null)
    	return results;
    
    for (; i < me.dynamicControllers.length; i++){
      controllerId = me.dynamicControllers[i];
      controller = me.getController(controllerId);
      nestedView = controller.getViewConfig();
      isDocked = controller.isDockedItem();
      if (nestedView){
        nestedView = Ext.apply(nestedView, {});
        if (isDocked) {
          dockedItems.push(nestedView);
        } else {
          items.push(nestedView);
        }
      }
    }
    results.push(items);
    results.push(dockedItems);
    return results;
  },
  
  getViewConfig: function(){
    var me = this, 
       viewId, cfg, containedItems,containedDockedItems;
    
    viewId = me.getViewId('ContentPanel');
    containedItems = me.getViewItems()[0];
    containedDockedItems = me.getViewItems()[1];

    // containedItems = me.getViewItems();

    cfg = {
    	xtype: 'contentpanel',
    	items: containedItems,
      dockedItems: containedDockedItems
    };
    return cfg;
  },

  loadEmail: function(component, email) {
    this.email = email;
    this.fireEvent('changeEmail', this, email);
  },

  loadEmailList: function(target, folder) {
    Ext.ComponentQuery.query('emailGrid')[0].reconfigure(folder.messages());
  },

  loadEmailPanel: function(target,isEmail) {
    var emailGridPanel = Ext.ComponentQuery.query('emailGrid')[0];
    var todoGridPanel = Ext.ComponentQuery.query('todoGrid')[0];

    if (isEmail) {
      emailGridPanel.show();
      todoGridPanel.hide();
    } else {
      emailGridPanel.hide();
      todoGridPanel.show();
    }
  },

  loadToDo: function(component, todo) {
    this.todo = todo;
  },

  loadToDoList: function(target, owner) {
    Ext.ComponentQuery.query('todoGrid')[0].reconfigure(owner.todos());
  },

  searchItem: function(target, strSearch, isSearchToDo) {
    var me = this;
    var arrSearchResult = new Array();
    var emailGrid = Ext.ComponentQuery.query('emailGrid')[0];
    var todoGrid = Ext.ComponentQuery.query('todoGrid')[0];

    if (!isSearchToDo) {
      var treeStore = Ext.getStore('FolderEmails');
      var currentNode = treeStore.getRootNode();
      arrSearchResult = me.searchInFolder(currentNode,strSearch);
      var searchStore = Ext.getStore('Emails');
      searchStore.loadData(arrSearchResult, false);
      if (searchStore!=null)
        emailGrid.reconfigure(searchStore);

    } else {
      var ownerStore = Ext.getStore('Owners');
      ownerStore.each(function(owner){
        arrSearchResult = arrSearchResult.concat(me.searchInOwner(owner,strSearch));
      });
      // console.log('Search Result:' + arrSearchResult.length);
      // console.log(arrSearchResult);
      var searchStore = Ext.getStore('ToDos');
      searchStore.loadData(arrSearchResult, false);
      if (searchStore!=null)
        todoGrid.reconfigure(searchStore);

    }
  },

  searchInFolder: function(folder, keyword) {
    var me = this;
    var arrResult = new Array();
    var arrSearchFieldEmail = ["from","to","subject","message"];
    var isLeaf = folder.get('leaf');
    // Perform the full text search for all of messages of current folder
    folder.messages().each(function(email) {
      arrResult = arrResult.concat(me.fullSearchInJson(email,arrSearchFieldEmail,keyword));
    });
    // if current folder is not a leaf then perform the full text search for all of its children
    if (!isLeaf) {
      folder.eachChild(function(subfolder) {
        arrResult = arrResult.concat(me.searchInFolder(subfolder,keyword));
      });
    } 
    return arrResult;
  },

  searchInOwner: function(owner, keyword) {
    var me = this;
    var arrResult = new Array();
    var arrSearchFieldTodo = ["title","notes"];
    // Perform the full text search for all of todos of current owner
    owner.todos().each(function(todo) {
      arrResult = arrResult.concat(me.fullSearchInJson(todo,arrSearchFieldTodo,keyword));
    });

    return arrResult;
  },

  fullSearchInJson: function(dataNode, arrSearchField, keyword) {
    var me = this;
    var arrResult = new Array();
    var searchIndex;
    for (i=0; i<arrSearchField.length;i++){
      var orgValue = dataNode.get(arrSearchField[i].toString());
//        orgValue = orgValue.replace('<mark>','');
//        orgValue = orgValue.replace('</mark>','');
      searchIndex = dataNode.get(arrSearchField[i].toString()).search(keyword);       
      if (searchIndex != -1) {
        // var matchValue = orgValue.replace(keyword,'<mark>'+keyword+'</mark>');
        var temp = dataNode;
//          console.log(dataNode);
//          dataNode.set(arrSearchField[i].toString(),matchValue);
        // temp.set(arrSearchField[i].toString(),matchValue);
        arrResult.push(temp);
        break;
      }
    }
    return arrResult;
  },

  newWindow: function() {
    var treePanel = emailGridPanel = Ext.ComponentQuery.query('folderTree')[0];
    if (!treePanel.collapsed) {
      Ext.create('NewEmailApp.view.email.EditEmailWindow');
    } else {
      Ext.create('NewEmailApp.view.todo.EditToDoWindow');
    }
  },
  updateWindow: function() {
    var treePanel = emailGridPanel = Ext.ComponentQuery.query('folderTree')[0];
    if (!treePanel.collapsed) {
      Ext.create('NewEmailApp.view.email.EditEmailWindow');
    } else {
      Ext.create('NewEmailApp.view.todo.EditToDoWindow');
    }
  }
});