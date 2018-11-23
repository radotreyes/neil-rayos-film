import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import Footer from './Footer'

import Nav from './Nav'

const Layout = ({ children }) => (
  <Fragment>
    <Nav />
    <main className="main-content">{children}</main>
    <Footer />
  </Fragment>
)

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
}

export default Layout
