import React from 'react';
import tape from 'tape';
import { shallow } from 'enzyme';

import Node from './node-component';

tape('Adds a style attribute', (assert) => {
  assert.plan(1);
  const node = { style: { display: 'block' } };
  const wrapper = shallow( <Node node={node} /> );
  const html = wrapper.html();
  assert.ok(html.match(/style/).length, 'Adds a style attribute');
});

tape('Adds text content', (assert) => {
  assert.plan(1);
  const node = { textContent: 'Foo bar' };
  const wrapper = shallow( <Node node={node} /> );
  const html = wrapper.html();
  assert.ok(html.match(/Foo bar/), 'Adds text content');
});

tape('Adds child nodes', (assert) => {
  assert.plan(1);
  const node = { children: [ {}, {}, {} ] };
  const wrapper = shallow( <Node node={node} /> );
  const childNodes = wrapper.find(Node);
  assert.equals(childNodes.length, 3, 'Adds child nodes');
});

tape('Picks a hash-derived semi-transparent BG color');
