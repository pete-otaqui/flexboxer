import React, { PureComponent, PropTypes } from 'react';

export default class Html extends PureComponent {

  getClassName(selector = '') {
    return selector.replace(/^\./, '');
  }

  getHtml(node, indent = '') {
    const className = this.getClassName(node.selector);
    const children = node.children || [];
    const childNodes = children.map((child) => {
      return '\n' + this.getHtml(child, indent + '  ');
    }).join('');
    const textContent = node.textContent;
    const text = textContent ? `\n${indent}  ${textContent}` : '';
    const contents = text + childNodes; 
    return `${indent}<div class="${className}">${contents}\n${indent}</div>`;
  }

  render() {
    const node = this.props.node || {};
    const html = this.getHtml(node);
    return (
      <div className="html">
        {html}
      </div>
    );
  }
}

Html.propTypes = {
  node: PropTypes.object,
  baseKey: PropTypes.string
};
