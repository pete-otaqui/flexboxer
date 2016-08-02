import React, { PureComponent, PropTypes } from 'react';

import Nav from './nav-component';

export default class Header extends PureComponent {
  // @TODO Load navItems by fetch()
  // @TODO Plug callback into actions
  // @TODO Add tests
  render() {
    const {
      navigation = navigation,
      onNavigate
    } = this.props;

    return (
      <header className="header">
        <div className="container">
          <h1 className="title"><span className="title-heavy">Flex</span>Boxer</h1>
        </div>
        <Nav navigation={navigation} onSelectItem={onNavigate} />
      </header>
    );
  }
}

Header.propTypes = {
  navigation: PropTypes.arrayOf(PropTypes.object.isRequired),
  onNavigate: PropTypes.func
};
