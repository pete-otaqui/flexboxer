import React, { Component, PropTypes } from 'react';

export default class Property extends Component {
  constructor() {
    super();
    this.onChangeField = this.onChangeField.bind(this);
    this.onChangeValue = this.onChangeValue.bind(this);
  }
  onChangeField() {

  }
  onChangeValue() {

  }
  render() {
    const { field, value } = this.props;
    return (
      <form className="property-form">
        <input
          value={field}
          className="property-input property-field"
          name="field"
          onChange={this.onChangeField}
        />
        <input
          value={value}
          className="property-input property-value"
          name="value"
          onChange={this.onChangeValue}
        />
      </form>
    );
  }
}

Property.propTypes = {
  field: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
};
