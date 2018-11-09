import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import Archive from './Archive'

import Nav from './Nav'

const Layout = ({ children }) => (
  <Fragment>
    <main className="main-content">{children}</main>
    {/* <Footer /> */}
  </Fragment>
)

Layout.propTypes = {
  children: PropTypes.object.isRequired,
}

export default Layout
