import React from 'react';
import tape from 'tape';
import { shallow, mount } from 'enzyme';

import Tree from './tree-component';

const T = 'components/Tree: ';

tape(`${T}Renders recursively`, (assert) => {
  assert.plan(1);
  const node = {selector: '.root', children: [{}, {}, {}]};
  const wrapper = shallow(
    <Tree
      baseKey="tree"
      node={node}
      onSelectNode={function() {}}
    />
  );
  const trees = wrapper.find(Tree);
  assert.equals(trees.length, 3, 'Recursively creates trees');
});


tape.skip(`${T}Applies the same selection callback`, (assert) => {
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
  const lastTree = wrapper.find(Tree).last();
  const lastSelect = lastTree.props().onSelectNode;
  assert.equals(lastSelect, onSelectNode, 'Same onSelect callback');
});


tape(`${T}Handles an empty tree`, (assert) => {
  assert.plan(1);
  const fn = function() {};
  shallow(<Tree baseKey="tree" onSelectNode={fn} />);
  assert.ok(true, 'Did not throw an error');
});


tape(`${T}Handles an empty baseKey`, (assert) => {
  assert.plan(1);
  const fn = function() {};
  shallow(<Tree tree={{}} onSelectNode={fn} />);
  assert.ok(true, 'Did not throw an error');
});

tape(`${T}Adds a className for a populated item`, (assert) => {
  assert.plan(1);
  const node = {children: [{}]};
  const fn = function() {};
  const wrapper = shallow(<Tree node={node} onSelectNode={fn} />);
  const tree = wrapper.find('.tree').first();
  assert.equal(tree.hasClass('tree--populated'), true);
});

tape(`${T}Avoids className for unpopulated items`, (assert) => {
  assert.plan(1);
  const node = {children: []};
  const fn = function() {};
  const wrapper = shallow(<Tree node={node} onSelectNode={fn} />);
  const tree = wrapper.find('.tree').first();
  assert.equal(tree.hasClass('tree--populated'), false);
});

tape(`${T}Adds a className for a selected item`, (assert) => {
  assert.plan(1);
  const node = {isSelected: true};
  const fn = function() {};
  const wrapper = shallow(<Tree node={node} onSelectNode={fn} />);
  const tree = wrapper.find('.tree').first();
  assert.equal(tree.hasClass('tree--selected'), true);
});

tape(`${T}Avoids a className for unselected items`, (assert) => {
  assert.plan(1);
  const node = {};
  const fn = function() {};
  const wrapper = shallow(<Tree node={node} onSelectNode={fn} />);
  const tree = wrapper.find('.tree').first();
  assert.equal(tree.hasClass('tree--selected'), false);
});

tape(`${T}Clicking node stops event, selects node`, (assert) => {
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

tape(`${T}Uses a noop onSelectNode fn by default`, (assert) => {
  assert.plan(1);
  const node = {children: [{}]};
  const wrapper = shallow(<Tree node={node} />);
  const tree = wrapper.find('Tree').last();
  const props = tree.props();
  assert.doesNotThrow(props.onSelectNode);
});

tape(`${T}Calls onAddNode with node onClick`, (assert) => {
  assert.plan(3);
  let addedTo = false;
  let stoppedPropagation = false;
  let preventedDefault = false;
  const node = {};
  const onAddNode = function(arg) {
    addedTo = arg;
  };
  const event = {
    stopPropagation: () => { stoppedPropagation = true; },
    preventDefault: () => { preventedDefault = true; }
  };
  const wrapper = shallow(<Tree node={node} onAddNode={onAddNode} />);
  wrapper.find('.tree-actions-add').simulate('click', event);
  assert.ok(stoppedPropagation);
  assert.ok(preventedDefault);
  assert.equal(addedTo, node);
});

tape(`${T}Calls onRemoveNode with node onClick`, (assert) => {
  assert.plan(3);
  let removed = false;
  let stoppedPropagation = false;
  let preventedDefault = false;
  const node = {};
  const onRemoveNode = function(arg) {
    removed = arg;
  };
  const event = {
    stopPropagation: () => { stoppedPropagation = true; },
    preventDefault: () => { preventedDefault = true; }
  };
  const wrapper = shallow(<Tree node={node} onRemoveNode={onRemoveNode} />);
  wrapper.find('.tree-actions-remove').simulate('click', event);
  assert.ok(stoppedPropagation);
  assert.ok(preventedDefault);
  assert.equal(removed, node);
});

