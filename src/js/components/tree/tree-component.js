import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

const CLASS_CHILDREN = 'tree-children';
const CLASS_SELECTED = 'tree--selected';
const CLASS_POPULATED = 'tree--populated';

export class Tree extends Component {
  constructor() {
    super();
    this.onClickNode = this.onClickNode.bind(this);
  }

  onClickNode(e) {
    e.stopPropagation();
    e.preventDefault();
    this.props.onSelectNode(this.props.node);
  }

  render() {
    const {
      baseKey = 'tree',
      node = {},
      onSelectNode = function() {}
    } = this.props;
    const {
      selector = '',
      children = []
    } = node;
    const childNodes = children.map((child, index) => {
      let childId = `${baseKey}-${index}`;
      const childNode = <WrappedTree
        node={child}
        onSelectNode={onSelectNode}
        key={childId}
        baseKey={childId}
      />;
      return childNode;
    });
    let childrenClassname = CLASS_CHILDREN;

    let className = 'tree';
    if ( this.props.isSelected ) className += ` ${CLASS_SELECTED}`;
    if ( children.length ) className += ` ${CLASS_POPULATED}`;

    return (
      <div className={className} onClick={this.onClickNode}>
        <div className="tree-self">
          <span className="tree-selector">{selector}</span>
        </div>
        <div className={childrenClassname}>{childNodes}</div>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  if ( !ownProps.node ) return { isSelected: false };
  const node = ownProps.node;
  const childIds = node.childIds || [];
  const props = {
    node: Object.assign({}, node, {children: childIds.map(id => state.tree[id])}),
    isSelected: (state.tree.selectedNode && state.tree.selectedNode === node.id)
  };
  return props;
}

const WrappedTree = connect(mapStateToProps)(Tree);
export default WrappedTree;

Tree.propTypes = {
  baseKey: PropTypes.string,
  node: PropTypes.object,
  children: PropTypes.arrayOf(PropTypes.object),
  onSelectNode: PropTypes.func.isRequired,
  isSelected: PropTypes.bool
};
