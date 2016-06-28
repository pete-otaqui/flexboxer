export const SET_NAVIGATION = 'SET_NAVIGATION';
export const UPDATE_TREE = 'UPDATE_TREE_NODE';
export const SELECT_NODE = 'SELECT_NODE';
export const ADD_NODE = 'ADD_NODE';
export const REMOVE_NODE = 'REMOVE_NODE';
export const ADD_PROPERTY = 'ADD_PROPERTY';
export const REMOVE_PROPERTY = 'REMOVE_PROPERTY';
export const UPDATE_PROPERTY = 'UPDATE_PROPERTY';


export function setNavigation(navigation) {
  return {
    type: SET_NAVIGATION,
    navigation: navigation
  };
}

export function updateTree(tree) {
  return {
    type: UPDATE_TREE,
    tree: tree
  }
}

export function selectNode(node) {
  return {
    type: SELECT_NODE,
    node: node
  }
}

export function addNode(node) {
  return {
    type: ADD_NODE,
    node: node
  }
}

export function removeNode(node) {
  return {
    type: REMOVE_NODE,
    node: node
  }
}

export function addProperty(node, property, value) {
  return {
    type: ADD_PROPERTY,
    node: node,
    property: property,
    value: value
  }
}

export function removeProperty(node, property) {
  return {
    type: ADD_PROPERTY,
    node: node,
    property: property
  }
}

export function updateProperty(node, property, value) {
  return {
    type: UPDATE_PROPERTY,
    node: node,
    property: property,
    value: value
  }
}
