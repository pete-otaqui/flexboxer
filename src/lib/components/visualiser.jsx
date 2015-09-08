import React from 'react';

import VisualiserNode from 'lib/components/visualiser-node.jsx!';

class Visualiser extends React.Component {
  render() {
    let node = this.props.layout;
    return <div>
      <h2>Visualiser</h2>
      <VisualiserNode node={node} />
    </div>
  }
};

export default Visualiser;
