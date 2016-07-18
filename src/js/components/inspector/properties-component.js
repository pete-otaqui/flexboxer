import React, { Component, PropTypes } from 'react';

import Property from './property-component';

export default class Properties extends Component {

  constructor() {
    super();
    this.onUpdatePropertyField = this.onUpdatePropertyField.bind(this);
    this.onUpdatePropertyValue = this.onUpdatePropertyValue.bind(this);
  }

  onUpdatePropertyField(node, newField, oldField) {
    let oldValue = node.style[oldField];
    this.props.onUpdateProperty(node, oldField, null);
    this.props.onUpdateProperty(node, newField, oldValue);
  }
  onUpdatePropertyValue(node, field, value) {
    this.props.onUpdateProperty(node, field, value);
  }

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
          <li className="property" key={`style-${i}`}>
            <Property
              node={node}
              field={field}
              value={value}
              onUpdateValue={this.onUpdatePropertyValue}
              onUpdateField={this.onUpdatePropertyField}
            />
          </li>
        );
      });
    return (
      <div>
        {selector}
        <ul className="properties">
          {styleProps}
        </ul>
        <p>{textContent}</p>
      </div>
    );
  }
}

Properties.propTypes = {
  node: PropTypes.object,
  onUpdateProperty: PropTypes.func
};
