import { combineReducers } from 'redux';

import {
  UPDATE_TREE, 
  SELECT_NODE,
  ADD_NODE, 
  REMOVE_NODE, 
  ADD_PROPERTY, 
  REMOVE_PROPERTY, 
  UPDATE_PROPERTY
} from '../actions';

const defaultState = { tree: {}, activeIndex: null }

export function updateTree(tree) {
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
    case SELECT_NODE:
      console.log('select', action.node, action.node.id);
      return Object.assign({}, state, { selectedNode: action.node.id });
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


