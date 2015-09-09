import React from 'react';

import LayoutStore from 'lib/stores/layout';
import PropertyStore from 'lib/stores/property';
import InspectorProp from './inspector-prop.jsx!';


function getInitialState() {
  return {};
}

class Inspector extends React.Component {
  render() {
    let node = this.props.node;
    let ps = PropertyStore.getPropertyListFor(node);
    let p;
    return (
      <div className="inspector">
        <h2>Inspector</h2>
        {node.selector}
        <div className="inspector-props inspector-props-container">
          {ps.map((p) => {
            return <InspectorProp {...p} nodeId={node.id} key={`prop-${p.name}`} />
          })}
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
