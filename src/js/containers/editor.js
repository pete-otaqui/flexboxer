import React, { Component } from 'react'

import Tree from '../components/tree'
import Demo from '../components/demo'

export default class Editor extends Component {
  render() {
    const {onSelectNode, tree} = this.props;
    const { textContent, selector, style, children } = tree;
    return (
      <div id="editor">
        <Tree
          className="tree-container"
          onSelectNode={onSelectNode}
          textContent={textContent}
          selector={selector}
          style={style}
          children={children}
        />
        <Demo />
      </div>
    )
  }
}
