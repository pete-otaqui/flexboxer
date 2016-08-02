import React, { PureComponent, PropTypes } from 'react';

import Html from '../components/html';
import Css from '../components/css';

export default class Output extends PureComponent {
  render() {
    const tree = this.props.tree;
    return (
      <div id="output">
        <div className="output-panel">
          <Html node={tree} />
        </div>
        <div className="output-panel">
          <Css node={tree} />
        </div>
      </div>
    );
  }
}

Output.propTypes = {
  tree: PropTypes.object
};
