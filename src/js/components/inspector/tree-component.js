import React, { Component, PropTypes } from 'react';

const CLASS_CHILDREN = 'tree-children';
const CLASS_SELECTED = 'tree--selected';
const CLASS_POPULATED = 'tree--populated';

export default class Tree extends Component {
  constructor(props) {
    super(props);
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
      const childNode = <Tree
        node={child}
        onSelectNode={onSelectNode}
        key={childId}
        baseKey={childId}
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
  onSelectNode: PropTypes.func
};
