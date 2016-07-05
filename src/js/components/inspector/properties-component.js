import React, { Component, PropTypes } from 'react';

export default class Properties extends Component {
  render() {
    const { node = {} } = this.props;
    return (
      <div>
        Properties
        <ul>
          <li>{node.selector}</li>
        </ul>
      </div>
    );
  }
}

Properties.propTypes = {
  node: PropTypes.object
};
