import React from 'react';
import tape from 'tape';
import { shallow } from 'enzyme';

import Html from './html-component';


tape('components/Html: Is an Html element', (assert) => {
  assert.plan(1);
  const wrapper = shallow( <Html /> );
  const div = wrapper.find('.html');
  assert.equals(div.length, 1);
});

tape('components/Html: Generates correct class names', (assert) => {
  assert.plan(1);
  const node = {selector: '.root'};
  const wrapper = shallow(<Html node={node} />);
  const text = wrapper.text();
  const match = text.match(/class="root"/);
  assert.ok(match);
});

tape('components/Html: Creates a tree', (assert) => {
  assert.plan(1);
  const node = {
    selector: '.root',
    children: [
      {selector: '.child-1'},
      {selector: '.child-2', children: [{selector:'grandchild'}]}
    ]
  };
  const html = `<div class="root">
  <div class="child-1">
  </div>
  <div class="child-2">
    <div class="grandchild">
    </div>
  </div>
</div>`;
  const wrapper = shallow(<Html node={node} />);
  const text = wrapper.text();
  assert.equal(text, html);
});

tape('components/Html: Injects textContent', (assert) => {
  assert.plan(1);
  const node = {selector: '.root', textContent: 'FOO'};
  const wrapper = shallow(<Html node={node} />);
  const html = `<div class="root">
  FOO
</div>`;
  const text = wrapper.text();
  assert.equal(text, html);
});

