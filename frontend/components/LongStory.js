import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import Header from './Header'
import ScreenWrapper from './ScreenWrapper'
import Button from './Button'
// import Footer from './Footer'

export default class LongStory extends Component {
  static propTypes = {
    order: PropTypes.string.isRequired,
  }

  render() {
    const { order } = this.props
    return (
      <ScreenWrapper screen={`long-story-${order}`}>
        {() => (
          <Fragment>
            <div className={`long-story-${order}`} />
          </Fragment>
        )}
      </ScreenWrapper>
    )
  }
}
