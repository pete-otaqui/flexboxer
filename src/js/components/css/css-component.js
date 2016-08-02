import React, { PureComponent, PropTypes } from 'react';

export default class Css extends PureComponent {

  getCss(node) {
    if ( !node.selector ) return '';
    const selector = node.selector;
    const styles = node.style || [];
    const styleString = styles.reduce((memo, styleMap) => {
      const prop = styleMap.property.replace(/([A-Z])/g, (m) => {
        return '-' + m.toLowerCase();
      });
      const val = styleMap.value;
      return memo + `\n  ${prop}: ${val};`;
    }, '');
    const children = node.children || [];
    const childStyles = children.map((child) => {
      return this.getCss(child);
    }).join('');
    return `${selector} {${styleString}
}
${childStyles}`;
  }

  render() {
    const node = this.props.node || {};
    const css = this.getCss(node);
    return (
      <div className="css">
        {css}
      </div>
    );
  }
}

Css.propTypes = {
  node: PropTypes.object
};
