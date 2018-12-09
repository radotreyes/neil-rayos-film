import React, { Component } from 'react'
import Link from 'gatsby-link'
// import PropTypes from 'prop-types'

// import Link from 'next/link'
import ScreenWrapper from '../ScreenWrapper'
import RightArrow from '../../svgs/right-arrow.svg'

export default class LongStory extends Component {
  // static propTypes = {
  //   fields: PropTypes.shape({
  //     left_panel: PropTypes.shape({
  //       header: PropTypes.string.isRequired,
  //       body: PropTypes.string.isRequired,
  //     }).isRequired,
  //     right_panel: PropTypes.shape({
  //       header: PropTypes.string.isRequired,
  //       body: PropTypes.string.isRequired,
  //     }).isRequired,
  //   }).isRequired,
  // }

  render() {
    // const {
    //   fields: { left_panel, right_panel },
    // } = this.props
    return (
      <ScreenWrapper screen="long-story-3">
        {() => (
          <div className="long-story__about">
            <div className="long-story__about--header">
              <h2 className="lead--center">WHO AM I?</h2>
            </div>
            <div className="long-story__about--left">
              <h3 className="left__header">left_panel.header</h3>
              <p className="left__body subtext">left_panel.body</p>
              <h4>
                <RightArrow />
                <Link to="/about">MY STORY</Link>
              </h4>
            </div>
            <div className="long-story__about--right">
              <h3 className="right__header">right_panel.header</h3>
              <p className="right__body subtext">right_panel.body</p>

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
