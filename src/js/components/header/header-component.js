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
          title: "Default",
          tree: {
            1: {
              id: 1,
              textContent: 'Root',
              selector: '.root',
              style: {},
              childIds: []
            }
          }
        },
        {
          title: "One True Layout",
          tree: {
            1: {
              id: 1,
              textContent: 'Root',
              selector: '.root',
              style: {
                display: 'flex',
                flexDirection: 'column',
                minHeight: '300px'
              },
              childIds: [2, 3, 4]
            },
            2: {
              id: 2,
              textContent: 'header',
              selector: '.header',
              style: {},
              childIds: []
            },
            3: {
              id: 3,
              textContent: '',
              selector: '.main',
              style: {
                flexGrow: '1'
              },
              childIds: [5, 6]
            },
            4: {
              id: 4,
              textContent: 'footer',
              selector: '.footer',
              style: {},
              childIds: []
            },
            5: {
              id: 5,
              textContent: 'aside',
              selector: '.aside',
              style: {
                width: '200px'
              },
              childIds: []
            },
            6: {
              id: 6,
              textContent: 'article',
              selector: '.article',
              style: {},
              childIds: []
            }
          }
        }
      ],
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
