import React, { Component, PropTypes } from 'react';

import Tree from '../components/tree';
import Demo from '../components/demo';

export default class Editor extends Component {
  render() {
    const {onSelectNode, tree} = this.props;
    return (
      <div id="editor">
        <Tree
          className="tree-container"
          onSelectNode={onSelectNode}
          node={tree}
        />
        <Demo />
      </div>
    );
  }
}

Editor.propTypes = {
  onSelectNode: PropTypes.func,
  tree: PropTypes.object
};
