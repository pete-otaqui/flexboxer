import React from 'react';

class InspectorValueSelect extends React.Component {
  render() {
    let value = this.props.value;
    let defaultValue = this.props.defaultValue;
    console.log(this.props);
    return <select value={value} defaultValue={defaultValue}>
      <option value="">--unset--</option>
      {this.props.options.map((option) => {
        return <option value={option} key={`option-${option}`}>{option}</option>
      })}
    </select>;
  }
}
InspectorValueSelect.getInitialState = function() {
  return {
    value: ''
  };
};

export default InspectorValueSelect;
