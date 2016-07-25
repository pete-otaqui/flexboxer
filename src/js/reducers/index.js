import { combineReducers } from 'redux';
import defaultNavigation from '../../data/defaults.json';

import {
  SET_NAVIGATION,
  UPDATE_NODES,
  SELECT_NODE,
  UPDATE_STYLE_PROPERTY,
  UPDATE_STYLE_VALUE
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
  let propMap, nodeObject;
  let nodes, node, styleArray;
  switch (action.type) {
    case UPDATE_NODES:
      return Object.assign({}, state, action.nodes);
    case SELECT_NODE:
      return Object.assign({}, state, { selectedNode: action.node.id });
    case UPDATE_STYLE_PROPERTY:
      propMap = {
        property: action.property,
        value: action.node.style[action.index].value
      };
      styleArray = action.node.style.slice();
      styleArray.splice(action.index, 1, propMap);
      node = Object.assign({}, action.node, {style: styleArray});
      nodeObject = {};
      nodeObject[node.id] = node;
      nodes = Object.assign({}, state, nodeObject);
      return Object.assign({}, state, nodes);
    case UPDATE_STYLE_VALUE:
      propMap = {
        property: action.node.style[action.index].property,
        value: action.value
      };
      styleArray = action.node.style.slice();
      styleArray.splice(action.index, 1, propMap);
      node = Object.assign({}, action.node, {style: styleArray});
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
