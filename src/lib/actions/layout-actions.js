import AppDispatcher from '../dispatchers/app-dispatcher';
import * as Constants from '../constants/flexboxer-constants';

console.log(Constants);

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
  }

};

export default LayoutActions;
