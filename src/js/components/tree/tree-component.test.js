import React from 'react';
import tape from 'tape';
import { mount } from 'enzyme';

import Tree from './tree-component';


tape('Renders recursively', (assert) => {
  assert.plan(1);

  const tree = {
    node: {className: '.root', textContent: 'Some text'},
    children: [
      {
        className: '.header',
        textContent: 'Header'
      },
      {
        className: '.main',
        textContent: 'Main',
        children: [
          {className: '.body', textContent: 'Main body'},
          {className: '.aside', textContent: 'Aside'}
        ]
      },
      {
        className: '.footer',
        textContent: 'Footer'
      }
    ]
  }

  const wrapper = mount(<Tree tree={tree} />);

  const divs = wrapper.find('div');
  console.log(wrapper.find('.tree').length);

  assert.equals(wrapper.find('.tree').length, 6, 'Recursively creates trees');
});
