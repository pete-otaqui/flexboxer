import AppDispatcher from 'lib/dispatchers/app-dispatcher';
import {EventEmitter} from 'events';
import assign from 'object-assign';

import * as FlexboxerConstants from 'lib/constants/flexboxer-constants';

let _root = {
  id: 1,
  contents: '',
  properties: {display: 'flex'},
  selector: '.root',
  children: [
    {id: 2, contents: 'one', selector: '.one', properties: {height: '200px'}, children: [], selected: true},
    {id: 3, contents: 'two', selector: '.two', properties: {'flex-grow': '2'}, children: []},
    {id: 4, contents: 'three', selector: '.three', properties: {'order': '2'}, children: []},
    {id: 5, contents: 'four', selector: '.four', properties: {'order': '1'}, children: []}
  ]
};

let _idIndex = 5;


/**
 * Create a ROW item.
 */
function create(contents) {
  // Using the current timestamp in place of a real id.
  var id = Date.now();
  _root[id] = {
    id: id,
    selector: '.foo',
    properties: {},
    contents: contents
  };
}

/**
 * Delete a ROW item.
 * @param {string} id
 */
function destroy(id) {
  let parent = findParentById(id);
  let child = findNodeById(id);
  let index = parent.children.indexOf(child);
  parent.children.splice(index, 1);
  select(_root.id);
}


function findNodeById(id, parent) {
  let node;
  if ( !parent ) {
    parent = _root;
  }
  if ( parent.id === id ) {
    node = parent;
  } else {
    parent.children.forEach((child) => {
      let found = findNodeById(id, child);
      if ( found ) node = found;
    });
  }
  return node;
}


function findParentById(id, parent) {
  let node;
  if ( !parent ) {
    parent = _root;
  }
  if ( parent.id === id ) {
    node = parent;
  } else {
    parent.children.forEach((child) => {
      let found = findNodeById(id, child);
      if ( found ) node = parent;
    });
  }
  return node;
}


function addChild(id, _source) {
  _idIndex++;
  let child = {id: _idIndex, contents: 'new', selector: '.new', properties: {}, children: []};
  let parent = findNodeById(id);
  parent.children.push(child);
}

function moveUp(id) {
  let child = findNodeById(id);
  let parent = findParentById(id);
  if ( !parent ) return;
  let index = parent.children.indexOf(child);
  if ( index > 0 ) {
    parent.children.splice(index, 1);
    parent.children.splice(index - 1, 0, child);
  }
}

function moveDown(id) {
  let child = findNodeById(id);
  let parent = findParentById(id);
  if ( !parent ) return;
  let index = parent.children.indexOf(child);
  if ( parent.children.length > index + 1 ) {
    parent.children.splice(index, 1);
    parent.children.splice(index + 1, 0, child);
  }
}


function select(id, node) {
  if ( !node ) node = _root;
  if ( !node.children ) node.children = [];
  node.selected = (node.id === id);
  node.children.forEach(function(child) {
    select(id, child);
  });
}


function setProperty(name, value) {
  if ( !name ) return;
  let node = getSelected();
  if ( node[name] !== undefined ) {
    node[name] = value;
  } else {
    node.properties[name] = value;
  }
}

function getSelected(node) {
  var _actual;
  if ( !node ) node = _root;
  if ( !node.children ) node.children = [];
  if ( node.selected ) {
    _actual = node;
  } else {
    node.children.forEach(function(child) {
      var temp = getSelected(child);
      if ( temp ) _actual = temp;
    });
  }
  return _actual;
}





var LayoutStore = assign({}, EventEmitter.prototype, {

  getFlattenedRules: function(rules, node) {
    if ( !rules ) rules = [];
    if ( !node ) node = _root;
    rules.push(node);
    node.children.forEach(function(child) {
      this.getFlattenedRules(rules, child);
    }.bind(this));
    return rules;
  },

  getSelected: function() {
    return getSelected();
  },

  getSelectedValueFor: function(name) {
    var selected = this.getSelected();
    var property = selected.properties[name];
    var value;
    if ( selected[name] !== undefined ) {
      value =selected[name];
    } else if (selected.properties[name] !== undefined) {
      value = selected.properties[name]
    } else {
      value = '';
    }
    // console.log(selected.selector, name, value, selected.properties);
    return value;
  },

  /**
   * Get the entire collection of ROWs.
   * @return {object}
   */
  getLayout: function() {
    return _root;
  },

  emitChange: function() {
    this.emit(FlexboxerConstants.CHANGE_EVENT);
  },

  /**
   * @param {function} callback
   */
  addChangeListener: function(callback) {
    this.on(FlexboxerConstants.CHANGE_EVENT, callback);
  },

  /**
   * @param {function} callback
   */
  removeChangeListener: function(callback) {
    // console.log('removing change listener');
    this.removeListener(FlexboxerConstants.CHANGE_EVENT, callback);
  },

  dispatcherIndex: AppDispatcher.register((payload) => {
    let action = payload.action;
    switch(action.actionType) {
      case FlexboxerConstants.FB_CREATE_NODE:
        create(action.contents);
        LayoutStore.emitChange();
        break;

      case FlexboxerConstants.FB_DESTROY_NODE:
        destroy(action.id);
        LayoutStore.emitChange();
        break;

      case FlexboxerConstants.FB_SELECT_NODE:
        select(action.id);
        LayoutStore.emitChange();

      case FlexboxerConstants.FB_SET_PROPERTY:
        setProperty(action.name, action.value);
        LayoutStore.emitChange();
        break;

      case FlexboxerConstants.FB_ADD_CHILD:
        addChild(action.parentId, action.contents, action.selector);
        LayoutStore.emitChange();
        break;

      case FlexboxerConstants.FB_MOVE_UP:
        moveUp(action.id);
        LayoutStore.emitChange();
        break;

      case FlexboxerConstants.FB_MOVE_DOWN:
        moveDown(action.id);
        LayoutStore.emitChange();
        break;

      // add more cases for other actionTypes, like TODO_UPDATE, etc.
    }

    return true; // No errors. Needed by promise in Dispatcher.
  })

});

export default LayoutStore;
