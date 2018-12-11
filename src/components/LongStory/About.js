import React, { Component } from 'react'
import Link from 'gatsby-link'
import PropTypes from 'prop-types'

// import Link from 'next/link'
import ScreenWrapper from '../ScreenWrapper'
import RightArrow from '../../../static/svgs/right-arrow.svg'

export default class LongStory extends Component {
  static propTypes = {
    left: PropTypes.shape({
      header: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
    }).isRequired,
    right: PropTypes.shape({
      header: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
    }).isRequired,
  }

  render() {
    const { left, right } = this.props
    return (
      <ScreenWrapper screen="long-story-3">
        {() => (
          <div className="long-story__about">
            <div className="long-story__about--header">
              <h2 className="lead--center">WHO AM I?</h2>
            </div>
            <div className="long-story__about--left">
              <h3 className="left__header">{left.header}</h3>
              <p className="left__body subtext">{left.body}</p>
              <h4>
                <RightArrow />
                <Link className="text-link" to="/about">
                  MY STORY
                </Link>
              </h4>
            </div>
            <div className="long-story__about--right">
              <h3 className="right__header">{right.header}</h3>
              <p className="right__body subtext">{right.body}</p>
              <h4>
                <RightArrow />
                <a href="" className="text-link">
                  {`LET'S WORK TOGETHER`}
                </a>
              </h4>
            </div>
          </div>
        )}
      </ScreenWrapper>
    )
  }
}
