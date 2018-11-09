import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Header from './Header'
// import Footer from './Footer'

const ScreenWrapper = ({
  screen, children, main, spanInline,
}) => (
  <Fragment>
    <Header />
    <section
      id={screen}
      className={`screen__fullscreen${main ? `--main` : ``} ${spanInline
        && `span-inline`}`}
    >
      {children()}
    </section>
    {/* <Footer /> */}
  </Fragment>
)

ScreenWrapper.propTypes = {
  children: PropTypes.func.isRequired,
  screen: PropTypes.string.isRequired,
  spanInline: PropTypes.bool.isRequired,
  main: PropTypes.bool.isRequired,
}

export default ScreenWrapper
