import React from 'react';
import tape from 'tape';
import { shallow } from 'enzyme';

import DemoNode from './demo-node-component';

tape('components/DemoNode: Adds a style attribute', (assert) => {
  assert.plan(1);
  const node = {
    style: [
      {property: 'display', value: 'block'}
    ]
  };
  const wrapper = shallow( <DemoNode node={node} /> );
  const html = wrapper.html();
  assert.ok(html.match(/style/).length, 'Adds a style attribute');
});

tape('components/DemoNode: Adds text content', (assert) => {
  assert.plan(1);
  const node = { textContent: 'Foo bar' };
  const wrapper = shallow( <DemoNode node={node} /> );
  const html = wrapper.html();
  assert.ok(html.match(/Foo bar/), 'Adds text content');
});

tape('components/DemoNode: Adds child nodes', (assert) => {
  assert.plan(1);
  const node = { children: [ {}, {}, {} ] };
  const wrapper = shallow( <DemoNode node={node} /> );
  const childNodes = wrapper.find(DemoNode);
  assert.equals(childNodes.length, 3, 'Adds child nodes');
});

tape('components/DemoNode: Picks a hash-derived semi-transparent BG color');

tape('components/DemoNode: Adds child hashes based on node index', (assert) => {
  assert.plan(1);
  const myNode = new DemoNode();
  const hash1 = myNode.getKey({p: 1}, 1);
  const hash2 = myNode.getKey({p: 1}, 2);
  assert.notEqual(hash1, hash2);
});

tape('components/DemoNode: Gets a style object from an array', (assert) => {
  assert.plan(1);
  const myNode = new DemoNode();
  const styles = [
    {property: 'display', value: 'flex'},
    {property: 'flexGrow', value: '2'}
  ];
  const styleObject = myNode.getStyleObject(styles);
  assert.deepEqual(styleObject, {display: 'flex', flexGrow: '2'});
});
