import React, { Component, PropTypes } from 'react';

import Property from './property-component';

export default class Properties extends Component {

  constructor(props) {
    super(props);
    this.onUpdateStyleProperty = this.onUpdateStyleProperty.bind(this);
    this.onUpdateStyleValue = this.onUpdateStyleValue.bind(this);
    this.createExistingPropItem = this.createExistingPropItem.bind(this);
  }

  onUpdateStyleProperty(index, property) {
    this.props.onUpdateStyleProperty(this.props.node, index, property);
  }
  onUpdateStyleValue(index, value) {
    this.props.onUpdateStyleValue(this.props.node, index, value);
  }

  createExistingPropItem(styleProp, index) {
    const node = this.props.node;
    const key = `style-${index}`;
    const propFn = this.onUpdateStyleProperty;
    const valFn = this.onUpdateStyleValue;
    return (
      <li className="property" key={key}>
        <Property
          node={node}
          property={styleProp.property}
          value={styleProp.value}
          index={index}
          onUpdateProperty={propFn}
          onUpdateValue={valFn}
        />
      </li>
    );
  }

  createTextContent(textContent) {
    return (
      <li className="property">
        <form className="property-form">
          <label
            className="property-input property-field"
            htmlFor="text-content"
          >
            Text content
          </label>
          <textarea
            id="text-content"
            className="property-input property-value"
            value={textContent}
          />
        </form>
      </li>
    );
  }

  createSelectorEditor(selector) {
    return (
      <li className="property">
        <form className="property-form">
          <label
            className="property-input property-field"
            htmlFor="selector"
          >
            Selector
          </label>
          <input
            id="selector"
            className="property-input property-value"
            value={selector}
          />
        </form>
      </li>
    );
  }

  render() {
    const node = this.props.node;
    if ( !node ) return <div />;
    const style = node.style || [];
    let selector, textContent;
    selector = node.selector;
    textContent = node.textContent;
    const styleProps = style
      .concat([{property: '', value: ''}])
      .map(this.createExistingPropItem);
    const selectorEditor = this.createSelectorEditor(selector);
    const textEditor = this.createTextContent(textContent);
    return (
      <div className="properties">
        <ul className="properties-list">
          {selectorEditor}
          {textEditor}
        </ul>
        <hr />
        <ul className="properties-list">
          {styleProps}
        </ul>
      </div>
    );
  }
}

Properties.propTypes = {
  node: PropTypes.object,
  onUpdateStyleProperty: PropTypes.func,
  onUpdateStyleValue: PropTypes.func
};
