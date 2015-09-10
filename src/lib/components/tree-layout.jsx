import React from 'react';

import TreeNode from 'lib/components/tree-node.jsx!'

class TreeLayout extends React.Component {
  render() {
    let classes = '';
    let node = this.props.layout;
    return (
        <div className="tree">
            <h2 className="fb-subheader">Tree</h2>
            <TreeNode node={node} />
        </div>
    );
  }
}

export default TreeLayout;
