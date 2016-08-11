export const SET_NAVIGATION = 'SET_NAVIGATION';
export const UPDATE_NODES = 'UPDATE_NODES';
export const SELECT_NODE = 'SELECT_NODE';
export const ADD_NODE = 'ADD_NODE';
export const REMOVE_NODE = 'REMOVE_NODE';
export const ADD_PROPERTY = 'ADD_PROPERTY';
export const REMOVE_PROPERTY = 'REMOVE_PROPERTY';
export const UPDATE_STYLE_PROPERTY = 'UPDATE_STYLE_PROPERTY';
export const UPDATE_STYLE_VALUE = 'UPDATE_STYLE_VALUE';
export const UPDATE_TEXT_CONTENT = 'UPDATE_TEXT_CONTENT';


export function setNavigation(navigation) {
  return {
    type: SET_NAVIGATION,
    navigation: navigation
  };
}

export function updateNodes(nodes) {
  return {
    type: UPDATE_NODES,
    nodes: nodes
  };
}

export function selectNode(node) {
  return {
    type: SELECT_NODE,
    node: node
  };
}

export function addNode(parent) {
  return {
    type: ADD_NODE,
    parent: parent
  };
}

export function removeNode(node) {
  return {
    type: REMOVE_NODE,
    node: node
  };
}

export function addProperty(node, property, value) {
  return {
    type: ADD_PROPERTY,
    node: node,
    property: property,
    value: value
  };
}

export function removeProperty(node, property) {
  return {
    type: ADD_PROPERTY,
    node: node,
    property: property
  };
}

export function updateStyleProperty(node, index, property) {
  return {
    type: UPDATE_STYLE_PROPERTY,
    node: node,
    index: index,
    property: property
  };
}

export function updateStyleValue(node, index, value) {
  return {
    type: UPDATE_STYLE_VALUE,
    node: node,
    index: index,
    value: value
  };
}

export function updateTextContent(node, value) {
  return {
    type: UPDATE_TEXT_CONTENT,
    node: node,
    value: value
  };
}
