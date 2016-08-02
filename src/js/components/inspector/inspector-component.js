import React, { Component, PropTypes } from 'react';

import Tree from './tree-component';
import Properties from './properties-component';

export default class Inspector extends Component {
  render() {
    const {
      baseKey,
      node,
      onSelectNode,
      onUpdateStyleProperty,
      onUpdateStyleValue,
      onUpdateTextContent,
      selectedNode
    } = this.props;
    return (
      <div className="inspector">
        <h2>DOM Editor</h2>
        <Tree
          node={node}
          onSelectNode={onSelectNode}
          baseKey={baseKey}
        />
        <Properties
          node={selectedNode}
          onUpdateStyleProperty={onUpdateStyleProperty}
          onUpdateStyleValue={onUpdateStyleValue}
          onUpdateTextContent={onUpdateTextContent}
        />
      </div>
    );
  }
}

Inspector.propTypes = {
  baseKey: PropTypes.string,
  node: PropTypes.object,
  children: PropTypes.arrayOf(PropTypes.object),
  onSelectNode: PropTypes.func.isRequired,
  onUpdateStyleProperty: PropTypes.func,
  onUpdateStyleValue: PropTypes.func,
  onUpdateTextContent: PropTypes.func,
  selectedNode: PropTypes.object
};
