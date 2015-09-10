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
        <h2 className="fb-subheader">Inspector</h2>
        <p className="inspector-selector">{node.selector}</p>
        <div className="inspector-props inspector-props-container">
          <h3 className="fb-tabheader">Container</h3>
          <InspectorProp
              key={`${node.id}-display`}
              node={node}
              name="display"
              type="select"
              value={node.properties.display}
              options={['flex', 'inline-flex']} />
          <InspectorProp
              key={`${node.id}-flex-direction`}
              node={node}
              name="flex-direction"
              type="select"
              value={node.properties['flex-direction']}
              options={['row', 'row-reverse', 'column', 'column-reverse']} />
          <InspectorProp
              key={`${node.id}-flex-wrap`}
              node={node}
              name="flex-wrap"
              type="select"
              value={node.properties['flex-wrap']}
              options={['nowrap', 'wrap', 'wrap-reverse']} />
        </div>
        <div className="inspector-props inspector-props-child">
          <h3 className="fb-tabheader">Child</h3>
          <InspectorProp
              key={`${node.id}-height`}
              node={node}
              name="height"
              type="input"
              value={node.properties.height} />
          <InspectorProp
              key={`${node.id}-flex-grow`}
              node={node}
              name="flex-grow"
              type="input"
              value={node.properties['flex-grow']} />
        </div>
      </div>
    );
  }

});

export default Inspector;
