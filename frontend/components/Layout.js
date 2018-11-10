import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import Archive from './Archive'

import Nav from './Nav'

const Layout = ({ children }) => (
  <Fragment>
    <Nav />
    <main className="main-content">{children}</main>
  </Fragment>
)

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
}

export default Layout
