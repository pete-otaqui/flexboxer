import AppDispatcher from '../dispatchers/app-dispatcher';
import * as Constants from '../constants/flexboxer-constants';

let LayoutActions = {

  addNode: function(parentId, contents, selector) {
    contents = contents || 'NEW';
    selector = selector || '.new';
    AppDispatcher.handleViewAction({
      actionType: Constants.FB_ADD_CHILD,
      parentId: parentId,
      contents: contents
    });
  },

  removeNode: function(id) {
    AppDispatcher.handleViewAction({
      actionType: Constants.FB_DESTROY_NODE,
      id: id
    });
  },

  selectNode: function(id) {
    AppDispatcher.handleViewAction({
      actionType: Constants.FB_SELECT_NODE,
      id: id
    });
  },

  setPropertyValue: function(name, value) {
    AppDispatcher.handleViewAction({
      actionType: Constants.FB_SET_PROPERTY,
      name: name,
      value: value
    });
  },

  addChild: function(id) {
    AppDispatcher.handleViewAction({
      actionType: Constants.FB_ADD_CHILD,
      id: id
    });
  },

  destroyNode: function(id) {
    AppDispatcher.handleViewAction({
      actionType: Constants.FB_DESTROY_NODE,
      id: id
    });
  },

  moveUp: function(id) {
    AppDispatcher.handleViewAction({
      actionType: Constants.FB_MOVE_UP,
      id: id
    });
  },

  moveDown: function(id) {
    AppDispatcher.handleViewAction({
      actionType: Constants.FB_MOVE_DOWN,
      id: id
    });
  },

  loadSample: function(sample) {
    AppDispatcher.handleViewAction({
      actionType: Constants.FB_LOAD_SAMPLE,
      sample: sample
    });
  }

};

export default LayoutActions;
