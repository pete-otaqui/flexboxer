import React, { PureComponent, PropTypes } from 'react';
import Frame from 'react-frame-component';

import DemoNode from '../demo-node';

export default class Demo extends PureComponent {

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
          <DemoNode node={node} />
        </Frame>
      </div>
    );
  }
}

Demo.propTypes = {
  node: PropTypes.object
};
