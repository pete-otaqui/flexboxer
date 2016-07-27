import React from 'react';
import tape from 'tape';
import { shallow } from 'enzyme';

import Inspector from './inspector-component';

tape('Creates a Tree and a Properties component', (assert) => {
  assert.plan(2);
  const onSelectNode = () => {};
  const wrapper = shallow(<Inspector onSelectNode={onSelectNode} />);
  const trees = wrapper.find('Tree');
  const properties = wrapper.find('Properties');
  assert.equal(trees.length, 1);
  assert.equal(properties.length, 1);
});
