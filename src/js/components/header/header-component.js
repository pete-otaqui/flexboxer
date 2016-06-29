import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Nav from './nav-component';

export class Header extends Component {
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

function mapStateToProps(state, ownProps) {
  const navigation = state.navigation || ownProps.navigation || [];
  const props = Object.assign({}, ownProps, {navigation: navigation});
  return props;
}

const WrappedHeader = connect(mapStateToProps)(Header);
export default WrappedHeader;



Header.propTypes = {
  navigation: PropTypes.arrayOf(PropTypes.object.isRequired),
  onNavigate: PropTypes.func
};
