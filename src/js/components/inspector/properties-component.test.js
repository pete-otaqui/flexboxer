import React from 'react';
import tape from 'tape';
import { shallow } from 'enzyme';

import Properties from './properties-component';
import Property from './property-component';

tape('Displays selector', (assert) => {
  assert.plan(1);
  const node = { selector: '.foo' };
  const wrapper = shallow( <Properties node={node} /> );
  const html = wrapper.html();
  assert.ok(html.match(/.foo/), 'Finds selector');
});

tape('Displays textContent', (assert) => {
  assert.plan(1);
  const node = { textContent: 'Foo' };
  const wrapper = shallow( <Properties node={node} /> );
  const html = wrapper.html();
  assert.ok(html.match(/Foo/), 'Finds textContent');
});

tape('Displays properties, adds an empty property', (assert) => {
  assert.plan(1);
  const node = { style: { width: '100px', height: '200px'} };
  const wrapper = shallow( <Properties node={node} /> );
  const propertyNodes = wrapper.find(Property);
  assert.equal(propertyNodes.length, 3, 'Has two nodes');
});
