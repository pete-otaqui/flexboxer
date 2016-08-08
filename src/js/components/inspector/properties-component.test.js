import React from 'react';
import tape from 'tape';
import { shallow } from 'enzyme';

import Properties from './properties-component';
import Property from './property-component';

const T = 'components/Properties: ';

tape(`${T}Displays selector`, (assert) => {
  assert.plan(1);
  const node = { selector: '.foo' };
  const wrapper = shallow( <Properties node={node} /> );
  const html = wrapper.html();
  assert.ok(html.match(/.foo/), 'Finds selector');
});

tape(`${T}Displays textContent`, (assert) => {
  assert.plan(1);
  const node = { textContent: 'Foo' };
  const wrapper = shallow( <Properties node={node} /> );
  const html = wrapper.html();
  assert.ok(html.match(/Foo/), 'Finds textContent');
});

tape(`${T}Displays styles with empty extra`, (assert) => {
  assert.plan(1);
  const node = {
    style: [
      {property: 'width', value: '100px'},
      {property: 'height', value: '200px'}
    ]
  };
  const wrapper = shallow( <Properties node={node} /> );
  const propertyNodes = wrapper.find(Property);
  assert.equal(propertyNodes.length, 3, 'Has two nodes');
});

tape(`${T}Calls updateStyleProperty with node`, (assert) => {
  assert.plan(3);
  const props = {
    node: {
      style: [
        {property: 'width', value: '100px'}
      ]
    },
    onUpdateStyleProperty: function(node, index, property) {
      assert.equal(node, props.node);
      assert.equal(0, index);
      assert.equal(property, 'height');
    }
  };
  const element = new Properties(props);
  element.onUpdateStyleProperty(0, 'height');
});

tape(`${T}Calls updateStyleValue with node`, (assert) => {
  assert.plan(3);
  const props = {
    node: {
      style: [
        {property: 'width', value: '100px'}
      ]
    },
    onUpdateStyleValue: function(node, index, value) {
      assert.equal(node, props.node);
      assert.equal(0, index);
      assert.equal(value, '101px');
    }
  };
  const element = new Properties(props);
  element.onUpdateStyleValue(0, '101px');
});

tape(`${T}Calls updateTextContent with node`, (assert) => {
  assert.plan(2);
  const props = {
    node: {
      style: [],
      textContent: 'foo'
    },
    onUpdateTextContent: function(node, value) {
      assert.equal(node, props.node);
      assert.equal(value, 'bar');
    }
  };
  const element = new Properties(props);
  element.onUpdateTextContent({target: {value: 'bar'}});
});

tape(`${T}Returns an empty div when no node prop`, (assert) => {
  assert.plan(1);
  const wrapper = shallow( <Properties /> );
  const html = wrapper.html();
  assert.equal(html, '<div></div>');
});
