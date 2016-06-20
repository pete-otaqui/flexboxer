import React, { Component, PropTypes } from 'react';

export default class Tree extends Component {
  render() {
    const { tree, onSelect, baseKey='tree' } = this.props;

    const childNodes = tree.children ? tree.children.map((child, index) => {
      let childId = `id-${index}`;
      return <Tree
        tree={child}
        onSelect={onSelect}
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

Tree.propTypes = {}
