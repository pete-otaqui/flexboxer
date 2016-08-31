import React, { PureComponent, PropTypes } from 'react';

const CLASS_CHILDREN = 'tree-children';
const CLASS_SELECTED = 'tree--selected';
const CLASS_POPULATED = 'tree--populated';

export default class Tree extends PureComponent {
  constructor(props) {
    super(props);
    this.onClickNode = this.onClickNode.bind(this);
    this.onAddNode = this.onAddNode.bind(this);
    this.onRemoveNode = this.onRemoveNode.bind(this);
  }

  onClickNode(e) {
    e.stopPropagation();
    e.preventDefault();
    this.props.onSelectNode(this.props.node);
  }

  onAddNode(e) {
    e.stopPropagation();
    e.preventDefault();
    this.props.onAddNode(this.props.node);
  }

  onRemoveNode(e) {
    e.stopPropagation();
    e.preventDefault();
    this.props.onRemoveNode(this.props.node);
  }

  render() {
    const {
      baseKey = 'tree',
      node = {},
      onSelectNode = function() {},
      onAddNode = function() {},
      onRemoveNode = function() {}
    } = this.props;
    const {
      selector = '',
      children = []
    } = node;
    const childNodes = children.map((child, index) => {
      let childId = `${baseKey}-${index}`;
      const childNode = <Tree
        node={child}
        onSelectNode={onSelectNode}
        key={childId}
        baseKey={childId}
        onAddNode={onAddNode}
        onRemoveNode={onRemoveNode}
      />;
      return childNode;
    });
    let childrenClassname = CLASS_CHILDREN;

    let className = 'tree';
    if ( node.isSelected ) className += ` ${CLASS_SELECTED}`;
    if ( children.length ) className += ` ${CLASS_POPULATED}`;
    return (
      <div className={className} onClick={this.onClickNode}>
        <div className="tree-self">
          <span className="tree-selector">{selector}</span>
          <span className="tree-actions">
            <button
              className="tree-actions-add"
              onClick={this.onAddNode}
            >+</button>
            <button
              className="tree-actions-remove"
              onClick={this.onRemoveNode}
            >-</button>
          </span>
        </div>
        <div className={childrenClassname}>{childNodes}</div>
      </div>
    );
  }
}

Tree.propTypes = {
  baseKey: PropTypes.string,
  node: PropTypes.object,
  children: PropTypes.arrayOf(PropTypes.object),
  onSelectNode: PropTypes.func,
  onAddNode: PropTypes.func,
  onRemoveNode: PropTypes.func
};
