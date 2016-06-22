import React, { Component } from 'react'

import Tree from '../components/tree'
import Demo from '../components/demo'

export default class Editor extends Component {
  render() {
    const {onSelectNode, tree} = this.props;
    const { textContent, selector, style, children } = tree;
    // @TODO: handle root node properly ... somehow?
    const rootNode = tree[1] || { childIds: [] };
    return (
      <div id="editor">
        <Tree
          className="tree-container"
          onSelectNode={onSelectNode}
          node={rootNode}
        />
        <Demo />
      </div>
    )
  }
}
