import React from 'react';
import tape from 'tape';
import { shallow } from 'enzyme';

import Nav from './nav-component';

tape('prints navigation names', (assert) => {
  assert.plan(1);
  const props = {
    navigation: [{title: 'Foo'}]
  };
  const wrapper = shallow(<Nav navigation={props.navigation} />);
  assert.ok(wrapper.html().match(/Foo/), 'Text matches');
});

tape('calls onSelectItem with nodes', (assert) => {
  assert.plan(1);
  const props = {
    navigation: [{title: 'Foo', nodes:{}}],
    onSelectItem: function(nodes) {
      assert.ok(nodes === props.navigation[0].nodes);
    }
  };
  const wrapper = shallow(<Nav
    navigation={props.navigation}
    onSelectItem={props.onSelectItem}
  />);
  const anchor = wrapper.find('a').first().props();
  anchor.onClick.call({}, {preventDefault:()=>{}});
});
