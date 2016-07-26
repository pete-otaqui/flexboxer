import defaultNavigation from '../../data/defaults.json';
import {
  UPDATE_NODES,
  SELECT_NODE,
  UPDATE_STYLE_PROPERTY,
  UPDATE_STYLE_VALUE
} from '../actions';

const defaultNavigationState = defaultNavigation;
const defaultNodesState = defaultNavigationState[0].nodes;

function updateNodeStyleAtIndex(state, action, propObject) {
  const oldNode = action.node;
  const index = action.index;
  const styles = oldNode.style.slice();
  const baseProps = styles[index] ? styles[index] : {value: '', property: ''};
  const propMap = Object.assign({}, baseProps, propObject);
  styles[index] = propMap;
  const node = Object.assign({}, oldNode, {style: styles});
  const nodeObject = {};
  nodeObject[node.id] = node;
  return Object.assign({}, state, nodeObject);
}

export default function nodes(state = defaultNodesState, action) {
  // let baseProps, propMap, nodeObject;
  // let nodes, node, styles, index;
  switch (action.type) {
    case UPDATE_NODES:
      return Object.assign({}, state, action.nodes);
    case SELECT_NODE:
      return Object.assign({}, state, { selectedNode: action.node.id });
    case UPDATE_STYLE_PROPERTY:
      return updateNodeStyleAtIndex(state, action, {property: action.property});
    case UPDATE_STYLE_VALUE:
      return updateNodeStyleAtIndex(state, action, {value: action.value});
    default:
      return state;
  }
}
