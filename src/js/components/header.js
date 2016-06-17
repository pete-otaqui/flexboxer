import React, { Component, PropTypes } from 'react'

export default class Header extends Component {
  render() {
    const { } = this.props

    return (
      <header>
        <div className="container">
          <h1>FlexBoxer</h1>
        </div>
      </header>
    )
  }
}

Header.propTypes = {}
