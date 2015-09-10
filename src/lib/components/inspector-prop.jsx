import React from 'react';

import InspectorValueSelect from './inspector-value-select.jsx!';
import InspectorValueInput from './inspector-value.jsx!';

class InspectorProp extends React.Component {
  render() {
    let valueNode;
    let value = this.props.value;
    let options = this.props.options;
    let name = this.props.name;
    switch(this.props.type) {
      case 'select':
        valueNode = <InspectorValueSelect name={name} options={options} defaultValue={value} />;
        break;
      default:
        valueNode = <InspectorValueInput name={name} value={value} />;
        break;
    }
    return (
      <div className="inspector-prop">
        <div className="inspector-prop-name">
          <label>{this.props.name}</label>
        </div>
        <div className="inspector-prop-val">
          {valueNode}
        </div>
      </div>
    );
  }
}

export default InspectorProp;
