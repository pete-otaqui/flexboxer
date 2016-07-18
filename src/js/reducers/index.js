import { combineReducers } from 'redux';
import defaultNavigation from '../../data/defaults.json';

import {
  SET_NAVIGATION,
  UPDATE_NODES,
  SELECT_NODE,
  UPDATE_PROPERTY
} from '../actions';

const defaultNavigationState = defaultNavigation;
const defaultNodesState = defaultNavigationState[0].nodes;

export function updateNodes(tree) {
  return {
    type: UPDATE_NODES,
    tree: tree
  };
}

function nodes(state = defaultNodesState, action) {
  let propObject, nodeObject;
  let nodes, node, styleObject;
  switch (action.type) {
    case UPDATE_NODES:
      return Object.assign({}, state, action.nodes);
    case SELECT_NODE:
      return Object.assign({}, state, { selectedNode: action.node.id });
    case UPDATE_PROPERTY:
      propObject = {};
      propObject[action.property] = action.value;
      styleObject = Object.assign({}, action.node.style, propObject);
      node = Object.assign({}, action.node, {style: styleObject});
      nodeObject = {};
      nodeObject[node.id] = node;
      nodes = Object.assign({}, state, nodeObject);
      return Object.assign({}, state, nodes);
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

const rootReducer = combineReducers({nodes, navigation});

export default rootReducer;
