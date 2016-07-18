import React from 'react';
import tape from 'tape';
import { shallow } from 'enzyme';

import Footer from './footer-component';

tape('Footer: Is a footer', (assert) => {
  assert.plan(1);

  const wrapper = shallow(<Footer />);
  assert.ok(wrapper.text().match(/Footer/), 'Is a footer');
});
