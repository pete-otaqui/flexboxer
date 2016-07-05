import React from 'react';
import tape from 'tape';
import { shallow } from 'enzyme';

import Property from './property-component';

tape('Adds field input', (assert) => {
  assert.plan(2);
  const field = 'width';
  const value = '';
  const wrapper = shallow( <Property field={field} value={value} /> );
  const input = wrapper.find('input[name="field"]');
  assert.equals(input.length, 1, 'Has a field input');
  const valueProp = input.node.props.value;
  assert.equals(valueProp, 'width', 'Has correct field');
});

tape('Adds value input', (assert) => {
  assert.plan(2);
  const field = '';
  const value = '100px';
  const wrapper = shallow( <Property field={field} value={value} /> );
  const input = wrapper.find('input[name="value"]');
  assert.equals(input.length, 1, 'Has a value input');
  const valueProp = input.node.props.value;
  assert.equals(valueProp, '100px', 'Has correct value');
});
