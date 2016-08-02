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

tape('components/Demo: Attaches an initial style', (assert) => {
  assert.plan(1);
  const node = {};
  const wrapper = shallow(
    <Demo node={node} />
  );
  const frame = wrapper.find('.demo-iframe').first();
  const {initialContent} = frame.props();
  assert.ok(initialContent.match(/<style>/), 'Has an initial style');
});

tape('components/Demo: Has a Node child', (assert) => {
  assert.plan(1);
  const node = {};
  const wrapper = shallow(
    <Demo node={node} />
  );
  const frame = wrapper.find('.demo-iframe').first();
  const props = frame.props();
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
