import React from 'react';
import ReactDom from 'react-dom';
import RW from 'rear-window';

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
    let iframeContainer = document.querySelector(this.props.iframeContainer);
    let options = {
      iframeAttributes: {
        id: 'visualiser-iframe'
      },
      styleString: `
        html, body { margin: 0; padding: 0; }
        .visualiser-child {
          background-color: rgba(65, 60, 50, 0.5);
        }`
    }
    this.iframe = RW.create(iframeContainer, options);
    this.updateIFrameHTML();
  }
  componentDidUpdate() {
    this.updateIFrameHTML();
  }
  updateIFrameHTML() {
    let html = this.getVisualiserHTML();
    RW.update(this.iframe, html);
  }
  getVisualiserHTML() {
    let domNode = ReactDom.findDOMNode(this.refs.visualiserNode);
    let domNodeHTML = domNode.outerHTML;
    return domNodeHTML;
  }
};

export default Visualiser;
