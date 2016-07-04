import React from 'react';
import tape from 'tape';
import { shallow } from 'enzyme';

import Node from './node-component';

tape('Outputs a node', (assert) => {
  assert.plan(1);
  const node = {
    style: { display: 'block' }
  };
  const wrapper = shallow(
    <Node node={node} />
  );
  const html = wrapper.html();
  assert.ok(html.match(/style/).length, 'Adds a style attribute');
});

tape('Picks a hash-derived semi-transparent BG color');
