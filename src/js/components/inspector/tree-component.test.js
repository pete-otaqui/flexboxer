import React from 'react';
import tape from 'tape';
import { mount } from 'enzyme';

import Tree from './tree-component';

tape('Tree: Renders recursively', (assert) => {
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


tape('Tree: Applies the same selection callback', (assert) => {
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

  const wrapper = mount(
    <Tree
      baseKey="tree"
      node={state.nodes[1]}
      onSelectNode={onSelectNode}
    />
  );
  const lastTree = wrapper.find('Tree').last();
  const lastSelect = lastTree.props().onSelectNode;
  assert.equals(lastSelect, onSelectNode, 'Same onSelect callback');
});


tape('Tree: Handles an empty tree', (assert) => {
  assert.plan(1);

  const fn = function() {};
  mount(
    <Tree baseKey="tree" onSelectNode={fn} />
  );
  assert.ok(true, 'Did not throw an error');
});


tape('Tree: Handles an empty baseKey', (assert) => {
  assert.plan(1);

  const fn = function() {};
  mount(
    <Tree tree={{}} onSelectNode={fn} />
  );
  assert.ok(true, 'Did not throw an error');
});
