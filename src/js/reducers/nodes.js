import defaultNavigation from '../../data/defaults.json';
import {
  UPDATE_NODES,
  SELECT_NODE,
  UPDATE_STYLE_PROPERTY,
  UPDATE_STYLE_VALUE
} from '../actions';

const defaultNavigationState = defaultNavigation;
const defaultNodesState = defaultNavigationState[0].nodes;

export default function nodes(state = defaultNodesState, action) {
  let baseProps, propMap, nodeObject;
  let nodes, node, styles, index;
  switch (action.type) {
    case UPDATE_NODES:
      return Object.assign({}, state, action.nodes);
    case SELECT_NODE:
      return Object.assign({}, state, { selectedNode: action.node.id });
    case UPDATE_STYLE_PROPERTY:
      styles = action.node.style.slice();
      index = action.index;
      baseProps = styles[index] ? styles[index] : {value: ''};
      propMap = Object.assign({}, baseProps, {property: action.property});
      styles[action.index] = propMap;
      node = Object.assign({}, action.node, {style: styles});
      nodeObject = {};
      nodeObject[node.id] = node;
      nodes = Object.assign({}, state, nodeObject);
      return Object.assign({}, state, nodes);
    case UPDATE_STYLE_VALUE:
      styles = action.node.style.slice();
      index = action.index;
      baseProps = styles[index] ? styles[index] : {property: ''};
      propMap = Object.assign({}, baseProps, {value: action.value});
      styles[action.index] = propMap;
      node = Object.assign({}, action.node, {style: styles});
      nodeObject = {};
      nodeObject[node.id] = node;
      nodes = Object.assign({}, state, nodeObject);
      return Object.assign({}, state, nodes);
    default:
      return state;
  }
}
