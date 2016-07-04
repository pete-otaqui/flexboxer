import React, { Component, PropTypes } from 'react';

export default class Node extends Component {


  render() {
    const {
      children = [],
      style = {},
      textContent = ''
    } = this.props.node;
    const childNodes = children.map((child, i) => {
      return (
        <Node
          key={`node-${i}`}
          node={child}
        />
      );
    });
    return (
      <div style={style} className="node">
        {textContent}
        {childNodes}
      </div>
    );
  }

}

Node.propTypes = {
  node: PropTypes.object
};
