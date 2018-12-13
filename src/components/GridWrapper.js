import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

const GridWrapper = ({ children }) => (
  <Fragment>
    <div className="layout-grid">{children()}</div>
  </Fragment>
)

GridWrapper.propTypes = {
  children: PropTypes.func.isRequired,
}

export default GridWrapper
