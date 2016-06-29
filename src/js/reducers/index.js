import { combineReducers } from 'redux';
import defaultNavigation from '../../data/defaults.json';

import {
  SET_NAVIGATION,
  UPDATE_TREE,
  SELECT_NODE
} from '../actions';

const defaultTreeState = {};
const defaultNavigationState = defaultNavigation;

export function updateTree(tree) {
  return {
    type: UPDATE_TREE,
    tree: tree
  };
}

function tree(state = defaultTreeState, action) {
  switch (action.type) {
    case UPDATE_TREE:
      return Object.assign({}, state, action.tree);
    case SELECT_NODE:
      return Object.assign({}, state, { selectedNode: action.node.id });
    default:
      return state;
  }
}

function navigation(state = defaultNavigationState, action) {
  switch(action.type) {
    case SET_NAVIGATION:
      return Object.assign({}, state, action.navigation);
    default:
      return state;
  }
}

const rootReducer = combineReducers({tree, navigation});

export default rootReducer;
