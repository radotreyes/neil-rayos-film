import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Header from './Header'
// import Footer from './Footer'

const ScreenWrapper = ({ screen, children }) => (
  <Fragment>
    <Header />
    <section id={screen} className="screen__fullscreen">
      {children()}
    </section>
    {/* <Footer /> */}
  </Fragment>
)

ScreenWrapper.propTypes = {
  children: PropTypes.func.isRequired,
  screen: PropTypes.string.isRequired,
}

export default ScreenWrapper
