import React from 'react';
import PropertyStore from 'lib/stores/property';


let InspectorValueSelect = React.createClass({

  componentDidMount: function() {
    PropertyStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    PropertyStore.removeChangeListener(this._onChange);
  },

  _onChange: function() {
    var value = PropertyStore.getPropertyValueFor(this.props.name);
    this.setState({
      value: value
    });
  },

  onSelectChange: function() {

  },

  render: function() {
    let value = this.props.value;
    let defaultValue = this.props.defaultValue;
    return <select value={value} defaultValue={defaultValue} onChange={this.onSelectChange}>
      <option value="">--unset--</option>
      {this.props.options.map((option) => {
        return <option value={option} key={`option-${option}`}>{option}</option>
      })}
    </select>;
  },

  getInitialState: function() {
    return {
      value: PropertyStore.getPropertyValueFor(this.props.name)
    };
  }
});


export default InspectorValueSelect;
