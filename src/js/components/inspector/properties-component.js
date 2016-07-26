import React, { Component, PropTypes } from 'react';

import Property from './property-component';

export default class Properties extends Component {

  constructor() {
    super();
    this.onUpdateStyleProperty = this.onUpdateStyleProperty.bind(this);
    this.onUpdateStyleValue = this.onUpdateStyleValue.bind(this);
    this.onAddStyleProperty = this.onAddStyleProperty.bind(this);
    this.onAddStyleValue = this.onAddStyleValue.bind(this);
    this.createExistingPropItem = this.createExistingPropItem.bind(this);
  }

  onUpdateStyleProperty(index, property) {
    this.props.onUpdateStyleProperty(this.props.node, index, property);
  }
  onUpdateStyleValue(index, value) {
    this.props.onUpdateStyleValue(this.props.node, index, value);
  }

  onAddStyleProperty(index, property) {
    this.props.onUpdateStyleProperty(this.props.node, index, property);
  }
  onAddStyleValue(index, value) {
    this.props.onUpdateStyleValue(this.props.node, index, value);
  }

  createPropItem(node, key, index, styleProp, onUpdateProp, onUpdateVal) {
    const property = styleProp.property;
    const value = styleProp.value; 
    return <li className="property" key={key}>
      <Property
        node={node}
        property={property}
        value={value}
        index={index}
        onUpdateProperty={onUpdateProp}
        onUpdateValue={onUpdateVal}
      />
    </li>;
  }

  createExistingPropItem(styleProp, index) {
    const node = this.props.node;
    const key = `style-${index}`;
    const propFn = this.onUpdateStyleProperty;
    const valFn = this.onUpdateStyleValue; 
    return this.createPropItem(node, key, index, styleProp, propFn, valFn);
  }

  createNewPropItem(index) {
    const node = this.props.node;
    const key = `style-N`;
    const styleProp = {property: '', value: ''};
    const propFn = this.onAddStyleProperty;
    const valFn = this.onAddStyleValue;
    return this.createPropItem(node, key, index, styleProp, propFn, valFn);
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
      .concat([{property: '', value: ''}])
      .map(this.createExistingPropItem);
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
