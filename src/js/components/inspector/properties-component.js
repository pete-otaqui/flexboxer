import React, { PureComponent, PropTypes } from 'react';

import Property from './property-component';

export default class Properties extends PureComponent {

  constructor(props) {
    super(props);
    this.onUpdateStyleProperty = this.onUpdateStyleProperty.bind(this);
    this.onUpdateStyleValue = this.onUpdateStyleValue.bind(this);
    this.onUpdateTextContent = this.onUpdateTextContent.bind(this);
    this.createExistingPropItem = this.createExistingPropItem.bind(this);
  }

  onUpdateStyleProperty(index, property) {
    this.props.onUpdateStyleProperty(this.props.node, index, property);
  }
  onUpdateStyleValue(index, value) {
    this.props.onUpdateStyleValue(this.props.node, index, value);
  }
  onUpdateTextContent(e) {
    this.props.onUpdateTextContent(this.props.node, e.target.value);
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
    const onUpdateTextContent = this.onUpdateTextContent;
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
            onChange={onUpdateTextContent}
            value={textContent}
          />
        </form>
      </li>
    );
  }

  createSelectorEditor(selector, onChange = () => {}) {
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
            onChange={onChange}
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
        <h3>Properties</h3>
        <ul className="properties-list">
          {selectorEditor}
          {textEditor}
        </ul>
        <h3>Styles</h3>
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
  onUpdateStyleValue: PropTypes.func,
  onUpdateTextContent: PropTypes.func
};
