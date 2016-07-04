import React, { Component, PropTypes } from 'react';
import Frame from 'react-frame-component';

import Node from './node-component';

export default class Demo extends Component {
  render() {
    const { node = {} } = this.props;
    const head = <style>{`
      html, body {
        margin: 0;
        padding: 0;
        font-family: "Courier New", Courier, typewriter;
      }
    `}</style>;
    return (
      <Frame head={head} className="demo">
        <Node node={node} />
      </Frame>
    );
  }
}

Demo.propTypes = {
  node: PropTypes.object
};
