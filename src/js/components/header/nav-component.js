import React, { Component, PropTypes } from 'react';

export default class Nav extends Component {

  render() {
    const { items, onSelectItem = function() {} } = this.props;
    const baseKey = 'nav';
    const children = items.map((child, index) => {
      let key = `${baseKey}-${index}`;
      const { title, tree } = child;
      return <a
        href="#"
        key={key}
        onClick={(e) => {e.preventDefault(); onSelectItem(tree); }}
        tree={tree}
        className="nav-item"
      >
        {title}
      </a>;
    });
    return (
      <nav className="nav">
        <div className="container">
          {children}
        </div>
      </nav>
    );
  }
}

Nav.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object.isRequired),
  onSelectItem: PropTypes.func
};
