import React, { Component } from 'react'

import Tree from '../components/tree'
import Demo from '../components/demo'

export default class Editor extends Component {
  render() {
    return (
      <div id="editor">
        <Tree className="tree-container" />
        <Demo />
      </div>
    )
  }
}
