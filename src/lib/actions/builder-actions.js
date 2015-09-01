import AppDispatcher from '../dispatchers/app-dispatcher';
import Constants from '../constants/flexboxer-constants';

let BuilderActions = {

  addRow: function(where) {
    AppDispatcher.handleViewAction({
      actionType: Constants.FB_CREATE_ROW,
      where: where
    });
  },

  removeRow: function(id) {
    AppDispatcher.handleViewAction({
      actionType: Constants.FB_DESTROY_ROW,
      id: id
    });
  }

};

export default BuilderActions;
