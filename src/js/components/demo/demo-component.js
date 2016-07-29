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
      <Frame initialContent={initialContent} className="demo">
        <Node node={node} />
      </Frame>
    );
  }
}

Demo.propTypes = {
  node: PropTypes.object
};
