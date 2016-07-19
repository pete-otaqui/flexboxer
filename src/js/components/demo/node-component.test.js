import React from 'react';
import tape from 'tape';
import { shallow } from 'enzyme';

import Node from './node-component';

tape('Node: Parent', (assert) => {
  tape('Node: Child', (assert) => {
    assert.plan(1);
    assert.ok(true);
  });
  assert.end();
});

tape('Node: Adds a style attribute', (assert) => {
  assert.plan(1);
  const node = { style: { display: 'block' } };
  const wrapper = shallow( <Node node={node} /> );
  const html = wrapper.html();
  assert.ok(html.match(/style/).length, 'Adds a style attribute');
});

tape('Node: Adds text content', (assert) => {
  assert.plan(1);
  const node = { textContent: 'Foo bar' };
  const wrapper = shallow( <Node node={node} /> );
  const html = wrapper.html();
  assert.ok(html.match(/Foo bar/), 'Adds text content');
});

tape('Node: Adds child nodes', (assert) => {
  assert.plan(1);
  const node = { children: [ {}, {}, {} ] };
  const wrapper = shallow( <Node node={node} /> );
  const childNodes = wrapper.find(Node);
  assert.equals(childNodes.length, 3, 'Adds child nodes');
});

tape('Node: Picks a hash-derived semi-transparent BG color');

tape('Node: Adds child hashes based on node props', (assert) => {
  assert.plan(2);
  const myNode = new Node();
  const hash1 = myNode.getKey({p: 1}, 1);
  const hash2 = myNode.getKey({p: 2}, 1);
  const hash3 = myNode.getKey({p: 1}, 1);
  assert.notEqual(hash1, hash2);
  assert.equal(hash1, hash3);
});

tape('Node: Adds child hashes based on node index', (assert) => {
  assert.plan(1);
  const myNode = new Node();
  const hash1 = myNode.getKey({p: 1}, 1);
  const hash2 = myNode.getKey({p: 1}, 2);
  assert.notEqual(hash1, hash2);
});
