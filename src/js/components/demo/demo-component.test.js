import React from 'react';
import tape from 'tape';
import { shallow } from 'enzyme';

import Demo from './demo-component';
import Node from './node-component';

tape('components/Demo: Outputs an iframe', (assert) => {
  assert.plan(1);
  const node = {};
  const wrapper = shallow(
    <Demo node={node} />
  );
  const html = wrapper.html();
  assert.ok(html.match(/iframe/).length, 'Has an iframe');
});

tape('components/Demo: Attaches a head', (assert) => {
  assert.plan(1);
  const node = {};
  const wrapper = shallow(
    <Demo node={node} />
  );
  const props = wrapper.props();
  assert.ok(props.head, 'Has a head prop');
});

tape('components/Demo: Has a Node child', (assert) => {
  assert.plan(1);
  const node = {};
  const wrapper = shallow(
    <Demo node={node} />
  );
  const props = wrapper.props();
  const child = props.children;
  assert.equals(child.type, Node, 'Has a Node child');
});

tape('components/Demo: Uses an empty default node', (assert) => {
  assert.plan(1);
  const wrapper = shallow(<Demo />);
  const demo = wrapper.find('Demo').first();
  const node = demo.props('node');
  assert.deepEqual(node, {});
});
