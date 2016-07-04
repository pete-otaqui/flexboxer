import React from 'react';
import tape from 'tape';
import { shallow } from 'enzyme';

import Demo from './demo-component';

tape('Outputs an iframe', (assert) => {
  assert.plan(1);
  const node = {};
  const wrapper = shallow(
    <Demo node={node} />
  );
  const html = wrapper.html();
  assert.ok(html.match(/iframe/).length, 'Has an iframe');
});
