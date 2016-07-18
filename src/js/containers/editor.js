import React, { Component, PropTypes } from 'react';

import Inspector from '../components/inspector';
import Demo from '../components/demo';

export default class Editor extends Component {
  render() {
    const {
      onSelectNode,
      onUpdateProperty,
      tree,
      selectedNode
    } = this.props;
    return (
      <div id="editor">
        <Inspector
          className="tree-container"
          onSelectNode={onSelectNode}
          onUpdateProperty={onUpdateProperty}
          selectedNode={selectedNode}
          node={tree}
        />
        <Demo
          node={tree}
        />
      </div>
    );
  }
}

Editor.propTypes = {
  onSelectNode: PropTypes.func,
  onUpdateProperty: PropTypes.func,
  selectedNode: PropTypes.object,
  tree: PropTypes.object
};
