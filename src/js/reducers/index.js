import { combineReducers } from 'redux';

import {
  UPDATE_TREE, 
  ADD_NODE, 
  REMOVE_NODE, 
  ADD_PROPERTY, 
  REMOVE_PROPERTY, 
  UPDATE_PROPERTY
} from '../actions';

const defaultState = { tree: {}, activeIndex: null }

export function udpateTree(tree) {
  return {
    type: UPDATE_TREE,
    tree: tree
  };
}

function treeReducer(state = defaultState, action) {
  let newValue;
  switch (action.type) {
    case UPDATE_TREE:
      return Object.assign({}, state, { tree: action.tree });
    case 'INCREMENT':
      newValue = state.value + 1;
      return Object.assign({}, state, { value: newValue });
    case 'DECREMENT':
      newValue = state.value - 1;
      return Object.assign({}, state, { value: newValue });
    default:
      return state;
  }
}

// const rootReducer = combineReducers({treeReducer});
const rootReducer = treeReducer;

export default rootReducer;


