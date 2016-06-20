import React from 'react';
import tape from 'tape';
import { shallow } from 'enzyme';

import Header from './header-component';


tape('Is a header', (assert) => {
  assert.plan(1);

  const wrapper = shallow(<Header />);

  assert.ok(wrapper.contains('FlexBoxer'), 'Has a title');
});
