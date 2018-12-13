import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
// import Header from './Header'
// import Footer from './Footer'

const ScreenWrapper = ({ screen, children, main }) => (
  <Fragment>
    <section
      id={screen}
      className={`screen__fullscreen${main ? `--main` : ``}`}
    >
      {children()}
    </section>
  </Fragment>
)

ScreenWrapper.propTypes = {
  children: PropTypes.func.isRequired,
  screen: PropTypes.string.isRequired,
  main: PropTypes.bool,
}

ScreenWrapper.defaultProps = {
  main: false,
}

export default ScreenWrapper
