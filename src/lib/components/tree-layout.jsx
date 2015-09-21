import React from 'react';

import TreeNode from 'lib/components/tree-node.jsx!'

class TreeLayout extends React.Component {

  constructor() {
    super();
  }

  render() {
    let classes = '';
    let node = this.props.layout;
    return (
        <div className="tree fb-panel">
            <h2 className="fb-subheader">Tree</h2>
            <div className="tree-nodes">
              <TreeNode node={node} />
            </div>
        </div>
    );
  }
}


export default TreeLayout;
