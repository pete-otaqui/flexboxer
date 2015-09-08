import React from 'react';

import LayoutStore from 'lib/stores/layout';
import InspectorProp from './inspector-prop.jsx!';

function getInitialState() {
  return {};
}

class Inspector extends React.Component {
  render() {
    let node = this.props.node;
    let properties = node.properties;
    return (
      <div className="inspector">
        <h2>Inspector</h2>
        {node.selector}
        <div className="inspector-props inspector-props-container">
          <InspectorProp name="display" value={properties.display} />
          <InspectorProp name="flex-direction" value={properties['flex-direction']} />
        </div>
        <div className="inspector-props inspector-props-child">

        </div>
      </div>
    );
  }

};
Inspector.getInitialState = function() {
  return getInitialState();
}

export default Inspector;
