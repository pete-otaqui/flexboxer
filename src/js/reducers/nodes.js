import defaultNavigation from '../../data/defaults.json';
import {
  UPDATE_NODES,
  SELECT_NODE,
  UPDATE_STYLE_PROPERTY,
  UPDATE_STYLE_VALUE,
  UPDATE_TEXT_CONTENT
} from '../actions';

const defaultNavigationState = defaultNavigation;
const defaultNodesState = defaultNavigationState[1].nodes;

function updateNodeStyleAtIndex(state, action, propObject) {
  const oldNode = action.node;
  const index = action.index;
  const styles = oldNode.style.slice();
  const baseProps = styles[index] ? styles[index] : {value: '', property: ''};
  const propMap = Object.assign({}, baseProps, propObject);
  styles[index] = propMap;
  const strippedStyles = styles.filter((s) => {
    return s.property || s.value;
  }); 
  const node = Object.assign({}, oldNode, {style: strippedStyles});
  let nodeObject = {};
  nodeObject[node.id] = node;
  return Object.assign({}, state, nodeObject);
}

function updateNodeTextContent(state, action) {
  const node = action.node;
  const newNode = Object.assign({}, node, {textContent: action.value});
  let nodeObject = {};
  nodeObject[node.id] = newNode;
  return Object.assign({}, state, nodeObject);
}

export default function nodes(state = defaultNodesState, action) {
  switch (action.type) {
    case UPDATE_NODES:
      return Object.assign({}, state, action.nodes);
    case SELECT_NODE:
      return Object.assign({}, state, { selectedNode: action.node.id });
    case UPDATE_STYLE_PROPERTY:
      return updateNodeStyleAtIndex(state, action, {property: action.property});
    case UPDATE_STYLE_VALUE:
      return updateNodeStyleAtIndex(state, action, {value: action.value});
    case UPDATE_TEXT_CONTENT:
      return updateNodeTextContent(state, action);
    default:
      return state;
  }
}
