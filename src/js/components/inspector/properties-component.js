import React, { Component, PropTypes } from 'react';

import Property from './property-component';

export default class Properties extends Component {

  getStyleArray(styleObject) {
    return styleObject ? Object.keys(styleObject)
      .sort()
      .map((key) => {
        return [key, styleObject[key]];
      }) : [];
  }

  render() {
    const { node = {} } = this.props;
    let selector, style, textContent;
    if ( node ) {
      selector = node.selector;
      style = node.style;
      textContent = node.textContent;
    } else {
      selector = null;
      style = null;
      textContent = null;
    }
    const styleProps = this.getStyleArray(style)
      .concat([['', '']])
      .map((styleProp, i) => {
        const field = styleProp[0];
        const value = styleProp[1];
        return (
          <li key={`style-${i}`}>
            <Property field={field} value={value} />
          </li>
        );
      });
    return (
      <div>
        {selector}
        <ul>
          {styleProps}
        </ul>
        <p>{textContent}</p>
      </div>
    );
  }
}

Properties.propTypes = {
  node: PropTypes.object
};
