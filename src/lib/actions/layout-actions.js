import AppDispatcher from '../dispatchers/app-dispatcher';
import * as Constants from '../constants/flexboxer-constants';

let LayoutActions = {

  addNode: function(parentId, contents) {
    contents = contents || 'NEW';
    AppDispatcher.handleViewAction({
      actionType: Constants.FB_CREATE_NODE,
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
  }

};

export default LayoutActions;
