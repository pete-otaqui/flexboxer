import React, { Component } from 'react';

import Html from '../components/html';
import Css from '../components/css';

export default class Output extends Component {
  render() {
    return (
      <div id="output">
        <Html />
        <Css />
      </div>
    );
  }
}
