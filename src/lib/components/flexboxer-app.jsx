import React from 'react';
import LayoutStore from 'lib/stores/layout';
import Visualiser from 'lib/components/visualiser.jsx!';
import CssOutput from 'lib/components/css-output.jsx!';
import TreeLayout from 'lib/components/tree-layout.jsx!';
import Inspector from 'lib/components/inspector.jsx!';
import Loader from 'lib/components/loader.jsx!';

function getFBState() {
  return {
    layout: LayoutStore.getLayout(),
    selectedNode: LayoutStore.getSelected()
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
    let rules = LayoutStore.getFlattenedRules();
    let samples = LayoutStore.getSamples();
    return (
      <div>
        <div className="fb-loader">
          <Loader samples={samples} />
        </div>
        <div className="fb-app">
          <div className="fb-tools">
            <TreeLayout layout={this.state.layout} />
            <Inspector />
          </div>
          <div className="fb-output">
            <Visualiser layout={this.state.layout} />
            <iframe id="visualiser-iframe" />
            <CssOutput rules={rules} />
          </div>
        </div>
      </div>
    );
  }

});

export default FlexBoxerApp;
