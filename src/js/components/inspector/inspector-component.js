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
      selectedNode
    } = this.props;
    return (
      <div className="inspector">
        <Tree
          node={node}
          onSelectNode={onSelectNode}
          baseKey={baseKey}
        />
        <Properties
          node={selectedNode}
          onUpdateStyleProperty={onUpdateStyleProperty}
          onUpdateStyleValue={onUpdateStyleValue}
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
  selectedNode: PropTypes.object
};
