import React from 'react';
import LayoutStore from 'lib/stores/layout';
import LayoutActions from 'lib/actions/layout-actions';


let InspectorValue = React.createClass({

  componentDidMount: function() {
    LayoutStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    LayoutStore.removeChangeListener(this._onChange);
  },

  _onChange: function() {
    let value = LayoutStore.getSelectedValueFor(this.props.name);
    this.setState({
      value: value
    });
  },

  onControlChange: function(e) {
    let target = e.target;
    let value = target.value;
    let name = this.props.name;
    LayoutActions.setPropertyValue(name, value);
  },

  render() {
    let value = this.state.value;
    return <input value={value} onChange={this.onControlChange} />;
  },

  getInitialState: function() {
    return {
      value: LayoutStore.getSelectedValueFor(this.props.name)
    };
  }
});


export default InspectorValue;
