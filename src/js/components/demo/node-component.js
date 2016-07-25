import React, { Component, PropTypes } from 'react';
import objectHash from 'object-hash';

export default class Node extends Component {

  getKey(node, index) {
    const obj = Object.assign({}, node, {index: index});
    const hash = objectHash(obj);
    return `node-${hash}`;
  }

  getStyleObject(styles) {
    return styles.reduce((memo, obj) => {
      let prop = {};
      prop[obj.property] = obj.value;
      return Object.assign({}, memo, prop);
    }, {});
  }

  render() {
    const {
      children = [],
      style = [],
      textContent = ''
    } = this.props.node;
    const styleObject = this.getStyleObject(style);
    const childNodes = children.map((child, index) => {
      const key = this.getKey(child, index);
      return (
        <Node
          key={key}
          node={child}
        />
      );
    });
    return (
      <div style={styleObject} className="node">
        {textContent}
        {childNodes}
      </div>
    );
  }

}

Node.propTypes = {
  node: PropTypes.object
};
