import React from 'react';

import LayoutActions from '../actions/layout-actions';


class TreeNode extends React.Component {
  clicked(e) {
    e.stopPropagation();
    e.preventDefault();
    this.selectNode();
  }
  clickedAdd(e) {
    e.stopPropagation();
    e.preventDefault();
    LayoutActions.addNode(this.props.node.id, 'New');
  }
  clickedDestroy(e) {
    e.stopPropagation();
    e.preventDefault();
    LayoutActions.destroyNode(this.props.node.id);
  }
  clickedUp(e) {
    e.stopPropagation();
    e.preventDefault();
    LayoutActions.moveUp(this.props.node.id);
  }
  clickedDown(e) {
    e.stopPropagation();
    e.preventDefault();
    LayoutActions.moveDown(this.props.node.id);
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
    let childNodeContainer = '';
    if ( children.length ) {
      childNodeContainer = <div className="node-children">
          {children.map(function(child) {
              return <TreeNode key={child.id} node={child}/>;
          }.bind(this))}
      </div>;
    }
    return (
        <div ref="node" className={classes} onClick={this.clicked.bind(this)}>
            <div className="node-selector">
              {node.selector}
            </div><div className="node-actions">
              <button onClick={this.clickedAdd.bind(this)}>+</button>
              <button onClick={this.clickedDestroy.bind(this)}>-</button>
              <button onClick={this.clickedUp.bind(this)}>&#x25b4;</button>
              <button onClick={this.clickedDown.bind(this)}>&#x25be;</button>
            </div>
            {childNodeContainer}
        </div>
    );
  }
}

export default TreeNode;
