import React from 'react';
import LayoutStore from 'lib/stores/layout';
import LayoutActions from 'lib/actions/layout-actions';
import InspectorValue from './inspector-value.jsx!';

class InspectorValueSelect extends InspectorValue {

  render() {
    let value = this.props.value;
    let defaultValue = this.props.defaultValue;
    return <select
      value={value}
      defaultValue={defaultValue}
      onChange={this.onControlChange}
      className="fb-control"
    >
      <option value=""></option>
      {this.props.options.map((option) => {
        return <option value={option} key={`option-${option}`}>{option}</option>
      })}
    </select>;
  }

};


export default InspectorValueSelect;
