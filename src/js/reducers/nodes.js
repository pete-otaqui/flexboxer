import defaultNavigation from '../../data/defaults.json';
import {
  UPDATE_NODES,
  SELECT_NODE,
  ADD_NODE,
  REMOVE_NODE,
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

function uniqid() {
  return Math.round(Math.random() * 1000000);
}

function addNodeToParent(state, action) {
  const parent = action.parent;
  const newId = uniqid();
  const newSelector = '.child';
  const child = {
    id: newId,
    selector: newSelector,
    childIds: [],
    textContent: ''
  };
  const childObject = {};
  childObject[newId] = child;
  const childIds = parent.childIds.concat(newId);
  const newParent = Object.assign({}, parent, {childIds});
  const parentObject = {};
  parentObject[parent.id] = newParent;
  return Object.assign({}, state, parentObject, childObject);
}

function removeNodeId(state, id) {
  const node = state[id];
  node.childIds.forEach((childId) => {
    removeNodeId(state, childId);
  });
  Object.entries(state)
    .filter(([key]) => key !== 'selectedNode')
    .forEach((entry) => {
      const other = entry[1];
      other.childIds = other.childIds
        .filter(childId => childId !== id);
    });
  delete state[id];
}

function removeNode(state, action) {
  const node = action.node;
  let nextState = Object.assign({}, state);
  removeNodeId(nextState, node.id);
  return nextState;
}

export default function nodes(state = defaultNodesState, action) {
  switch (action.type) {
    case UPDATE_NODES:
      return Object.assign({}, action.nodes);
    case SELECT_NODE:
      return Object.assign({}, state, { selectedNode: action.node.id });
    case UPDATE_STYLE_PROPERTY:
      return updateNodeStyleAtIndex(state, action, {property: action.property});
    case UPDATE_STYLE_VALUE:
      return updateNodeStyleAtIndex(state, action, {value: action.value});
    case UPDATE_TEXT_CONTENT:
      return updateNodeTextContent(state, action);
    case ADD_NODE:
      return addNodeToParent(state, action);
    case REMOVE_NODE:
      return removeNode(state, action);
    default:
      return state;
  }
}
