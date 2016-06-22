import React, { Component, PropTypes } from 'react';

export default class Tree extends Component {
  constructor() {
    super();
    this.onClickNode = this.onClickNode.bind(this);
  }

  onClickNode(e) {
    e.stopPropagation();
    e.preventDefault();
    // @TODO - work out how to identify "this" in the state tree
    this.props.onSelectNode(this.props);
  }

  render() {
    const {
      textContent = '',
      selector = '',
      style = {},
      children = [],
      onSelectNode,
      baseKey = 'tree'
    } = this.props;
    const childNodes = children.map((child, index) => {
      let childId = `id-${index}`;
      return <Tree
        textContent={child.textContent}
        selector={child.selector}
        style={child.style}
        children={child.children}
        onSelectNode={onSelectNode}
        key={childId}
        baseKey={childId}
      />
    });

    return (
      <div className="tree" onClick={this.onClickNode}>
        {selector}
        <div className="tree-children">{childNodes}</div>
      </div>
    )
  }
}

Tree.propTypes = {
  baseKey: PropTypes.string,
  textContent: PropTypes.string,
  selector: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.arrayOf(PropTypes.object),
  onSelectNode: PropTypes.func.isRequired
}
