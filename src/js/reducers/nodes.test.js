import tape from 'tape';

import nodes from './nodes';
import {
  UPDATE_NODES,
  SELECT_NODE,
  UPDATE_STYLE_PROPERTY,
  UPDATE_STYLE_VALUE
} from '../actions';

tape('reducers/nodes: Updates nodes', (assert) => {
  assert.plan(1);
  const state = {};
  const action = {
    type: UPDATE_NODES,
    nodes: {
      1: {}
    }
  };
  const nextState = nodes(state, action);
  assert.deepEqual(nextState, action.nodes);
});

tape('reducers/nodes: Selects a node', (assert) => {
  assert.plan(1);
  const state = {};
  const action = {
    type: SELECT_NODE,
    node: { id: 1 }
  };
  const nextState = nodes(state, action);
  assert.equal(nextState.selectedNode, 1);
});

tape('reducers/nodes: Updates a style property', (assert) => {
  assert.plan(1);
  const state = {1: {id: 1, style: [{property: 'width', value: 1}]}};
  const action = {
    type: UPDATE_STYLE_PROPERTY,
    node: state[1],
    index: 0,
    property: 'height'
  };
  const newState = nodes(state, action);
  const newProperty = newState[1].style[0].property;
  assert.equal(newProperty, 'height');
});

tape('reducers/nodes: Updates a style value', (assert) => {
  assert.plan(1);
  const state = {1: {id: 1, style: [{property: 'width', value: 1}]}};
  const action = {
    type: UPDATE_STYLE_VALUE,
    node: state[1],
    index: 0,
    value: 2
  };
  const newState = nodes(state, action);
  const newValue = newState[1].style[0].value;
  assert.equal(newValue, 2);
});

tape('reducers/nodes: Winnows empty styles', (assert) => {
  assert.plan(1);
  const state = {
    1: {
      id: 1,
      style: [
        {property: 'width', value: 1},
        {property: '', value: ''},
        {property: '', value: ''}
      ]
    }
  };
  const action = {
    type: UPDATE_STYLE_VALUE,
    node: state[1],
    index: 0,
    value: 2
  };
  const newState = nodes(state, action);
  const newStyle = newState[1].style;
  assert.equal(newStyle.length, 1);
});

tape('reducers/nodes: Returns default state by default', (assert) => {
  assert.plan(1);
  const state = {};
  const action = {type: 'UNRECOGNIZED'};
  const newState = nodes(state, action);
  assert.equal(newState, state);
});

tape('reducers/nodes: Uses a default empty node style', (assert) => {
  assert.plan(1);
  const state = {1: {id: 1, style: []}};
  const action = {
    type: UPDATE_STYLE_VALUE,
    node: state[1],
    index: 0,
    value: 2
  };
  const newState = nodes(state, action);
  const newStyle = newState[1].style;
  assert.equal(newStyle.length, 1);
});

tape('reducers/node: Uses default state', (assert) => {
  assert.plan(1);
  const newState = nodes(undefined, {type: 'UNRECOGNIZED'});
  assert.equal(newState[1].id, '1');
});
