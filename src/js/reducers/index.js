import { combineReducers } from 'redux';

import nodes from './nodes';
import navigation from './navigation';
import {
  UPDATE_NODES
} from '../actions';

export function updateNodes(tree) {
  return {
    type: UPDATE_NODES,
    tree: tree
  };
}

const rootReducer = combineReducers({nodes, navigation});

export default rootReducer;
