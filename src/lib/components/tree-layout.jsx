import React from 'react';

import TreeNode from 'lib/components/tree-node.jsx!'

class TreeLayout extends React.Component {
  render() {
    let classes = '';
    let node = this.props.layout;
    return (
        <div>
            <h2>Tree</h2>
            <TreeNode node={node} />
        </div>
    );
  }
}

export default TreeLayout;
