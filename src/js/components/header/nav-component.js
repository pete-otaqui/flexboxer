import React, { PureComponent, PropTypes } from 'react';

export default class Nav extends PureComponent {

  render() {
    const { navigation, onSelectItem } = this.props;
    const baseKey = 'nav';
    const children = navigation.map((child, index) => {
      let key = `${baseKey}-${index}`;
      const { title, nodes } = child;
      return <a
        href="#"
        key={key}
        onClick={(e) => {e.preventDefault(); onSelectItem(nodes); }}
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
  navigation: PropTypes.arrayOf(PropTypes.object.isRequired),
  onSelectItem: PropTypes.func
};
