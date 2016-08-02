import React, { PureComponent, PropTypes } from 'react';

import Inspector from '../components/inspector';
import Demo from '../components/demo';

export default class Editor extends PureComponent {
  render() {
    const {
      onSelectNode,
      onUpdateStyleProperty,
      onUpdateStyleValue,
      onUpdateTextContent,
      tree,
      selectedNode
    } = this.props;
    return (
      <div id="editor">
        <Inspector
          className="tree-container"
          onSelectNode={onSelectNode}
          onUpdateStyleProperty={onUpdateStyleProperty}
          onUpdateStyleValue={onUpdateStyleValue}
          onUpdateTextContent={onUpdateTextContent}
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
  onUpdateStyleProperty: PropTypes.func,
  onUpdateStyleValue: PropTypes.func,
  onUpdateTextContent: PropTypes.func,
  selectedNode: PropTypes.object,
  tree: PropTypes.object
};
