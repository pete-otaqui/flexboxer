import React from 'react';
import tape from 'tape';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';

import Tree from './tree-component';

/**
 * Mock out the top level Redux store with all the required
 * methods and have it return the provided state by default.
 * @param {Object} state State to populate in store
 * @return {Object} Mock store
 */
function createMockStore(state) {
  return {
    subscribe: () => {},
    dispatch: () => {},
    getState: () => {
      return Object.assign({}, state);
    }
  };
}


tape('Renders recursively', (assert) => {
  assert.plan(1);
  const node = {
    selector: '.root',
    children: [{}, {}, {}]
  };
  const wrapper = mount(
    <Tree
      baseKey="tree"
      node={node}
      onSelectNode={function() {}}
    />
  );
  const trees = wrapper.find('.tree');

  assert.equals(trees.length, 4, 'Recursively creates trees');
});


tape('Applies the same selection callback', (assert) => {
  assert.plan(1);

  const state = {
    nodes: {
      1: {
        childIds: [2, 3]
      },
      2: {},
      3: {}
    }
  };
  const onSelectNode = function() {};

  const store = createMockStore(state);

  const wrapper = mount(
    <Provider store={store}>
      <Tree
        baseKey="tree"
        node={state.nodes[1]}
        onSelectNode={onSelectNode}
      />
    </Provider>
  );
  const lastTree = wrapper.find('Tree').last();
  const lastSelect = lastTree.props().onSelectNode;
  assert.equals(lastSelect, onSelectNode, 'Same onSelect callback');
});


tape('Handles an empty tree', (assert) => {
  assert.plan(1);

  const store = createMockStore({});

  const fn = function() {};
  mount(
    <Provider store={store}>
      <Tree baseKey="tree" onSelectNode={fn} />
    </Provider>
  );
  assert.ok(true, 'Did not throw an error');
});


tape('Handles an empty baseKey', (assert) => {
  assert.plan(1);

  const store = createMockStore({});

  const fn = function() {};
  mount(
    <Provider store={store}>
      <Tree tree={{}} onSelectNode={fn} />
    </Provider>
  );
  assert.ok(true, 'Did not throw an error');
});
