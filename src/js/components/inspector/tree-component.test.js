import React from 'react';
import tape from 'tape';
import { mount } from 'enzyme';

import Tree from './tree-component';

tape('components/Tree: Renders recursively', (assert) => {
  // @TODO: Upgrade to react@0.15.3 which solves the problem
  // of this test throwing a wobbly (intrernal react bug) 
  assert.plan(1);
  const node = {selector: '.root', children: [{}, {}, {}]};
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


tape('components/Tree: Applies the same selection callback', (assert) => {
  assert.plan(1);
  const state = {nodes: {1: {childIds: [2, 3]}, 2: {}, 3: {}}};
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


tape('components/Tree: Handles an empty tree', (assert) => {
  assert.plan(1);
  const fn = function() {};
  mount(<Tree baseKey="tree" onSelectNode={fn} />);
  assert.ok(true, 'Did not throw an error');
});


tape('components/Tree: Handles an empty baseKey', (assert) => {
  assert.plan(1);
  const fn = function() {};
  mount(<Tree tree={{}} onSelectNode={fn} />);
  assert.ok(true, 'Did not throw an error');
});

tape('components/Tree: Adds a className for a populated item', (assert) => {
  assert.plan(1);
  const node = {children: [{}]};
  const fn = function() {};
  const wrapper = mount(<Tree node={node} onSelectNode={fn} />);
  const tree = wrapper.find('.tree').first();
  assert.equal(tree.hasClass('tree--populated'), true);
});

tape('components/Tree: Avoids className for unpopulated items', (assert) => {
  assert.plan(1);
  const node = {children: []};
  const fn = function() {};
  const wrapper = mount(<Tree node={node} onSelectNode={fn} />);
  const tree = wrapper.find('.tree').first();
  assert.equal(tree.hasClass('tree--populated'), false);
});

tape('components/Tree: Adds a className for a selected item', (assert) => {
  assert.plan(1);
  const node = {isSelected: true};
  const fn = function() {};
  const wrapper = mount(<Tree node={node} onSelectNode={fn} />);
  const tree = wrapper.find('.tree').first();
  assert.equal(tree.hasClass('tree--selected'), true);
});

tape('components/Tree: Avoids a className for unselected items', (assert) => {
  assert.plan(1);
  const node = {};
  const fn = function() {};
  const wrapper = mount(<Tree node={node} onSelectNode={fn} />);
  const tree = wrapper.find('.tree').first();
  assert.equal(tree.hasClass('tree--selected'), false);
});

tape('components/Tree: Clicking node stops event, selects node', (assert) => {
  assert.plan(3);
  let selected = false;
  let stoppedPropagation = false;
  let preventedDefault = false;
  const event = {
    stopPropagation() { stoppedPropagation = true; },
    preventDefault() { preventedDefault = true; }
  };
  const tree = new Tree({onSelectNode() { selected = true; }});
  tree.onClickNode(event);
  assert.ok(selected);
  assert.ok(stoppedPropagation);
  assert.ok(preventedDefault);
});

tape('components/Tree: Uses a noop onSelectNode fn by default', (assert) => {
  assert.plan(1);
  const node = {children: [{}]};
  const wrapper = mount(<Tree node={node} />);
  const tree = wrapper.find('Tree').last();
  const props = tree.props();
  assert.doesNotThrow(props.onSelectNode);
});
