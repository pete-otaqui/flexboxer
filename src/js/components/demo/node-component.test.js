import React from 'react';
import tape from 'tape';
import { shallow } from 'enzyme';

import Node from './node-component';

tape('components/Node: Adds a style attribute', (assert) => {
  assert.plan(1);
  const node = {
    style: [
      {property: 'display', value: 'block'}
    ]
  };
  const wrapper = shallow( <Node node={node} /> );
  const html = wrapper.html();
  assert.ok(html.match(/style/).length, 'Adds a style attribute');
});

tape('components/Node: Adds text content', (assert) => {
  assert.plan(1);
  const node = { textContent: 'Foo bar' };
  const wrapper = shallow( <Node node={node} /> );
  const html = wrapper.html();
  assert.ok(html.match(/Foo bar/), 'Adds text content');
});

tape('components/Node: Adds child nodes', (assert) => {
  assert.plan(1);
  const node = { children: [ {}, {}, {} ] };
  const wrapper = shallow( <Node node={node} /> );
  const childNodes = wrapper.find(Node);
  assert.equals(childNodes.length, 3, 'Adds child nodes');
});

tape('components/Node: Picks a hash-derived semi-transparent BG color');

tape('components/Node: Adds child hashes based on node index', (assert) => {
  assert.plan(1);
  const myNode = new Node();
  const hash1 = myNode.getKey({p: 1}, 1);
  const hash2 = myNode.getKey({p: 1}, 2);
  assert.notEqual(hash1, hash2);
});

tape('components/Node: Gets a style object from an array', (assert) => {
  assert.plan(1);
  const myNode = new Node();
  const styles = [
    {property: 'display', value: 'flex'},
    {property: 'flexGrow', value: '2'}
  ];
  const styleObject = myNode.getStyleObject(styles);
  assert.deepEqual(styleObject, {display: 'flex', flexGrow: '2'});
});
