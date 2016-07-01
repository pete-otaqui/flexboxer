import React, { Component, PropTypes } from 'react';

import Tree from '../components/tree';
import Demo from '../components/demo';

export default class Editor extends Component {
  render() {
    const {onSelectNode, nodes} = this.props;
    // @TODO: handle root node properly ... somehow?
    const rootNode = nodes[1] || { childIds: [] };
    return (
      <div id="editor">
        <Tree
          className="tree-container"
          onSelectNode={onSelectNode}
          node={rootNode}
        />
        <Demo />
      </div>
    );
  }
}

Editor.propTypes = {
  onSelectNode: PropTypes.func,
  nodes: PropTypes.object
};
