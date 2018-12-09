import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
// import Header from './Header'
// import Footer from './Footer'

const GridWrapper = ({ children }) => (
  <Fragment>
    {/* <Header /> */}
    <div className="layout-grid">{children()}</div>
    {/* <Footer /> */}
  </Fragment>
)

GridWrapper.propTypes = {
  children: PropTypes.func.isRequired,
}

export default GridWrapper
