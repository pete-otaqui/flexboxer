import React from 'react';
import ReactDom from 'react-dom';

import VisualiserNode from 'lib/components/visualiser-node.jsx!';

class Visualiser extends React.Component {
  render() {
    let node = this.props.layout;
    return <div>
      <h2 className="fb-subheader">Visualiser</h2>
      <div className="visualiser">
        <VisualiserNode node={node} ref="visualiserNode" />
      </div>
    </div>;
  }
  componentDidMount() {
    this.updateIFrameHTML();
  }
  componentDidUpdate() {
    this.updateIFrameHTML();
  }
  updateIFrameHTML() {
    let html = this.getVisualiserHTML();
    let iframe = document.getElementById('visualiser-iframe');
    iframe.contentDocument.body.innerHTML = '';
    iframe.contentDocument.write(html);
  }
  getVisualiserHTML() {
    let domNode = ReactDom.findDOMNode(this.refs.visualiserNode);
    return domNode.outerHTML;
  }
};

export default Visualiser;
