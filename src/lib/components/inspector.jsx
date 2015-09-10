import React from 'react';
import _ from 'lodash';

import LayoutStore from 'lib/stores/layout';
import InspectorProp from './inspector-prop.jsx!';


function getState() {
  return {
    node: LayoutStore.getSelected()
  };
}

let Inspector = React.createClass({

  getInitialState: () => {
    return getState();
  },

  componentDidMount: function() {
    LayoutStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    LayoutStore.removeChangeListener(this._onChange);
  },

  _onChange: function() {
    this.setState(getState());
  },

  render: function() {
    let node = this.state.node;
    return (
      <div className="inspector">
        <h2>Inspector</h2>
        {node.selector}
        <div className="inspector-props inspector-props-container">
          <InspectorProp
              key={`${node.id}-display`}
              node={node}
              name="display"
              type="select"
              value={node.properties.display}
              options={['flex', 'flex-inline']} />
        </div>
        <div className="inspector-props inspector-props-child">
          <InspectorProp
              key={`${node.id}-height`}
              node={node}
              name="height"
              type="input"
              value={node.properties.height} />
        </div>
      </div>
    );
  }

});

export default Inspector;
