import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import Archive from './Archive'

import Nav from './Nav'

const Layout = ({ children }) => (
  <Fragment>
    <main className="main-content">
      {/* <Archive title="Posts" query="posts" slug="post" />
      <Archive title="Pages" query="pages" slug="page" /> */}
      <div className>{children}</div>
    </main>
    {/* <Footer /> */}
  </Fragment>
)

Layout.propTypes = {
  children: PropTypes.object.isRequired,
}

export default Layout
