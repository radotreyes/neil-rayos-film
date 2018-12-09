import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Nav from '../components/Nav'
import Container from '../components/container'
import Navigation from '../components/navigation'

import '../styles/style.scss'

class Template extends Component {
  static propTypes = {
    location: PropTypes.object.isRequired,
    children: PropTypes.func.isRequired,
  }

  render() {
    const { location, children } = this.props
    let header

    let rootPath = `/`
    /* eslint-disable no-undef */
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = `${__PATH_PREFIX__}/`
    }

    return (
      <Container>
        <Nav />
        <main className="main-content">{children()}</main>
      </Container>
    )
  }
}

export default Template
