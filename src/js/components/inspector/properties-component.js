import React, { Component, PropTypes } from 'react';

import Property from './property-component';

export default class Properties extends Component {

  constructor() {
    super();
    this.onUpdateStyleProperty = this.onUpdateStyleProperty.bind(this);
    this.onUpdateStyleValue = this.onUpdateStyleValue.bind(this);
  }

  onUpdateStyleProperty(index, property) {
    this.props.onUpdateStyleProperty(this.props.node, index, property);
  }
  onUpdateStyleValue(index, value) {
    this.props.onUpdateStyleValue(this.props.node, index, value);
  }

  render() {
    const node = this.props.node || {};
    const style = node.style || [];
    let selector, textContent;
    if ( node ) {
      selector = node.selector;
      textContent = node.textContent;
    } else {
      selector = null;
      textContent = null;
    }
    const styleProps = style
      .concat([{property:'', value:''}])
      .map((styleProp, index) => {
        const property = styleProp.property;
        const value = styleProp.value;
        return (
          <li className="property" key={`style-${index}`}>
            <Property
              node={node}
              property={property}
              value={value}
              index={index}
              onUpdateProperty={this.onUpdateStyleProperty}
              onUpdateValue={this.onUpdateStyleValue}
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
  onUpdateStyleProperty: PropTypes.func,
  onUpdateStyleValue: PropTypes.func
};
