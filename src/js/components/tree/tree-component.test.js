import React from 'react';
import tape from 'tape';
import { mount } from 'enzyme';

import Tree from './tree-component';


tape('Renders recursively', (assert) => {
  assert.plan(1);

  const tree = {
    node: {className: '.root', textContent: 'Some text'},
    children: [
      {
        className: '.header',
        textContent: 'Header'
      },
      {
        className: '.main',
        textContent: 'Main',
        children: [
          {className: '.body', textContent: 'Main body'},
          {className: '.aside', textContent: 'Aside'}
        ]
      },
      {
        className: '.footer',
        textContent: 'Footer'
      }
    ]
  }

  const wrapper = mount(<Tree
    baseKey="tree"
    tree={tree}
    onSelectNode={function() {}}
  />);
  const trees = wrapper.find('.tree');

  assert.equals(trees.length, 6, 'Recursively creates trees');
});


tape('Applies the same selection callback', (assert) => {
  assert.plan(1);

  const tree = {
    node: {},
    children: [{}, {}]
  };
  const onSelectNode = function() {};

  const wrapper = mount(<Tree
    baseKey="tree"
    tree={tree}
    onSelectNode={onSelectNode}
  />);
  const lastTree = wrapper.find('Tree').last();
  const lastSelect = lastTree.props().onSelectNode;
  assert.equals(lastSelect, onSelectNode, 'Same onSelect callback');
});


tape('Handles an empty tree', (assert) => {
  assert.plan(1);

  const fn = function() {};
  const wrapper = mount(<Tree baseKey="tree" onSelectNode={fn} />);
  assert.ok(true, 'Did not throw an error');
});


tape('Handles an empty baseKey', (assert) => {
  assert.plan(1);

  const tree = {
    node: {},
    children: [{}, {}]
  };
  const fn = function() {};
  const wrapper = mount(<Tree tree={tree} onSelectNode={fn} />);
  assert.ok(true, 'Did not throw an error');
});
