import React from 'react';
import tape from 'tape';
import { shallow } from 'enzyme';

import Css from './css-component';

tape('components/Css: Is a Css element', (assert) => {
  assert.plan(1);
  const wrapper = shallow( <Css /> );
  const div = wrapper.find('.css');
  assert.equals(div.length, 1);
});

tape('components/Css: Prints out styles', (assert) => {
  assert.plan(1);
  const node = {
    selector: '.root',
    style: [
      {property: 'display', value: 'flex'}
    ]
  };
  const wrapper = shallow(<Css node={node} />);
  const css = `.root {
  display: flex;
}
`;
  const text = wrapper.text();
  assert.equal(text, css);
});

tape('components/Css: normalizes style property names', (assert) => {
  assert.plan(1);
  const node = {
    selector: '.root',
    style: [
      {property: 'flexDirection', value: 'column'}
    ]
  };
  const wrapper = shallow(<Css node={node} />);
  const css = `.root {
  flex-direction: column;
}
`;
  const text = wrapper.text();
  assert.equal(text, css);
});

tape('components/Css: Adds child styles', (assert) => {
  assert.plan(1);
  const node = {
    selector: '.root',
    style: [
      {property: 'flexDirection', value: 'column'}
    ],
    children: [
      {
        selector: '.child',
        style: [
          {property: 'width', value: '10px'}
        ]
      }
    ]
  };
  const wrapper = shallow(<Css node={node} />);
  const css = `.root {
  flex-direction: column;
}
.child {
  width: 10px;
}
`;
  const text = wrapper.text();
  assert.equal(text, css);
});
