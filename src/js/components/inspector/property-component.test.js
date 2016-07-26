import React from 'react';
import tape from 'tape';
import { shallow } from 'enzyme';

import Property, { NUMERIC_UNITS, KEYS } from './property-component';


tape('Property: Adds field input', (assert) => {
  assert.plan(2);
  const property = 'width';
  const value = '';
  const wrapper = shallow( <Property property={property} value={value} /> );
  const input = wrapper.find('input[name="field"]');
  assert.equals(input.length, 1, 'Has a field input');
  const valueProp = input.node.props.value;
  assert.equals(valueProp, 'width', 'Has correct field');
});

tape('Property: Adds value input', (assert) => {
  assert.plan(2);
  const property = '';
  const value = '100px';
  const wrapper = shallow( <Property property={property} value={value} /> );
  const input = wrapper.find('input[name="value"]');
  assert.equals(input.length, 1, 'Has a value input');
  const valueProp = input.node.props.value;
  assert.equals(valueProp, '100px', 'Has correct value');
});

tape('Property: Detects +ve and -ve numeric properties with units', (assert) => {
  assert.plan(NUMERIC_UNITS.length * 2);
  const prop = new Property();
  NUMERIC_UNITS.forEach((u) => {
    const n = Math.round( Math.random()*100 );
    const r = prop.isNumeric(`${n}${u}`);
    const m = prop.isNumeric(`-${n}${u}`);
    assert.ok(r);
    assert.ok(m);
  });
});

tape('Property: Detects non-numeric properties with unit-like value', (assert) => {
  assert.plan(NUMERIC_UNITS.length);
  const prop = new Property();
  NUMERIC_UNITS.forEach((u) => {
    const r = prop.isNumeric(`${u}`);
    assert.notOk(r);
  });
});

tape('Property: Detects +ve and -ve numeric properties without units', (assert) => {
  assert.plan(2);
  const prop = new Property();
  const n = Math.round( Math.random()*100 );
  const r = prop.isNumeric(`${n}`);
  const m = prop.isNumeric(`-${n}`);
  assert.ok(r);
  assert.ok(m);
});

tape('Property: Detects non-numeric properties without units', (assert) => {
  assert.plan(4);
  const prop = new Property();
  const r1 = prop.isNumeric('auto');
  const r2 = prop.isNumeric('a99o');
  const r3 = prop.isNumeric('a999');
  const r4 = prop.isNumeric('999o');
  assert.notOk(r1);
  assert.notOk(r2);
  assert.notOk(r3);
  assert.notOk(r4);
});

tape('Property: Gets the number part of a value', (assert) => {
  assert.plan(2);
  const prop = new Property();
  const floatNum = prop.getNumber('123.45px');
  const intNum = prop.getNumber('123px');
  assert.equal(floatNum, 123.45);
  assert.equal(intNum, 123);
});

tape('Property: Gets the unit part of a numeric value', (assert) => {
  assert.plan(2);
  const prop = new Property();
  const floatUnit = prop.getUnit('123.45px');
  const intUnit = prop.getUnit('123%');
  assert.equal(floatUnit, 'px');
  assert.equal(intUnit, '%');
});

tape('Property: Parses numeric values with units', (assert) => {
  assert.plan(4);
  const prop = new Property();
  const parsed = prop.parse('100%');
  assert.ok(parsed.isNumeric);
  assert.equal(parsed.raw, '100%');
  assert.equal(parsed.unit, '%');
  assert.equal(parsed.number, 100);
});

tape('Property: Parses numeric values without units', (assert) => {
  assert.plan(4);
  const prop = new Property();
  const parsed = prop.parse('100');
  assert.ok(parsed.isNumeric);
  assert.equal(parsed.raw, '100');
  assert.equal(parsed.unit, '');
  assert.equal(parsed.number, 100);
});

tape('Property: Parses non-numeric values', (assert) => {
  assert.plan(4);
  const prop = new Property();
  const parsed = prop.parse('100foo');
  assert.notOk(parsed.isNumeric);
  assert.equal(parsed.raw, '100foo');
  assert.equal(parsed.unit, null);
  assert.equal(parsed.number, null);
});

tape('Property: Stringifies numeric values', (assert) => {
  assert.plan(1);
  const prop = new Property();
  const parsed = {
    isNumeric: true,
    value: -123,
    unit: 'vh'
  };
  const stringified = prop.stringify(parsed);
  assert.equal(stringified, '-123vh');
});

tape('Property: Stringifies non-numeric values', (assert) => {
  assert.plan(1);
  const prop = new Property();
  const parsed = {
    isNumeric: false,
    raw: 'auto'
  };
  const stringified = prop.stringify(parsed);
  assert.equal(stringified, 'auto');
});

tape('Property: Increments numeric values', (assert) => {
  assert.plan(1);
  const prop = new Property();
  const result = prop.increment('100px');
  assert.equal(result, '101px');
});

tape('Property: Decrements numeric values', (assert) => {
  assert.plan(1);
  const prop = new Property();
  const result = prop.decrement('100');
  assert.equal(result, '99');
});

tape('Increments numeric values on UP keyUp', (assert) => {
  assert.plan(1);
  const props = {
    onUpdateValue: (field, value) => {
      assert.equal(value, '2em');
    }
  };
  const prop = new Property(props);
  prop.onKeyUpCb({ which: KEYS.UP, target: { value: '1em' }});
});

tape('Decrements numeric values on DOWN keyUp', (assert) => {
  assert.plan(1);
  const props = {
    onUpdateValue: (field, value) => {
      assert.equal(value, '0em');
    }
  };
  const prop = new Property(props);
  prop.onKeyUpCb({ which: KEYS.DOWN, target: { value: '1em' }});
});
