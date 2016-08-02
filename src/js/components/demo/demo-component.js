import React, { Component, PropTypes } from 'react';
import Frame from 'react-frame-component';

import Node from './node-component';

export default class Demo extends Component {

  getInitialContent() {
    return `
<!DOCTYPE html>
<html>
  <head>
    <style>
      html, body {
        margin: 0;
        padding: 0;
        font-family: "Courier New", Courier, monospace;
      }
    </style>
  </head>
  <body>
    <div></div>
  </body>
</html>
`;
  }

  render() {
    const { node = {} } = this.props;
    const initialContent = this.getInitialContent();
    return (
      <div className="demo">
        <h2>HTML Demo</h2>
        <Frame initialContent={initialContent} className="demo-iframe">
          <Node node={node} />
        </Frame>
      </div>
    );
  }
}

Demo.propTypes = {
  node: PropTypes.object
};
