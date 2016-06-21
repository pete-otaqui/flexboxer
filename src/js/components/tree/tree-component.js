import React, { Component, PropTypes } from 'react';

export default class Tree extends Component {
  render() {
    const { tree = {}, onSelectNode, baseKey = 'tree' } = this.props;
    const childNodes = tree.children ? tree.children.map((child, index) => {
      let childId = `id-${index}`;
      return <Tree
        tree={child}
        onSelectNode={onSelectNode}
        key={childId}
        baseKey={childId}
      />
    }) : [];

    return (
      <div className="tree">
        Tree component
        <div className="tree-children">{childNodes}</div>
      </div>
    )
  }
}

Tree.propTypes = {
  baseKey: PropTypes.string,
  tree: PropTypes.object,
  onSelectNode: PropTypes.func.isRequired
}
