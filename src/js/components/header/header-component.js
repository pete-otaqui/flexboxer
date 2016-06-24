import React, { Component, PropTypes } from 'react'

import Nav from './nav-component';
import navData from 'json!../../../data/defaults.json';

export default class Header extends Component {
  // @TODO Load navItems by fetch()
  // @TODO Plug callback into actions
  // @TODO Add tests
  render() {
    const {
      navItems = navData,
      onNavigate
    } = this.props;

    return (
      <header className="header">
        <div className="container">
          <h1 className="title"><span className="title-heavy">Flex</span>Boxer</h1>
        </div>
        <Nav items={navItems} onSelectItem={onNavigate} />
      </header>
    )
  }
}

Header.propTypes = {
  navItems: PropTypes.arrayOf(PropTypes.object.isRequired)
};
