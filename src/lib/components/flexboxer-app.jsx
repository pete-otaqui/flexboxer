import React from 'react';
import LayoutStore from 'lib/stores/layout';
import Builder from 'lib/components/builder.jsx!';
import Visualiser from 'lib/components/visualiser.jsx!';
import CssOutput from 'lib/components/css-output.jsx!';

function getFBState() {
  return {
    rules: LayoutStore.getAll()
  };
}

let FlexBoxerApp = React.createClass({

  getInitialState: () => {
    return getFBState();
  },

  componentDidMount: function() {
    LayoutStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    LayoutStore.removeChangeListener(this._onChange);
  },

  _onChange: function() {
    this.setState(getFBState());
  },

  render: function() {
    return (
      <div>
        <Builder />
        <Visualiser children={this.state.rules} />
        <CssOutput rules={this.state.rules} />
      </div>
    );
  }

});

export default FlexBoxerApp;
