import React, { PureComponent, PropTypes } from 'react';

export const KEYS = {
  UP: 38,
  DOWN: 40
};

const UPDOWN = [
  KEYS.UP,
  KEYS.DOWN
];

export const NUMERIC_UNITS = [
  'px',
  'pt',
  '%',
  'em',
  'rem',
  'ex',
  'ch',
  'vh',
  'vw',
  'vmin',
  'vmax'
];

export default class Property extends PureComponent {
  constructor(props) {
    super(props);
    this.onChangeProperty = this.onChangeProperty.bind(this);
    this.onChangeValue = this.onChangeValue.bind(this);
    this.onKeyUpCb = this.onKeyUpCb.bind(this);
  }

  onChangeProperty(e) {
    const { index, onUpdateProperty } = this.props;
    onUpdateProperty(index, e.target.value);
  }

  onChangeValue(e) {
    const { index, onUpdateValue } = this.props;
    onUpdateValue(index, e.target.value);
  }

  onKeyUpCb(e) {
    const which = e.which;
    let value = e.target.value;
    if ( !UPDOWN.includes(which) ) return;
    switch(which) {
      case KEYS.UP:
        value = this.increment(value);
        break;
      case KEYS.DOWN:
        value = this.decrement(value);
        break;
    }
    const { index, onUpdateValue } = this.props;
    onUpdateValue(index, value);
  }

  isNumeric(value = '') {
    const nus = NUMERIC_UNITS.join('|');
    if ( value.trim().match(/^-?[\d.]+$/) ) {
      return true;
    }
    if ( value.trim().match(new RegExp(`^-?[\\d.]+(${nus})$`)) ) {
      return true;
    }
    return false;
  }

  getUnit(value = '') {
    return value.trim().replace(/^-?[\d.]+/, '');
  }

  getNumber(value = '') {
    const str = value.trim().replace(/^(-?[\d.]+).*$/, '$1');
    const num = parseFloat(str, 10);
    return num;
  }

  parse(value = '') {
    const raw = value;
    const isNumeric = this.isNumeric(value);
    const unit = isNumeric ? this.getUnit(value) : null;
    const number = isNumeric ? this.getNumber(value) : null;
    return { raw, isNumeric, unit, number };
  }

  stringify(parsed = {}) {
    if ( parsed.isNumeric ) {
      return `${parsed.value}${parsed.unit}`;
    } else {
      return parsed.raw;
    }
  }

  increment(value = '') {
    const parsed = this.parse(value);
    let updated;
    if ( parsed.isNumeric ) {
      updated = Object.assign({}, parsed, { value: parsed.number + 1 });
      return this.stringify(updated);
    } else {
      return parsed.raw;
    }
  }

  decrement(value = '') {
    const parsed = this.parse(value);
    let updated;
    if ( parsed.isNumeric ) {
      updated = Object.assign({}, parsed, { value: parsed.number - 1 });
      return this.stringify(updated);
    } else {
      return parsed.raw;
    }
  }

  render() {
    const { property, value } = this.props;
    return (
      <form className="property-form">
        <input
          value={property}
          className="property-input property-field"
          name="field"
          onChange={this.onChangeProperty}
          placeholder="CSS Property"
        />
        <input
          value={value}
          className="property-input property-value"
          name="value"
          onChange={this.onChangeValue}
          onKeyUp={this.onKeyUpCb}
          placeholder="CSS Value"
        />
      </form>
    );
  }
}

Property.propTypes = {
  node: PropTypes.object,
  property: PropTypes.string.isRequired,
  value: PropTypes.string,
  index: PropTypes.number,
  onUpdateProperty: PropTypes.func,
  onUpdateValue: PropTypes.func
};
