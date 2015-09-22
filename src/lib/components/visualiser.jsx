import React from 'react';

import VisualiserNode from 'lib/components/visualiser-node.jsx!';

class Visualiser extends React.Component {
  render() {
    let node = this.props.layout;
    return <div>
      <h2 className="fb-subheader">Visualiser</h2>
      <div className="visualiser">
        <VisualiserNode node={node} />
      </div>
    </div>
  }
};

export default Visualiser;
