import React from 'react';

import LayoutActions from '../actions/layout-actions';


class TreeNode extends React.Component {
  clicked(e) {
    e.stopPropagation();
    e.preventDefault();
    this.selectNode();
  }
  selectNode() {
    LayoutActions.selectNode(this.props.node.id);
  }
  render() {
    let classes = 'tree-node';
    if ( this.props.node.selected ) {
      classes += ' selected';
    }
    let node = this.props.node;
    let children = node.children || [];
    return (
        <div ref="node" className={classes} onClick={this.clicked.bind(this)}>
            <div className="node-selector">
              {node.selector}
            </div>
            <div className="node-contents" data-id={node.id}>
                {node.name}
            </div>
            <div className="node-children">
                {children.map(function(child) {
                    return <TreeNode key={child.id} node={child}/>;
                }.bind(this))}
            </div>
        </div>
    );
  }
}

export default TreeNode;
