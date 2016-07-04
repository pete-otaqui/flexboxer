import React, { Component, PropTypes } from 'react';
import Frame from 'react-frame-component';

import Node from './node-component';

export default class Demo extends Component {
  render() {
    const { node = {} } = this.props;
    const head = <style>{'html, body { margin: 0; padding: 0; }'}</style>;
    return (
      <Frame head={head}>
        <Node node={node} />
      </Frame>
    );
  }
}

Demo.propTypes = {
  node: PropTypes.object
};
