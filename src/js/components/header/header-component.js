import React, { Component, PropTypes } from 'react'

import Nav from './nav-component';

export default class Header extends Component {
  // @TODO Load navItems by fetch()
  // @TODO Plug callback into actions
  // @TODO Add tests
  render() {
    const {
      navItems = [
        {
          title: "One True Layout",
          tree: {
            textContent: 'Root',
            selector: '.root',
            style: {
              display: 'flex',
              flexDirection: 'column',
              minHeight: '300px'
            },
            children: [
              {
                textContent: 'header',
                selector: '.header',
                style: {},
                children: []
              },
              {
                textContent: '',
                selector: '.main',
                style: {
                  flexGrow: '1'
                },
                children: [
                  {
                    textContent: 'aside',
                    selector: '.aside',
                    style: {
                      width: '200px'
                    },
                    children: []
                  },
                  {
                    textContent: 'article',
                    selector: '.article',
                    style: {},
                    children: []
                  }
                ]
              },
              {
                textContent: 'footer',
                selector: '.footer',
                style: {},
                children: []
              }
            ]
          }
        }
      ],
      onNavigate
    } = this.props;

    return (
      <header className="header">
        <div className="container">
          <h1>FlexBoxer</h1>
        </div>
        <Nav items={navItems} onSelectItem={onNavigate} />
      </header>
    )
  }
}

Header.propTypes = {
  navItems: PropTypes.arrayOf(PropTypes.object.isRequired)
};
